import React, { useEffect, useState } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  useColorScheme,
} from 'react-native'
import { Rounded } from './assets/styles/common'
import { DataFetch } from './components/FetchData'

function App(): Element {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const data = await DataFetch.getPost()
    setData(data)
  }
  const color = useColorScheme()
  return (
    <SafeAreaView>
      <ScrollView>
        <ScrollView>
          <View style={styles.container}>
            {/* {data.map((item: any, index) => (
              <Rounded text={item.name} key={index} color={'red'} />
            ))} */}
            {/* <Rounded color={'blue'} />
            <Rounded color={'purple'} />
            <Rounded color={'red'} />
            <Rounded color={'blue'} />
            <Rounded color={'purple'} /> */}
            <View
              style={{
                backgroundColor: 'gray',
                justifyContent: 'center',
                padding: 25,
                borderRadius: 22,
                opacity: 0.7,
                shadowColor: 'gray',
                shadowRadius: 300,
                shadowOpacity: 0.6,
                shadowOffset: { height: 50, width: 22 },
              }}
            >
              <Text>Enter Phone</Text>
              <TextInput keyboardType="phone-pad" placeholder="Enter Phone no."></TextInput>
              <Text>Enter Password</Text>
              <TextInput secureTextEntry={true} placeholder="Enter Password"></TextInput>
              <Button title="Login" />
            </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {/* <IncrementViews /> */}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 740,
    backgroundColor: '#F1e4dd',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
})

export default App
