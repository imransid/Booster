import { AddCloudDataBaseData } from './firebase_crud';
import { ArrayGenaratorWallet, _ArrayValueCheck } from './Arraymixer';
import { TransectionUpdate, _storeTransecData, _storeWalletData, WalletSyncUpdate } from './crud_local_DB';

export const _SaveAllData = async (walletOLD, transcetion, activeaction, DB) => {

    let storeTransecData, storeWalletData, InitialArrayResultIs, resultIs, wallet, storeDataWallet;

    if(transcetion == null){
        wallet = await WalletSyncUpdate(walletOLD);
        storeWalletData = await _storeWalletData(wallet);
        storeDataWallet = true;
    }else{
        wallet = walletOLD;
        storeDataWallet = false;
    }


    if(transcetion == null || transcetion.length == undefined || transcetion.length == 0){
        if(transcetion != null){
            InitialArrayResultIs = ArrayGenaratorWallet(wallet, transcetion);
        }else{
            let data = null;
            InitialArrayResultIs = ArrayGenaratorWallet(wallet, data);
        }
        
    }else{
            InitialArrayResultIs = ArrayGenaratorWallet(wallet, transcetion);
    }

    if(InitialArrayResultIs){
            
            if(transcetion != null){
                resultIs = await TransectionUpdate(transcetion);
            }else{
                resultIs = transcetion;
            }

            if(activeaction == true){
                resultIs == null ? storeTransecData = true : storeTransecData = await _storeTransecData(resultIs);
            }else{
                if(storeDataWallet == false){
                    storeWalletData = await _storeWalletData(wallet);
                }
                resultIs == null ? storeTransecData = true : storeTransecData = await _storeTransecData(resultIs);
            }

            if(storeTransecData == true){
                let resultCloud = await AddCloudDataBaseData(DB, InitialArrayResultIs);
                if(resultCloud == true ){
                    return true
                }else{
                    return false
                }
            }else{
                alert('Opps! Please Try again later.');
                console.log('storeTransecData problem', storeTransecData)
            }
    }else{
        alert('Please Try Again Later..')
        console.log('InitialArrayResultIs problem', InitialArrayResultIs)
    }

}