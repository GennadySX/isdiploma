import React, {Component} from 'react';
import {View} from 'react-native';


//components
import {MessageBoard} from "../components/chatElements/messageBoard";
import {HeaderChatRoom} from "../components/chatElements/HeaderChatRoom";
import {BoardChatRoom} from "../components/chatElements/BoardChatRoom";

//styles
import styles from "../styles/Styles";

//data
import {messageData} from "../dataExamples/messageList";

import EmojiSelector, {Categories} from "react-native-emoji-selector";
import { MenuProvider } from 'react-native-popup-menu';
import {get as sgGet} from '../helpers/Storage'
import {findFriend} from "../helpers/UserUtil";
class ChatRoomScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chatList: null,
            showEmoji: false,
            roomData: null,
            emoji: '',
            message: '',
            messageList: [],
            user: null,
            friend: null
        }
        this.client = this.props.route.params.client
        //console.log('get chatroom params', this.props.route)

        sgGet('user', (user) => {
           this.setState({user: JSON.parse(user)})
        })



    }

    componentDidMount() {
        this.getRoom()
        this.chatStart()
    }



    showE = (e) => {
        //console.log('show emoji clicked', e)
        this.setState({showEmoji: e})
    }


    getRoom() {
        this.client.on('get_room', room =>
                findFriend(room.data.members).then(res => {
                    this.setState({roomData: room.data, messageList: room.data.messageList, friend: res[0]})
                }))
        this.client.emit('get_room_emit', this.props.route.params.data._id)
    }


    chatStart() {
        this.client.on("room_receive", (msg, _ = this) => {
            //console.log('got message', msg)
            _.setState({messageList: [...this.state.messageList, msg[0]]})
        });
    }


    sendIt = () => {

        const nmessage = {
            sender_id: this.state.user._id,
            text: this.state.message,
            type: "text"
        }

        this.client.emit("room_send", {_id: this.state.roomData._id}, nmessage);

        this.setState({
            messageList: [...this.state.messageList, nmessage ],
        message: '',
            showEmoji: false,
        })



    }

    render() {
        return (
            <MenuProvider>
            <View style={[styles.DarkScreen, styles.ChatRoomScreen]}>
                {
                    this.state.friend ?
                    <HeaderChatRoom
                        user={this.state.friend}
                        goBack={this.props}
                    /> : null
                }
                {(this.state.showEmoji) ? <View style={{height: "80%"}}>
                    <EmojiSelector
                        onEmojiSelected={emoji => this.setState({message: this.state.message+emoji})}
                        showSearchBar={false}
                        columns={6}
                        showSectionTitles={true}
                        theme={"#407AFA"}
                        showHistory={true}
                        category={Categories.history}
                    />
                </View> : null}

                {this.state.roomData ? <MessageBoard
                    //roomData={this.state.messageList}
                    user={this.state.user}
                    messageList={this.state.messageList}
                    ></MessageBoard>
                    : null
                }
                <BoardChatRoom
                    sendIt={() => this.sendIt()}
                    message={this.state.message}
                    messageChange={(e) => this.setState({message: e})} showEmoji={(e) => this.showE(e)}/>
            </View>
                </MenuProvider>
        )
    }
}

export {
    ChatRoomScreen
}