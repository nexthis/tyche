import {BluetoothState,BLUETOOTH_INITIAL_STATE} from './InitialState'
import { createReducer } from 'reduxsauce'
import {BluetoothTypes} from './Actions'

export const grantedSuccess = (state:BluetoothState,payload: any) => ({
    ...state,
    granted: payload.value,
})

export const grantedFailure = (state:BluetoothState,payload: any) => ({
    ...state,
    granted: false,
    grantedErrorMessage: payload.errorMessage,
})

export const connectSuccess = (state:BluetoothState,payload: any) => ({
    ...state,
    connect: payload.value,
})

export const connectFailure = (state:BluetoothState,payload: any) => ({
    ...state,
    connect: false,
    connectErrorMessage: payload.errorMessage,
})

export const reducer = createReducer(BLUETOOTH_INITIAL_STATE,{
    [BluetoothTypes.GRANTED_SUCCESS]: grantedSuccess,
    [BluetoothTypes.GRANTED_FAILURE]: grantedFailure,

    [BluetoothTypes.CONNECT_SUCCESS]: connectSuccess,
    [BluetoothTypes.CONNECT_FAILURE]: connectFailure,

})