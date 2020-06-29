/**
 * GennadySX, 2020
 * https://gennadysx.com/
 * */

import React, {Component} from 'react';
import { View, TouchableOpacity, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';


//styles
import styles from "../styles/Styles";






/* props : [topTabsIndex, index, routes, scenes]


 */


class TablySceen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topTabsIndex: (this.props.topTabsIndex) ? this.props.topTabsIndex : 0 ,
            index: (this.props.index) ? this.props.topTabsIndex : 0,
            routes: (this.props.routes) ? this.props.routes : [],
            selected: styles.tabItemActive,
        }
    }

    renderScene = SceneMap((this.props.scenes) ? this.props.scenes : {} );

    renderTabBar = (props) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const color = "#ffffff"
                    return (
                        <TouchableOpacity
                            key={i}
                            style={styles.tabItem}
                            onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={(this.state.index === i) ? styles.tabItemTextActive : styles.tabItemText }>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };


    render() {
        return (
            <TabView
                navigationState={{ index: this.state.index, routes: this.state.routes }}
                renderScene={this.renderScene}
                renderTabBar={this.renderTabBar}
                onIndexChange={(e) => this.setState({index: e}) }
                initialLayout={{width: Dimensions.get('window').width}}
            />

        );
    }
}


export {
    TablySceen
}
