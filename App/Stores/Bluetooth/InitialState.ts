
export interface BluetoothState {
    granted: boolean,
    connect:  boolean,
    connectErrorMessage?: string,
    grantedErrorMessage?: string,
}

export const BLUETOOTH_INITIAL_STATE: BluetoothState = {
    granted: false,
    connect: false,

}