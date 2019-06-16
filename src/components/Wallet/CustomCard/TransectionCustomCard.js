import React, {Component} from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import { DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right } from 'native-base';
import Swiper from 'react-native-swiper';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Level } from "chalk";

const CardChange = () => {
  console.log("workkkkkkkkkkkkk")
}


const CustomTransectionCustomCard = (props) => {
    return(
        <Card style={{height: "100%", borderRadius: 8}}>    
            
              <Image
                  style={{width: "100%", height: "100%", borderRadius: 8, flex: 1, position: "absolute", resizeMode: "cover"}}
                  source={require('../../../assets/card_a.png')}
              />
            <View style={{width: "100%", paddingTop: 10}}>
                    <Text style={{textAlign: 'right', fontSize: 20, fontWeight: "800"}}>
                      Brac Bank
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
                Imran Khan Opu
              </Text>
            </View>         
        </Card>
    )
}


class TransectionCustomCard extends Component {
    render() {
        return (
            <View style={{height: 250, width: "100%", padding: 20}}>
                 <Swiper 
                  showsButtons={false}
                  onIndexChanged={CardChange}
                  index={0}
                  >
                    {/* <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                    </View> */}
                        {
                            CustomTransectionCustomCard()
                        }
                        {
                            CustomTransectionCustomCard()
                        }
                        {
                            CustomTransectionCustomCard()
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
  })

export default TransectionCustomCard;