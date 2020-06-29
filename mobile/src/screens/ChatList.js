import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native';
import {StackActions} from '@react-navigation/native';
//components
import {ChatList} from '../components/ChatList'
//styles
import styles from "../styles/Styles";

//data
import {chatData} from "../dataExamples/chatList";
import {set as sgSet, get as sgGet} from "../helpers/Storage";


class ChatListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatList: null,
            rooms: null,
            users: [],
            me: null
        }
        this.socket = this.props.route.client
        sgGet('user', (user) => {
            this.setState({me: JSON.parse(user)})
        })
    }


    componentDidMount() {
        //console.log('ChatListScreen', this.props)
        this.getRoomList()
    }

    Location(item) {
        this.props.route.navigation.replace(
            'ChatRoom',
            {data: item}
        )
    }

/*

    getFriendList = async () => {
        await this.socket.on('friendList', friends => {
            console.log('friend list is', friends)
        })

        this.socket.emit('getFriendList')
    }
*/

    getRoomList = async () => {
        await this.socket.on('roomList', (rooms: any, users: any) =>
            Promise.all([
              sgSet('users', JSON.stringify(users)),
              sgSet('rooms', JSON.stringify(rooms))
          ]).then( () => this.setState({rooms: rooms, users: users})))

        this.socket.emit('get_room_list')
    }


    checkRoom = (members) =>
        members.filter(memberId => memberId === this.state.me._id) && members.filter(memberId => memberId === this.state.me._id).length ? true : false


    render() {

        return (
            <View style={[styles.DarkScreen]}>
                <View>
                    {this.state.rooms && this.state.me ?
                        <SafeAreaView>
                            <FlatList
                                data={this.state.rooms.data}
                                renderItem={(room) =>
                                    this.checkRoom(room.item.members) ?
                                        <ChatList
                                            users={this.state.users}
                                            room={room}
                                            me={this.state.me}
                                            select={(item) => this.Location(item)}/> : null
                                }
                                keyExtractor={room => room._id.toString()}
                            />
                        </SafeAreaView>
                        : null}

                </View>

            </View>
        )
    }
}

export {
    ChatListScreen
}

