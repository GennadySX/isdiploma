/**
 *
 * */

import React, {Component} from 'react';
import { View, Text, BackHandler } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
//components
import {TablySceen} from "../components/Tabs";

//tabScreens
import {ChatListScreen} from "./ChatList";
import {ContactsScreen} from "./Contacts";

//styles
import styles from "../styles/Styles";


//helpers
import {Storage, axios} from '../helpers/Index'
import {Header} from "../components/Header";
import Drawer from 'react-native-drawer'
import {WorkListScreen} from "./WorkList";




export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [
                { key: 'all', title: 'Чат', navigation: this.props.navigation, client: this.props.route.params.client },
                { key: 'contacts', title: 'Контакты',navigation: this.props.navigation },
                { key: 'work', title: 'Работа', navigation: this.props.navigation },
                // { key: 'groups', title: 'Группы', navigation: this.props.navigation },
            ]
        }


        //console.log('data props', this.props)

        this.props.route.params.client.emit('messages-list');
        this.props.route.params.client.on('messages-list-data', data => {
            console.log('Messages Socket data', data)
        });
    }




    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }




    handleBackButtonClick() {
        BackHandler.exitApp();
        return true;
    }

    renderScene = {
        all: ChatListScreen,
        contacts: ContactsScreen,
        work: WorkListScreen,
        // groups: WorkListScreen,
    };


    openDrawer() {
        //this.props.navigation.openDrawer()
        console.log('drawer', this.props)
        this.props.navigation.dispatch(DrawerActions.openDrawer())


    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Header title={"isDiploma"} openMenu={(() => this.openDrawer())}/>
                    <TablySceen
                        routes={this.state.routes}
                        scenes={this.renderScene}
                        navigation={this.props.navigation}
                    />
            </View>
        )
    }
}


