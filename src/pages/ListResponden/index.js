import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardList from '../../component/CardList'
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';


export default function ListResponden() {
    const [data,setData] = useState();
    const fetchUser = async () => {
        const response = await axios.get('http://10.0.2.2:8000/api/respondens');
        setData(response.data.data.respondens)
    };
    useEffect(() => {
        fetchUser()
    }, [])
    
  return (
    <ScrollView className="flex-1 bg-white">
        <View >
            <Text className="font-['Poppins-Medium'] text-lg text-[#464851] m-8" >List Responden</Text>
            {data.map((item,i)=>{
                if(i%2 === 1){
                return(
                    <CardList name={item.nama} umur={item.usia} isEven={false}/>
                )
                }else{
                    return(
                        <CardList name={item.nama} umur={item.usia} isEven={true}/>
                    )
                }
            })}
        
        </View>
    </ScrollView>
    

  )
}

const styles = StyleSheet.create({})