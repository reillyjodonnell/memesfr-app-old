import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Branding } from './Branding';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: '#272932', flex: 1, padding: 20 }}>
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
            color: 'white',
            fontWeight: '700',
            fontSize: 40,
            width: '100%',
            textAlign: 'center',
            marginTop: 70,
            paddingBottom: 90,
          }}
        >
          Dank memes await you, Memelord.
        </Text>
        <Pressable
          style={{ width: '100%' }}
          onPress={() => navigation.navigate('Signup')}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 80,
              padding: 20,
              backgroundColor: '#cb48b7',
              width: '100%',
              textAlign: 'center',
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '800',
              }}
            >
              Create Account
            </Text>
          </View>
        </Pressable>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            paddingTop: 20,
            textAlign: 'left',
          }}
        >
          <Text style={{ color: '#eeeeee66', textAlign: 'left' }}>
            By signing up you agree to our{' '}
            <Text style={{ color: '#cb48b7' }}>Terms</Text>,{' '}
            <Text style={{ color: '#cb48b7' }}>Cookies</Text>, &{' '}
            <Text style={{ color: '#cb48b7' }}>Community Rules</Text>
          </Text>
        </View>
      </View>
      <View style={{ justifyContent: 'center', marginBottom: 20 }}>
        <Text style={{ fontSize: 16, color: '#eeeeee66' }}>
          Already have an account?{' '}
          <Text
            style={{ fontSize: 16, color: '#cb48b7' }}
            onPress={() => navigation.navigate('Login')}
          >
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
}
