
import {StyleProp, ViewStyle,GestureResponderEvent} from 'react-native'

interface GestureResponderEventWithItem extends GestureResponderEvent{
    value: string | object
}

export interface ScriptListItemProps{
    title: string,
    style?: StyleProp<ViewStyle>,
    item?:object,
    isRun?: boolean,
    enabled?: boolean,
    onDelete?: (e:GestureResponderEventWithItem) => void,
    onEdit?: (e:GestureResponderEventWithItem) => void,
    onRun?: (e:GestureResponderEvent) => void,
}
