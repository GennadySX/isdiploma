import React, {Component} from 'react';
import { View, Text, Button, ScrollView, FlatList, Image, TouchableOpacity, PermissionsAndroid, SafeAreaView} from 'react-native';
import Contacts from 'react-native-contacts'

//components
import {ListX} from '../components/ListX'

//styles
import styles from "../styles/Styles";

//data
import {chatData} from "../dataExamples/chatList";


const ContactList = (props) => {
        //console.log(props)
    const contact = props.data.item
    const avatar = (contact.thumbnailPath !== '') ? { uri: contact.thumbnailPath} : require('../assets/image/avatar.jpg')
    return (
        <TouchableOpacity onPress={() => console.log('contact', contact)}>
            <View style={[styles.ContactListScreen, {flexDirection: 'row', marginBottom: 10}]} key={'ContactScreenContainer'}>
                <View key={'AvatarContainer'+contact.recordID} style={{marginRight: 15, marginLeft: 10}}>
                <Image style={{width: 50, height: 50, borderRadius: 50 }} source={avatar}/>
                </View>
                <View key={'AvatarContainer'} style={{padding: 10,position: 'relative', bottom: 5 }}>
                    <Text style={{color: "white"}}>{contact.displayName}</Text>
                    <Text style={{color: "gray", fontSize: 12}}>{contact.phoneNumbers[contact.phoneNumbers.length-1].number}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

class ContactsScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            chatList: null,
            contactList: null
        }
    }

    componentDidMount() {

        this.getContacts();
    }

    getContacts() {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: "Contacts",
            message: "This app would like to view your contacts."
          }).then(() => {
            Contacts.getAll((err, contacts) => {
              if (err === "denied") {
                // error
                  alert('Ooops!, Don`t have a permission to contacts! Please check later!')
              } else {
                // console.log(contacts);
                this.setState({contactList: contacts})
              }
            });
          });
    }

    render() {
        return (
            (!this.state.contactList) ? <View>
            <Text>Loading...</Text>
            </View> :
            <View style={[styles.DarkScreen]}>
                <View>
                  <SafeAreaView style={{paddingTop: 10, paddingBottom: 10}}>
                     <FlatList
                        data={this.state.contactList}
                        renderItem={(contact)  => <ContactList data={contact}  />}
                        keyExtractor={contact => contact.recordID.toString()}
                    />
                  </SafeAreaView>
                </View>
            </View>
        )
    }
}

export {
    ContactsScreen
}