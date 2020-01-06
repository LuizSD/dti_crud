import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from "react-native";

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Main extends Component {
    static navigationOptions = {
        title: "DTI Estoque"
    };

    state = {
        docs: []
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        const docs = response.data;

        this.setState({ 
            docs: [...docs]
        });
    }

    deleteProducts = async (id) => {
        await api.delete(`/products/${id}`);

        this.loadProducts();
    }

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>Produto: {item.name}</Text>    
            <Text style={styles.productDescription}>Quantidade: {String(item.amount)}</Text>
            <Text style={styles.productDescription}>Preço: {String(item.price)}</Text>
            
            <View style={styles.productButtonContainer}>
                <TouchableOpacity 
                    style={styles.productButton} 
                    onPress={() => {
                        this.props.navigation.navigate("Product", { product: item })
                    }}
                >
                    <Text style={styles.productButtonText}>Editar</Text>    
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.productButton} 
                    onPress={() => {
                        this.deleteProducts(item.id)
                    }}
                >
                    <Text style={styles.productButtonText}>Excluir</Text>    
                </TouchableOpacity>  
            </View>
        </View>
    )

    render() {
        return (
            
            <View style={{flex:1, backgroundColor: '#f3f3f3'}}>
                <View style={styles.container}>
                    <FlatList
                        contentContainerStyle={styles.list}
                        data={this.state.docs}
                        keyExtractor={item => item.id}
                        renderItem={this.renderItem}
                    />
                </View>
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item 
                        buttonColor='#9b59b6' 
                        title="Novo Produto" 
                        onPress={() => { this.props.navigation.navigate("Product")}}
                    >
                        <Icon name="md-create" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                        <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },

    list: {
        padding: 20
    },

    productContainer: {
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    productButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    productButton: {
        height: 42,
        width: '45%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: "#DA552F",
        fontWeight: "bold"
    },

    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
})