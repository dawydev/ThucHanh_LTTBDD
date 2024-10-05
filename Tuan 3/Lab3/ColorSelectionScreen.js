import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import products from './productData';  // Import dữ liệu từ productData.js

const ColorSelectionScreen = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[1]);  // Bắt đầu với màu xanh (id=1)
  const navigation = useNavigation();

  const handleColorSelect = (color) => {
    const product = products.find(p => p.color === color);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const handleDone = () => {
    navigation.navigate('ProductCard', { 
      color: selectedProduct.color, 
      colorImage: selectedProduct.img 
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Image style={styles.productImage} source={selectedProduct.img} />
      </View>

      <Text style={styles.title}>Chọn một màu bên dưới:</Text>

      <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.colorOption1} onPress={() => handleColorSelect('Bạc')} />
        <TouchableOpacity style={styles.colorOption2} onPress={() => handleColorSelect("Đỏ")} />
        <TouchableOpacity style={styles.colorOption3} onPress={() => handleColorSelect('Đen')} />
        <TouchableOpacity style={styles.colorOption4} onPress={() => handleColorSelect('Xanh')} />
      </View>

      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  colorOption1: {
    padding: 10,
    backgroundColor: '#C5F1FB',
    width: 70,
    height: 70,
    marginTop: 15,
  },
  colorOption2: {
    padding: 10,
    backgroundColor: '#F30D0D',
    width: 70,
    height: 70,
    marginTop: 15,
  },
  colorOption3: {
    padding: 10,
    backgroundColor: '#000000',
    width: 70,
    height: 70,
    marginTop: 15,
  },
  colorOption4: {
    padding: 10,
    backgroundColor: '#D3D3D3',
    width: 70,
    height: 70,
    marginTop: 15,
  },
  productContainer: {
    height: 200,
    width: '100%',
    backgroundColor: '#ddd',
  },
  doneButton: {
    backgroundColor: '#1952E294',
    padding: 10,
    height: 40,
    width: '100%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});

export default ColorSelectionScreen;
