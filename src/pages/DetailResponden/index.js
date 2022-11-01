import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from 'react-native-user-avatar';
import DetailBiodata from '../../component/DetailBiodata';

export default function DetailResponden() {
  return (
    <View className="p-10 flex-1 bg-white">
        <Icon name="arrow-back-circle" size={26} color="#365ABE" />
        <View className="flex-row mt-4 flex-0.5">
            <View>
                <UserAvatar size={80} name="Tes"  />
            </View>
            <View className="justify-center ml-5 flex-1">
                <Text className="font-['Poppins-SemiBold'] text-xl text-[#151522] mt-1">Wildan Romiza F</Text>
                <Text className="font-['Poppins-Light'] text-base text-[#151522] ">20 Tahun </Text>
            </View>
        </View>
        <DetailBiodata/>
    </View>
  )
}