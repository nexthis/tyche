
export interface BluetoothState {
    granted: boolean | string,
    connect: boolean | string,
}

export const BLUETOOTH_INITIAL_STATE: BluetoothState = {
    granted: false,
    connect: false,
}