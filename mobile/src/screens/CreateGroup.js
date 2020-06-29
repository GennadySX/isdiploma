/******
 * Gennady Sabirovsky
 * gennadysx.com
 * 2020 @c
 *
 */

import React, {Component} from "react"
import {Button, TouchableOpacity, Text, TextInput, View} from "react-native";

//component

//style
import styles from "../styles/Styles";
import {HeaderChatRoom} from "../components/chatElements/HeaderChatRoom";
import {ApplicationProvider,  Input, Layout} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {Header} from "../components/Header";


export class CreateGroupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }

    componentDidMount(): void {

    }


    render() {
        return (
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                <View style={[styles.DarkScreen, styles.ChatRoomScreen]}>
                    <Header
                        goBack={() => this.props.navigation.goBack()}
                        title={'Создание новой группы'}/>
                    <Layout style={[styles.container]}>
                        <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center', color: 'white', marginBottom: 15}}>Создать группу</Text>

                        <TextInput
                            style={{backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 15}}
                            placeholder='Название группы'
                            status={this.state.loginVerified}
                            value={this.state.email}
                            onChangeText={(e) => this.setState({email: e})}
                        />

                        <TouchableOpacity style={{backgroundColor: '#52c22b', padding: 15, borderRadius: 10}} onPress={() => {}}>

                            <Text style={{fontSize: 19, fontWeight: 'bold', textAlign: 'center'}}>Создать</Text>

                        </TouchableOpacity>


                    </Layout>
                </View>
            </ApplicationProvider>
        )
    }
}
