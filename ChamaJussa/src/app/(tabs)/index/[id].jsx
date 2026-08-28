import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { DetalheOSStyle } from "../styles/detalheOSStyle";
import { useLocalSearchParams } from "expo-router";


export default function DetalheOS() {
    const {id, titulo, descricao, local, solicitante} = useLocalSearchParams();

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
                                Cadeira quebrada
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
                                {solicitante}
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
                        source={require("../../../../assets/Cadeira-quebrada.png")}
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
