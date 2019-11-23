const ArrayGenaratorTransection = (id, transcetion) => {
    let result = [];
    let loadDatain;

    if(transcetion.length == undefined){
        if(transcetion.walletId == id){
            loadDatain = {
                'amount': transcetion.amount,
                'description': transcetion.description,
                'selectCategory': transcetion.selectCategory,
                'date': transcetion.date,
                'colorCode': transcetion.colorCode,
                'IconCode': transcetion.IconCode,
                'IconName': transcetion.IconName,
                'walletId': transcetion.walletId,
                'transectionid': transcetion.transectionid,
                'syncStatus': true
            }
        }
    }else{
        transcetion.map((e) => {
            e.walletId == id ? result.push(e) : null
        })            
    }
    
    if(transcetion.length == undefined){
        return loadDatain
    }
    else{
        if(result.length == 0){
            return null
        }else{
            return result
        }
    }

}


export const ArrayGenaratorWallet = (wallet, transcetion) => {

    let loadDatain;
    let result = [];

    if(wallet.length == undefined){
            loadDatain = {
                'card_holder_name': wallet.card_holder_name,
                'bank_code': wallet.bank_code,
                'balance': wallet.balance,
                'avalible_balance': wallet.balance,
                'balance_type': wallet.balance_type,
                'wallet_add_date': wallet.wallet_add_date,
                'card_num': wallet.card_num,
                'wallet_id': wallet.wallet_id,
                'syncStatus': true,
                'transection': transcetion == null ? null : ArrayGenaratorTransection(wallet.wallet_id, transcetion)
            }

    }else{
        wallet.map((e) => {
            loadDatain = {
                'card_holder_name': e.card_holder_name,
                'bank_code': e.bank_code,
                'balance': e.balance,
                'avalible_balance': e.balance,
                'balance_type': e.balance_type,
                'wallet_add_date': e.wallet_add_date,
                'card_num': e.card_num,
                'wallet_id': e.wallet_id,
                'syncStatus': true,
                'transection': transcetion == null ? null : ArrayGenaratorTransection(e.wallet_id, transcetion)
            }

            result.push(loadDatain)
        })            
    }

    if(wallet.length == undefined){
        return loadDatain
    }else{
        return result
    }

}



//Cloud All Data Processing here..
export const _ArrayValueCheck = async (onlineData, wallet, transection) => {

    let SYNCTransection;
    let OurTransection = [];


    if(onlineData.length == undefined){

        SYNCTransection = Cloud_And_Local_Transection_Gen(onlineData.transection, transection)

    }else{


        onlineData.map((e) => (
            e.transection == null ? null : (
                e.transection.length == undefined ? (
                    () => {
                        let Data =  Cloud_And_Local_Transection_Gen(e.transection, transection)

                        Data.length == undefined ? (
                            CheckArrayexits(OurTransection, Data.transectionid) == false ? OurTransection.push(Data) : null
                        ) : (
                            Data.map((o) => (
                                CheckArrayexits(OurTransection, o.transectionid) == false ? OurTransection.push(o) : null
                            ))
                        )
                        
                    }
                ) : (
                    e.transection.map((i) => 
                        {
                            let Data =  Cloud_And_Local_Transection_Gen(i, transection)

                            Data.length == undefined ? (
                                CheckArrayexits(OurTransection, Data.transectionid) == false ? OurTransection.push(Data) : null
                            ) : (
                                Data.map((o) => (
                                    CheckArrayexits(OurTransection, o.transectionid) == false ? OurTransection.push(o) : null
                                ))
                            )

                        }
                    )
                )
            )
        ))
        
        if(OurTransection.length == 0){
            if(transection != null){
                if(transection.length == 0){
                    SYNCTransection.push(transection)
                }else{
                    SYNCTransection = transection;
                }
            }
        }else{
            SYNCTransection = OurTransection;
        }

    }

    let marged_wallet = LOCALandGlobalMargeWallet(onlineData, wallet)

    console.log('marged_wallet', SYNCTransection)

    if(marged_wallet){
        return [SYNCTransection, marged_wallet]
    }
    else{
        alert('Something Went Wrong! Please Try Again Later');
    }
}


