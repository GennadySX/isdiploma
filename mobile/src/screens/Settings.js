/****
 * Gennady Sabirovsky
 * gennadysx.com
 * 2020 @c
 *
 */
import React from "react"
import {View, Button, Image, TouchableOpacity, Text, PermissionsAndroid, StyleSheet, TextInput} from "react-native"

//styles
import styles from "../styles/Styles";
import {ApplicationProvider, Layout} from "@ui-kitten/components";
import {HeaderChatRoom} from "../components/chatElements/HeaderChatRoom";
import {Header} from "../components/Header";





export class SettingsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <View style={[styles.DarkScreen, styles.ChatRoomScreen]}>
                <Header
                    goBack={() => this.props.navigation.goBack()}
                    title={'Настройки'}/>
                <View style={[x.usBlock ]} >
                    <View>
                        <Image source={require('../assets/image/avatar.jpg')} style={x.userAvatar} />
                    </View>


                    <TextInput
                        style={{backgroundColor: 'white', padding: 10, borderRadius: 10, marginBottom: 15}}
                        placeholder='Имя'
                        value={this.state.email}
                        onChangeText={(e) => this.setState({email: e})}
                    />

                    <TextInput
                        style={{backgroundColor: 'white', padding: 10, borderRadius: 10, marginBottom: 15}}
                        placeholder='Фамилия'
                        value={this.state.email}
                        onChangeText={(e) => this.setState({email: e})}
                    />

                    <TextInput
                        style={{backgroundColor: 'white', padding: 10, borderRadius: 10, marginBottom: 15}}
                        placeholder='Телефон номер'
                        value={this.state.email}
                        onChangeText={(e) => this.setState({email: e})}
                    />
                    <TouchableOpacity style={x.btnSuccess}>
                        <Text style={x.btnDangerText}>Сохранить</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={x.btnDanger}>
                        <Text style={x.btnDangerText}>Удалить аккаунт</Text>
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
        borderRadius: 5,
        marginBottom: 15
    },
    btnSuccess: {
        padding: 10,
        backgroundColor: "#1aab2b",
        borderRadius: 5,
        marginBottom: 15
    },
    btnDangerText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    }



})