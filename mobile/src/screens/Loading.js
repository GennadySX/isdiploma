/*
 *
 * (dev) GennadySX, 2020
 */


import React, { Component } from 'react'

// components
import Loader from '../components/Loader'

// styles
import styles from '../styles/Styles'
// import {isScreen} from '../helpers/Screens';

// start
export default class LoadingScreen extends Component {
    constructor() {
        super();
        isScreen(this.constructor.name)

    }
    render() {
        return <Loader styles={styles} />
    }

}
