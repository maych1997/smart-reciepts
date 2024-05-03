import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

export default function GetStarted() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flex: 0.9,
          justifyContent: 'center',
          width: responsiveWidth(90),
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#d1d7db70',
            fontSize: responsiveFontSize(2.56),
            textAlign: 'center',
          }}>
          You don't seem to have any reports defined at the moment. Try clicking
          + (plus) button to get started.
        </Text>
      </View>

      <View
        style={{
          flex: 0.13,
          justifyContent: 'flex-end',
          alignSelf: 'flex-end',
          right: responsiveWidth(6),
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NewExpense')}
          style={{
            backgroundColor: '#6C50F2',
            width: responsiveWidth(12),
            height: responsiveHeight(6),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50,
          }}>
          <Text style={{color: '#fff', fontSize: responsiveFontSize(3)}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
