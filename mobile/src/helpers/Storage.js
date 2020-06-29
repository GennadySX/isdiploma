/*
 * GennadySX, 2020
 * https://gennadysx.com
 */
import AsyncStorage from '@react-native-community/async-storage'

const get = async (key, func) => {
	try {
		const value = await AsyncStorage.getItem(key) || null
		if (func) func(value)
		return value
	} catch (error) {
		console.log(error.message)
	}
}

const set = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value)
	} catch (error) {
		console.log(error.message)
	}
}

const remove = async (key, func = null) => {
	try {
		await AsyncStorage.removeItem(key)
		if (func) func()
	} catch(error) {
		console.log(error.message)
	}
}

const clear = async () => await AsyncStorage.clear()

const removeItems = async (keys) => keys.forEach(v => remove(v))

const objectByKeys = (keys, callback) => {
	function keyGet(keys, index, obj, callback) {
		const k = keys[index]
		if (k === undefined) {
			if (callback) callback(obj)
			return
		}
		get(k, (v) => {
			if (v) obj[k] = v
			index++
			keyGet(keys, index, obj, callback)
		})
	}
	keyGet(keys, 0, {}, callback)
}

const update = async (key , value) => {
	await remove(key);
	return await set(key, value)
}


const Storage = {
	get,
	set,
	remove,
	clear,
	removeItems,
	objectByKeys,
	update
}


export {
	get,
	set,
	remove,
	clear,
	removeItems,
	objectByKeys,
	update,
	Storage
}
