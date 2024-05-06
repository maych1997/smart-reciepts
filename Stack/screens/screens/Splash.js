import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default function Splash() {
  const [index, setIndex] = useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const slides = [
    {
      text1: 'Take and Scan Receipts from Your Phone',
      text2:
        'Simply take photos of your receipts; the system automatically recognizes them',
      imagePath: require('../../../assets/images/scan-reciepts.png'),
    },
    {
      text1: 'Export Reports to PDF, CSV & ZIP',
      text2:
        'Analyze expenses effortlessly: generate reports in various formats for convenience',
      imagePath: require('../../../assets/images/export-report.png'),
    },
    {
      text1: 'Create Backups of your Receipts',
      text2:
        'Data Reliability: make copies of receipts to preserve financial history',
      imagePath: require('../../../assets/images/backup.png'),
    },
    {
      text1: 'Track Expenses',
      text2: 'Visualize your finances with graphs',
      imagePath: require('../../../assets/images/track-expense.png'),
    },
  ];

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#5d3acc',
          justifyContent: 'center',
        }}>
        <Swiper
          onIndexChanged={index => {
            setIndex(index);
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          loop={false}
          dotStyle={{display: 'none'}}
          activeDotStyle={{display: 'none'}}>
          {slides.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flex: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.imagePath}
                    style={{
                      resizeMode: 'contain',
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 0.4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: responsiveWidth(5), // Adjust horizontal padding responsively
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: responsiveFontSize(4), // Adjust font size responsively
                      fontWeight: '800',
                      textAlign: 'center',
                      maxWidth: responsiveWidth(80), // Adjust maximum width responsively
                      marginTop: responsiveHeight(15),
                    }}>
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      color: '#b6a2f1',
                      fontSize: responsiveFontSize(3), // Adjust font size responsively
                      maxWidth: responsiveWidth(80), // Adjust maximum width responsively
                      textAlign: 'center',
                      marginTop: responsiveHeight(3), // Adjust marginTop responsively
                      lineHeight: responsiveHeight(4), // Adjust lineHeight responsively
                    }}>
                    {item.text2}
                  </Text>
                </View>
              </View>
            );
          })}
        </Swiper>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
          <ExpandingDot
            data={slides}
            expandingDotWidth={30}
            scrollX={scrollX}
            inActiveDotOpacity={0.6}
            dotStyle={{
              width: 10,
              height: 10,
              backgroundColor: '#347af0',
              borderRadius: 5,
              margin: 'auto',
            }}
            activeDotColor="#fff"
            inActiveDotColor="#9482cd"
            containerStyle={{justifyContent: 'center', alignItems: 'center'}}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('GetStarted')}
            style={{
              position: 'absolute',
              bottom: responsiveHeight(1), // Adjust bottom position responsively
              right: responsiveWidth(6), // Adjust right position responsively
            }}>
            {index == 3 ? (
              <Text
                style={{
                  color: '#fff',
                  fontSize: responsiveFontSize(2), // Adjust font size responsively
                  textAlign: 'center',
                  marginBottom: responsiveHeight(1), // Adjust marginBottom responsively
                }}>
                Done
              </Text>
            ) : (
              <Icon name={'arrow-right'} color={'#fff'} size={30} /> // Adjust icon size responsively
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
