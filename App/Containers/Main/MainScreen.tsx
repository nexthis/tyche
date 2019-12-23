import React, { FunctionComponent } from 'react'
import { Platform, Text, View, FlatList, ActivityIndicator, ScrollView } from 'react-native'
import Style from './MainScreenStyle'
import Header from 'App/Assets/Images/header-background.svg';
import {Colors,Metrics,Helpers} from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import HeaderButton from 'App/Components/ConnectionButton/ConnectionButton';
import ListItem from 'App/Components/ScriptList/ScriptListItem';
import Icon from 'react-native-vector-icons/MaterialIcons';

// redux
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ScriptActions, { ScriptTypes } from 'App/Stores/Script/Actions'
import {ScriptState} from 'App/Stores/Script/InitialState'
import { AppState } from 'App/Stores'
// *****



/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

interface MainScreenBaseProps extends ScriptState {
  addScript: typeof ScriptActions.allScript;
  removeScript: typeof ScriptActions.allScript;
  connect: string | boolean
}

const MainScreenBase: FunctionComponent<MainScreenBaseProps> = ({scripts,removeScript,connect}) => {

  
  return (
    <View style={Style.container}>

      <ScrollView  contentContainerStyle={{ flexGrow: 1}} >
        <View style={Style.header} >
          <Header style={Style.headerBackground} />

          <HeaderButton color={ connect? Colors.success : Colors.error} text="Połączono" wave >
            <Icon name="bluetooth-audio" size={50} color={Colors.white} />
          </HeaderButton>
          <HeaderButton color={Colors.error} text="Tyche" >
            <Icon name="devices" size={50} color={Colors.white} />
          </HeaderButton>

        </View>
        <View style={Style.content}>
          <View style={Helpers.fillRow}>
            <Text  style={Style.title}>Scripts</Text> 
            <Icon.Button suppressHighlighting borderRadius={100} name="add" size={30} onPress={()=>NavigationService.navigate('ScriptScreen')} />
          </View>

          <View>
            {scripts.map((item,index)=>
              <ListItem style={{marginTop:10}} item={item} onDelete={(e)=>removeScript(e.value)} key={index} title={item.title}/>
            )}
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

const mapStateToProps = (state: AppState): any =>({
  scripts: state.script.scripts,
  connect: state.bluetooth.connect,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeScript: (script:object) => dispatch(ScriptActions.removeScript(script))
})

export default connect(mapStateToProps,mapDispatchToProps)  (MainScreenBase)
