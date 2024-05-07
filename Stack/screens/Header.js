import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({title, onSearchPress, onMenuPress}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          height: responsiveHeight(7),
          backgroundColor: '#6C50F2',
        }}>
        <View></View>
        <Text style={{color: '#fff', fontSize: responsiveFontSize(3)}}>
          {title}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{right: responsiveWidth(3)}}
            onPress={onSearchPress}>
            <Icon name={'search'} size={30} color={'#fff'}></Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={onMenuPress}>
            <Icon name={'more-vert'} size={30} color={'#fff'}></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Header;
