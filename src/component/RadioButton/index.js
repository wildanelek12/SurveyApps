import { View, Text } from 'react-native'
import React from 'react'

export default function RadioButton(props) {
  return (
    <View className={props.isSelected ? "border-2 border-black p-2 border-[#6EC7EB] text-[#6EC7EB] rounded-lg px-5 py-2 mb-4" : "border-2 border-black p-2 border-slate-300 rounded-lg px-5 py-2 mb-4"} >
        <Text className={props.isSelected ? "font-['Poppins-Medium'] text-[#6EC7EB]" : "font-['Poppins-Regular'] text-[#786E6E]"}>{props.name}</Text>
    </View>
  )
}