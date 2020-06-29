/****
 * Gennady Sabirovsky
 * gennadysx.com
 * 2020 @c
 *
 */
import React from "react"
import {View, Button, Image, TouchableOpacity, Text, StyleSheet} from  "react-native"


//styles
import styles from "../styles/Styles";
import {HeaderChatRoom} from "../components/chatElements/HeaderChatRoom";

import {Header} from "../components/Header";


export class UserInfoScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    componentDidMount(): void {
        console.log('user info props', this.props.route.params)
    }


    render() {
        return (
            <View style={[styles.DarkScreen, styles.ChatRoomScreen]}>
                <Header
                    goBack={() => this.props.navigation.goBack()}
                    title={`${this.props.route.params.data.firstname} ${this.props.route.params.data.lastname}`}/>
                <View style={[x.usBlock ]} >
                    <View>
                        <Image source={require('../assets/image/avatar.jpg')} style={x.userAvatar} />
                    </View>

                    <TouchableOpacity style={[x.btnDefault, {marginTop: 25}]} >
                        <Text style={x.btnDangerText}>Номер: +7 999 157 18 58</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={x.btnDanger}>
                    <Text style={x.btnDangerText}>Удалить из друзей</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
}





const x = StyleSheet.create({

    usBlock: {
        //backgroundColor: 'yellow',
        padding: 15,
        justifyContent: 'center',

    },
    userAvatar: {
        width: 150,
        height: 150,
        position: 'relative',
        left: '30%',
        marginBottom: 25
    },
    btnDefault: {
      marginBottom: 25
    },
    btnDanger: {
        padding: 10,
        backgroundColor: "#ff443a",
        borderRadius: 5
    },
    btnDangerText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }



})