import React, { Component } from 'react';
import api from '../services/api';

import { View, Text, TouchableOpacity, StyleSheet, TextInput, BackHandler } from "react-native"

class Product extends Component {

    state = {
        productId: "",
        productName: "",
        productAmount: "",
        productPrice: ""
    }
    
    componentWillMount(){
        const { navigation } = this.props;
        
        if (navigation.state.params) {
            this.setState({
                productId: navigation.state.params.product.id,
                productName : navigation.state.params.product.name,
                productAmount : navigation.state.params.product.amount,
                productPrice : navigation.state.params.product.price
            });
        }
    }

    handleButtomAction = () => {
        if (this.state.productId) {
            this.updateProducts();
        } else {
            this.insertProducts();
        }
    }

    insertProducts = async () => {
        await api.post(
            `/products/`, 
            {
                name: this.state.productName, 
                amount: this.state.productAmount, 
                price: this.state.productPrice
            }
        );
    }

    updateProducts = async () => {
        await api.put(
            `/products/${this.state.productId}`, 
            {
                name: this.state.productName, 
                amount: this.state.productAmount, 
                price: this.state.productPrice
            }
        );
    }

    renderInput= () => (
        <View style={styles.container}>
            <TextInput
                style={styles.produtInput}
                value={this.state.productName}
                onChangeText = {(productName) => {this.setState({productName})}}
                placeholder = "Nome do Produto"
                placeholderTextColor = "#8B8989"
            />

            <TextInput
                style={styles.produtInput}
                value={String(this.state.productAmount)}
                onChangeText = {(productAmount) => {this.setState({productAmount})}}
                placeholder = "Quantidade"
                placeholderTextColor = "#8B8989"
            />

            <TextInput
                style={styles.produtInput}
                value={String(this.state.productPrice)}
                onChangeText = {(productPrice) => {this.setState({productPrice})}}
                placeholder = "Preço"
                placeholderTextColor = "#8B8989"
                
            />

            <TouchableOpacity 
                style={styles.productButton} 
                onPress={() => {
                    this.handleButtomAction()
                }}
            >
                <Text style={styles.productButtonText}>Salvar</Text>    
            </TouchableOpacity>  
        </View>
    )

    render() {
        return (
            this.renderInput()
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
        justifyContent: 'center'
    },

    produtInput: {
        height: 40, 
        borderColor: 'gray', 
        borderWidth: 1,
        marginBottom: 10
    },

    productButton: {
        height: 42,
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
    }
})

export default Product;