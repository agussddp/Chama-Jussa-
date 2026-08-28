import { TouchableOpacity, View } from "react-native"
import { minhaOSStyle } from "../styles/minhasOSStyles"

import { ScrollView } from "react-native"
import { Text } from "react-native"
import { Link, useRouter } from "expo-router"
import { useState } from "react"

export default () => {

    const [listaOS, setListaOS] = useState([

        { id: '001', titulo: "Vazamento hidráulico no Bloco B", descricao: "Há um vazamento constante de água por baixo da pia do banheiro masculino do segundo andar do Bloco B. Está alagando o chão e causando risco de queda.", status: "Aberta", local: "Banheiro Masculino - Bloco B - 2º Andar", solicitante: "Diogo Aldrovandi" },
        { id: '002', titulo: "Cadeira quebrada no Bloco A", descricao: " Foi identificada uma cadeira quebrada no Bloco A no 1º Andar, apresentando danos que comprometem sua utilização e segurança. Solicita-se a avaliação e,se necessário, o reparo ou substituição da cadeira.", status: "Andamento", local: "Sala de Aula - Bloco A - 1º Andar", solicitante: "Giulia Marzano" },
        { id: '003', titulo: "Notebook não liga no Bloco T", descricao: "Notebook localizado no Bloco T não liga. Ao tentar realizar a inicialização, o equipamento não apresenta sinais de funcionamento, não acende os indicadores e não inicia o sistema operacional.", status: "Aberta", local: " Biblioteca - Bloco T - 1º Andar", solicitante: "Beatriz Andrade" },

    ])

    const router = useRouter();


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
                    return (
                        <TouchableOpacity  key={os.id} onPress={() => {
                            router.push({
                                pathname: "/[id]",
                                params: {
                                id: os.id,
                                titulo: os.titulo,
                                descricao: os.descricao,
                                solicitante: os.solicitante,
                                local: os.local

                                }



                            })

                        }}>

                            <View style={minhaOSStyle.section_card2}>

                                <View style={minhaOSStyle.info_row}>





                                    <View style={minhaOSStyle.header_card}>

                                        <Text style={minhaOSStyle.section__texto2}>
                                            OS - {os.id}
                                        </Text>
                                        {/* <Link href="/detalheOS" asChild> */}
                                        <TouchableOpacity style={minhaOSStyle.user__button5}>
                                            <Text style={minhaOSStyle.button_text1}>
                                                {os.status}
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

                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                })}


            </ScrollView>
          
        </View>

    )


}