import { ActionCreators, createActions } from 'reduxsauce';

export enum BluetoothTypes {
    GRANTED = "GRANTED",
    GRANTED_SUCCESS = "GRANTED_SUCCESS",
    GRANTED_FAILURE = "GRANTED_FAILURE",
    CONNECT = "CONNECT",
    CONNECT_SUCCESS = "CONNECT_SUCCESS",
    CONNECT_FAILURE = "CONNECT_FAILURE",
    SEND_MESSAGE = "SEND_MESSAGE",
}

interface C extends ActionCreators {
    granted: () => {type: BluetoothTypes.GRANTED};
    grantedSuccess: (value:boolean) => {type: BluetoothTypes.GRANTED_SUCCESS};
    grantedFailure: (error:string) => {type: BluetoothTypes.GRANTED_FAILURE};

    connect: () => {type: BluetoothTypes.CONNECT};
    connectSuccess: (value:boolean) => {type: BluetoothTypes.CONNECT_SUCCESS};
    connectFailure: (error:string) => {type: BluetoothTypes.CONNECT_FAILURE};

    sendMessage: (message:string) => {type: BluetoothTypes.SEND_MESSAGE};
}

const CreatedActions = createActions( {
    granted: null,
    grantedSuccess: ['value'],
    grantedFailure: ['errorMessage'],

    connect: null,
    connectSuccess: ['value'],
    connectFailure: ['errorMessage'],
    
    sendMessage: ['message']
});


export default CreatedActions.Creators as C