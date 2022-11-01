import { View, Text } from 'react-native'
import React from 'react'

export default function DetailBiodata(props) {
  return (
    <View className="mt-8">
        <Text className="font-['Poppins-Medium'] text-base text-black">{props.field}</Text>
        <View className="bg-[#D1DCFA] py-2 px-4 rounded-lg mt-1">
            <Text className="font-['Poppins-Regular'] text-base">{props.name}</Text>
        </View>
    </View>
  )
}