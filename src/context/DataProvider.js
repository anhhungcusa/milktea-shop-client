import React, { createContext,  useState, useEffect } from "react";
import { FirebaseService } from "../service/firebase";
import { collections, types_docs, sub_collections } from "../constant/firebase";
import * as firebase from "firebase/app";
import "firebase/auth";
import {  message  } from 'antd';



export const DataContext = createContext(null)
export const DataProvider = ({children}) => {
    const [store, setStore] = useState({
        products: [],
        productCategories: [],
        cart: [],
        paymentMethod: []
        //deep clone / shallow clone
    })
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
        }).catch(err => {})

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

// handle Sign in
const SignIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(res => {
        message.success(email+ " Login Success");
        // console.log('success', signin.email,signin.password )
    }).catch(res => {
        message.warning("Login Fail");
        // console.log('fall', signin.email,signin.password)
    })	
}

    // manage cart
    const addProduct = (product) => {
        const { id, price }  = product
        const { cart } = store
        const isIndexExit = cart.findIndex(item => item.id === id)
        let newCart = cart.slice();
        if(isIndexExit === -1) {
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
        if(count > 0) {
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
                    accountIF: {
                        SignIn
                    }
                }
            }}
        >
            {children}
        </DataContext.Provider>
    )
}