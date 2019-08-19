import * as firebase from 'firebase';
import { firebaseconfig } from '../config/config';
import 'firebase/firestore';

// firebase.firestore().settings({ timestampsInSnapshots: true })

const DB = firebase.firestore().collection('AllUserData').doc("emailofimran1992@gmail.com");
 
const leer = () => {

    // real time database
    // firebase.database().ref('all_data/').once('value', function (snapshot) {
    //     console.log('okk', snapshot.val())
    // });

    // firebase.database().ref('CollectionUsers/').push({
    //     a
    // }).then((data)=>{
    //     //success callback
    //     console.log('data ' , data)
    // }).catch((error)=>{
    //     //error callback
    //     console.log('error ' , error)
    // })

}

const InserData = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseconfig);
        //db = firebase.firestore();
    }else{        

        let loadDatain = [{
                    'card_holder_name': 'action.result.card_holder_name',
                    'bank_code': 'action.result.bank_code',
                    'balance': 'action.result.balance',
                    'avalible_balance': 'action.result.balance',
                    'balance_type': 'action.result.balance_type',
                    'wallet_add_date': 'action.result.wallet_add_date',
                    'card_num': 'action.result.card_num',
                    'wallet_id': 'action.result.wallet_id',
                    'amount': 'action.result.amount',
                    'description': 'action.result.description',
                    'selectCategory': 'action.result.selectCategory',
                    'date': 'action.result.date',
                    'colorCode': 'action.result.colorCode',
                    'IconCode': '12345',
                    'IconName': 'action.result.IconName',
                    'transectionid': 'action.result.transectionid'
        }]

        // DB.add({
        //      data: loadDatain
        //     }).then((e) => {
        //         console.log("okk")
        //     }).catch((err) => {
        //         console.log("err", err)
        //     })

        // DB.set({
        //      data: loadDatain
        //     }).then((e) => {
        //         console.log("okk")
        //     }).catch((err) => {
        //         console.log("err", err)
        //     })

        DB.update({
            data: loadDatain
           }).then((e) => {
               console.log("okk")
           }).catch((err) => {
               console.log("err", err)
           })

        

    }

}



const getMarker = async () => {
    const snapshot = await DB.get().then((e) => {
        //undefined
        console.log(e.docs)
        e.docs.map(doc => console.log('e s', doc.data()))
    }).catch((err) => console.log(err))
    //return snapshot.docs.map(doc => doc.data());
}

const LoadData = () => {

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseconfig);
    }else{
       getMarker()

    //    console.log('data', data._55)
    }

 }

 const CloudService = () => {
    //InserData(val)
    LoadData()
 }
