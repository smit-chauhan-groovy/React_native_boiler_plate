/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/jsx-props-no-spreading */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Keyboard,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FontFamily, Typography} from '../../config/typography';
import BaseColor from '../../Config/colors';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
// import CountryPicker from 'react-native-country-picker-modal';
import Files from '../../Config/colors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {translate} from '../../lang/Translate';
import {BlurView} from '@react-native-community/blur';

// Remove font scale
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const CInput = React.forwardRef((props, ref) => {
  const {
    mainContainerStyle = {},
    onSubmitEditing = () => {},
    placeholder = '',
    onChangeText = () => {},
    isLastInput = false,
    isLast = false,
    returnKeyType = '',
    secureTextEntry = false,
    editable = true,
    value = '',
    boolWidth = false,
    mainTxtStyle = {},
    keyboardType = 'visible-password',
    placeholderTextColor = BaseColor.placeHolderColor,
    startIcon = false,
    multiline = false,
    maxLength = multiline ? null : 50,
    inputStyle = {},
    numberOfLines = 1,
    autoCapitalize = 'sentences',
    errorMsg = '',
    iconName = '',
    iconSize = 20,
    inputContainerStyle = {},
    phoneInput = false,
    phoneCode = '+91',
    onCountrySelect = () => {},
    onFocus = () => {},
    onBlur = () => {},
    // Search
    searchBar = false,
    startIconStyle,
    eyeIcon = false,
    onEyePress = () => {},
    onPressIn = () => {},
    filterPress = () => {},
    filterIcon = false,
    phoneInputDisable = false,
    currencyCodeInput = false,
    currencyCode = {},
    onSelectCurrencyCode = () => {},
    currencyList = [],
    arrowIcon = false,
    onArrowPress = () => {},
    required = false,

    numberInput,
    numberInputTotalWidth = Dimensions.get('window').width - 60,
    textAlignVertical = 'top',
    editIcon = false,
    onEditPress = () => {},
    hide = false,
    ...rest
  } = props;

  const showError = !_.isEmpty(errorMsg);
  const [isCountryPickerOpen, setIsCountryPickerOpen] = useState(false);
  const [currencyModal, setCurrencyModal] = useState(false);
  const IOS = Platform.OS === 'ios';

  const [currencyArr, setCurrencyArr] = useState(currencyList);
  const [searchText, setSearchText] = useState('');

  const onSearch = val => {
    const value = val.toLowerCase();
    const optionList = val
      ? currencyList.filter(item => item?.code.toLowerCase().includes(value))
      : currencyList;
    setCurrencyArr([...optionList]);
  };

  const translateY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: translateY.value}],
  }));

  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardDidShow', () => {
      translateY.value = withSpring(-windowHeight / 5.5, {
        damping: 10,
        stiffness: 120,
      });
    });
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      translateY.value = withSpring(0, {damping: 10, stiffness: 120});
    });

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);

  return (
    <View style={mainContainerStyle}>
      {searchBar ? (
        <View style={[styles.searchBarContainer]}>
          <TouchableOpacity>
            <CustomIcon
              name="search_icon"
              color={BaseColor.primary}
              size={15}
            />
          </TouchableOpacity>
          <TextInput
            style={[
              Typography.placeholder,
              styles.searchInput,
              {width: arrowIcon ? '78%' : '86%'},
              inputStyle,
            ]}
            value={value}
            placeholderTextColor={BaseColor.textGray}
            onChangeText={onChangeText}
            placeholder={placeholder}
            onSubmitEditing={onSubmitEditing}
            onFocus={onFocus}
          />
          {arrowIcon && (
            <TouchableOpacity activeOpacity={0.8} onPress={onArrowPress}>
              <CustomIcon
                name={'Path-21125'}
                style={[
                  {
                    fontSize: 20,
                    color: BaseColor.primary,
                    marginRight: 5,
                  },
                  startIconStyle,
                ]}
              />
            </TouchableOpacity>
          )}
          {filterIcon && (
            <View
              style={{
                borderLeftWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
              }}>
              <CustomIcon
                name={'Filter-2'}
                size={20}
                color={BaseColor.primary}
                style={[
                  startIconStyle,
                  {borderColor: BaseColor.disablePrimary},
                ]}
                onPress={() => filterPress()}
              />
            </View>
          )}
        </View>
      ) : (
        <View
          style={[
            styles.mainInputContainer,
            {
              opacity: editable ? 1 : 0.7,
              height: multiline ? null : 45,
              marginBottom: isLast && !showError ? 0 : 10,
              borderColor: showError
                ? BaseColor.red
                : !editable
                ? BaseColor.textGray
                : BaseColor.primary,
            },
            inputContainerStyle,
          ]}>
          {!_.isEmpty(iconName) && (
            <View style={{width: '10%', marginRight: 2, position: 'relative'}}>
              <CustomIcon
                name={iconName}
                size={iconSize}
                color={showError ? BaseColor.errorRed : BaseColor.primary}
                style={[startIconStyle]}
              />
              {required && (
                <Text
                  style={{
                    color: BaseColor.red,
                    position: 'absolute',
                    top: -10,
                    right: 4,
                    fontSize: 18,
                  }}>
                  *
                </Text>
              )}
            </View>
          )}
          {phoneInput ? (
            <TouchableOpacity
              disabled={phoneInputDisable}
              onPress={() => {
                setIsCountryPickerOpen(true);
              }}
              style={[
                styles.phoneCodeContainer,
                {
                  width: phoneCode.length > 5 ? '25%' : '20%',
                },
              ]}>
              <Text
                numberOfLines={1}
                style={[
                  Typography.placeholder,
                  {
                    fontFamily: FontFamily.medium,
                    width: phoneCode.length > 5 ? 60 : null,
                  },
                ]}>
                {phoneCode}
              </Text>
              <CustomIcon
                name="Path-19272"
                style={{
                  marginLeft: 4,
                  fontSize: 12,
                  color: BaseColor.disablePrimary,
                }}
              />
            </TouchableOpacity>
          ) : currencyCodeInput ? (
            <TouchableOpacity
              disabled={!editable}
              onPress={() => {
                setCurrencyModal(true);
              }}
              style={[
                styles.phoneCodeContainer,
                {
                  width: phoneCode.length > 5 ? '25%' : '20%',
                },
              ]}>
              <Text
                numberOfLines={1}
                style={[
                  Typography.placeholder,
                  {
                    color: !_.isEmpty(currencyCode)
                      ? BaseColor.textColor
                      : BaseColor.textGray,
                    fontFamily: FontFamily.medium,
                    width: phoneCode.length > 5 ? 60 : null,
                  },
                ]}>
                {!_.isEmpty(currencyCode)
                  ? currencyCode?.currency_symbol
                  : 'Price'}
              </Text>
              <CustomIcon
                name="Path-19272"
                style={{
                  marginLeft: 4,
                  fontSize: 12,
                  color: BaseColor.disablePrimary,
                }}
              />
            </TouchableOpacity>
          ) : null}

          <View
            style={[
              {
                justifyContent: 'center',
                width:
                  (eyeIcon || editIcon) && !_.isEmpty(iconName)
                    ? phoneInput
                      ? '60%'
                      : '82%'
                    : !_.isEmpty(iconName) || eyeIcon || editIcon
                    ? '90%'
                    : '100%',
              },
            ]}>
            {hide && !IOS && (
              <BlurView
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  zIndex: 10,
                  backgroundColor: BaseColor.offWhite,
                }}
                blurType="extraDark"
                blurAmount={10}
                reducedTransparencyFallbackColor="white"
                overlayColor=""
              />
            )}

            <TextInput
              {...rest}
              ref={ref}
              selectionColor={BaseColor.black50}
              placeholder={placeholder}
              placeholderTextColor={BaseColor.textGray}
              numberOfLines={numberOfLines}
              style={[
                Typography.placeholder,
                styles.input,
                inputStyle,
                {
                  height: IOS && multiline ? 130 : null,
                  fontFamily: Files.regex.numberOnly.test(String(value))
                    ? FontFamily.medium
                    : FontFamily.medium,
                  marginTop: 3,
                  paddingBottom: IOS ? 7 : 0,
                },
              ]}
              onPressIn={onPressIn}
              onChangeText={onChangeText}
              blurOnSubmit={false}
              onBlur={onBlur}
              onSubmitEditing={onSubmitEditing}
              returnKeyType={returnKeyType || (isLastInput ? 'go' : 'next')}
              secureTextEntry={secureTextEntry}
              editable={editable}
              value={value}
              maxLength={maxLength}
              keyboardType={keyboardType}
              multiline={multiline}
              autoCapitalize={autoCapitalize}
              textAlignVertical={textAlignVertical}
            />
          </View>

          {eyeIcon ? (
            <View style={[styles.eyeIconContainer]}>
              <TouchableOpacity
                onPress={onEyePress}
                disabled={!editable}
                activeOpacity={0.7}>
                <FontAwesome
                  name={secureTextEntry ? 'eye-slash' : 'eye'}
                  style={[styles.eyeIcon]}
                />
              </TouchableOpacity>
            </View>
          ) : editIcon ? (
            <View style={[styles.eyeIconContainer]}>
              <TouchableOpacity onPress={onEditPress} activeOpacity={0.7}>
                <CustomIcon name={'edit'} style={[styles.eyeIcon]} />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      )}

      {showError && (
        // Font Size Font Family And Font Color Add in Typography
        <Text style={[Typography.errorMsgText, styles.errorMsgText]}>
          {errorMsg}
        </Text>
      )}

      {/* <CountryPicker
        withModal
        withFilter
        // disableNativeModal
        visible={isCountryPickerOpen}
        withCallingCode
        onClose={() => {
          setIsCountryPickerOpen(false);
        }}
        onSelect={val => {
          const phoneCode = `+${val.callingCode}`;
          const countryCode = val?.cca2;
          onCountrySelect(phoneCode, countryCode);
        }}
        // flatListProps={{
        //   fontFamily: FontFamily.default,
        // }}
        containerButtonStyle={{display: 'none'}}
      /> */}
      <CModal
        dropDownModal
        visible={currencyModal}
        onRequestClose={() => {
          setCurrencyModal(false);
        }}>
        <Animated.View
          style={[
            {
              alignSelf: 'center',
              backgroundColor: BaseColor.whiteColor,
              height: 5,
              marginBottom: 7,
              width: '15%',
              borderRadius: 5,
            },
            animatedStyle,
          ]}
        />
        <Animated.View
          style={[
            {
              flex: 3,
              backgroundColor: BaseColor.whiteColor,
              elevation: 5,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              paddingHorizontal: 15,
              paddingTop: 15,
            },
            animatedStyle,
          ]}>
          <Text
            style={{
              fontSize: 18,
              color: BaseColor.primary,
              fontFamily: FontFamily.semibold,
              textAlign: 'center',
              marginBottom: 10,
            }}>
            {translate('select_currency')}
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: BaseColor.primary,
              borderRadius: 5,
              marginTop: 5,
              height: 45,
              marginBottom: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 6,
            }}>
            <TextInput
              style={[
                Typography.dropDownListText,
                {
                  width: '84%',
                  padding: 0,
                },
              ]}
              value={searchText}
              placeholderTextColor={BaseColor.textGray}
              onChangeText={val => {
                onSearch(val);
                setSearchText(val);
              }}
              placeholder={translate('search_placeholder')}
              // onSubmitEditing={onSubmitEditing}
              // onFocus={onFocus}
            />
            <View
              style={{
                width: '16%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}>
              <TouchableOpacity
                disabled={_.isEmpty(searchText)}
                onPress={() => {
                  setSearchText('');
                  onSearch('');
                }}
                style={{
                  width: '50%',
                }}>
                {!_.isEmpty(searchText) && (
                  <CustomIcon
                    name="Group-42671"
                    size={16}
                    color={BaseColor.errorRed}
                  />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                }}>
                <CustomIcon
                  name="search_icon"
                  size={19}
                  color={BaseColor.primary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={currencyArr}
            nestedScrollEnabled
            scrollEnabled
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            decelerationRate={'normal'}
            keyExtractor={item => item?.id}
            renderItem={({item, index}) => {
              const isLast = index == currencyArr.length - 1;
              const isSelected = item.id == currencyCode?.id;
              return (
                <TouchableOpacity
                  style={{
                    justifyContent: 'flex-start',
                    paddingVertical: 5,
                    borderBottomWidth: isLast ? 0 : 1,
                    borderBottomColor: BaseColor.disablePrimary,
                    marginBottom: isSelected ? 6 : 0,
                    paddingHorizontal: isSelected ? 0 : 5,
                  }}
                  onPress={() => {
                    onSelectCurrencyCode(item);
                    setCurrencyModal(false);
                  }}>
                  <View
                    style={{
                      borderRadius: 5,
                      marginTop: isSelected ? 5 : 0,
                      marginBottom: isSelected ? 5 : 0,
                      paddingVertical: isSelected ? 10 : 4,
                      paddingHorizontal: isSelected ? 6 : 0,
                      backgroundColor: isSelected ? BaseColor.primary : null,
                    }}>
                    <Text
                      style={[
                        Typography.dropDownListText,
                        {
                          lineHeight: 22,
                          textAlign: 'left',
                          color: isSelected
                            ? BaseColor.whiteColor
                            : BaseColor.textColor,
                          fontFamily: FontFamily.medium,
                        },
                      ]}>
                      {item?.currency_symbol} - {item?.code}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </Animated.View>
      </CModal>
    </View>
  );
});

CInput.propTypes = {
  mainContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onSubmitEditing: PropTypes.func,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  isLastInput: PropTypes.bool,
  onEditPress: PropTypes.func,
  returnKeyType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  editable: PropTypes.bool,
  value: PropTypes.string,
  boolWidth: PropTypes.bool,
  mainTxtStyle: PropTypes.object,
  keyboardType: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  maxLength: PropTypes.number,
  inputStyle: PropTypes.object,
  multiline: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  errorMsg: PropTypes.string,
  phoneInputDisable: PropTypes.bool,
};

CInput.defaultProps = {
  mainContainerStyle: {} || [],
  onSubmitEditing: () => {},
  placeholder: '',
  onChangeText: () => {},
  isLastInput: false,
  onEditPress: () => {},
  returnKeyType: '',
  secureTextEntry: false,
  editable: true,
  value: '',
  boolWidth: false,
  mainTxtStyle: {},
  keyboardType: '',
  placeholderTextColor: '',
  maxLength: 50,
  inputStyle: {},
  multiline: false,
  autoCapitalize: '',
  errorMsg: '',
  phoneInputDisable: false,
};

export default CInput;
