import React, { FunctionComponent, useEffect } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { SafeAreaView,Text } from 'react-native'
import styles from './RootScreenStyle'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import StartupActions from 'App/Stores/Startup/Actions'
import { AppState } from 'App/Stores'

interface RootScreenBaseProps {
  startup?: typeof StartupActions.startup;
}
const RootScreenBase: FunctionComponent<RootScreenBaseProps> = ({ startup }) => {
  useEffect(() => {
    if (startup) {
      startup()
    }
  }, [startup])

  return (
    <SafeAreaView style={styles.container}>
      <AppNavigator
        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </SafeAreaView>
  )
}

const mapStateToProps = (state: AppState): any => ({})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootScreenBase)
