import React, {Component} from "react";
import { View, Image, StyleSheet, AsyncStorage } from "react-native";
import { Card, Text } from 'native-base';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import { letast_transection } from "../../../actions/Transection";

const ImageGrt = (bank_code) => {

  if(bank_code == 'BRAC BANK'){
    return(
      <Image
                    style={{width: "100%", height: "100%", borderRadius: 8, flex: 1, position: "absolute", resizeMode: "cover"}}
                    source={require('../../../assets/images/card4.png')}
      />
    )
  }else if(bank_code == 'CITY BANK'){
    return(
      <Image
                    style={{width: "100%", height: "100%", borderRadius: 8, flex: 1, position: "absolute", resizeMode: "cover"}}
                    source={require('../../../assets/images/card2.png')}
      />
    )
  }else{
    return(
      <Image
                    style={{width: "100%", height: "100%", borderRadius: 8, flex: 1, position: "absolute", resizeMode: "cover"}}
                    source={require('../../../assets/images/card3.png')}
      />
    )
  }


}

const CustomTransectionCustomCard = (props) => {
    return(
        <View style={{height: "100%", borderRadius: 10, marginLeft: 15, marginRight: 15}}>    

              {
                ImageGrt(props.data.bank_code)
              }   
              
            <View style={{width: "100%", paddingTop: 10}}>
                    <Text style={{textAlign: 'right', fontSize: 20, fontWeight: "800"}}>
                      {
                        props.data.bank_code
                      }
                    </Text>
            </View>
            <View style={{width: '100%', marginTop: 60}}>
                <View style={{alignItems: "center"}}>
                  <Text style={{fontSize: 35, fontWeight: "900"}}>
                    ****  ****  ****  ****
                  </Text>
                </View>
            </View>
            <View>
              <Text style={{fontSize: 20, fontWeight: "900"}}>
              {
                props.data.card_holder_name
              }
              </Text>
            </View>         
        </View>
    )
}


class TransectionCustomCard extends Component {

    PropsChker = () => {
      
      if(this.props.card_data.length == undefined){
          return(
              <CustomTransectionCustomCard
                data={this.props.card_data}
              />
          )
      }else{

          return this.props.card_data.map((e, i) => {
            return(
              // CustomTransectionCustomCard(e, key=i)
               <CustomTransectionCustomCard
                key={i}
                data={e}
                />             
              )
          })        
      }

    }

    _onMomentumScrollEnd(e, state, context) {
      if(this.props.card_data.length == undefined) {
        console.log('result', state.index)
      }else{

        AsyncStorage.getItem('wallet@Card').then((e) =>  {
          let data_load = JSON.parse(e);
          let id = data_load[state.index].wallet_id;
          this.props.dispatch(letast_transection(id))  
      })

      }
    }

    render() {
        return (
            <View style={{height: 250, width: "100%", marginBottom: 10}}>
              <Swiper 
                showsButtons={false}
                index={0}
                onMomentumScrollEnd={this._onMomentumScrollEnd.bind(this)}
                >
                {
                    this.props.card_data != null ? 
                      this.PropsChker()
                    : null
                }           
              </Swiper>  
            </View>    
        )}
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BB',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }
  });

const mapStateProps = (state) => {
  return {}
}

export default connect(mapStateProps)(TransectionCustomCard)