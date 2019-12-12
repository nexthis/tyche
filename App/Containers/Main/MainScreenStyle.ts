import { StyleSheet, ColorPropType } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'


export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
  },

  headerBackground:{
    height: "100%",
    width: '100%',
    position: 'absolute',
  },
  header:{
    // height: "40%",
    // minHeight: 250,
    // maxHeight:300,
    height: 280,
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: 20,
  },
  title:{
    ...Fonts.style.h1,
    color: Colors.white
    
  },
  content:{
    ...ApplicationStyles.screen.content,
  }
})
