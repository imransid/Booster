import * as firebase from 'firebase';
import { firebaseconfig } from '../config/config';

import NetInfo from "@react-native-community/netinfo";

 
const leer = () => {

    firebase.database().ref('all_data/').once('value', function (snapshot) {
        console.log('okk', snapshot.val())
    });

}

const writeUserData = (a="imran") =>{
    console.log("plan worllkkk")
    firebase.database().ref('CollectionUsers/').push({
        a
    }).then((data)=>{
        //success callback
        console.log('data ' , data)
    }).catch((error)=>{
        //error callback
        console.log('error ' , error)
    })
}


export const testing = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseconfig);
    }else{
        // writeUserData()
    fetch('https://www.google.com')
        .then((e) => console.log('e is', e))
        .catch((error) => console.log);
    //let hasConnection = req.status === 200;
    
    //console.log('hasConnection', req);
    }
    
} 
