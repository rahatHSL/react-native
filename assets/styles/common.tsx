import React from 'react'
import { ColorValue, Text, View } from 'react-native'

interface RoundProps {
  color: ColorValue
}

export const Rounded: React.FC<RoundProps> = ({ color }) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
      }}
    >
      <Text style={{ color: 'white' }}>new</Text>
    </View>
  )
}
