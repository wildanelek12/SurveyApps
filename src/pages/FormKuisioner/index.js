import { View, Text, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import RadioButton from '../../component/RadioButton'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { getQuestion } from '../../recoil/selector';
import { currentIndexState, idRespondenState } from '../../recoil/atom';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function FormKuisioner() {
    const [isSelected, setIsSelected] = useState(0);
    const [currentIndex, setCurrentIndex] = useRecoilState(currentIndexState)
    const [questions, setQuestions] = useState(getQuestion);
    const [loading, setLoading] = useState(true);
    const [question_id, setIdQuestion] = useState(0);
    const [totalQuestion, setTotalQuestions] = useState()
    const [jawaban, setJawaban] = useState("")
    const responden_id = useRecoilValue(idRespondenState);
    const navigation = useNavigation();


    const fetchUser = async () => {
        setLoading(true)
        const response = await axios.get('http://survey.wildanromiza.com/api/questions');
        setQuestions(response.data.data.questions)
        setTotalQuestions(response.data.data.total)
        setLoading(false)
        setIdQuestion(response.data.data.questions[0].id)
    };

    useEffect(() => {
        fetchUser()
    }, [])




    const submit = () => {
        if (currentIndex + 1 === totalQuestion) {
            alert('last')
            setIdQuestion(questions[currentIndex].id)
            navigation.navigate("SuccesPage")
        } else {
            setIsSelected(0)
            setCurrentIndex(currentIndex + 1)
            setIdQuestion(questions[currentIndex + 1].id)
        }
        const data = {
            responden_id,
            question_id,
            jawaban
        }
        axios.post('http://survey.wildanromiza.com/api/answers', data)
            .then(res => {
                setJawaban("")

            }).catch((error) => {
                console.log(error);
            })


        console.log(currentIndex)

    }

    if (loading) {
        return (
            <View className="justify-center flex-1 items-center">
                <ActivityIndicator size="large" />
                <Text>Loading..</Text>
            </View>
        )
    } else {
        return (
            <View className="flex p-10">
                <View className="flex-row ">
                    <Text className="flex-1 text-left font-['Poppins-Medium'] text-[#929698]">{currentIndex + 1}/{totalQuestion}</Text>
                    <Text className="flex-1 text-right font-['Poppins-SemiBold'] text-[#929698]">Context</Text>
                </View>
                <Text className="text-[#151522] font-['Poppins-Regular'] text-justify text-base mt-2">
                    {questions[currentIndex].pertanyaan}
                </Text>

                <View className="mt-2">
                    <TouchableOpacity onPress={
<<<<<<< Updated upstream
                        () => { setIsSelected(1); setJawaban("Sangat Tidak Diperlukan") }}>
                        <RadioButton name="Sangat Tidak Diperlukan" isSelected={isSelected === 1 ? true : false} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => { setIsSelected(2); setJawaban("Tidak Diperlukan") }}>
                        <RadioButton name="Tidak Diperlukan" isSelected={isSelected === 2 ? true : false} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => { setIsSelected(3); setJawaban("Kurang Diperlukan") }}>
                        <RadioButton name="Kurang Diperlukan" isSelected={isSelected === 3 ? true : false} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => { setIsSelected(4); setJawaban("Diperlukan") }}>
                        <RadioButton name="Diperlukan" isSelected={isSelected === 4 ? true : false} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => { setIsSelected(5); setJawaban("Sangat Diperlukan") }}>
                        <RadioButton name="Sangat Diperlukan" isSelected={isSelected === 5 ? true : false} />
=======
                        () => {setIsSelected(1); setJawaban("Sangat Tidak Diperlukan") }}>
                        <RadioButton name="Sangat Tidak Diperlukan" isSelected={isSelected === 1 } />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => {setIsSelected(2); setJawaban("Tidak Diperlukan") }}>
                        <RadioButton name="Tidak Diperlukan" isSelected={isSelected === 2 } />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => {setIsSelected(3); setJawaban("Kurang Diperlukan") }}>
                        <RadioButton name="Kurang Diperlukan" isSelected={isSelected === 3 } />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => {setIsSelected(4); setJawaban("Diperlukan") }}>
                        <RadioButton name="Diperlukan" isSelected={isSelected === 4 } />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={
                        () => {setIsSelected(5); setJawaban("Sangat Diperlukan") }}>
                        <RadioButton name="Sangat Diperlukan" isSelected={isSelected === 5 } />
>>>>>>> Stashed changes
                    </TouchableOpacity>
                </View>
                <TouchableOpacity className="px-6 my-5 bg-[#365ABE] py-3  rounded-[10px]" onPress={submit}>
                    <Text className="text-center text-white font-['Poppins-SemiBold']">Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}