import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Files} from '../../Config/Files';
import * as Animatable from 'react-native-animatable';
import {navigate} from '../../navigation/RootNavigation';

const WalkThrough = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const WalkThroughData = [
    {
      key: 'one',
      image: Files.images.intro1,
      title: 'First slide',
      text: 'First slide',
    },
    {
      key: 'two',
      image: Files?.images?.intro2,
      title: 'Second slide',
      text: 'Second slide',
    },
    {
      key: 'three',
      image: Files?.images?.intro3,
      title: 'Third slide',
      text: 'Third slide',
    },
  ];

  const onScrollEnd = e => {
    const index = Math.min(
      Math.max(
        Math.floor(
          e.nativeEvent.contentOffset.x / Dimensions.get('window').width + 0.5,
        ),
        0,
      ),
    );

    setCurrentIndex(index);
  };

  return (
    <>
      <FlatList
        style={{flex: 1}}
        ref={flatListRef}
        data={WalkThroughData}
        pagingEnabled
        renderItem={(item, index) => {
          const isTrue = item.index === currentIndex;
          return (
            <Animatable.View
              animation={isTrue ? 'fadeIn' : 'fadeOut'}
              duration={1000}
              style={{
                width: Dimensions.get('screen').width,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              key={item.key}>
              <Animatable.Image
                animation={isTrue ? 'slideInDown' : null}
                duration={500}
                easing="ease-out"
                source={item.item.image}
                resizeMode="contain"
                style={{
                  width: Dimensions.get('screen').width,
                  height: Dimensions.get('screen').height / 2.5,
                  resizeMode: 'contain',
                }}
              />
              <Animatable.Text
                animation={isTrue ? 'slideInUp' : null}
                duration={500}
                delay={100}
                easing="ease-out">
                {isTrue ? item.item.text : ''}
              </Animatable.Text>
            </Animatable.View>
          );
        }}
        keyExtractor={item => item.key}
        scrollsToTop={false}
        horizontal
        scrollEnabled
        initialScrollIndex={currentIndex}
        onEndReachedThreshold={0.5}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        {currentIndex == 2 ? (
          <TouchableOpacity
            style={{
              backgroundColor: 'pink',
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: Dimensions.get('screen').width / 2,
            }}>
            <Text>Get started</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              const temp = currentIndex + 1;
              flatListRef?.current?.scrollToIndex({
                animated: true,
                index: temp,
              });
              setCurrentIndex(Number(temp));
            }}
            style={{
              backgroundColor: 'pink',
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
              width: Dimensions.get('screen').width / 2,
            }}>
            <Text>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default WalkThrough;
