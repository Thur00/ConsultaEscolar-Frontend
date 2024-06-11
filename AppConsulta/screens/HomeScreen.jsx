import { View, Text, Button, StyleSheet } from "react-native";

// Componente principal da tela HomeScreen
export default function HomeScreen({ navigation }) {

    return (
        <View style={styles.container}>
            <Text style={styles.titulo} >CONSULTA ESCOLAR</Text>

            <View style={styles.buts}>
            <Button
                title="Professores"
                onPress={() => navigation.navigate('Professores')}
                color={'#CC0000'}
            />
            </View>

            <View style={styles.buts}>
            <Button
                title="Salas"
                onPress={() => navigation.navigate('Salas')}
                color={'#CC0000'}
            />
            </View>

            <View style={styles.buts}>
            <Button
                title="Alocações"
                onPress={() => navigation.navigate('Alocacoes')}
                color={'#CC0000'}
            />
            </View>

            <View style={styles.buts}>
            <Button
                title="Detalhes"
                onPress={() => navigation.navigate('Detalhes')}
                color={'#CC0000'}
            />
            </View>
        </View>
    );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",

    },
    titulo: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    buts: {
        margin: 25,
        
        color: "red",
    }
});