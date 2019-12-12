/**
 * This file contains metric values that are global to the application.
 */

// Examples of metrics you can define:
enum Margins{
  tiny = 5,
  small = 15,
}

export default {
  margins: Margins,
  bottomMargin: (margin: Margins):object => { return {marginBottom:margin} },
  verticalMargin: (margin: Margins):object => { return {verticalMargin:margin} },
  topMargin: (margin: Margins):object => { return {marginTop:margin} },
  rightMargin: (margin: Margins):object => { return {marginRight:margin} },
  // bottomMargin: {
  //   marginBottom: normal,
  // },
  // mediumBottomMargin: {
  //   marginBottom: medium,
  // },

  // tinyVerticalMargin: {
  //   marginVertical: tiny,
  // },
  // smallVerticalMargin: {
  //   marginVertical: small,
  // },
  // verticalMargin: {
  //   marginVertical: normal,
  // },
  // mediumVerticalMargin: {
  //   marginVertical: medium,
  // },

  // tinyHorizontalMargin: {
  //   marginHorizontal: tiny,
  // },
  // smallHorizontalMargin: {
  //   marginHorizontal: small,
  // },
  // horizontalMargin: {
  //   marginHorizontal: normal,
  // },
  // mediumHorizontalMargin: {
  //   marginHorizontal: medium,
  // },

  // tinyHorizontalPadding: {
  //   paddingHorizontal: tiny,
  // },
  // smallHorizontalPadding: {
  //   paddingHorizontal: small,
  // },
  // horizontalPadding: {
  //   paddingHorizontal: normal,
  // },
  // mediumHorizontalPadding: {
  //   paddingHorizontal: medium,
  // },

  // tinyVerticalPadding: {
  //   paddingVertical: tiny,
  // },
  // smallVerticalPadding: {
  //   paddingVertical: small,
  // },
  // verticalPadding: {
  //   paddingVertical: normal,
  // },
  // mediumVerticalPadding: {
  //   paddingVertical: medium,
  // },
}