const CheckArrayexits = (Arr, VAL) => {

    return Arr.some(person =>  person.transectionid === VAL)
}

const Cloud_And_Local_Transection_Gen = (online, local) => {
    let DATA = [];

    //console.log('online, local', online, local)

    if(local == null){
        DATA = online   
    }else if(online.length == undefined && local.length == undefined){
        console.log('finder0 not checked')
        if(local.transectionid == online.transectionid){
            if(CheckArrayexits(DATA, online.transectionid) == false){
                if(local.syncStatus == false){
                    DATA.push(local)
                }else{
                    DATA.push(online)
                }
            }
        }else{

            if(CheckArrayexits(DATA, local.transectionid) == false){
                local.syncStatus == false ? DATA.push(local) : null
            }

            CheckArrayexits(DATA, online.transectionid) == false ? DATA.push(online) : null;
        }

    }else if(online.length == undefined && local.length != undefined){
        for(let i = 0 ; i < local.length ; i++ ){
            if(local[i].transectionid == online.transectionid){
                if(CheckArrayexits(DATA, online.transectionid) == false){
                    if(local[i].syncStatus == false){
                        DATA.push(local[i])
                    }else{
                        DATA.push(online)
                    }
                }
            }else{

                if(CheckArrayexits(DATA, local[i].transectionid) == false){
                    local[i].syncStatus == false ? DATA.push(local[i]) : null
                }

                CheckArrayexits(DATA, online.transectionid) == false ? DATA.push(online) : null;
            } 
        }

    }else if(local.length == undefined && online.length != undefined){
        console.log('finder2')
        for(let i = 0 ; i < online.length ; i++ ){
                if(online[i].transectionid == local.transectionid){
                    if(CheckArrayexits(DATA, local.transectionid) == false){
                        if(local.syncStatus == false){
                            DATA.push(local)
                        }else{
                            DATA.push(online[i])
                        }
                    }
                }else{

                    if(CheckArrayexits(DATA, local.transectionid) == false){
                        local.syncStatus == false ? DATA.push(local) : null
                    }

                    CheckArrayexits(DATA, online[i].transectionid) == false ? DATA.push(online[i]) : null;
                } 
        }
    }else{
        for(let i = 0 ; i < online.length ; i++ ){
            for(let j = 0 ; j < local.length ; j++){
                if(online[i].transectionid == local[j].transectionid){
                    if(CheckArrayexits(DATA, local[j].transectionid) == false){
                        if(local[j].syncStatus == false){
                            DATA.push(local[j])
                        }else{
                            DATA.push(online[i])
                        }
                    }
                }else{

                    if(CheckArrayexits(DATA, local[j].transectionid) == false){
                        local[j].syncStatus == false ? DATA.push(local[j]) : null
                    }

                    CheckArrayexits(DATA, online[i].transectionid) == false ? DATA.push(online[i]) : null;
                } 
            }
        }
    }


    Object.assign({}, DATA);
    return DATA;

}


