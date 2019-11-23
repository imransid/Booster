import { StyleSheet, Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  

bodyContainer:{
    flex: 1,
    flexDirection: 'column'
},

backgroundDefault : {
    width: '100%',
    height: '100%', 
    alignSelf: 'stretch',
    flex: 1,
},  
headContainer : {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    flexDirection: 'column'
},
footerFake : {
    width: '30%',
},
footerContainer : {
    width: '100%',
    height: '30%',
    flexDirection: 'column',
    alignItems: 'center'
},
footerContentX : {
    width: '100%',
    height: '20%',
    alignItems: 'center'
},
footerContentY : {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
},
footerSocial : {
    // width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between'

},
Social: {
    width: 70, height: 70
},
footerContentText: {
    fontSize: 19,
    color: '#8a2be2'
},
headerFixedheight: {height: "30%" },
headerTextBoxA : {height: "10%", flexDirection: "row"},
headerTextBoxB : {height: "10%"},
headerTextA : {fontSize: 28 , color: "#33f9ff", fontFamily: 'Raleway'},
headerTextB : {fontSize: 28, color: "white", fontFamily: 'Raleway'},
headerTextC : {color: "white", fontFamily: 'Raleway'}


});

export default styles;
