import React, {useEffect, useRef, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated as RNAnimated,
  Dimensions,
  Image,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './styles';
import CHeader from '../../Components/CHeader';
import {Controller, useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import BaseColor from '../../Config/colors';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import RBSheet from 'react-native-raw-bottom-sheet';
import {FlatList} from 'react-native-reanimated/lib/typescript/Animated';

const About = ({navigation}) => {
  const rnbRef = useRef();

  const OS = Platform.constants;

  const testingSchema = () => {
    return yup.object().shape({
      name: yup
        .string()
        .required('name is required')
        .min(3, 'name must be at least 3 characters')
        .max(25, 'name must not exceed 25 characters'),
    });
  };

  const submitForm = data => {
    console.log('data======>>>>>', data);
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    getValues,
    reset,
    clearErrors,
    setFocus,
    register,
    trigger,
  } = useForm({
    resolver: yupResolver(testingSchema()),
  });

  const [translateValue, setTranslateValue] = useState(new RNAnimated.Value(0));
  const [index, setIndex] = useState(0);
  const [buttonClick, setButtonClick] = useState(false);

  const isFocused = useIsFocused();

  const tabWidths = Dimensions.get('screen').width;
  const tabWidth = isTab ? tabWidths / 3 : tabWidths / 2.4;

  const {width} = Dimensions.get('screen');

  const isTab = width <= 2736 && width >= 600;

  const setSpring = index => {
    setIndex(index);
    RNAnimated.spring(translateValue, {
      toValue: index * tabWidth,
      velocity: 10,
      useNativeDriver: true,
    }).start();
  };

  const offset = useSharedValue(100);
  const scaleValue = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        scale: scaleValue.value,
      },
    ],
  }));

  // useEffect(() => {
  //   if (isFocused) {
  //     scaleValue.value = withSequence(
  //       withTiming(scaleValue.value * 100, {duration: 2000}),
  //       withTiming(scaleValue.value * 1, {duration: 2000}),
  //     );
  //   }
  // }, []);

  const [data, setData] = useState([
    {
      id: 1,
      title: 'Title 1',
    },
    {
      id: 2,
      title: 'Title 2',
    },
    {
      id: 3,
      title: 'Title 3',
    },
    {
      id: 4,
      title: 'Title 4',
    },
    {
      id: 5,
      title: 'Title 5',
    },
  ]);

  return (
    <View style={styles.root}>
      <CHeader
        onDrawerPress={() => {
          navigation.openDrawer();
        }}
      />
      {/* <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          name="name"
          render={({field: {onChange, value}}) => {
            return (
              <>
                <TextInput
                  value={value}
                  style={{borderWidth: 1, width: '100%', borderRadius: 10}}
                  placeholder="name"
                  onChangeText={onChange}
                />
                {errors?.name?.message && <Text>{errors?.name?.message}</Text>}
              </>
            );
          }}
        />

        <TouchableOpacity onPress={handleSubmit(submitForm)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View> */}
      {/* <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => setSpring(0)}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>All post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSpring(1)}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSpring(2)}
          style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text>Sell</Text>
        </TouchableOpacity>
      </View>
      <RNAnimated.View
        style={[
          {
            height: 2,
            width: 50,
            backgroundColor: BaseColor.primary,
            transform: [{translateX: translateValue}],
            marginLeft: index == 1 ? 10 : index == 3 ? 10 : 0,
          },
        ]}></RNAnimated.View>
      <Animated.View
        style={[
          {
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
            width: 100,
            backgroundColor: 'orange',
          },
          animatedStyle,
        ]}></Animated.View> */}
      {/* <View style={{alignItems: 'center', justifyContent: 'center', flex: 0.5}}>
        <Animated.View
          style={[
            {
              height: 120,
              width: 120,
              backgroundColor: '#b58df1',
              borderRadius: 60,
            },
            animatedStyles,
          ]}></Animated.View>
      </View> */}
      {/* <TouchableOpacity
        style={{
          backgroundColor: 'black',
          width: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => rnbRef.current.open()}>
        <Text style={{color: 'white'}}>Open</Text>
      </TouchableOpacity> */}
      {/* <Animated.ScrollView>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
          }}
          style={{
            width: Dimensions.get('screen').width * 0.95,
            height: Dimensions.get('screen').height / 2,
          }}
        />
      </Animated.ScrollView> */}

      <RBSheet ref={rnbRef} animationType="fade"></RBSheet>
      {/* <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.map(item => (
          <TouchableOpacity
            onPress={() => {
              if (!item.isSelected) {
                item.isSelected = true;
              } else {
                item.isSelected = false;
              }
              setData([...data]);
            }}
            style={{
              width: 100,
              borderWidth: 1,
              borderColor: 'blue',
              margin: 5,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              backgroundColor: item.isSelected ? 'blue' : 'white',
            }}>
            <Text style={{color: item.isSelected ? 'white' : 'black'}}>
              {item?.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View> */}
    </View>
  );
};

export default About;
