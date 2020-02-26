
export const AddCloudDataBaseData = async (DB, InitialArrayResultIs) => {
    try{

       let result = await DB.set({
                data: InitialArrayResultIs
            }).then((e) => {
                return true
            }).catch((err) => {
                return false
            });

        return result

    }catch{
        console.log("Connection ERRoR")
    }

}

export const CloudInitDataBase = async (DB) => {
    try{

       let result = await DB.get().then(function(doc) {
            if (doc.exists) {
                return doc.data().data;
                //CludDataUpdate(doc.data().data, action.wallet, action.transcetion);
            } else {
                return true;
            }            
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

        return result

    }catch{
        console.log("Connection ERRoR")
    }

}