import { AsyncStorage } from "react-native";

export const LoginChker = (that) => {
    try{
        
        AsyncStorage.multiGet(['LoginStatus', 'Token', 'RefreshToken']).then((data) => {
            let LoginStatus = data[0][1];
            LoginStatus == 1 ? that.setState({
                isLogged : true
            }) : that.setState({
                isLogged : false
            })
        })
    }
    catch{
        console.log('LoginChker() AsyncStorage problem')
    }

}