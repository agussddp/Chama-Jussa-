import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { DetalheOSStyle } from "../styles/detalheOSStyle";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function DetalheOS() {
    const {
    id,
    equipamento,
    local,
    fotoOsUrl,
    descricao
} = useLocalSearchParams();

    const [os, setOs] = useState(null);

    const router = useRouter()


    useEffect(() => {
        const buscarOS = async () => {
            try {
                const token = await AsyncStorage.getItem("token");

                console.log("ID RECEBIDO:", id);

                const response = await axios.get(
                    `http://172.16.1.179:5228/api/Chamado/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                console.log("OS:", response.data);

                setOs(response.data);

            } catch (error) {
                console.log("ERRO:", error);
            }
        };

        if (id) {
            buscarOS();
        }

    }, [id]);

    if (!os) {
        return (
            <View style={DetalheOSStyle.Container}>
                <Text style={DetalheOSStyle.Text}>
                    Carregando...
                </Text>
            </View>
        );
    }


    return (
        <View style={DetalheOSStyle.Container}>

            <Text style={DetalheOSStyle.Text}>
                Detalhes da OS-1001
            </Text>

            <ScrollView
                contentContainerStyle={DetalheOSStyle.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={DetalheOSStyle.section_card}>

                    <View style={DetalheOSStyle.info_row}>
                        <Image
                            style={DetalheOSStyle.info_icon}
                            source={require("../../../../assets/Ferramenta.png")}
                        />

                        <View style={DetalheOSStyle.caixaTextos}>
                            <Text style={DetalheOSStyle.section__texto3}>
                                Máquina / Equipamento
                            </Text>

                            <Text style={DetalheOSStyle.section__texto2}>
                                {equipamento || "Não informado"}
                            </Text>


                        </View>
                    </View>


                    <View style={DetalheOSStyle.info_row}>
                        <Image
                            style={DetalheOSStyle.info_icon}
                            source={require("../../../../assets/Loc.png")}
                        />

                        <View style={DetalheOSStyle.caixaTextos}>
                            <Text style={DetalheOSStyle.section__texto3}>
                                Local / Setor
                            </Text>

                            <Text style={DetalheOSStyle.section__texto2}>
                                {local}
                            </Text>

                        </View>
                    </View>


                    <View style={DetalheOSStyle.info_row}>
                        <Image
                            style={DetalheOSStyle.info_icon}
                            source={require("../../../../assets/Pessoa.png")}
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
                        source={require("../../../../assets/Line.png")}
                    />

                    <Text style={DetalheOSStyle.section__texto1}>
                        Descrição do Problema:
                    </Text>

                    <Text style={DetalheOSStyle.section__texto3}>
                        {descricao}
                    </Text>

                    <Text style={DetalheOSStyle.section__texto1}>
                        Foto do Problema:
                    </Text>

                    <Image
                        style={DetalheOSStyle.figure_section__img}
                        source={{ 
                            uri: `http://172.16.1.179:5228/imagens/${fotoOsUrl}` }}
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
