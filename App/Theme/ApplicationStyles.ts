/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import Colors from './Colors'
export default {
  screen: {
    container: {
      flex: 1,
      backgroundColor:  Colors.black,
    },
    content:{
      paddingHorizontal: 20,
      marginTop: 35,
      marginBottom: 25,
    },
  },
  inputs:{
    standard:{
      backgroundColor: Colors.primary,
      color: Colors.white,
      borderRadius: 10,
      paddingHorizontal: 15,
    }
  }
}
