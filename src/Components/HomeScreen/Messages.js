import React from 'react';
import { Text, View } from 'react-native';
import colors from '../../theme';

export default function Home({ navigation }) {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        padding: 10,
        backgroundColor: colors.bg,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: colors.textPrimary,
          fontSize: 30,
          backgroundColor: 'red',
        }}
      >
        Messages
      </Text>
    </View>
  );
}
