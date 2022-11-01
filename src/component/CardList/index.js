import { View, Text } from 'react-native'
import React from 'react'
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function CardList(props) {

    if(props.isEven){
        return (
            <View className="flex-row px-7 py-5 bg-[#F5F8FF] mx-4 rounded-lg">
                <View className="flex-0.5 mr-5">
                    <UserAvatar size={50} name={props.name}  />
                </View>
                <View className="justify-center flex-1">
                    <Text  className="text-base font-['Poppins-SemiBold']">{props.name}</Text>
                    <Text>{props.umur} Tahun</Text>
                </View>
                <View className="justify-center">
                     <Icon name="arrow-right" size={20} color="#365ABE" />
                </View>
            </View>
          )
    }else{
        return (
            <View className="flex-row px-7 py-5 bg-[#fff] mx-4 rounded-lg">
                <View className="flex-0.5 mr-5">
                    <UserAvatar size={50} name={props.name}  />
                </View>
                <View className="justify-center flex-1">
                    <Text  className="text-base font-['Poppins-SemiBold']">{props.name}</Text>
                    <Text>{props.umur} Tahun</Text>
                </View>
                <View className="justify-center">
                     <Icon name="arrow-right" size={20} color="#365ABE" />
                </View>
            </View>
          )
    }

}