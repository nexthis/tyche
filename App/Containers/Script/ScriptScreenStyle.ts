import {StyleSheet} from 'react-native'
import {Colors, ApplicationStyles} from 'App/Theme'

export default StyleSheet.create({
    container:{
        ...ApplicationStyles.screen.container,
    },
    content:{
        ...ApplicationStyles.screen.content,
        flex: 1,
        
    },
    textarea:{
        flexGrow: 1,
        textAlignVertical: 'top',
    },
    actionContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    button:{
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        backgroundColor: Colors.success,
    },
    iconStyle:{
        marginRight: 0,
        color: Colors.white,
    }
})