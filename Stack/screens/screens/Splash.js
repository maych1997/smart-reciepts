import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import {ExpandingDot} from 'react-native-animated-pagination-dots';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Feather';
export default function Splash() {
  const [index,setIndex] = useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  slides = [
    {
      text1: 'Take and Scan Reciepts from Your Phone',
      text2:
        ' Simply take photos of your reciepts; the system automatically recongnizes their',
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
        'Data Reliability: make copies of reciepts to preserve financial history',
      imagePath: require('../../../assets/images/backup.png'),
    },

    {
      text1: ' Track Expenses',
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
         onIndexChanged={(index)=>{
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
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={item.imagePath}
                    style={{resizeMode: 'contain'}}
                  />
                </View>
                <View
                  style={{
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 32,
                      fontWeight: '800',
                      textAlign: 'center',
                      width: 300,
                    }}>
                    {item.text1}
                  </Text>
                  <Text
                    style={{
                      color: '#b6a2f1',
                      fontSize: 24,
                      width: 300,
                      textAlign: 'center',
                      marginTop: 20,
                      lineHeight: 30,
                    }}>
                    {item.text2}
                  </Text>
                </View>
              </View>
            );
          })}
        </Swiper>
        <View style={{display:'flex',flexDirection:'row',paddingLeft:20,paddingRight:60}}>
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
            containerStyle={{margin: 'auto',justifyContent:'center',alignItems:'center',paddingLeft:70}}
          />
        </View>
        <View style={{position:'fixed',bottom:7,right:0}}>
          <TouchableOpacity>
            {index==3?<Text   style={{
                      color: '#fff',
                      fontSize: 18,
                      textAlign: 'center',
                      marginBottom:5,
                    }}>Done</Text>:<Icon name={'arrow-right'} color={'#fff'} size={30}></Icon>}
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </>
  );
}
