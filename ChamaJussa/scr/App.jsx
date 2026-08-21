import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { styles } from './Style';
import { Perfil } from './pages/perfil/perfil';
import { Login } from './pages/login/login'
import { CriarOS } from './pages/criarOS/criarOS'
import { Cadastro } from './pages/cadastro/cadastro'
import { DetalheOS } from './pages/detalheOS/detalheOS';
import { PainelNotificacoes } from './pages/painelNotificacoes/painelNotificacoes';
import { MinhaOS } from './pages/minhasOS/minhasOS';






export default function App() {
  return (
    <SafeAreaProvider>

      <SafeAreaView style={styles.safeContainer}>

        <View style={styles.container}>

          <DetalheOS/>

          <StatusBar style="auto" />

        </View>

      </SafeAreaView>

    </SafeAreaProvider>

  );
}

