import React, { useRef, useState, useEffect } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Branding } from './Branding';
import DatePicker from 'react-native-date-picker';
import Alert from '../../../Assets/RedAlert.svg';
import Check from '../../../Assets/Check.svg';
import colors from '../../theme';

export default function Signup({}) {
  const [name, onChangeName] = useState(null);
  const [number, onChangeNumber] = useState(null);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dateString, setDateString] = useState(null);
  const [otherFocus, setOtherFocus] = useState(false);
  const [dateValid, setDateValid] = useState(null);
  const [phoneValid, setPhoneValid] = useState(null);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [nameValid, setNameValid] = useState(null);

  const [signInWithEmailOrUsername, setSignInWithEmailOrUsername] =
    useState(false);

  const [valid, setValid] = useState(false);

  const dateRef = useRef(null);
  const phoneRef = useRef(null);
  const nameRef = useRef(null);

  function validateName(nameString) {
    onChangeName(nameString);
    if (nameString.length > 1) {
      setNameValid(true);
    } else if (nameString.length < 1) {
      setNameValid(false);
    }
  }

  function formatPhoneNumber(phoneNumberString) {
    setPhoneErrorMessage('');
    onChangeNumber(phoneNumberString);

    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      onChangeNumber('(' + match[1] + ') ' + match[2] + '-' + match[3]);
      setPhoneValid(true);
    } else if (phoneNumberString.length > 4) {
      setPhoneErrorMessage('👆 Enter a valid number');
      setPhoneValid(false);
    }
  }

  useEffect(() => {
    if (nameValid && phoneValid && dateValid) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [nameValid, dateValid, phoneValid]);

  function handleDate(data) {
    if (!otherFocus) {
      setDate(data);
      setOpen(true);
      Keyboard.dismiss();
      formatDate(data);
      const formatted = formatDate(data);
      setDateString(formatted);
    }
  }

  const selectedDate = () => {
    setOpen(true);
  };

  const nameFocus = () => {
    if (open) {
      dateRef.current.blur();
    }
    setOpen(false);

    nameRef.current.focus();
  };

  const phoneFocus = () => {
    if (open) {
      dateRef.current.blur();
    }
    setOpen(false);
    phoneRef.current.focus();
  };

  const dateFocus = () => {
    if (open === true && otherFocus === false) {
      dateRef.current.focus();
    }
  };

  function formatDate(data) {
    const yyyy = data.getFullYear();
    const mm = data.getMonth(); // getMonth() is zero-based
    const dd = data.getDate();
    const month = new Array();
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';

    const todaysDate = new Date();
    const formattedDate = todaysDate.toLocaleDateString();

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    if (today > data) {
      setDateValid(true);
    } else {
      setDateValid(false);
    }

    return String(`${month[mm]} ${dd}, ${yyyy}`);
  }

  return (
    <View style={{ backgroundColor: colors.bg, flex: 1, padding: 10 }}>
      <View
        style={{
          color: colors.textPrimary,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => setSignInWithEmailOrUsername(false)}
        >
          <View
            style={
              signInWithEmailOrUsername
                ? {
                    borderWidth: 1,
                    width: '50%',
                    fontSize: 14,
                    padding: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    borderWidth: 1,
                    width: '50%',
                    fontSize: 14,
                    padding: 5,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                    color: colors.textPrimary,
                    borderBottomColor: 'white',
                  }
            }
          >
            <Text
              style={
                signInWithEmailOrUsername
                  ? { color: colors.textSecondary }
                  : {
                      color: colors.textPrimary,
                    }
              }
            >
              Phone
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => setSignInWithEmailOrUsername(true)}
        >
          <View
            style={
              signInWithEmailOrUsername
                ? {
                    borderWidth: 1,
                    width: '50%',
                    fontSize: 14,
                    padding: 5,
                    color: colors.textPrimary,
                    borderBottomColor: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : {
                    width: '50%',
                    fontSize: 14,
                    padding: 5,
                    color: colors.textPrimary,

                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
            }
          >
            <Text
              style={
                signInWithEmailOrUsername
                  ? { color: colors.textPrimary }
                  : {
                      color: colors.textSecondary,
                    }
              }
            >
              Username/ Email
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          flexGrow: 1,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontWeight: '700',
            fontSize: 30,
            width: '100%',
            textAlign: 'center',
            marginBottom: 30,
          }}
        >
          Log in
        </Text>
        <View
          style={{
            width: '100%',
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          {signInWithEmailOrUsername ? (
            <>
              <View>
                <TextInput
                  selectionColor={colors.accent}
                  ref={nameRef}
                  onFocus={() => nameFocus()}
                  autoComplete="name"
                  autoCapitalize="words"
                  keyboardType="email-address"
                  //style={styles.input}
                  onChangeText={(textName) => validateName(textName)}
                  onBlur={() => setOtherFocus(false)}
                  value={name}
                  placeholder="Username or email"
                  placeholderTextColor="#eeeeee90"
                  dataDetectorTypes="all"
                  returnKeyType="next"
                  textContentType="username"
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    fontSize: 18,
                    fontWeight: '600',
                    marginBottom: 30,
                    borderBottomColor: '#eeeeee60',
                    borderBottomWidth: 2,
                    paddingBottom: 10,
                    color: colors.textPrimary,
                  }}
                />
                {nameValid ? (
                  <View
                    style={{
                      display: 'flex',
                      position: 'absolute',
                      right: 0,
                    }}
                  >
                    <Check />
                  </View>
                ) : nameValid === null ? null : (
                  <View
                    style={{
                      display: 'flex',
                      position: 'absolute',
                      right: 0,
                    }}
                  >
                    <Alert />
                  </View>
                )}
              </View>
              <View style={{ width: '100%', position: 'relative' }}>
                <TextInput
                  selectionColor={colors.accent}
                  onFocus={() => phoneFocus()}
                  ref={phoneRef}
                  //style={styles.input}
                  onChangeText={(data) => formatPhoneNumber(data)}
                  onBlur={() => setOtherFocus(false)}
                  value={number}
                  autoComplete="tel"
                  placeholder="Password"
                  placeholderTextColor="#eeeeee90"
                  keyboardType="default"
                  textContentType="password"
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    fontSize: 18,
                    fontWeight: '600',
                    borderBottomColor: '#eeeeee60',
                    borderBottomWidth: 2,
                    paddingTop: 10,
                    paddingBottom: 10,
                    color: colors.textPrimary,
                  }}
                />
                <Text
                  style={{
                    paddingTop: 20,
                    marginBottom: 30,
                    fontSize: 16,
                    color: colors.textPrimary,
                  }}
                >
                  Forgot password?
                </Text>
                {phoneErrorMessage ? (
                  <Text
                    style={{
                      width: '100%',
                      color: 'white',
                      fontSize: 15,
                      backgroundColor: 'red',
                      padding: 8,
                      marginTop: -20,
                      fontWeight: '600',
                    }}
                  >
                    {phoneErrorMessage}
                  </Text>
                ) : null}
                {phoneValid ? (
                  <View style={{ position: 'absolute', right: 0 }}>
                    <Check />
                  </View>
                ) : phoneValid === null ? null : (
                  <View style={{ position: 'absolute', right: 0 }}>
                    <Alert />
                  </View>
                )}
              </View>

              <Pressable
                style={{ width: '100%' }}
                onPress={valid ? () => alert('Created!') : null}
              >
                <View
                  style={
                    valid
                      ? {
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 20,
                          backgroundColor: '#ea3788',
                          width: '100%',
                          textAlign: 'center',
                          borderRadius: 30,
                        }
                      : {
                          opacity: 0.5,
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: 20,
                          backgroundColor: '#ea3788',
                          width: '100%',
                          textAlign: 'center',
                          borderRadius: 30,
                        }
                  }
                >
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 20,
                      fontWeight: '800',
                    }}
                  >
                    Log in
                  </Text>
                </View>
              </Pressable>
            </>
          ) : (
            <View style={{ width: '100%', position: 'relative' }}>
              <TextInput
                selectionColor={colors.accent}
                onFocus={() => phoneFocus()}
                ref={phoneRef}
                //style={styles.input}
                onChangeText={(data) => formatPhoneNumber(data)}
                onBlur={() => setOtherFocus(false)}
                value={number}
                autoComplete="tel"
                placeholder="Phone # "
                placeholderTextColor="#eeeeee90"
                keyboardType="phone-pad"
                style={{
                  width: '100%',
                  textAlign: 'left',
                  fontSize: 18,
                  fontWeight: '600',
                  marginBottom: 30,
                  borderBottomColor: '#eeeeee60',
                  borderBottomWidth: 2,
                  paddingTop: 10,
                  paddingBottom: 10,
                  color: colors.textPrimary,
                }}
              />
              {phoneErrorMessage ? (
                <Text
                  style={{
                    width: '100%',
                    color: 'white',
                    fontSize: 15,
                    backgroundColor: 'red',
                    padding: 8,
                    marginTop: -20,
                    fontWeight: '600',
                  }}
                >
                  {phoneErrorMessage}
                </Text>
              ) : null}
              {phoneValid ? (
                <View style={{ position: 'absolute', right: 0 }}>
                  <Check />
                </View>
              ) : phoneValid === null ? null : (
                <View style={{ position: 'absolute', right: 0 }}>
                  <Alert />
                </View>
              )}
              <Pressable
                style={{ width: '100%' }}
                onPress={() => navigation.navigate('Phone Code')}
              >
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 15,
                    backgroundColor: '#ea3788',
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
                    Send Code
                  </Text>
                </View>
              </Pressable>
            </View>
          )}
        </View>

        {/*
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
        */}
        <View
          style={{
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
            paddingTop: 20,
            textAlign: 'left',
          }}
        ></View>
      </View>
    </View>
  );
}