const LOCALandGlobalMargeWallet = (onlineData, LocalData) => {

    let ReturnArray = []
    if(onlineData.length == undefined ||  LocalData.length == undefined){
        if(LocalData.length == undefined && onlineData.length != undefined){

            if(LocalData.wallet_id == "Testing"){
               
                ReturnArray = onlineData.map(e => {
                    delete e.transection
                    e.syncStatus = true
                    return e
                });

                return ReturnArray;
            }else{ ///When Local wallet is not initial Testing  and cloud have a array..

                onlineData.map((e) => {
                    delete e.transection
                    
                    if(ReturnArray.length == 0){
                        e.wallet_id == LocalData.wallet_id ? ReturnArray.push(e) : ReturnArray.push(e, LocalData)
                    }else{
                       
                        let chk1 = CheckArrayISexits(ReturnArray, e.wallet_id)
                        let chk2 = CheckArrayISexits(ReturnArray, LocalData.wallet_id)

                        if(chk1 == false && chk2 ==false){
                            ReturnArray.push(LocalData, e)
                        }else if(chk1 == false && chk2 ==true){
                            ReturnArray.push(e)
                        }else if(chk1 == true && chk2 ==false){
                            ReturnArray.push(LocalData)
                        }
                        else{
                            //two wallet are already exits..
                        }
                    }
                    
                });
                
                return ReturnArray;
                
            }

        }else if(onlineData.length == undefined && LocalData.length != undefined){ //when local DB have array cloud have single object..

            delete onlineData["transection"];

            LocalData.map((e) => {
                if(ReturnArray.length == 0){
                    ReturnArray.push(e);
                }else{
                    if(onlineData.wallet_id == e.wallet_id){

                        let chk = CheckArrayISexits(ReturnArray, e.wallet_id)

                    }else{

                        let chk1 = CheckArrayISexits(ReturnArray, e.wallet_id)
                        let chk2 = CheckArrayISexits(ReturnArray, onlineData.wallet_id)

                        if(chk1 == false && chk2 ==false){
                            ReturnArray.push(onlineData, e)
                        }else if(chk1 == false && chk2 ==true){
                            ReturnArray.push(e)
                        }else if(chk1 == true && chk2 ==false){
                            ReturnArray.push(onlineData)
                        }
                        else{
                            //two wallet are already exits..
                        }

                    }
                }
            })

            return ReturnArray

        }else{ ///when Loacl and cloud have only single object.
            // console.log(onlineData, LocalData)

            if(LocalData.wallet_id == "Testing"){

                delete onlineData["transection"];

                if(onlineData.wallet_id == LocalData.wallet_id){
                    ReturnArray.push(onlineData)
                }else{
                    ReturnArray.push(onlineData)
                }

            }else{
                delete onlineData["transection"];

                if(onlineData.wallet_id == LocalData.wallet_id){
                    ReturnArray.push(onlineData)
                }else{
                    ReturnArray.push(onlineData, LocalData)
                }
            }

            return ReturnArray

        }

    }else{

        let ArrayCombine = onlineData.map(e => {
            delete e.transection
            return e
        })

       // console.log('ArrayCombine, LocalData', ArrayCombine, LocalData)

        ArrayCombine.map((e) => {
            LocalData.map((i) => {

                if(ReturnArray.length == 0){
                    let chk_1 = CheckArrayISexits(ReturnArray, i.wallet_id)
                    let chk_2 = CheckArrayISexits(ReturnArray, e.wallet_id)

                    
                    if(chk_1 == false && chk_2 ==false){
                        if(i.wallet_id == e.wallet_id){
                            ReturnArray.push(i)
                        }else{
                            ReturnArray.push(i, e)
                        }
                    }
                }else{

                    let chk1 = CheckArrayISexits(ReturnArray, i.wallet_id)
                    let chk2 = CheckArrayISexits(ReturnArray, e.wallet_id)

                    if(chk1 == false && chk2 ==false){
                        if(i.wallet_id == e.wallet_id){
                            ReturnArray.push(i)
                        }else{
                            ReturnArray.push(i, e)
                        }
                    }else if(chk1 == false && chk2 ==true){
                        ReturnArray.push(i)
                    }else if(chk1 == true && chk2 ==false){
                        ReturnArray.push(e)
                    }
                    else{
                        //two wallet are already exits..
                    }
                }   
            })
        })    
        
        return ReturnArray
        

    }
}


const CheckArrayISexits = (Arr, VAL) => {

    return Arr.some(person =>  person.wallet_id === VAL)
}