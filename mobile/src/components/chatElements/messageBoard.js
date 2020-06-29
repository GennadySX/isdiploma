/****
 * Gennady Sabirovsky
 * gennadysx.com
 * 2020 @c
 *
 */
import React from "react"
import {View, Button, Image, TouchableOpacity, Text, ScrollView} from "react-native"


//styles
import styles from "../../styles/Styles";


export class MessageBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: this.props.messageList,
            room_data: this.props.roomData

        }
        //console.log(this.state.room_data)

        console.log('user id', this.props.user._id)
    }


    render() {
        return (
            <View style={[styles, styles.messageBoard]}>
                <ScrollView
                    ref={ref => this.scrollView = ref}
                    onContentSizeChange={(contentWidth, contentHeight)=>{
                        this.scrollView.scrollToEnd({animated: true});
                    }}
                >
                    <View style={styles.messageBoardBlock}>

                        {this.props.messageList.map((message, index) => {
                                if (message.type === 'text') return (
                                    <Text
                                        key={index} style={
                                        [styles.messageBoardFromMe, (message.sender_id === this.props.user._id) ? styles.messageBoardFrom : null,
                                            (index === 0) ? {marginTop: 10, } : null,
                                            (index === this.props.messageList.length - 1) ? {marginBottom: 140} : null,
                                        ]}>{message.text}</Text>
                                )
                            }
                        )}
                    </View>
                </ScrollView>
            </View>

        )
    }
}


