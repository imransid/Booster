import { AsyncStorage } from "react-native";

export const WalletStatus = async () => {
    try{

        const data = await AsyncStorage.getItem('wallet@Card');
        let data_load;

        if(data !== null){
            data_load = JSON.parse(data);
        }
        else{
            data_load = null
        }

        return data_load;

    }catch{
        alert('please try again few minite later..')
        console.log('transection DATABASE problem..')
    }
}


export const TransectionStatus = async () => {
    try{

        const data = await AsyncStorage.getItem('transection@Data');
        let data_load;

        if(data !== null){
            data_load = JSON.parse(data);
        }
        else{
            data_load = null
        }

        return data_load;

    }catch{
        alert('please try again few minite later..')
        console.log('transection DATABASE problem..')
    }
}

export const WalletSyncUpdate = async (wallet) => {
    let result;
        if(wallet.length == undefined){
            result = wallet;
            result.syncStatus = true;

        }else{
            result = wallet.map((e) => {
                if(e.syncStatus == false){
                    e.syncStatus = true
                }
                return e
            });

        }
    return result;
}

export const TransectionUpdate = async (transcetion) => {
    let result;
        if(transcetion.length == undefined){
            result = transcetion;
            result.syncStatus = true;

        }else{
            result = transcetion.map((e) => {
                if(e.syncStatus == false){
                    e.syncStatus = true
                }
                return e
            });

        }
    return result;
}

export const _storeTransecData = async (transcetion) => {
    try {
        return await AsyncStorage.setItem('transection@Data', JSON.stringify(transcetion)).then(()=>{
            return true;
        });
      } catch (error) {
        // Error saving data
        console.log("Error is now sync transection")
        return false;
      }
}


export const _storeWalletData = async (data) => {
    try {
        let result = await AsyncStorage.setItem('wallet@Card', JSON.stringify(data)).then(() => {
            ///wallet avalible balance updated
            return true;
        });

        return result;
    } catch (error) {
        console.log('Wallet saving problem.. check all sync..')
        // Error saving data
        return false
    }
}