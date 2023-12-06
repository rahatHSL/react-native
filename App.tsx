import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, Text, StyleSheet, ScrollView } from 'react-native'
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

  return (
    <SafeAreaView>
      <ScrollView>
        <ScrollView>
          <View style={styles.component}>
            {data.map((item: any, index) => (
              <Rounded text={item.name} key={index} color={'red'} />
            ))}
            {/* <Rounded color={'blue'} />
            <Rounded color={'purple'} />
            <Rounded color={'red'} />
            <Rounded color={'blue'} />
            <Rounded color={'purple'} /> */}
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
  component: {
    height: 'auto',
    backgroundColor: 'green',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default App
