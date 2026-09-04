import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { DetalheOSStyle } from "./(tabs)/styles/detalheOSStyle";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function DetalheOS() {

    const {
        id,
        titulo,
        descricao,
        local,
        solicitante,
        equipamento,
        fotoOsUrl
    } = useLocalSearchParams();



    const [os, setOs] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        const buscarOS = async () => {
            try {

                const token = await AsyncStorage.getItem("token");

                const respose = await axios.get(
                    `http://172.16.1.179:8081/api/Chamado/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );



                console.log("OS por id", reponse.data);

             

            } catch (error) {
                console.log("ERRO:", error);
            }
        }


        if (id) {
            buscarOS();
        }
    }, [id]);




    setOs(resposta.data[0]);




    if (carregando) {

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
                <Text>Carregando OS...</Text>
            </View>
        );

    }


    if (!os) {

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Não foi possível encontrar essa OS.</Text>
            </View>
        );

    }

    return (
        <View style={DetalheOSStyle.Container}>

            <Text style={DetalheOSStyle.Text}>
                Detalhes da OS
            </Text>

            <ScrollView
                contentContainerStyle={DetalheOSStyle.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={DetalheOSStyle.section_card}>

                    <View style={DetalheOSStyle.info_row}>
                        <Image
                            style={DetalheOSStyle.info_icon}
                            source={require("../../assets/Ferramenta.png")}
                        />

                        <View style={DetalheOSStyle.caixaTextos}>
                            <Text style={DetalheOSStyle.section__texto3}>
                                Máquina / Equipamento
                            </Text>

                            <Text style={DetalheOSStyle.section__texto2}>
                                {os.equipamento || "Não informado"}
                            </Text>
                        </View>
                    </View>


                    <View style={DetalheOSStyle.info_row}>
                        <Image
                            style={DetalheOSStyle.info_icon}
                            source={require("../../assets/Loc.png")}
                        />

                        <View style={DetalheOSStyle.caixaTextos}>
                            <Text style={DetalheOSStyle.section__texto3}>
                                Local / Setor
                            </Text>

                            <Text style={DetalheOSStyle.section__texto2}>
                                {os.localiza}
                            </Text>

                        </View>
                    </View>


                    <View style={DetalheOSStyle.info_row}>
                        <Image
                            style={DetalheOSStyle.info_icon}
                            source={require("../../assets/Pessoa.png")}
                        />

                        <View style={DetalheOSStyle.caixaTextos}>
                            <Text style={DetalheOSStyle.section__texto3}>
                                Solicitante
                            </Text>

                            <Text style={DetalheOSStyle.section__texto2}>
                                {os.idUsuarioNavigation?.nomeCompleto}
                            </Text>
                        </View>
                    </View>







                    <Image
                        style={DetalheOSStyle.figure_section__img2}
                        source={require("../../assets/Line.png")}
                    />

                    <Text style={DetalheOSStyle.section__texto1}>
                        Descrição do Problema:
                    </Text>

                    <Text style={DetalheOSStyle.section__texto3}>
                        {os.descricao}
                    </Text>

                    <Text style={DetalheOSStyle.section__texto1}>
                        Foto do Problema:
                    </Text>

                    <Image
                        style={DetalheOSStyle.figure_section__img}
                        source={{ uri: `http://172.16.1.179:8081/imagens/${fotoOsUrl}` }}
                    />

                </View>

                <TouchableOpacity style={DetalheOSStyle.user__button}>
                    <Text style={DetalheOSStyle.button_text}>
                        Editar Solicitação
                    </Text>
                </TouchableOpacity>


            </ScrollView>



        </View>
    );
};
