import { TouchableOpacity, View } from "react-native"
import { minhaOSStyle } from "../styles/minhasOSStyles"

import { ScrollView } from "react-native"
import { Text } from "react-native"
import { Link, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"

export default () => {

    const [listaOS, setListaOS] = useState([])

    const router = useRouter();

    useEffect(() => {
        const buscarOS = async () => {
            try {
                const token = await AsyncStorage.getItem("token");

                const response = await axios.get(
                    "http://172.16.36.23:5228/api/Chamado",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },

                    }
                );

                console.log("Os REcebidas:", response.data)

                setListaOS(response.data)

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log("STATUS:", error.response?.status);
                    console.log("ERRO DA API:", error.response?.data);
                } else {
                    console.log("ERRO:", error);
                }
            }

        }

        buscarOS();
    }, []);

    return (

        <View style={minhaOSStyle.Container}>
            <ScrollView>
                <View style={minhaOSStyle.section_card}>

                    <View style={minhaOSStyle.header}>
                        <Text style={minhaOSStyle.section__texto3}>
                            Olá, Beatriz
                        </Text>

                        <Link href="/criarOS" asChild>
                            <TouchableOpacity style={minhaOSStyle.user__button1}>
                                <Text style={minhaOSStyle.button_text1}>
                                    Nova OS
                                </Text>
                            </TouchableOpacity>
                        </Link>
                    </View>


                    <Text style={minhaOSStyle.info_text}>
                        Minhas OS's
                    </Text>


                    <View style={minhaOSStyle.button__box}>
                        <TouchableOpacity style={minhaOSStyle.user__button3}>

                            <Text style={minhaOSStyle.button_text2}>
                                Todos
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={minhaOSStyle.user__button}>
                            <Text style={minhaOSStyle.button_text}>
                                Abertas
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={minhaOSStyle.user__button2}>
                            <Text style={minhaOSStyle.button_text}>
                                Andamento
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={minhaOSStyle.user__button4}>
                        <Text style={minhaOSStyle.button_text}>
                            Concluidas
                        </Text>
                    </TouchableOpacity>

                </View>

                {listaOS.map((os) => {
                      {console.log(os)}
                      console.log("FOTO RECEBIDA DO GET:", os.fotoOsUrl);
                    return (

                  
                        <TouchableOpacity
                            key={os.idChamado}
                            onPress={() => {
                                router.push({
                                    pathname: "/[id]",
                                    params: {
                                        id: os.idChamado,
                                        titulo: os.titulo,
                                        descricao: os.descricao,
                                        solicitante: os.idUsuarioNavigation?.nomeCompleto ?? "Nao informado",
                                        local: os.localiza,
                                        equipamento: os.equipamento,
                                        
                                        fotoOsUrl: os.fotoOsUrl
                                    }   



                                })

                            }}>

                            <View style={minhaOSStyle.section_card2}>

                                {/* <View style={minhaOSStyle.info_row}> */}





                                <View style={minhaOSStyle.header_card}>

                                    <Text style={minhaOSStyle.section__texto2}>
                                        OS - {os.idChamado.substring(0, 3)}
                                    </Text>
                                    {/* <Link href="/detalheOS" asChild> */}
                                    <TouchableOpacity style={minhaOSStyle.user__button5}>
                                        <Text style={minhaOSStyle.button_text1}>
                                            {os.statusOs}
                                        </Text>
                                    </TouchableOpacity>
                                    {/* </Link> */}
                                </View>

                                <Text style={minhaOSStyle.section__texto1}>
                                    {os.titulo}
                                </Text>

                                <Text style={minhaOSStyle.Text}>
                                    {os.descricao}
                                </Text>

                                {/* </View> */}
                            </View>
                        </TouchableOpacity>
                    )

                })}


            </ScrollView>

        </View>

    )


}