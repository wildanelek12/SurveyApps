import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import UserAvatar from 'react-native-user-avatar';
import axios from 'axios';
import CardJawaban from '../../component/CardJawaban';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetailResponden({ route, navigation }) {

  const { itemId } = route.params;
  const { nama } = route.params;
  const { instansi } = route.params;

  console.log('====================================');
  console.log(itemId);
  console.log('====================================');

  const [isLoading, setLoading] = useState(true);
  const [dataJawaban, setDataJawaban] = useState("");
  const fetchAnswer = async () => {
    const response = await axios.get('http://survey.wildanromiza.com/api/respondens/' + itemId)
      .then(response => {
        setDataJawaban(response.data.data.respondens)
        setLoading(false)
      })

  };
  useEffect(() => {
    fetchAnswer()
  }, [])


  if (!isLoading) {
    console.log("dataJawaban" + dataJawaban)
    return (
      <ScrollView className="flex-1 bg-white">
        <View className="m-4">
          <Icon name="arrow-back-circle" size={26} color="#365ABE" />
        </View>
        <View className="px-10">
          {/* <View className="flex-row mt-2 flex-0.5">
            <View>
              <UserAvatar size={70} name={nama} />
            </View>
            <View className="justify-center ml-5 flex-1">
              <Text className="font-['Poppins-SemiBold'] text-base text-[#151522] mt-1">{nama}</Text>
              <Text className="font-['Poppins-Light'] text-sm text-[#151522] ">{instansi} </Text>
            </View>
          </View> */}
          <Text className="font-['Poppins-SemiBold'] text-base text-[#151522] mt-2 text-2xl text-center">Jawaban Kuisioner</Text>
        </View>
        <View className="mt-4">
          {dataJawaban.map((item, i) => {
            return (
              <CardJawaban no={i + 1} jawaban={item.jawaban} tipe={item.tipe} soal={item.pertanyaan} />
            )
          })}

        </View>
      </ScrollView>
    )

  } else {
    return (
      <Text>Loading</Text>
    )
  }

}