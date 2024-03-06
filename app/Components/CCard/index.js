import React from 'react';
import styles from './styles';
import {Image, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const CCard = props => {
  const {image = '', title = '', style} = props;

  return (
    <View style={[style, styles.root]}>
      <View style={styles.imageView}>
        <FastImage
          source={{uri: `${image}`}}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

export default CCard;
