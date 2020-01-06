import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native"

class Product extends Component {
    navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.product.title
    });

    renderInput= (productName, productAmount) => (
        <View style={styles.container}>
            <TextInput
                style={styles.produtInput}
                value={productName}
            />

            <TextInput
                style={styles.produtInput}
                value={productAmount}
            />

            <TouchableOpacity 
                style={styles.productButton} 
                onPress={() => {
                    this.props.navigation.navigate("Product", { product: item })
                }}
            >
                <Text style={styles.productButtonText}>Salvar</Text>    
            </TouchableOpacity>  
        </View>
    )

    render() {
        const { navigation } = this.props;
        return (
            this.renderInput(navigation.state.params.product.title, '2')
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