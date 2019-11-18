import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firebaseConfig } from '../config/firebase-config'

firebase.initializeApp(firebaseConfig)

export const FirebaseService = {
    auth: firebase.auth(),
    
    db: firebase.firestore(),
    generalLV1DocRef: (collection , doc) => {
        return  FirebaseService.db.collection(collection).doc(doc)
    }
}