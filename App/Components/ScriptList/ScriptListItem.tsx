import React, { useState, StatelessComponent } from 'react'
import { View, Text, Animated } from 'react-native';
import Style from './ScriptListItemStyle'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import LinearGradient from 'react-native-linear-gradient';
import { Colors, Metrics } from 'App/Theme'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScriptListItemProps } from './Types'

const Left = () => {
    return (
        <View style={Style.leftContainer}>
            <Text style={Style.text}>50%</Text>
        </View>
    )
}
const Right = ({ onEdit, onDelete }: any) => {

    const clearMargin = Metrics.rightMargin(0);
    return (
        <View style={Style.rightContainer}>

            <Icon.Button borderRadius={0} backgroundColor={Colors.error}
                iconStyle={clearMargin} style={Style.rightIconDelete} name="delete"
                size={25} onPress={onDelete} />

            <Icon.Button borderRadius={0} backgroundColor={Colors.accent}
                iconStyle={clearMargin} style={Style.rightIconEdit} name="edit"
                size={25} onPress={onEdit} />

        </View>
    )
}


const ScriptListItem: StatelessComponent<ScriptListItemProps> = (props) => {
    const [anim] = useState(new Animated.Value(1))

    //TODO Change animation to scale or width
    const onOpen = () => {
        Animated.timing(
            anim, {
            toValue: 0,
            duration: 300,

        }).start();
    }
    const onClose = () => {
        Animated.timing(
            anim, {
            toValue: 1,
            duration: 500,
        }).start();
    }

    const FakeRight = () =>{
        return <Right onDelete={(e)=>{
            e.value = props.item || props.title;
            props.onDelete ? props.onDelete(e) : null
        }} onEdit={(e)=>{
            e.value = props.item || props.title;
            props.onEdit ? props.onEdit(e) : null
        }} />
    }

    return (

        <View style={[Style.container, props.style]}>
            {/* overshootRight={false} */}
            <Swipeable renderLeftActions={Left} renderRightActions={FakeRight} onSwipeableWillClose={onClose} onSwipeableRightWillOpen={onOpen} >
                <View style={Style.context}>

                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.success, Colors.success + '00']} style={Style.run} />

                    <Text style={Style.text}>{props.title}</Text>

                    <Animated.View style={[Style.editWrapper, { opacity: anim }]} >
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Colors.primary, Colors.primary + '00']} style={Style.edit} />
                    </Animated.View>

                </View>
            </Swipeable>
        </View>

    )
}

export default ScriptListItem