import React, {useState,FunctionComponent} from 'react'
import Style from './ScriptScreenStyle'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View,Text,TextInput} from 'react-native'
import {Fonts,ApplicationStyles,Metrics,Colors} from 'App/Theme'
import NavigationService from 'App/Services/NavigationService';

//redux
import {connect} from 'react-redux'
import { Dispatch } from 'redux'
import {AppState} from 'App/Stores'
import {ScriptState} from 'App/Stores/Script/InitialState'
import ScriptActions, { ScriptTypes } from 'App/Stores/Script/Actions'

// ****

interface ScriptScreenProps {
    addScript (scripts: {title:string,code:string}) : void
}

const ScriptScreen: FunctionComponent<ScriptScreenProps> = ({addScript}) =>{
    const [title,setTitle] = useState('');
    const [code,setCode] = useState('');
    const onExit = () =>{
      NavigationService.back();
    }

    const onFinish = () =>{
        addScript({title,code});
        onExit();
    }

    const margin = Metrics.topMargin(Metrics.margins.small);
    return(
        <View style={Style.container}>
            <View style={Style.content}>
                <Text style={Fonts.style.h1}>Script</Text>

                <TextInput placeholder="Title" placeholderTextColor={Colors.white+"99"}
                    onChangeText={(e)=>setTitle(e)} style={[ApplicationStyles.inputs.standard,Fonts.style.h3,margin]}/>

                <TextInput placeholder="Write your amazing code" placeholderTextColor={Colors.white+"99"}
                    multiline onChangeText={(e)=>setCode(e)}  style={[ApplicationStyles.inputs.standard,Style.textarea,margin]} />

                <View style={[Style.actionContainer,margin]}>

                    <View style={Style.button}>
                        <Icon.Button borderRadius={100} size={25} onPress={onExit}
                           style={{...Style.button,backgroundColor:Colors.error}}  name="exit-to-app" 
                           iconStyle={Style.iconStyle} />
                    </View>
                        <Icon.Button borderRadius={100} size={25} onPress={onFinish}
                            iconStyle={Style.iconStyle} style={Style.button} name="check"/>

                </View>

            </View>
        </View>
    )
}
const mapStatetoProps = (state: AppState) =>({

})

const mapDispatchToProps = (dispatch: Dispatch) =>({
    addScript: (script:object) => dispatch(ScriptActions.addScript(script))
})

export default connect(mapStatetoProps,mapDispatchToProps) (ScriptScreen);