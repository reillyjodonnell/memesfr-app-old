import React, { useRef, useState, useEffect } from 'react';
import {
  Keyboard,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Input,
  Pressable,
  ScrollView,
} from 'react-native';
import { Branding } from './Branding';
import DatePicker from 'react-native-date-picker';
import Alert from '../../../Assets/RedAlert.svg';
import Check from '../../../Assets/Check.svg';
export default function Signup({ navigation }) {
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

  const [valid, setValid] = useState(false);

  const dateRef = useRef();
  const phoneRef = useRef();
  const nameRef = useRef();

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

    const todaysYear = formattedDate.slice(6, 10);
    const todaysMonth = formattedDate.slice(0, 2);
    const todaysDay = formattedDate.slice(3, 5);

    const suppliedYear = String(yyyy);
    const suppliedMonth = String(mm + 1);
    const suppliedDay = String(dd);

    console.log(formattedDate);

    if (
      (parseInt(suppliedYear) === parseInt(todaysYear) &&
        parseInt(suppliedMonth) === parseInt(todaysMonth) &&
        parseInt(suppliedDay) > parseInt(todaysDay)) ||
      parseInt(suppliedYear) > parseInt(todaysYear) ||
      (parseInt(suppliedYear) === parseInt(todaysYear) &&
        parseInt(suppliedMonth) > parseInt(todaysMonth))
    ) {
      setDateValid(false);
    } else {
      setDateValid(true);
    }

    return String(`${month[mm]} ${dd}, ${yyyy}`);
  }

  return (
    <View style={{ backgroundColor: '#272932', flex: 1, padding: 10 }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: 30,
            width: '100%',
            textAlign: 'center',
          }}
        >
          Login
        </Text>
        <View style={{ width: '100%', marginBottom: 400 }}>
          <View>
            <TextInput
              selectionColor={colors.accent}
              ref={nameRef}
              onFocus={() => nameFocus()}
              autoComplete="name"
              autoCapitalize="words"
              //style={styles.input}
              onChangeText={(textName) => validateName(textName)}
              onBlur={() => setOtherFocus(false)}
              value={name}
              placeholder="Name"
              placeholderTextColor="#eeeeee90"
              dataDetectorTypes="all"
              //keyboardType="name-phone-pad"
              returnKeyType="next"
              style={{
                width: '100%',
                textAlign: 'left',
                fontSize: 20,
                fontWeight: '600',
                marginBottom: 30,
                borderBottomColor: '#eeeeee60',
                borderBottomWidth: 2,
                paddingTop: 10,
                paddingBottom: 10,
                width: '100%',
                color: '#cb48b7',
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
              placeholder="Phone # "
              placeholderTextColor="#eeeeee90"
              keyboardType="phone-pad"
              style={{
                width: '100%',
                textAlign: 'left',
                fontSize: 20,
                fontWeight: '600',
                marginBottom: 30,
                borderBottomColor: '#eeeeee60',
                borderBottomWidth: 2,
                paddingTop: 10,
                paddingBottom: 10,
                width: '100%',
                color: '#cb48b7',
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
          </View>

          <ScrollView
            keyboardShouldPersistTaps="handled"
            style={{ zIndex: 10000 }}
          >
            <TextInput
              selectionColor={colors.accent}
              ref={dateRef}
              onPressIn={() => selectedDate()}
              value={dateString}
              placeholder="Date of birth"
              placeholderTextColor="#eeeeee90"
              onFocus={() => selectedDate}
              showSoftInputOnFocus={false}
              onBlur={() => dateFocus()}
              blurOnSubmit={false}
              style={{
                width: '100%',
                textAlign: 'left',
                fontSize: 20,
                fontWeight: '600',
                marginBottom: 30,

                borderBottomColor: '#eeeeee60',
                borderBottomWidth: 2,
                paddingTop: 10,
                paddingBottom: 10,
                width: '100%',
                color: '#cb48b7',
              }}
            />
            {dateValid ? (
              <View style={{ position: 'absolute', right: 0 }}>
                <Check />
              </View>
            ) : dateValid === null ? null : (
              <View style={{ position: 'absolute', right: 0 }}>
                <Alert />
              </View>
            )}
          </ScrollView>
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
                Login
              </Text>
            </View>
          </Pressable>
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

      {open ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
          }}
        >
          <DatePicker
            style={{ width: 400 }}
            textColor="#eeeeee"
            mode="date"
            onDateChange={(data) => handleDate(data)}
            open={open}
            date={date}
          />
        </View>
      ) : null}
    </View>
  );
}
