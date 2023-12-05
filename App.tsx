import React from 'react'
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
import { Rounded } from './assets/styles/common'

function App(): Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <ScrollView horizontal={true}>
          <View style={styles.component}>
            <Rounded color={'red'} />
            <Rounded color={'blue'} />
            <Rounded color={'purple'} />
            <Rounded color={'red'} />
            <Rounded color={'blue'} />
            <Rounded color={'purple'} />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  component: {
    height: 759,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default App
