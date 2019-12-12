import { StyleSheet } from 'react-native';
import {Fonts,Colors} from 'App/Theme'


export default StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        borderRadius: 100,
        overflow: 'hidden',
    },
    text:{
        ...Fonts.style.subtitle1,
        paddingVertical: 14,
        paddingHorizontal: 15,
    },
    run:{
        width: 50,
        height: '100%',
        //backgroundColor: Colors.success,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
    },
    editWrapper:{
        width: 50,
        height: '100%',
    },
    edit:{
        width: '100%',
        flex: 1,
        backgroundColor: Colors.accent,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,

    },
    context:{
        display: "flex",
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.primary,
        borderRadius: 100,
    },
    leftContainer:{
        width: '100%',
        height: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 100,
        textAlign: 'center',
        alignItems: 'center',
    },
    rightContainer:{
        flexDirection: 'row'
    },
    rightIconEdit:{
        borderTopLeftRadius: 0,
        borderBottomEndRadius:0,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        justifyContent: 'center',
        height: '100%',
        paddingHorizontal: 15,
    },
    rightIconDelete:{
        justifyContent: 'center',
        height: '100%',
        paddingHorizontal: 15,
        //marginRight
    },
})