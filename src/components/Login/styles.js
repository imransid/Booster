import { StyleSheet, Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  

headerLogo:{
    width:300,
    height:100,
    flex: 1, 
    alignItems: 'center', 
    flexDirection: 'column'

}


});

export default styles;
