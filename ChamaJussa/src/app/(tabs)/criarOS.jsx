import { Image, Text, TouchableOpacity, View } from "react-native"
import { CriarOSStyle } from "./styles/CriarOSStyle"
import { TextInput } from "react-native"
import { useState } from "react"
import * as ImagePicker from "expo-image-picker";
import { Link } from "expo-router"
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function CriarOS() {

    const [titulo, setTitulo] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [localiza, setLocaliza] = useState("");
    const [descricao, setDescricao] = useState("");
    const [foto, setFoto] = useState(null);





    const criarChamado = async () => {
        try {

            const token = await AsyncStorage.getItem("token");

            const fromdata = new FormData();

            fromdata.append("Titulo", titulo);
            fromdata.append("Descricao", descricao);
            fromdata.append("Equipamento", equipamento);
            fromdata.append("Localizacao", localiza);

            if (foto) {

                console.log("foto selecionada", foto);

                fromdata.append("Foto_OS", { 
                    uri: foto.uri, 
                    name: foto.fileName || "foto.jpg",
                    type: foto.mimeType || "image/jpeg", });

                console.log("imagem adicionada ao fromdata");


            }

            const response = await axios.post("http://172.16.1.179:5228/api/Chamado", fromdata, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
            );

            console.log("Chamado criado:", response.data);


        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log("STATUS:", error.response?.status);
                console.log("RESPOSTA:", error.response?.data);
            } else {
                console.log("ERRO:", error);
            }
        }
    };


    const tirarFoto = async () => {
    const permissao = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissao.granted) {
        alert("Permissão para usar a câmera é necessária.");
        return;
    }

    const resultado = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 0.8,
    });

    console.log("Resultado câmera:", resultado);

    if (!resultado.canceled) {
        console.log("FOTO TIRADA:", resultado.assets[0]);
        setFoto(resultado.assets[0]);
    }
};




    const selecionarFoto = async () => {



        const resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            quality: 0.8
        });

        console.log("Resultado picker: ", resultado);


        if (!resultado.canceled) {

            console.log("IMAGEM ESCOLHIDA:", resultado.assets[0]);

            setFoto(resultado.assets[0]);
        }


    }





    return (




        <View style={CriarOSStyle.Container}>
            <Text style={CriarOSStyle.Text}>Criar ordem de serviço</Text>

            <View style={CriarOSStyle.cardProblema}>
                <Text style={CriarOSStyle.Label}>Título do problema </Text>
                <TextInput
                    style={CriarOSStyle.Input}
                    placeholder="Ex: Vazamento da pia"
                    placeholderTextColor="#999"
                    value={titulo}
                    onChangeText={setTitulo}
                />

                <Text style={CriarOSStyle.Label}>Máquina/Equipamento </Text>
                <TextInput
                    style={CriarOSStyle.Input}
                    placeholder="Ex: Vazamento da pia"
                    placeholderTextColor="#999"
                    value={equipamento}
                    onChangeText={setEquipamento}
                />

                <Text style={CriarOSStyle.Label}>Local/Setor *</Text>
                <TextInput
                    style={CriarOSStyle.Input}
                    placeholder="Ex: Vazamento da pia"
                    placeholderTextColor="#999"
                    value={localiza}
                    onChangeText={setLocaliza}

                />

                <Text style={CriarOSStyle.Label}>Descrição do problema *</Text>
                <TextInput
                    style={CriarOSStyle.inputDescricao}
                    placeholder="Ex: Vazamento da pia"
                    placeholderTextColor="#999"
                    multiline
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <Text style={CriarOSStyle.Label}>Imagem / Foto do problema *</Text>
                <TouchableOpacity style={CriarOSStyle.Input} onPress={tirarFoto}>
                    <Text style={CriarOSStyle.PlaceholderText}>{foto ? "Imagem selecionada" : "Insira Imagem"}</Text>
                </TouchableOpacity>

              


                <TouchableOpacity style={CriarOSStyle.Button} onPress={criarChamado}>
                    <Text style={CriarOSStyle.ButtonText}>Abrir Ordem de Serviço</Text>
                </TouchableOpacity>



            </View>


        </View>
    )
}