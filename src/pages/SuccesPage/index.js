import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'
import React from 'react'
import Logo from "../../assets/icon/test.svg";
import { useSetRecoilState } from 'recoil';
import { currentIndexState, idRespondenState } from '../../recoil/atom';
import { useNavigation } from '@react-navigation/native';
export default function SuccesPage() {
  const navigation = useNavigation()
  const setCurrentIndex = useSetRecoilState(currentIndexState) 
  const setIdResponden = useSetRecoilState(idRespondenState) 
  const submit = () =>{
      setCurrentIndex(0)
      setIdResponden(0)
      navigation.navigate('FormResponden')
  }
  return (
    <View className="flex-1 flex-col justify-center items-center p-10">
       <Logo></Logo>
       <Text className="font-['Poppins-Medium'] text-[#97979d] text-base text-center p-4 mt-2">Terimakasih telah mengisi kuisioner ini!</Text>
       
       <TouchableOpacity className="px-6 flex-row  my-5 bg-[#365ABE] py-3 w-full rounded-[10px] justify-center" onPress={submit}>
          <Text className="text-center text-white font-['Poppins-SemiBold'] text-lg">Kembali ke beranda</Text>
        </TouchableOpacity>
    </View> 
  )
}

const styles = StyleSheet.create({})