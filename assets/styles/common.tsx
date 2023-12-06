import React from 'react'
import { ColorValue, Text, View } from 'react-native'

interface RoundProps {
  color: ColorValue
  text: string
}

export const Rounded: React.FC<RoundProps> = ({ color, text }) => {
  return (
    <View
      style={{
        width: 90,
        height: 90,
        borderRadius: 10,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
      }}
    >
      <Text style={{ color: 'white' }}>{text}</Text>
    </View>
  )
}
