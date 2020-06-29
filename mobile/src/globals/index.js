/*
 *
 * by Gennady Sabirovsky
 * GennadySX.com
 * 2020 @c
 */

const api = 'http://192.168.1.20:3000/api/';
const origin = 'http://192.168.1.20:3000';

const API = {
    origin: origin,
    url: api,
    login: "auth/login",
    register: "auth/register",
}


const XSocket = {
    origin: origin
}


export {
    API,
    XSocket
}
