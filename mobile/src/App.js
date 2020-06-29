/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {RoutesDrawer, RoutesStack} from "./routes";
import {DrawerMenu} from "./components/DrawerMenu";
import io from "socket.io-client";
import {XSocket} from "./globals";


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

let client = io( XSocket.origin,
    {
        transports: ['websocket'],

        query: {token: "o2Exloo5CMEy6VkohtBBZMXzF12OqJOMbrGUTwUc9psQLG46W7IkcoG9cQ04QqrTwgc7uf" }
    });


function Root(prop) {
    return (
        <Drawer.Navigator initialRouteName={'Login'} drawerContent={() => <DrawerMenu navigation={prop.navigation} />} >
            {RoutesStack.map((route, index) =>
                <Drawer.Screen key={index}  initialParams={{ client: client }} name={route.name} component={route.screen} navigate={(screen) => this.navigation(screen)} options={(route.options) ? route.options : null} />
            )}
        </Drawer.Navigator>
    );
}


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screen:'Login'
        }


    }

    navigation = (screen) => {
        this.setState({screen:  screen});
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name="Root" component={Root} options={{headerShown: false}} prop={this.props}/>
                    {RoutesStack.map((route, index) =>
                        <Stack.Screen key={index} name={route.name} initialParams={{client: client}} component={route.screen} navigate={(screen) => this.navigation(screen)} options={(route.options) ? route.options : null} />
                    )}
                </Stack.Navigator>

            </NavigationContainer>
        );
    }
}

