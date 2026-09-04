import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { LoginStyle } from "./(tabs)/styles/loginStyle";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Login() {

    const [emailDigitado, SetemailDigitado] = useState("")
    const [senhaDigitada, SetSenhaDigitada] = useState("")

    const router = useRouter();

    const fazerLogin = async () => {
        try {
            const fromData = new FormData();

            fromData.append("Email", emailDigitado);
            fromData.append("Senha", senhaDigitada);

            const response = await axios.post("http://172.16.36.23:5228/api/Login",fromData);

            const token = response.data.token;
            await AsyncStorage.setItem("token", token);
            const usuario = response.data.usuario;

            console.log("Token recebido:", token);
            console.log("Foto:", usuario.fotoPerfilUrl);


            router.push({
                pathname: "/perfil",
                params: {
                    nome: usuario.nomeCompleto,
                    email: usuario.email,
                    foto: usuario.fotoPerfilUrl ?? ""

                }
                
            });

        } catch (error) {
            console.log("Erro no login", error);
            
        }
    }

    return (
        <View style={LoginStyle.main_section}>

            <Image style={LoginStyle.figure_section__img} source={require("../../assets/Jussa-Logo.png")} />


            <View style={LoginStyle.section_card}>



                <View style={LoginStyle.header_section}>

                    <Text style={LoginStyle.header_section__titulo}>Chama Jussa</Text>

                    <Text style={LoginStyle.header_section__subtitulo}>Gerenciamento de Ordens e Serviços</Text>

                </View>

                <View action="" style={LoginStyle.login_user}>

                    <Text style={LoginStyle.text_input}>E-mail</Text>



                    <TextInput
                        style={LoginStyle.login_user__input}
                        placeholder="Digite seu Email"
                        placeholderTextColor="#0000005d"
                        value={emailDigitado}
                        onChangeText={SetemailDigitado}
                    />



                    <Text style={LoginStyle.text_input}>Senha</Text>

                    <TextInput
                        style={LoginStyle.login_user__input}
                        placeholder="Digite sua Senha"
                        placeholderTextColor="#0000005d"
                        value={senhaDigitada}
                        onChangeText={SetSenhaDigitada}
                    />
                    
                    
                        <TouchableOpacity style={LoginStyle.login_user__button} onPress={fazerLogin}>
                            <Text style={LoginStyle.login_user__button_text}>
                                Acessar o sistema
                            </Text>
                        </TouchableOpacity>
                    



                </View>



            </View>

        </View>
    )
}