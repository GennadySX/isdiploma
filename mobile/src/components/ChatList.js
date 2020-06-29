import React from 'react'
import {View, Text, ActivityIndicator, TouchableOpacity, Image} from 'react-native'
import styles from "../styles/Styles";

const ChatList = (props) => {
    const room = props.room.item

    const getUser = (members, user = {}, userList = []) =>{
          Promise.all([members.map(id => {userList.push(props.users.filter(user => user._id === id)[0])})])
        return userList.filter(user => user._id !== props.me._id)[0]
    }

    const getMessage = (room) => room.messageList.length ? room.messageList[room.messageList.length-1].text : 'null'


    return (
        <TouchableOpacity style={styles.chatList}
                          onPress={() => props.select(room)}>
            <Image source={require('../assets/image/avatar.jpg')} style={styles.chatListAvatar}></Image>
         <View style={styles.chatListText}>
                <Text style={styles.chatListUserName}>{getUser(room.members).firstName} {getUser(room.members).lastName} </Text>
                <Text style={styles.chatListLastMessage}>{getMessage(room)}</Text>
             {/*
                <Text style={styles.chatListTimeStamp}>{room.messageList[room.messageList.length-1].createdAt}</Text>
                {(room.messageList[room.messageList.length-1].new) ? <Text style={styles.chatListBadge}>{room.lastMessage.new}</Text> : null}*/}
            </View>
        </TouchableOpacity>
    )}

export {
    ChatList
}
