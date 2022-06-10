import React from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import { Branding } from './Branding';
import Google from '../../../Assets/google.svg';
import Twitter from '../../../Assets/twitter.svg';
import Facebook from '../../../Assets/Facebook.svg';
import SignInButton from './SignInButton';

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
      <View>
        <Branding />
      </View>
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
            marginTop: 70,
            marginBottom: 70,
          }}
        >
          Signup
        </Text>
        <View
          style={{ display: 'flex', flex: 1, marginTop: 20, width: '100%' }}
        >
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
            onPress={() => window.alert('Fuckbook')}
            Icon={Facebook}
            title="Facebook"
          />

          <Text
            style={{
              padding: 10,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              color: colors.textPrimary,
            }}
          >
            Or
          </Text>

          <Pressable
            style={{ width: '100%', padding: 10 }}
            onPress={() => navigation.navigate('Signup')}
          >
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
                backgroundColor: colors.accentBg,
                width: '100%',
                textAlign: 'center',
                borderRadius: 30,
              }}
            >
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: 18,
                  fontWeight: '700',
                }}
              >
                Create Account
              </Text>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'left',
          }}
        >
          <Text style={{ color: colors.textSecondary, textAlign: 'left' }}>
            By signing up you agree to our{' '}
            <Text style={{ color: colors.accent }}>Terms</Text>,{' '}
            <Text style={{ color: colors.accent }}>Cookies</Text>, &{' '}
            <Text style={{ color: colors.accent }}>Community Rules</Text>
          </Text>
        </View>
      </View>
      <View
        style={{ justifyContent: 'center', marginTop: 20, marginBottom: 20 }}
      >
        <Text style={{ fontSize: 16, color: colors.textSecondary }}>
          Have an account?{' '}
          <Text
            style={{ fontSize: 16, color: colors.accent }}
            onPress={() => navigation.navigate('Login')}
          >
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
}
