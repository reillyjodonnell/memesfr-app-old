import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Castle from '../../../Assets/Castle.svg';

export const Branding = () => {
  return (
    <View style={styles.logoContainer}>
      <Castle height={60} width={60} />
      <Text
        style={{
          color: 'white',
          paddingLeft: 10,
          fontSize: 45,
          fontWeight: 'bold',
        }}>
        Memesfr
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  logoContainer: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexGrow: 1,
  },
});
