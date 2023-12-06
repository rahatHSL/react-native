import { useState } from 'react'
import { Button, Text, View } from 'react-native'

export const IncrementViews = () => {
  const [number, setNumber] = useState(0)
  const handleIncrement = () => {
    setNumber(pre => pre + 1)
  }
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <View>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{number}</Text>
        </View>
        <View>
          <Button onPress={handleIncrement} title="increment" />
        </View>
      </View>
    </View>
  )
}
