import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { idRespondenState } from '../../recoil/atom';
import { useRecoilState } from 'recoil';
import { useNavigation } from '@react-navigation/native';

export default function FormResponden() {
    const [respondens, setRespondens] = useState("");
    const [nama, setNama] = useState("");
    const [handphone, setHandphone] = useState("");
    const [nip, setNip] = useState("");
    const [usia, setUsia] = useState("");
    const [pendidikan, setPendidikan] = useState("");
    const [instansi, setInstansi] = useState("");
    const [jabatan, setJabatan] = useState("");
    const [idResponden, setIdResponden] = useRecoilState(idRespondenState);
    const navigation = useNavigation();


    const submit = () => {
        const data = {
            nama ,
            handphone,
            nip,
            usia,
            pendidikan,
            instansi,
            jabatan
        }
        console.log("Data sebelum dikirim ", data);
        axios.post('http://survey.wildanromiza.com/api/respondens', data)
            .then(res => {
                setIdResponden(res.data.data.respondens.id)
                navigation.navigate('FormKuisioner')
            }).catch((error) => {
                console.log(error);
            })
    }



    return (
        <>
        <ScrollView>
            <View className="justify-center flex-1 mt-8">
                <Text className="text-[#525263] font-['Poppins-SemiBold'] text-lg text-center">Formulir Identitas Responden</Text>

                <View className="flex-col px-5 mt-4">
                    <Text className="font-['Poppins-Medium'] text-[#525263] mt-1">Nama Lengkap</Text>
                    <TextInput
                        className="rounded-lg border-2 border-slate-300 px-4" value={nama} onChangeText={(value) => setNama(value)}
                    />
                    <Text className="font-['Poppins-Medium'] text-[#525263] mt-1 ">No Handphone</Text>
                    <TextInput
                        className="rounded-lg border-2 border-slate-300 px-4" value={handphone} onChangeText={(value) => setHandphone(value)}
                    />
                    <Text className="font-['Poppins-Medium'] text-[#525263] mt-1">NIP (Opsional)</Text>
                    <TextInput
                        className="rounded-lg border-2 border-slate-300 px-4" value={nip} onChangeText={(value) => setNip(value)}
                    />
                    <Text className="font-['Poppins-Medium'] text-[#525263] mt-1">Usia</Text>
                    <TextInput
                        className="rounded-lg border-2 border-slate-300 px-4" value={usia} onChangeText={(value) => setUsia(value)}
                    />
                    <Text className="font-['Poppins-Medium'] text-[#525263] mt-1">Pendidikan Terakhir</Text>
                    <TextInput
                        className="rounded-lg border-2 border-slate-300 px-4" value={pendidikan} onChangeText={(value) => setPendidikan(value)}
                    />
                    <Text className="font-['Poppins-Medium'] text-[#525263] mt-1">Instansi</Text>
                    <TextInput
                        className="rounded-lg border-2 border-slate-300 px-4" value={instansi} onChangeText={(value) => setInstansi(value)}
                    />
                    <Text className="font-['Poppins-Medium'] text-[#525263] mt-1">Jabatan</Text>
                    <TextInput
                        className="rounded-lg border-2 border-slate-300 px-4" value={jabatan} onChangeText={(value) => setJabatan(value)}
                    />
                </View>
                <TouchableOpacity className="px-6 my-5 bg-[#365ABE] py-3 mx-10 rounded-[10px]" onPress={submit}>
                    <Text className="text-center text-white font-['Poppins-SemiBold']">Submit</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
        </>
    )
}