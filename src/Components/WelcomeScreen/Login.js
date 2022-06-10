import React from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import { Branding } from './Branding';
import Google from '../../../Assets/google.svg';
import Twitter from '../../../Assets/twitter.svg';
import Facebook from '../../../Assets/Facebook.svg';
import Instagram from '../../../Assets/Instagram.svg';
import Apple from '../../../Assets/Apple.svg';

import SignInButton from './SignInButton';
import User from '../../../Assets/User.svg';
import colors from '../../theme';

export default function WelcomeScreen({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: colors.bg,
        flex: 1,
        padding: 20,
        display: 'flex',
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontWeight: '700',
            fontSize: 36,
            width: '100%',
            textAlign: 'center',
            marginTop: 40,
            marginBottom: 70,
          }}
        >
          Login
        </Text>
        <View
          style={{ display: 'flex', flex: 1, marginTop: 20, width: '100%' }}
        >
          <SignInButton
            onPress={() => navigation.navigate('Login Action')}
            Icon={User}
            overwriteTitle={true}
            title="Use phone/ email/ username"
          />

          <SignInButton
            onPress={() => window.alert('Google')}
            Icon={Google}
            title="Google"
          />
          <SignInButton
            onPress={() => window.alert('Twitter')}
            Icon={Twitter}
            title="Twitter"
          />
          <SignInButton
            onPress={() => window.alert('Facebook')}
            Icon={Facebook}
            title="Facebook"
          />
          <SignInButton
            onPress={() => window.alert('Apple')}
            Icon={Apple}
            title="Apple"
          />
          <SignInButton
            onPress={() => window.alert('IG')}
            Icon={Instagram}
            title="Instagram"
          />
        </View>
      </View>
      <View style={{ justifyContent: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: colors.textSecondary }}>
          Don't have an account?{' '}
          <Text
            style={{ fontSize: 16, color: colors.accent }}
            onPress={() => navigation.navigate('Welcome')}
          >
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}
