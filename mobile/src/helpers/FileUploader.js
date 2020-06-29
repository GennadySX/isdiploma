/*
 * GennadySX, 2020
 * https://gennadysx.com
 */

import {API} from '../globals/index';
import {get as StorageGet} from './Storage';
import RNFetchBlob from 'rn-fetch-blob';


const axiosData = (controller, name, data) => req(controller, name, data, 'POST');





const req = async (controller, name,  data, method) => {
    const token = await StorageGet('token');
    return new Promise((resolve, reject) => {
        RNFetchBlob.fetch(method, API.url + controller, {
            Authorization: (token && token != null) ? 'Bearer ' + token : '',
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
        }, [
            {
                name: name,
                filename: data.fileName,
                data: RNFetchBlob.wrap(data.path),
            },
        ]).then((res) => {
            resolve(res.data);
        }).catch(err => {
            reject(err);
        });
    });
};

export {
    axiosData,
};
