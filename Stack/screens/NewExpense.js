import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextField, Button, Menu, MenuItem } from '@mui/material';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NewExpense = () => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [currency, setCurrency] = useState('');
  const [comment, setComment] = useState('');

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

  const selectCurrency = (cur) => {
    setCurrency(cur);
    closeCurrencyMenu();
  };

  return (
    <View style={styles.container}>
      <TextField
        label="Name"
        value={name}
        onChange={event => setName(event.target.value)}
        InputProps={{
          startAdornment: (
            <Icon name="pencil" size={24} />
          ),
        }}
        style={styles.input}
      />
      <View style={styles.dateInputs}>
        <TextField
          label="Start Date"
          value={startDate.toDateString()}
          onClick={showStartDatePicker}
          InputProps={{
            startAdornment: (
              <Icon name="calendar" size={24} />
            ),
          }}
          style={[styles.input, { flex: 1, marginRight: 5 }]}
        />
        <TextField
          label="End Date"
          value={endDate.toDateString()}
          onClick={showEndDatePicker}
          InputProps={{
            startAdornment: (
              <Icon name="calendar" size={24} />
            ),
          }}
          style={[styles.input, { flex: 1, marginLeft: 5 }]}
        />
      </View>
      {startDateVisible && (
        <DateTimePicker
          value={startDate}
          mode="date"
          display="default"
          onChange={onStartDateChange}
        />
      )}
      {endDateVisible && (
        <DateTimePicker
          value={endDate}
          mode="date"
          display="default"
          onChange={onEndDateChange}
        />
      )}
      <Menu
        open={currencyMenuVisible}
        onClose={closeCurrencyMenu}
        anchor={
          <Button onClick={openCurrencyMenu} style={{ width: '100%' }}>
            {currency ? currency : 'Select Currency'}
          </Button>
        }
      >
        {currencies.map((cur, index) => (
          <MenuItem key={index} onClick={() => selectCurrency(cur)}>
            {cur}
          </MenuItem>
        ))}
      </Menu>
      <TextField
        label="Comment"
        value={comment}
        onChange={event => setComment(event.target.value)}
        InputProps={{
          startAdornment: (
            <Icon name="comment" size={24} />
          ),
        }}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 10,
  },
  dateInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default NewExpense;
