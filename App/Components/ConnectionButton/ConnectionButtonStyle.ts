import { StyleSheet } from 'react-native'
import {Colors} from 'App/Theme'

// import Fonts from 'App/Theme/Fonts'
// import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    button: {
        borderRadius: 100,
        width: '70%',
        height: '70%',
        backgroundColor: Colors.success,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: Colors.white

    },
    wave: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.transparent,
        borderColor: Colors.success,
        borderWidth: 2,
        borderRadius: 100,
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    text:{
        color: Colors.white,
        fontFamily: 'Nunito-Bold'
    }
})
