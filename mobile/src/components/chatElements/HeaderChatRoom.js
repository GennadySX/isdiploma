/****
 * Gennady Sabirovsky
 * gennadysx.com
 * 2020 @c
 *
 */
import React from "react"
import {View, Button, Image, TouchableOpacity, Text, BackHandler} from  "react-native"



//styles
import styles from "../../styles/Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { CommonActions, useNavigation } from '@react-navigation/native';
import {get as sgGet} from '../../helpers/Storage'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import {currentUser} from "../../helpers/UserUtil";

export class HeaderChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.goBack.route.params.data,
            opened: true,
            friend: null
        }
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        //console.log('header props', this.props)

        //console.log('current user ', currentUser)
    }


    componentWillUnmount() {
      //  this.backHandler.remove()
    }

    handleBackPress = () => {
        this.back();
        return true;
    }

    back () {
        this.props.goBack.navigation.navigate('Root', { screen: 'Home', })
    }




    goUserInfo() {
        this.props.goBack.navigation.navigate('Root',
            { screen: 'UserInfo',
                params: this.props.goBack.route.params
            })
    }

    openMenu() {
        this.setState({opened: true})
    }

    render() {
        return (

            <View style={[styles, styles.chatHeader, this.props.style ? this.props.style : null]}>
                <TouchableOpacity style={styles.chatHeaderBack} onPress={() => this.back()}>
                        <Icon size={20} name="arrow-left" color={"white"} > </Icon>
                </TouchableOpacity>
                {this.props.title ?
                    <View style={styles.chatHeaderText}>
                        <Text
                            style={styles.chatHeaderUserName}>{this.props.title}</Text>
                    </View> : null
                }

                {
                   this.props.user ? <TouchableOpacity style={styles.chatHeader} onPress={() => this.goUserInfo()}>
                    <Image source={require('../../assets/image/avatar.jpg')} style={styles.chatHeaderImage}/>
                    <View style={styles.chatHeaderText}>
                        <Text
                            style={styles.chatHeaderUserName}>{this.props.user.firstName} {this.props.user.lastName}</Text>
                        <Text style={styles.chatHeaderUserStatus}>online</Text>
                    </View>
                </TouchableOpacity> : null
                }

            </View>

        )
    }
}


