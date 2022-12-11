import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardList from '../../component/CardList'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';


export default function ListResponden() {
    const [data, setData] = useState();
    const fetchUser = async () => {
        const response = await axios.get('http://survey.wildanromiza.com/api/respondens');
        const {data} = await response.data;
        setData(response.data.data.respondens)
        console.log('====================================');
        console.log(data);
        console.log('====================================');

    };
    useEffect(() => {
        fetchUser()
    }, [])
    if (data != null) {
        return (
            <ScrollView className="flex bg-white">
                <View >
                    <Text className="font-['Poppins-Medium'] text-lg text-[#464851] m-8" >List Responden</Text>
                    {data.map((item, i) => {
                        if (i % 2 === 1) {
                            return (
                                <CardList name={item.nama} instansi={item.instansi} id={item.id} isEven={false} />
                            )
                        } else {
                            return (
                                <CardList name={item.nama} instansi={item.instansi} id={item.id} isEven={true} />
                            )
                        }
                    })}

                </View>
            </ScrollView>


        )

    } else {
        return (
            <View className="justify-center flex-1 items-center">
                <ActivityIndicator size="large" />
                <Text>Loading..</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})