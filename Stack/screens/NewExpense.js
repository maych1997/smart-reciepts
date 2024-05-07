import React, {useState, useRef} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  TextInput,
  Button,
  Menu,
  Provider as PaperProvider,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import Header from './Header';

const NewExpense = () => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [currency, setCurrency] = useState('');
  const [comment, setComment] = useState('');

  const [startDateVisible, setStartDateVisible] = useState(false);
  const [endDateVisible, setEndDateVisible] = useState(false);
  const [currencyMenuVisible, setCurrencyMenuVisible] = useState(false);

  const bottomSheetRef = useRef(null);

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD']; // Add more currencies if needed

  const showStartDatePicker = () => setStartDateVisible(true);
  const showEndDatePicker = () => setEndDateVisible(true);

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setStartDate(currentDate);
    setStartDateVisible(false);
  };

  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setEndDate(currentDate);
    setEndDateVisible(false);
  };

  const openCurrencyMenu = () => setCurrencyMenuVisible(true);
  const closeCurrencyMenu = () => setCurrencyMenuVisible(false);

  const selectCurrency = cur => {
    setCurrency(cur);
    closeCurrencyMenu();
  };

  const openBottomSheet = () => {
    bottomSheetRef.current.present();
  };

  const renderBottomSheetContent = () => (
    <View style={styles.bottomSheetContent}>
      <TouchableOpacity
        style={styles.bottomSheetItem}
        onPress={() => {
          // handle menu item press
          bottomSheetRef.current.dismiss();
        }}>
        <Text style={styles.bottomSheetItemText}>Option 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomSheetItem}
        onPress={() => {
          // handle menu item press
          bottomSheetRef.current.dismiss();
        }}>
        <Text style={styles.bottomSheetItemText}>Option 2</Text>
      </TouchableOpacity>
      {/* Add more options as needed */}
    </View>
  );

  return (
    <PaperProvider>
      <Header title={'New Expense'} onMenuPress={openBottomSheet} />
      <View style={styles.container}>
        <TextInput
          label="Name"
          outlineStyle={{borderRadius: 20}}
          value={name}
          onChangeText={text => setName(text)}
          mode="outlined"
          textColor="#fff"
          style={[styles.input, {paddingLeft: 0}]}
        />
        <View style={{justifyContent: 'center'}}>
          <TextInput
            label="Start Date"
            value={startDate.toLocaleDateString()}
            outlineStyle={{borderRadius: 20}}
            textColor="#fff"
            onTouchStart={showStartDatePicker}
            mode="outlined"
            style={styles.input}
          />
          <View style={{position: 'absolute', alignSelf: 'flex-end', left: 15}}>
            <Icon name={'date-range'} size={30} color={'#fff'}></Icon>
          </View>
        </View>
        {startDateVisible && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={onStartDateChange}
          />
        )}
        <View style={{justifyContent: 'center'}}>
          <TextInput
            label="End Date"
            value={endDate.toLocaleDateString()}
            onTouchStart={showEndDatePicker}
            outlineStyle={{borderRadius: 20}}
            textColor="#fff"
            mode="outlined"
            style={styles.input}
          />
          <View style={{position: 'absolute', alignSelf: 'flex-end', left: 15}}>
            <Icon name={'date-range'} size={30} color={'#fff'}></Icon>
          </View>
        </View>
        {endDateVisible && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onEndDateChange}
          />
        )}
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Menu
            visible={currencyMenuVisible}
            onDismiss={closeCurrencyMenu}
            style={{width: '88%', paddingLeft: 20}}
            anchor={
              <Button
                onPress={openCurrencyMenu}
                style={styles.currencyButton}
                textColor="#fff"
                mode="outlined">
                {currency ? currency : 'Select Currency'}
              </Button>
            }>
            {currencies.map((cur, index) => (
              <Menu.Item
                key={index}
                onPress={() => selectCurrency(cur)}
                title={cur}
              />
            ))}
          </Menu>
          <View style={{position: 'absolute', alignSelf: 'flex-end', left: 15}}>
            <Icon name={'attach-money'} size={30} color={'#fff'}></Icon>
          </View>
        </View>
        <View style={{justifyContent: 'center', marginTop: 5}}>
          <TextInput
            label="Comment"
            value={comment}
            outlineStyle={{borderRadius: 20}}
            textColor="#fff"
            onChangeText={text => setComment(text)}
            mode="outlined"
            style={styles.input}
          />
          <View style={{position: 'absolute', alignSelf: 'flex-end', left: 15}}>
            <Icon name={'comment'} size={30} color={'#fff'}></Icon>
          </View>
        </View>
      </View>
      {/* <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={['30%', '60%']}
        backdropComponent={BottomSheetBackdrop}>
        {renderBottomSheetContent()}
      </BottomSheetModal> */}
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#000',
    color: '#fff',
    paddingLeft: 40,
  },
  currencyButton: {
    maxWidth: '100%',
    height: 46,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 27,
  },
  bottomSheetContent: {
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
  },
  bottomSheetItem: {
    marginBottom: 10,
  },
  bottomSheetItemText: {
    fontSize: 18,
  },
});

export default NewExpense;
