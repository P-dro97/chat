import { View, Text, ActivityIndicator } from 'react-native' //importando os componentes essenciais do react native para estruturar a tel de carregamento 
import React from 'react' //importa o react para criar os componentes funcionais



// função de componente de exibe uma tela inicial com um indicador de carregamento 
export default function StartPage() {
    return (
        //View principal com estilo de flexbox para centralizar o conteudo na tela
        <View style={{ flex: 1, justifyContent: 'center' }}>
            {/*exibe uma indicador de atividade circurlar, mostrnado ao usuario que algo está carregando*/}
            <ActivityIndicator size="large" color="gray" />
        </View>
    )
}
export default function index() {
    return (
        <View>
            <Text>index</Text>
        </View>
    )
}