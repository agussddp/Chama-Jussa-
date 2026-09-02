import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { DetalheOSStyle } from "./(tabs)/styles/detalheOSStyle";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { ActivityIndicator } from "react-native/types_generated/index";

export default function DetalheOS() {

    const { id } = useLocalSearchParams();

    const [os, setOs] = useState(null);
    const [carregando, setCarregando] = useState(true);

    useEffect(() => {
        buscarOS();
    }, []);


    const buscarOS = async () => {
        try {

            const token = await AsyncStorage.getItem("token");

            const resposta = await axios.get(
                `http://192.168.0.244:5000/api/Chamado/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            console.log("OS RECEBIDA:", resposta.data);

            setOs(resposta.data);

        } catch (error) {

            console.log(
                "ERRO AO BUSCAR OS:",
                error.response?.data || error
            );
        } finally {
            setCarregando(false);
        }
    }

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
                                Cadeira quebrada
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
                                {os.localizacao}
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
                                Beatriz Andrade
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
                        source={require("../../assets/Cadeira-quebrada.png")}
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
