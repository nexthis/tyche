
import Color from './Colors'

const size = {
  h1: 48,
  h2: 34,
  h3: 24,
  body1:16,
  body2:14,
  subtitle1:16,
  subtitle2:14,
  button: 14,
  caption: 12,
  overline: 12, 
}

const style = {
  h1: {
    fontSize: size.h1,
    fontFamily: 'Nunito-Regular',
    color: Color.white,
  },
  h2: {
    fontSize: size.h2,
    fontFamily: 'Nunito-Regular',
    color: Color.white,
  },
  h3: {
    fontSize: size.h3,
    fontFamily: 'Nunito-Regular',
    color: Color.white,
  },
  body1:{
    fontSize: size.body1,
    fontFamily: 'NunitoSans-Regular',
    color: Color.white,
  },
  body2:{
    fontSize: size.body2,
    fontFamily: 'NunitoSans-Regular',
    color: Color.white,
  },
  subtitle1:{
    fontSize: size.subtitle1,
    fontFamily: 'Nunito-Regular',
    color: Color.white,
  },
  subtitle2:{
    fontSize: size.subtitle2,
    fontFamily: 'Nunito-SemiBold',
    color: Color.white,
  },
  button:{
    fontSize: size.button,
    fontFamily: 'NunitoSans-SemiBold',
    color: Color.white,
  },
  caption:{
    fontSize: size.caption,
    fontFamily: 'NunitoSans-Regular',
    color: Color.white,
  },
  overline:{
    fontSize: size.overline,
    fontFamily: 'NunitoSans-SemiBold',
    color: Color.white,
  }

}

export default {
  size,
  style,
}
