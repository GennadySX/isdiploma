/****
 * Gennady Sabirovsky
 * gennadysx.com
 * 2020 @c
 *
 */

//styles

import React from 'react';

import {View, Text, TouchableOpacity, Image} from "react-native";

import {DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";

import styles from "../styles/Styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import {clear} from "../helpers/Storage";
import {currentUser} from "../helpers/UserUtil";


class DrawerMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            user: '',
        }
        currentUser().then(res => {
            this.setState({user: JSON.parse(res), visible: true}, () => {
             console.log('user is ', this.state)
            })

        })
    }


    componentDidMount(): void {
        console.log('Drawer Menu', this.props)

    }

    getUser() {
    }

    render() {
        return (
            this.state.visible ?
            <DrawerContentScrollView style={styles.DrawerMenu}>
                {/*<DrawerItemList {...props} />*/}
                <View style={styles.dmenuBlockUser}>
                    <View key={"leftBlock"} style={styles.dmenuUserAvatarBlock}>
                        <Image source={require('../assets/image/login.jpg')} style={styles.dmenuUserAvatar}/>
                    </View>
                    {this.state.user ?
                    <View key={"RightBlock"} style={styles.dmenuUserBlock}>
                        <Text style={styles.dmenuUserName}>{this.state.user.firstName} {this.state.user.lastName}</Text>
                        <Text style={styles.dmenuUserNumber}>{this.state.user.phone}</Text>
                    </View> : null
                    }
                </View>

                <View key={"MenuItems"}>
                    <TouchableOpacity style={[styles.dmenuItem]}
                                      onPress={() => this.props.navigation.navigate('CreateGroup', {paramTest: 'unlock'})}
                    >
                        <Icon size={20} name="users" color={"white"}> </Icon>
                        <Text style={[styles.dmenuItemLabel]}>Создать группу</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem]}
                                      onPress={() => this.props.navigation.navigate('CreateProject', {paramTest: 'unlock'})}
                    >
                        <Icon size={20} name="project-diagram" color={"white"}> </Icon>
                        <Text style={[styles.dmenuItemLabel]}>Новый проект</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem]}
                                      onPress={() => this.props.navigation.navigate('Search', {paramTest: 'unlock'})}
                    >
                        <Icon size={20} name="search" color={"white"}> </Icon>
                        <Text style={[styles.dmenuItemLabel]}>Найти </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem]}
                                      onPress={() => this.props.navigation.navigate('Task', {paramTest: 'unlock'})}
                    >
                        <Icon size={20} name="thumbtack" color={"white"}> </Icon>
                        <Text style={[styles.dmenuItemLabel]}>Задачи</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem]}>
                        <Icon size={20} name="bookmark" color={"white"}> </Icon>
                        <Text style={[styles.dmenuItemLabel]}>Избранные сообщения</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem]}
                                      onPress={() => this.props.navigation.navigate('Settings', {paramTest: 'unlock'})}
                    >
                        <Icon size={20} name="cog" color={"white"}> </Icon>
                        <Text style={[styles.dmenuItemLabel]}>Настройки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem]}>

                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem]}>
                        <Icon size={20} name="question-circle" color={"white"}> </Icon>
                        <Text style={[styles.dmenuItemLabel]}>Помощь</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem]}>
                        <Icon size={20} name="info" color={"white"}> </Icon>
                        <Text style={[styles.dmenuItemLabel]}>О нас</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem]} onPress={() => {
                        Promise.all([    clear()]).then(() => {
                            this.props.navigation.navigate('Login')
                        })
                    }}>
                        <Icon size={20} name="times" color={"red"}> </Icon>
                        <Text style={[styles.dmenuItemLabel]}>Выйти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.dmenuItem, {padding: 8}]} onPress={() => {}}></TouchableOpacity>
                </View>


            </DrawerContentScrollView>
                : null
        )
    }
}


export {
    DrawerMenu
}


// <DrawerItem
//     label="Close drawer"
//     onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
// />
// <DrawerItem
// label="Toggle drawer"
// onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
// />
