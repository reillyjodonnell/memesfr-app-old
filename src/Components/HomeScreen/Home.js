import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import colors from '../../theme';
import Meme1 from '../../../Assets/Memes/Meme1.mp4';
import Meme2 from '../../../Assets/Memes/Meme2.mp4';
import Meme3 from '../../../Assets/Memes/Meme3.jpg';
import Meme4 from '../../../Assets/Memes/Meme4.mp4';
import Video from 'react-native-video';
import Castle from '../../../Assets/Castle.svg';

export default function Home({ navigation }) {
  const videoArray = [
    { title: 'Meme1', url: Meme1, type: 'video' },
    { title: 'Meme2', url: Meme2, type: 'video' },
    { title: 'Meme3', url: Meme3, type: 'image' },
    { title: 'Meme4', url: Meme4, type: 'video' },
  ];


  const CardSideBar = () => {
    return (
      <View style={{position: 'absolute', right: 0, bottom: 0, height: '100%', backgroundColor: 'red'}}>

      </View>
    )
  }

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        padding: 20,
        backgroundColor: colors.bg,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
      }}
    >
      <View
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          top: 0,
          flex: 1,
          width: '100%',
          marginTop: 40,
        }}
      >
        <Castle />
        {/* <Text style={{ fontSize: 30, fontWeight: '700', color: 'white' }}>
          Memesfr
        </Text> */}
      </View>

      {/* {videoArray.map((item) => {
        item.type === 'video' ? (
          <Video source={item.url} />
        ) : (
          <Image
            style={{
              flex: 1,
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
            source={item.url}
          />
        );
      })} */}

      <Image
        style={{
          flex: 1,
          width: '100%',
          // height: '100%',
          resizeMode: 'contain',
          flex: 1,
        }}
        source={videoArray[2].url}
      />
    </View>
  );
}
