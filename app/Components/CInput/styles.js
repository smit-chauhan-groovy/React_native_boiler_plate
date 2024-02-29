import {StyleSheet} from 'react-native';
import BaseColor from '../../config/colors';
import {FORTAB, isTab} from '../../config/MQ';
import {FontFamily} from '../../config/typography';

const styles = StyleSheet.create({
  mainInputContainer: {
    backgroundColor: BaseColor.whiteColor,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
  },
  input: {
    padding: 0,
    color: BaseColor.textColor,
    // overflow: 'hidden',
  },

  eyeIcon: {
    fontSize: 20,
    color: BaseColor.primary,
  },

  // Search Input Styles
  searchInput: {
    padding: 0,
    marginLeft: 8,
    marginBottom: 4,
  },
  searchBarContainer: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BaseColor.primary,
    borderRadius: 3,
    paddingHorizontal: 15,
  },

  //  Phone Input Styles
  phoneCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingRight: 5,
    marginRight: 10,
    borderRightWidth: 1,
    borderRightColor: BaseColor.primary,
    justifyContent: 'space-around',
  },
  phoneMainContainer: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  phoneContainerStyle: {
    marginLeft: 15,
    paddingVertical: 8,
    borderRadius: 5,
    height: '100%',
    backgroundColor: BaseColor.whiteColor,
  },
  phoneTextContainerStyle: {
    backgroundColor: BaseColor.whiteColor,
    borderLeftColor: BaseColor.disablePrimary,
    borderLeftWidth: 1,
  },
  phoneTextInputStyle: {
    height: 40,
    width: '100%',
    // color: BaseColor.blackColor,
    backgroundColor: BaseColor.whiteColor,
    // placeholder: BaseColor.textColor,
  },

  // Eye Icon Styles
  eyeIconContainer: {
    width: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorMsgText: {
    textAlign: 'left',
    top: -8,
    marginEnd: 24,
    marginBottom: 4,
    letterSpacing: 1,
  },
});

export default styles;
