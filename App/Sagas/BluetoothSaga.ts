import { put, call } from 'redux-saga/effects'
import BluetoothAction from 'App/Stores/Bluetooth/Actions'
import {bluetoothService} from 'App/Services/BluetoothService';

export function* connect(){
    const conn = yield call(bluetoothService.connect);
    if(typeof conn === typeof Boolean ){
        yield put(BluetoothAction.connectSuccess(true))
    }
    else{
        yield put(BluetoothAction.connectFailure(conn))
    }
}