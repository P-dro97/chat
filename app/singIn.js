import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from "react-native";
// importa o react, hooks de estado e referencias para gerenciar os inputs e estado de carregamento
import React, { useRef, useState } from "react";
//importa funçoes para criar layouts responsivos com base no tamanho da tela
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//importa o componente  StatusBar para controlar a barra de status
import { StatusBar } from "expo-status-bar";
//imoporta icones do pacote expo, como icone de email e cadeado paraa senha
import { Octicons } from '@expo/vector-icons'
//importa o hook de navegação de expo-router para navegação entre telas 
import { useRouter } from "expo-router";
//importa componentes personalizados, como carregamento (loading) e o gerenciamento de teclado customizado
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';
//importa o contexto de autenticação para gerenciar o login 
import { useAuth } from '../context/authContext';


//função de componente para a tela de login
export default function SignIn() {
    //Hook de navegação para redirecionar o usuario apos o login
    const router = useRouter();
    //useState para gerenciar o estado de carregamento (loading) enquanto o login é processado
    const [loading, setLoading] = useState(false);
    //Hook do contexto de autenticação, que inclui a função de login 
    const {login} = useAuth();

    //useRef cria referencias para os inputs de email e senha
    const emailRef = useRef("");
    const passWordRef = useRef("");

    //função que lida com processo de login 
    const handleLogin = async () => {
        //verifica se os campos de email e senha estão preenchidos 
        if (!emailRef.current || !passWordRef.current) {
            Alert.alert('Sing In', "Por favor preecha todos os campos");
            return;
        
        }
        //ativa o estado de carregamento e tenta fazer o login com os dados fornecidos
        setLoading(true);
        const response = await login(emailRef.current, passWordRef.current);
        setLoading(false);

        //se o login falhar, exibe uma mensagem de erro
        if (!response.success){
            Alert.alert('Sing In', response.msg)
        }

    }
    return (
        //View customizada para ajustar o layout do teclado ao campo de entrada de texto
        <CustomKeyboardView></CustomKeyboardView>
    )
}