import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from '../config/firebase-config'
import { collections } from '../constant/firebase'

firebase.initializeApp(firebaseConfig)

export const FirebaseService = {
    auth: firebase.auth(),
    
    db: firebase.firestore(),
    generalLV1DocRef: (collection , doc) => {
        return  FirebaseService.db.collection(collection).doc(doc)
    },
    signUpNewUser: (email, password) => {
        return FirebaseService.auth.createUserWithEmailAndPassword(email, password)
    },
    signIn: (email, password) => {
        return FirebaseService.auth.signInWithEmailAndPassword(email, password)
    },
    addNewMembership: (membership) => {
        const docRef = FirebaseService.db.collection(collections.membership).doc(membership.id)
        return docRef.set(membership)
    },
}

