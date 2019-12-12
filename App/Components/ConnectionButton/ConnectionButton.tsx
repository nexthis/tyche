import React, { useEffect, useState, StatelessComponent } from 'react'
import { View, Text, Animated, ColorPropType } from 'react-native'


import Style from './ConnectionButtonStyle'

interface ConnectionButtonBaseProps {
    size?: number | string
    wave?: boolean
    color: string
    text: string
}

const ConnectionButton: StatelessComponent<ConnectionButtonBaseProps> = ({ size, color, children, text, wave }) => {

    return (
        <View style={[Style.container, { height: size, width: size }]}  >

            {wave ?
                <>
                    <Wave color={color} />
                    <Wave color={color} delay={1000} />
                    <Wave color={color} delay={2000} />
                </>
                : null}

            <View style={[Style.button, { backgroundColor: color }]}>
                {children}
                <Text style={Style.text}>{text}</Text>
            </View>
        </View>
    )
}

const Wave = ({ delay = 0, color = "" }) => {

    const [waveAnim] = useState(new Animated.Value(1));

    useEffect(() => {
        Animated.loop(Animated.timing(waveAnim, {
            toValue: 0,
            duration: 3000,
            delay: delay
        })).start();
    }, [])

    const waveStyleAnim = {
        opacity: waveAnim,
        transform: [{ scale: (waveAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 0.74] })) }],
        borderColor: color,
    }
    return <Animated.View style={[Style.wave, waveStyleAnim]} />;
}

ConnectionButton.defaultProps = {
    size: 200
}



export default ConnectionButton;