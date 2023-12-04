import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

function App(): Element {
  return (
    <SafeAreaView>
      <View>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>hi</Text>
        <Text>font site is so small please make it bold</Text>
        <TextInput
          aria-label="input type"
          placeholder="please input your name"
        />
        <Text style={styles.pureCenter}>hi</Text>
        <View>
          <Button title="click me" color={'green'} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pureCenter: {
    color: 'red',
  },
});

export default App;
