/**
 *
 * */

import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import {ApplicationProvider, Button, Input, Layout, Text} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';


console.disableYellowBox = true;

//styles
import styles from "../styles/Styles";

//helpers
import { axios} from '../helpers/Index'
import {API} from "../globals";

import {Storage} from "../helpers/Storage";
//import axios from 'axios'


export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogin: true,
            isNotEmpty: true,
            email: 'mail007@mail.com',
            login: 'johndoe',
            emailVerified: '',
            password: "unlockme",
            c_password: 'unlockme',
            passwordVerified: '',
            secureTextEntry: false,
        }
        this.checkLog();
        //console.log(this.props)
        this.socket = this.props.route.params.client
    }

    checkLog = async () => {
        const token = await Storage.get('token');
        if (token && token !== null) {
            console.log('check log ', token);
            this.props.navigation.navigate('Home', {socket: this.socket});
        }


    };


    sendIt = async () => {
        await axios.post(API.login, this.state).then((res) => {
            console.log('token is', res)
            if (res.token) {
                Promise.all(
                    [
                    Storage.set('token', res.token),
                    Storage.set('user', JSON.stringify(res.user))]
                ).then(() => this.checkLog())
            }
        })
    }


    registerIt = async () => {
        await axios.post(API.register, this.state).then((res) => {
            console.log('token is', res)
            if (res.token) {
                Promise.all(
                    [
                        Storage.set('token', res.token),
                        Storage.set('user', JSON.stringify(res.user))]
                ).then(() => this.checkLog())
            }
        })
    }






    render() {
        return (
            <ApplicationProvider mapping={mapping} theme={lightTheme}>
                {(this.state.islogin) ?
                    <ImageBackground source={require('../assets/image/login.jpg')} style={styles.backgroundImage}>
                        <Layout style={styles.container}>
                            <Input
                                style={styles.loginInput}
                                placeholder='Логин или email'
                                status={this.state.emailVerified}
                                caption={this.state.isNotEmpty ? '' : 'Can not be empty'}
                                value={this.state.login}
                                onChangeText={(e) => this.setState({login: e})}
                            />
                            <Input
                                style={styles.loginInput}
                                placeholder='Пароль'
                                status={this.state.passwordVerified}
                                caption={this.state.isNotEmpty ? '' : 'Can not be empty'}
                                value={this.state.password}
                                secureTextEntry={this.state.secureTextEntry}
                                icon={this.renderIcon}
                                onIconPress={() => this.setState({secureTextEntry: (this.state.secureTextEntry) ? false : true})}
                                onChangeText={(e) => this.setState({password: e})}
                            />
                            <Button style={styles.ButtonWithInput} onPress={() => this.sendIt()}
                                    title={'Войти'}>Войти</Button>

                        </Layout>
                        <Layout style={styles.bottomEl}>
                            <Text style={styles.LinkLogin}
                                  onPress={() => this.setState({islogin: false})}>
                                Зарегистроваться
                            </Text>
                        </Layout>
                    </ImageBackground>
                    :
                    <ImageBackground source={require('../assets/image/register.jpg')} style={styles.backgroundImage}>
                        <Layout style={styles.container}>
                            <Input
                                style={styles.loginInput}
                                placeholder='Введите E-mail'
                                status={this.state.loginVerified}
                                caption={this.state.isNotEmpty ? '' : 'Can not be empty'}
                                value={this.state.email}
                                onChangeText={(e) => this.setState({email: e})}
                            />
                            <Input
                                style={styles.loginInput}
                                placeholder='Введите логин'
                                status={this.state.loginVerified}
                                caption={this.state.isNotEmpty ? '' : 'Can not be empty'}
                                value={this.state.login}
                                onChangeText={(e) => this.setState({login: e})}
                            />
                            <Input
                                style={styles.loginInput}
                                placeholder='Пароль'
                                status={this.state.passwordVerified}
                                caption={this.state.isNotEmpty ? '' : 'Can not be empty'}
                                value={this.state.password}
                                onChangeText={(e) => this.setState({password: e})}
                            />
                            <Input
                                style={styles.loginInput}
                                placeholder='Подтвердите пароль'
                                status={this.state.passwordVerified}
                                caption={this.state.isNotEmpty ? '' : 'Can not be empty'}
                                value={this.state.c_password}
                                onChangeText={(e) => this.setState({c_password: e})}
                            />
                            <Button status='basic'
                                    onPress={() => this.registerIt()}
                                    style={[styles.ButtonWithInput, styles.ButtonWithInputSignUp]}>Зарегистроваться</Button>

                        </Layout>
                        <Layout style={[styles.bottomEl, styles.ButtonWithInputSignIn]}>
                            <Text style={[styles.LinkLogin, {color: '#fff'}]}
                                  onPress={() => this.setState({islogin: true})}>
                                Войти
                            </Text>
                        </Layout>
                    </ImageBackground>
                }
            </ApplicationProvider>
        )
    }
}

