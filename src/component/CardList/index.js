import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';

export default function CardList(props) {
    const navigation = useNavigation();

    const clickedItem = () => {
        navigation.navigate('DetailResponden', {
            itemId: props.id,
            nama: props.name,
            instansi: props.instansi,
          });
    }
    if (props.isEven) {
        return (
            <TouchableOpacity className="flex-row px-7 py-5 bg-[#F5F8FF] mx-4 rounded-lg" onPress={clickedItem}>
                {/* <TouchableOpacity onPress={clickedItem}> */}
                    <View className="flex-0.5 mr-5">
                        <UserAvatar size={50} name={props.name} />
                    </View>
                    <View className="justify-center flex-1">
                        <Text className="text-base font-['Poppins-SemiBold']">{props.name}</Text>
                        <Text>{props.instansi}</Text>
                    </View>
                    <View className="justify-center">
                        <Icon name="arrow-right" size={20} color="#365ABE" />
                    </View>
                {/* </TouchableOpacity> */}
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity className="flex-row px-7 py-5 bg-[#fff] mx-4 rounded-lg" onPress={clickedItem}>
                {/* <TouchableOpacity onPress={clickedItem}> */}
                    <View className="flex-0.5 mr-5">
                        <UserAvatar size={50} name={props.name} />
                    </View>
                    <View className="justify-center flex-1">
                        <Text className="text-base font-['Poppins-SemiBold']">{props.name}</Text>
                        <Text>{props.instansi}</Text>
                    </View>
                    <View className="justify-center">
                        <Icon name="arrow-right" size={20} color="#365ABE" />
                    </View>
                {/* </TouchableOpacity> */}
            </TouchableOpacity>
        )
    }

}