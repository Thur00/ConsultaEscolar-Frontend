// Importa bibliotecas necessárias do React e React Native
import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, StyleSheet } from 'react-native';

// Define a URL base da API, ajuste conforme necessário
const API_URL = "http://10.136.42.48:3000/consulta"; // Ajuste para o seu IP

// Componente principal da tela SearchScreen
export default function DetalhesScreen() {

    const [id, setId] = useState('');
    const [detalhe, setDetalhe] = useState(null);
    const [detalhes, setDetalhes] = useState([]); // Estado para a lista de produtos
    const [error, setError] = useState(null); // Estado para erros

    // Função para buscar um produto específico na API
    const PesquisaDetalhe = async () => {
        try {
            const response = await fetch(`${API_URL}/detalhes/${id}`); // Faz a requisição GET para a API com o ID do produto
            if (!response.ok) {
                const errorResponse = await response.text(); // Lê a resposta de erro
                throw new Error(errorResponse); // Lança um erro com a resposta
            }
            const data = await response.json(); // Converte a resposta para JSON
            if (Array.isArray(data) && data.length > 0) {
                setDetalhe(data[0]); // Atualiza o estado com o produto buscado
            } else {
                setDetalhe(null) // Reseta o estado do detalhe especifico 
                setError("Detalhe não encontrado"); // Define a mensagem de erro
            }

            {/*setDetalhe(data[0]); // Atualiza o estado com o produto buscado*/ }

            setError(null); // Reseta o estado de erro
        } catch (error) {
            console.error("Erro ao buscar detalhe:", error); // Loga o erro no console
            setError("Detalhe não encontrado"); // Define a mensagem de erro
            setDetalhe(null); // Reseta o estado do produto
        }
    };

    // Função para buscar todos os produtos na API
    const fetchAllDetalhes = async () => {
        try {
            const response = await fetch(`${API_URL}/detalhes`); // Faz a requisição GET para a API
            if (!response.ok) {
                const errorResponse = await response.text(); // Lê a resposta de erro
                throw new Error(errorResponse); // Lança um erro com a resposta
            }
            const data = await response.json(); // Converte a resposta para JSON
            setDetalhes(data); // Atualiza o estado com a lista de professores
            setDetalhe(null)
            setError(null); // Reseta o estado de erro
        } catch (error) {
            console.error("Erro ao encontrar todos os detalhes:", error); // Loga o erro no console
            setError("Não foi possível encontrar os detalhes."); // Define a mensagem de erro
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o ID do detalhe"
                value={id}
                onChangeText={setId}
                keyboardType="numeric"
            />
            {/* Botão para buscar um produto específico */}
            <Button title="Pesquisar" onPress={PesquisaDetalhe}
                color={'#CC0000'} />
            {/* Botão para buscar todos os professores */}
            <Button title="Consultar" onPress={fetchAllDetalhes}
                color={'#CC0000'} />
            {/* Exibe a lista de professores, se existir */}
            {detalhe && (
                <View style={styles.detalhes2}>

                    <View style={styles.box}>
                        <Text style={styles.texto}>Nome Professor: </Text>
                        <Text>{detalhe.professor}</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.texto}>Nome Sala: </Text>
                        <Text>{detalhe.sala}</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.texto}>Bloco: </Text>
                        <Text>{detalhe.bloco}</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.texto}>Dia da semana: </Text>
                        <Text>{detalhe.dia}</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.texto}>Período: </Text>
                        <Text>{detalhe.período}</Text>
                    </View>
                </View>
            )}
            {detalhes.length > 0 && (
                <FlatList
                    data={detalhes} // Dados da lista de professores
                    keyExtractor={(item) => item.id_prof.toString()} // Função para extrair a chave de cada item
                    renderItem={({ item }) => (
                        <View style={styles.detalhes}>

                            <View style={styles.box}>
                                <Text style={styles.texto}>Prosfessor: </Text>
                                <Text>{item.professor}</Text>
                            </View>

                            <View style={styles.box}>
                                <Text style={styles.texto}>Sala: </Text>
                                <Text>{item.sala}</Text>
                            </View>

                            <View style={styles.box}>
                                <Text style={styles.texto}>Bloco: </Text>
                                <Text>{item.bloco}</Text>
                            </View>

                            <View style={styles.box}>
                                <Text style={styles.texto}>Dia da semana: </Text>
                                <Text>{item.dia}</Text>
                            </View>

                            <View style={styles.box}>
                                <Text style={styles.texto}>Período: </Text>
                                <Text>{item.período}</Text>
                            </View>

                        </View>

                    )}
                />
            )}
            {/* Exibe a mensagem de erro, se existir */}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

// Estilos para os componentes da tela
const styles = StyleSheet.create({
    container: {
        flex: 1, // Ocupa todo o espaço disponível
        padding: 20, // Espaçamento interno
        backgroundColor: "#fff", // Cor de fundo branca
    },
    detalhes: {
        padding: 10, // Espaçamento interno
        marginTop: 20, // Margem superior
        borderColor: "#ccc", // Cor da borda inferior
        borderWidth: 1, // Largura da borda inferior
    },
    detalhes2: {
        padding: 10, // Espaçamento interno
        marginTop: 20, // Margem superior
        marginBottom: 20, // Margem inferior
        borderColor: "#CC0000", // Cor da borda inferior
        borderWidth: 1, // Largura da borda inferior
    },
    error: {
        color: 'red', // Cor do texto do erro
        marginTop: 20, // Margem superior
    },
    input: {
        height: 40, // Altura do input
        borderColor: "#ccc", // Cor da borda
        borderWidth: 1, // Largura da borda
        marginBottom: 10, // Margem inferior
        padding: 10, // Espaçamento interno
    },
    texto: {
        fontWeight: "bold",
    },
    box: {
        display: "flex",
        flexDirection: "row",
    },
});