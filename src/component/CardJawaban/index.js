import { View, Text } from 'react-native'
import React from 'react'

export default function CardJawaban(props) {
    return (
        <View className="flex-column  p-3 border-l-8 border-l-[#365ABE]  border-y border-y-[#E9E9E9] mb-2" >

            <View className="px-4 py-2 flex-column">

                <View className="flex-row justify-between" >
                    <View className="bg-[#365ABE] px-5 py-2 rounded-2xl" >
                        <Text className="text-white text-xs font-['Poppins-SemiBold'] ">No {props.no}</Text>
                    </View>
                    <View className="bg-[#365ABE]  px-5 py-2 rounded-2xl" >
                        <Text className="text-white text-xs font-['Poppins-SemiBold'] ">{props.tipe}</Text>
                    </View>
                </View>
                <Text className="text-white text-sm text-justify font-['Poppins-Medium'] text-[#151522] mt-3">{props.soal}</Text>
                <Text className="text-white text-xl text-justify font-['Poppins-SemiBold'] text-[#BEBDBD] mt-3">{props.jawaban}</Text>
            </View>
        </View>
    )
}