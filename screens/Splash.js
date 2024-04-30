import {View, Text, Image} from 'react-native';
import React from 'react';
import {ExpandingDot} from 'react-native-animated-pagination-dots';

export default function Splash() {
  const [curPage] = React.useState(9);

  return (
    <>
      {/* 1st Screen */}
      {/* <View style={{flex: 1, backgroundColor: '#5d3acc', alignItems: 'center'}}>
        <View style={{flex: 0.6}}>
          <Image
            source={require('../assets/images/track-expense.png')}
            style={{resizeMode: 'contain', width: 500, height: 900}}
          />
        </View>
        <View style={{flex: 0.4, alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 32, fontWeight: '800'}}>
            Track Expenses
          </Text>

          <Text
            style={{
              color: '#b6a2f1',
              fontSize: 24,
              width: 300,
              textAlign: 'center',
              marginTop: 20,
            }}>
            Visualize your finances with graphs
          </Text>
        </View>
      </View> */}

      {/* 2nd Screen */}
      {/* <View style={{flex: 1, backgroundColor: '#5d3acc', alignItems: 'center'}}>
        <View style={{flex: 0.6}}>
          <Image
            source={require('../assets/images/scan-reciepts.png')}
            style={{resizeMode: 'contain', width: 500, height: 900}}
          />
        </View>
        <View style={{flex: 0.4, alignItems: 'center'}}>
          <Text style={{color: '#fff', fontSize: 32, fontWeight: '800', textAlign:'center',width:300}}>
            Take and Scan Receipts from Your Phone
          </Text>

          <Text
            style={{
              color: '#b6a2f1',
              fontSize: 24,
              width: 300,
              textAlign: 'center',
              marginTop: 20,
              lineHeight:30
            }}>
            Simply take photos of your reciepts; the system automatically recongnizes their
          </Text>
        </View>
      </View> */}

      {/* 3rd Screen */}
      
      {/* <View style={{flex: 1, backgroundColor: '#5d3acc', alignItems: 'center'}}>
        <View style={{flex: 0.6}}>
          <Image
            source={require('../assets/images/backup.png')}
            style={{resizeMode: 'contain', width: 500, height: 900}}
          />
        </View>
        <View style={{flex: 0.4, alignItems: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 32,
              fontWeight: '800',
              textAlign: 'center',
              width: 300,
            }}>
            Create Backups of your Receipts
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
            Data reliability; make copies of reciepts to preserve financial
            history
          </Text>
        </View>
      </View> */}
      
      {/* 4th Screen */}
      <View style={{flex: 1, backgroundColor: '#5d3acc', alignItems: 'center'}}>
        <View style={{flex: 0.6}}>
          <Image
            source={require('../assets/images/export-report.png')}
            style={{resizeMode: 'contain', width: 500, height: 900}}
          />
        </View>
        <View style={{flex: 0.4, alignItems: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 32,
              fontWeight: '800',
              textAlign: 'center',
              width: 300,
            }}>
            Export Reports to PDF, CSV & ZIP
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
            Analyze expenses effortlessly: generate reports in various formats
            for convenience
          </Text>
        </View>
      </View>

      {/* <ExpandingDot activeDotColor={'red'} curPage={curPage} maxPage={20} /> */}
    </>
  );
}
