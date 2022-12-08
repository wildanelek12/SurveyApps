import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Welcome from "../../assets/icon/welcome.svg";
import { useNavigation } from '@react-navigation/native';


export default function WelcomePage() {
    const navigation = useNavigation();
    return (
        <View className="flex-1 p-10 bg-white">

            <View className="flex-1 justify-between">
                <View>
                    <Text className="font-['PoppinsBold'] text-2xl text-[#2F3648] mt-4">Evaluasi Model CIPPO</Text>
                    <Text className="font-['Poppins-Regular'] text-sm text-[#2F3648] mt-3">Optimalisasi Model Evaluasi Cipp (Context, Input, Process, Product) Sebagai Eskalasi Mutu Program Kerjasama Dan Kolaborasi Iduka-Kampus Di Indonesia</Text>
                    <View className="mt-10">
                        <Welcome />
                    </View>
                    <View>
                        <TouchableOpacity className="px-6 my-5 bg-[#365ABE] py-3  rounded-full" onPress={() => navigation.navigate("FormResponden")}>
                            <Text className="text-center text-white font-['Poppins-SemiBold']">Saya Responden !</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="px-6  bg-white border border-[#365ABE] py-3  rounded-full" onPress={() => navigation.navigate("ListResponden")} >
                            <Text className="text-center text-white text-[#365ABE] font-['Poppins-SemiBold']">Saya Pemilik !</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View>
        </View>
    )
}