
/*
 * GennadySX, 2020
 * https://gennadysx.com
 */

import {API} from '../globals/index';
import {get as StorageGet} from './Storage';


const get = (controller, data ) => req(controller, 'get', data);
const post = (controller, data, type = 'json') => req(controller, 'post', data, type = type);

const put = (controller, data) => req(controller, 'put', data);
const patch = (controller, data) => req(controller, 'patch', data);
const del = (controller, data) => req(controller, 'delete', data);


const req = async (controller, method, data, type) => {
    const token =  await StorageGet('token');
    let header = {
        method: method,
        headers: {
            Accept: "application/json",
            'Content-type': (type === 'json') ?  "application/json" :  'multipart/form-data',
            Authorization: (token && token != null) ? "Bearer " + token : '',
        },
        body: (type === 'json') ? JSON.stringify(data) : data
    };

  return new Promise((resolve, reject) => {
        fetch(API.url+ controller, header)
            .then(res => {
                //console.log(res)
                return res.json();
            })
            .then(res => {
                //console.log('cs: ', res)
                resolve(res);
            }).catch(err => {
            console.log(err);
        });
    });
};




export {
    get,
    post,
    put,
    patch,
    del,
};
