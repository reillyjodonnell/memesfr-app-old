import React from 'react';
import {Text, View} from 'react-native';
import {Branding} from './Branding';

export default function Login({navigation}) {
  return (
    <View style={{backgroundColor: 'black', flex: 1, padding: 20}}>
      <View>
        <Branding />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 40,
            width: '100%',
            textAlign: 'center',
            marginTop: 70,
            paddingBottom: 90,
          }}>
          Login
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 80,
            padding: 20,
            backgroundColor: '#ea3788',
            width: '100%',
            textAlign: 'center',
            borderRadius: 30,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              fontWeight: '800',
            }}>
            Create Account
          </Text>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            paddingTop: 20,
            textAlign: 'left',
          }}>
          <Text style={{color: '#eeeeee66', textAlign: 'left'}}>
            By signing up you agree to our{' '}
            <Text style={{color: '#ea3788'}}>Terms</Text>,{' '}
            <Text style={{color: '#ea3788'}}>Cookies</Text>, &{' '}
            <Text style={{color: '#ea3788'}}>Community Rules</Text>
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', marginBottom: 20}}>
        <Text style={{fontSize: 16, color: '#eeeeee66'}}>
          Already have an account?{' '}
          <Text style={{fontSize: 16, color: '#ea3788'}}>Log in</Text>
        </Text>
      </View>
    </View>
  );
}
