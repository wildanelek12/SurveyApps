import { View, Text } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Icon  from 'react-native-vector-icons/Ionicons'
import MaterialIcon  from 'react-native-vector-icons/MaterialIcons'
import LogoGopay from '../../assets/icon/gopay.svg'

export default function SelectModelPage() {
  return (
    <View className="flex-1 bg-[#12A861]">
        <View className="flex-column p-4 bg-[#12A861]">
            <View className="flex flex-row items-center gap-3">
                <View className="items-center flex-auto w-3/5 py-1 flex-row px-2 bg-white rounded-lg"> 
                    <Icon name="search" size={18} color="#787878" />
                    <TextInput className="text-[#787878] p-0 ml-2 text-sm" placeholder='Cari di tokopedia'/>
                </View>
                <View className="flex-row flex-auto w-2/5 justify-between">
                    <Icon name="mail" size={22} color="#fff" />
                    <Icon name="notifications" size={22} color="#fff" />
                    <Icon name="cart" size={22} color="#fff" />
                    <Icon name="list" size={22} color="#fff" />
                </View>
            </View>
            <View className="mt-3 flex-row items-center">
                <Icon name="location-outline" size={15} color="#fff" />
                <Text className="text-white text-xs">Dikirim ke </Text>
                <Text className="text-white text-xs font-bold">Rumah Jokowi </Text>
                <MaterialIcon name="keyboard-arrow-down" size={15} color="#fff" />
            </View>
            <View className="flex-row bg-white mt-4 rounded-lg p-3">
                <View className="flex-column flex-1">
                    <View className="flex-row">
                        <Icon name="wallet" size={15} color="#14ADD6" />
                        <Text className="text-xs ml-1">GoPay</Text>
                    </View>
                    <Text className="text-black text-sm font-bold mt-1">Rp2.000</Text>
                    <Text className="text-xs mt-1">130 Coins</Text>
                </View>
                <View className="flex-column flex-1 border-l border-[#D7D8D9] pl-2">
                    <View className="flex-row">
                        <Icon name="wallet" size={15} color="#14ADD6" />
                        <Text className="text-xs ml-1">Rewards</Text>
                    </View>
                    <Text className="text-black text-sm font-bold mt-1">Silver</Text>
                    <Text className="text-xs mt-1">25 Kupon Baru</Text>
                </View>
        
            </View>
        </View>
        <View className="flex-1 bg-white rounded-t-lg p-3">
                <Text>as</Text>
        </View>
    </View>
  )
}