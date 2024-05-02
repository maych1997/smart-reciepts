import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  TextInput,
  Button,
  Menu,
  IconButton,
  Provider as PaperProvider,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

const NewExpense = () => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [currency, setCurrency] = useState('');
  const [comment, setComment] = useState('');

  const myIcon = <Icon name="rocket" size={30} color="#900" />;

  const [startDateVisible, setStartDateVisible] = useState(false);
  const [endDateVisible, setEndDateVisible] = useState(false);

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

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD']; // Add more currencies if needed

  const [currencyMenuVisible, setCurrencyMenuVisible] = useState(false);

  const openCurrencyMenu = () => setCurrencyMenuVisible(true);

  const closeCurrencyMenu = () => setCurrencyMenuVisible(false);

  const selectCurrency = cur => {
    setCurrency(cur);
    closeCurrencyMenu();
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          label="Name"
          value={name}
          outlineStyle={{borderRadius: 20}}
          onChangeText={text => setName(text)}
          mode="outlined"
          style={styles.input}
          left={
            <TextInput.Icon name={() => <Icon name="pencil" size={24} />} />
          }
        />
        <TextInput
          label="Start Date"
          value={startDate.toLocaleDateString()}
          outlineStyle={{borderRadius: 20}}
          onTouchStart={showStartDatePicker}
          mode="outlined"
          style={styles.input}
          left={
            <TextInput.Icon name={() => <Icon name="calendar" size={24} />} />
          }
        />
        {startDateVisible && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={onStartDateChange}
          />
        )}
        <TextInput
          label="End Date"
          value={endDate.toLocaleDateString()}
          onTouchStart={showEndDatePicker}
          outlineStyle={{borderRadius: 20}}
          mode="outlined"
          style={styles.input}
          left={
            <TextInput.Icon name={() => <Icon name="calendar" size={24} />} />
          }
        />
        {endDateVisible && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onEndDateChange}
          />
        )}
        <Menu
          visible={currencyMenuVisible}
          onDismiss={closeCurrencyMenu}
          anchor={
            <Button
              onPress={openCurrencyMenu}
              style={{width: '100%',marginBottom:10, height:46,backgroundColor:'#fff'}}
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
        <TextInput
          label="Comment"
          value={comment}
          outlineStyle={{borderRadius: 20}}
          onChangeText={text => setComment(text)}
          mode="outlined"
          style={styles.input}
          left={
            <TextInput.Icon
              name={() => <Icon path={comment} size={24} color="black" />}
              color="black"
            />
          }
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    // backgroundColor: '#000',
  },
  input: {
    marginBottom: 10,
    // backgroundColor: '#000',
  },
});

export default NewExpense;
