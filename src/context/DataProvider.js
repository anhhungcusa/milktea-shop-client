import React, { createContext, useState, useEffect } from "react";
import { FirebaseService } from "../service/firebase";
import { collections, types_docs, sub_collections } from "../constant/firebase";


export const DataContext = createContext(null)
export const DataProvider = ({ children }) => {
    const [store, setStore] = useState({
        products: [],
        productCategories: [],
        cart: [],
        paymentMethod: [],
        membership: null,
        isLoggedIn: false
        //deep clone / shallow clone
    })

    // fetch init Data
    useEffect(() => {
        const refProduct = FirebaseService.db.collection(collections.products).where("isDeleted", "==", false)
        refProduct.get().then(querySnapshot => {
            let newProducts = []
            querySnapshot.forEach((doc) => {
                newProducts.push(doc.data())
                // console.log("zzzasa");
            })
            setStore((store) => ({
                ...store,
                products: newProducts
            }))
        })
        const refCategory = FirebaseService.db
            .collection(collections.types)
            .doc(types_docs.product_category)
            .collection(sub_collections.types).where("isDeleted", "==", false)
        refCategory.get().then(querySnapshot => {
            //handling n
            let newProductsCate = []
            querySnapshot.forEach((doc) => {
                newProductsCate.push(doc.data())
                // console.log('sasa',newProductsCate);
                // console.log(`${doc.id}`,doc.data);
            })
            setStore((store) => ({
                ...store,
                productCategories: newProductsCate
            }))
        })
        const refPaymentMethod = FirebaseService.db
            .collection(collections.types)
            .doc(types_docs.payment_method)
            .collection(sub_collections.types)
        refPaymentMethod.get().then(querySnapshot => {
            let typePaymentMethod = []
            querySnapshot.forEach((doc) => {
                typePaymentMethod.push(doc.data())
                // console.log(`${doc.id} `,doc.data);
            })
            setStore((store) => ({
                ...store,
                paymentMethod: typePaymentMethod
            }))
        })
    }, [])

    // update cart for membership at db
    useEffect(() => {
        // handle debounce
        const timeout = setTimeout(() => {
            if(store.isLoggedIn === true && store.membership.id !== undefined) {
                const membershipDoc = FirebaseService.db.collection(collections.membership).doc(store.membership.id)
                membershipDoc.update({
                    cart: store.cart,
                    updateAt: new Date()
                })
            }
        }, 5000)
        return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store.isLoggedIn, store.cart])
    // connect realtime to update membetship
    useEffect(() => {
        if(store.isLoggedIn === true && store.membership.id !== undefined) {
            const membershipDoc = FirebaseService.db.collection(collections.membership).doc(store.membership.id)
            membershipDoc.onSnapshot(doc => {
                const membership = doc.data();
                setStore((store) => ({
                    ...store,
                    membership: {
                        ...membership,
                        updateAt: membership.updateAt.toDate(),
                        createAt: membership.createAt.toDate(),
                        birthday: membership.birthday.toDate(),
                    }
                }))
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store.isLoggedIn])

    // handle Sign in
    const signIn = async (email, password) => {
        try {
            await FirebaseService.signIn(email, password)
            const currUser = FirebaseService.auth.currentUser
            const membershipDoc = await FirebaseService.db.collection(collections.membership).doc(currUser.uid).get()
            if(membershipDoc.exists) {
                const membership = membershipDoc.data()
                if(membership.isDeleted === true) {
                    return 401 // member is banned
                } else {
                    let newCart = membership.cart.slice()
                    let positionInvalid = []
                    // find  product deleted
                    newCart.forEach((item, index) => {
                        const isExit = store.products.findIndex(product => product.id === item.id)
                        if(isExit === -1) {
                            positionInvalid.push(index)
                        }
                    })
                    // delete product in cart
                    positionInvalid.forEach(position => {
                        newCart.splice(position, 1)
                    })
                    setStore({
                        ...store,
                        membership: {
                            ...membership,
                            updateAt: membership.updateAt.toDate(),
                            createAt: membership.createAt.toDate(),
                            birthday: membership.birthday.toDate(),
                        },
                        isLoggedIn: true,
                        cart: newCart
                    })
                }
            } else {
                return 400 // account is not valid
            }

            return 200 // success

        } catch (error) {
            return 400 // account is not valid
        }
    }

    // manage cart
    const addProduct = (product) => {
        const { id, price } = product
        const { cart } = store
        const isIndexExit = cart.findIndex(item => item.id === id)
        let newCart = cart.slice();
        if (isIndexExit === -1) {
            newCart.push({
                id,
                price,
                count: 1
            })
        } else {
            const newCartItem = {
                ...cart[isIndexExit],
                count: cart[isIndexExit].count + 1
            }
            newCart.splice(isIndexExit, 1, newCartItem)
        }
        setStore({
            ...store,
            cart: newCart
        })
    }
    const updateCountInCart = (id, value) => {
        const { cart } = store
        const itemIndex = cart.findIndex(item => item.id === id)
        let newCart = cart.slice();
        let count = cart[itemIndex].count + value
        if (count > 0) {
            const newCartItem = {
                ...cart[itemIndex],
                count,
            }
            newCart.splice(itemIndex, 1, newCartItem)
        } else {
            newCart.splice(itemIndex, 1)
        }
        setStore({
            ...store,
            cart: newCart
        })

    }


    return (
        <DataContext.Provider
            value={{
                store: {
                    ...store
                },
                action: {
                    product: {

                    },
                    productCategories: {

                    },
                    cart: {
                        addProduct,
                        updateCountInCart
                    },
                    paymentMethod: {

                    },
                    auth: {
                        signIn
                    }
                }
            }}
        >
            {children}
        </DataContext.Provider>
    )
}