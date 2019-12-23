import { PermissionsAndroid } from 'react-native';
import { BleManager, Device } from "react-native-ble-plx";
import Base64 from 'App/Utils/base64';
import {Config} from 'App/Config'

const Bluetooth = new BleManager();
let connectedDevice = null as unknown as Device; // TODO FIX THIS ;-)

async function requestBluetoothPermission() {
    try{
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
            {
                title: 'The application needs this permission for proper operation',
                message: `The application does not use/process your location-related data`,
                buttonNeutral: 'Ask me later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            });
        if(granted === PermissionsAndroid.RESULTS.GRANTED)
            return true;
        else 
            return false;
    }
    catch(error){
        return error;
    }
}

async function connect(){
    try{
        const device = await Bluetooth.connectToDevice(Config.DEVICE_ID);
        await device.discoverAllServicesAndCharacteristics();
        
        connectedDevice = device;
        return device;
    }
    catch(error){
        return error;
    }
}

async function sendMessage(message:string){
   await connectedDevice.writeCharacteristicWithoutResponseForService(Config.SERVICE_UUID,Config.CHARACTERISTIC_UUID,Base64.base64EncodeUnicode(message) );
}


export const bluetoothService = {
    requestBluetoothPermission,
    connect,
    sendMessage,
}