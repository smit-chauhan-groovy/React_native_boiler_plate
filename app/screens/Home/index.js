import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import CHeader from '../../Components/CHeader';
import ManageWallpaper, {TYPE} from 'react-native-manage-wallpaper';
import BaseColor from '../../Config/colors';
import CCard from '../../Components/CCard';

const Home = ({navigation}) => {
  // const callback = res => {
  //   console.log('res======>>>>>', res);
  // };

  // const setWallpaper = () => {
  //   ManageWallpaper.setWallpaper(
  //     {
  //       uri: 'https://i.pinimg.com/236x/bd/35/ca/bd35caa1d66da3a15ed952b4ac1010f7.jpg',
  //     },
  //     callback,
  //     TYPE.HOME,
  //   );
  // };

  const cardData = [
    {
      id: 1,
      name: 'title1',
      url: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
    },
    {
      id: 2,
      name: 'title2',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7meA5D2zTuj9AECjEQR6lv9C0PTa5BU4k4IkxNxOFg&s',
    },
    {
      id: 3,
      name: 'title3',
      url: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
    },
    {
      id: 4,
      name: 'title4',
      url: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
    },
    {
      id: 5,
      name: 'title5',
      url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
    },
    {
      id: 6,
      name: 'title6',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7meA5D2zTuj9AECjEQR6lv9C0PTa5BU4k4IkxNxOFg&s',
    },
    {
      id: 7,
      name: 'title7',
      url: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
    },
    {
      id: 8,
      name: 'title5',
      url: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
    },
    {
      id: 9,
      name: 'title6',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7meA5D2zTuj9AECjEQR6lv9C0PTa5BU4k4IkxNxOFg&s',
    },
    {
      id: 10,
      name: 'title7',
      url: 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg',
    },
  ];

  return (
    <View style={styles.root}>
      <CHeader
        onDrawerPress={() => {
          navigation.openDrawer();
        }}
      />
      {/* <Image
        style={{height: Dimensions.get('screen').height * 0.7}}
        source={{
          uri: 'https://i.pinimg.com/236x/bd/35/ca/bd35caa1d66da3a15ed952b4ac1010f7.jpg',
        }}
      />
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
        <TouchableOpacity
          onPress={setWallpaper}
          activeOpacity={0.7}
          style={{
            backgroundColor: BaseColor.primary,
            height: 30,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: BaseColor.white, fontSize: 20}}>
            Set as wallpaper
          </Text>
        </TouchableOpacity>
      </View> */}
      <FlatList
        data={cardData}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        renderItem={({item, index}) => (
          <View style={{width: '50%'}}>
            <CCard
              image={item?.url}
              title={item?.name}
              style={{marginLeft: item?.id % 2 == 0 ? 10 : 0}}
            />
          </View>
        )}
        scrollEnabled
        decelerationRate={'normal'}
        maxToRenderPerBatch={20}
        windowSize={5}
        scrollEventThrottle={16}
        keyExtractor={item => item?.id}
        numColumns={2}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default Home;
