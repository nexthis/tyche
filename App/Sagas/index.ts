import { takeLatest, all } from 'redux-saga/effects'
import { ExampleTypes } from 'App/Stores/Example/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import {BluetoothTypes} from 'App/Stores/Bluetooth/Actions'
import { fetchUser } from './ExampleSaga'
import { startup } from './StartupSaga'
import { connect } from './BluetoothSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(ExampleTypes.FETCH_USER, fetchUser),
    
    takeLatest(BluetoothTypes.CONNECT, connect),
  ])
}
