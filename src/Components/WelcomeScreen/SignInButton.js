import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import colors from '../../theme';

export const SignInButton = ({
  title,
  Icon,
  isSVG = true,
  overwriteTitle = false,
  navigatable = false,
  onPress,
}) => {
  return (
    <Pressable style={{ width: '100%', padding: 10 }} onPress={onPress}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
          backgroundColor: colors.textPrimary,
          width: '100%',
          textAlign: 'center',
          maxHeight: 55,
          flexDirection: 'row',
          borderRadius: 30,
          marginBottom: -5,
          position: 'relative',
        }}
      >
        {/* <Image style={{ height: 20, width: 20 }} source={Icon} /> */}
        {isSVG && (
          <Icon
            style={{ position: 'absolute', left: 0, marginLeft: 20 }}
            height={35}
            maxWidth={35}
            width={35}
          />
        )}

        <Text
          style={{
            color: colors.bg,
            fontSize: 17,
            fontWeight: '800',
            marginLeft: 25,
          }}
        >
          {!overwriteTitle && `Continue With ${title}`}
          {overwriteTitle && title}
        </Text>
      </View>
    </Pressable>
  );
};

export default SignInButton;
