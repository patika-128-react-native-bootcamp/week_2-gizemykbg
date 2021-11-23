import React, {useState} from 'react';

import {SafeAreaView, View, StyleSheet, Dimensions} from 'react-native';
import AddBox from './components/AddBox';
import Card from './components/Card/Card';
import Button from './components/FilterButton/FilterButton';

const App = () => {
  const [data, setData] = useState([]);

  const handleClick = () => {
    console.log('Selam Giz');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Button onPress={handleClick} text="Artan Fiyat" />
        <Card name={name} price={price} />
        <AddBox data={data} setData={setData} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    backgroundColor: '#e6f7ff',
  },
});

export default App;
