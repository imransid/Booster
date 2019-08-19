import React, {Component} from "react";
import { View, ScrollView, Switch, ActivityIndicator, TouchableOpacity } from "react-native";
import MenuDrawerBUtton from "../Menu/MenuButtons"
import {Label, Card, Button, Container, Header, Content, Icon, Badge, ListItem} from 'native-base';
import { connect } from 'react-redux';
import styles from "./Styles";
import { insertCloud } from "../../actions/Setting"
class Setting extends Component{

    constructor(props){
        super(props);
        this.state = {
            Eventnotification: this.props.eventnotification,
            AlertData: this.props.alertData,
            loading: this.props.loaded
        }
    }

    componentDidMount(){
    }

    SyncFirebase = () => {
        this.setState({
            loading: !this.state.loading
        })
        this.props.dispatch(insertCloud());
    }

    toggledata = (value1, value2) => {
        this.setState({
            Eventnotification : value1,
            AlertData : value2
        })
    }



    syncdone = () => {
        return(
            <Badge success style={{alignSelf: "flex-end", paddingTop: 2}}>
                    <Icon name="checkmark" style={{ fontSize: 22, color: "#fff" }}/>
            </Badge>
        )
    }

    syncnotdone = () => {
        return(
            <Badge style={{alignSelf: "flex-end", paddingTop: 2 }}>
                <TouchableOpacity onPress={() => this.SyncFirebase()}>
                    <Icon name="refresh" style={{ fontSize: 22, color: "#fff" }}/>
                </TouchableOpacity>
            </Badge>
        )
    }

    loader = () => {
        return(
            
            <Badge style={{alignSelf: "flex-end", backgroundColor: '#EEEEEE'}}>
                <ActivityIndicator size="small" color="#00ff00" />
            </Badge>
        )
    }

    render(){
        return(
            <Container style={{backgroundColor: "#EEEEEE"}}>
                <Header style={{alignContent: "stretch", backgroundColor: '#EEEEEE', borderColor: '#E0E0E0', borderWidth: 2}}>
                    <View style={{flexDirection: "row", width: "100%", paddingTop: 15, justifyContent: 'center'}}>
                            {/* <MenuDrawerBUtton navigation={this.props.navigation}/> */}
                            <Label style={{marginLeft: 30, color: "#424242", fontSize: 22, fontWeight: "bold"}}>
                                Settings      
                            </Label>
                    </View>
                </Header>
                <Content>
                    <ScrollView style={{paddingTop: 50 }}>
                        <View style={{width: "100%"}}>
                            
                            <ListItem>
                                <View style={{width: '50%'}}>
                                    <Label>
                                    Event Reminder
                                    </Label>
                                </View>
                                <View style={{alignItems: "flex-end", width: '50%'}}>
                                    <Switch
                                        onValueChange = {(val) => this.toggledata(val, this.state.AlertData)}
                                        value = { this.state.Eventnotification }
                                        />
                                </View>
                            </ListItem>
                            <ListItem>
                                <View style={{width: '50%'}}>
                                    <Label>
                                        Sync Now
                                    </Label>
                                </View>
                                <View style={{flex: 1, width: '50%'}}>
                                    {
                                       this.state.loading == true ? this.loader() : (
                                           this.props.sync == true ? this.syncdone() : this.syncnotdone() 
                                       )
                                    }
                                </View>
                            </ListItem>
                            <ListItem>
                                <View style={{width: '50%'}}>
                                    <Label>
                                    Alert
                                    </Label>
                                </View>
                                <View style={{alignItems: "flex-end", width: '50%'}}>
                                    <Switch
                                        onValueChange = {(val) => this.toggledata(this.state.Eventnotification, val)}
                                        value = { this.state.AlertData }
                                        />
                                </View>
                            </ListItem>                            
                        </View>
                    </ScrollView>         
                </Content>               
            </Container>

        )
    }
}


const mapStateProps = (state) => {
    console.log('sr\e', state)
    const sync = state.SETTING.sync;
    const loaded = state.SETTING.loading;
    const eventnotification = state.SETTING.eventnotification;
    const alertData = state.SETTING.alert;
    return {
        sync,
        loaded,
        eventnotification,
        alertData
    }
}

export default connect(mapStateProps)(Setting)