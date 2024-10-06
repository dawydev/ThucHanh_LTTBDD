import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Provider as PaperProvider, Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const products = [
  { id: '1', name: 'Ca nấu lẩu nấu mì mini...', shopName: 'DeVang', imgPath: require('./assets/canaulau.png') },
  { id: '2', name: 'Sản phẩm 2', shopName: 'LTD Food', imgPath: require('./assets/khogabotoi.png') },
  { id: '3', name: 'Sản phẩm 3', shopName: 'Thế giới đồ chơi', imgPath: require('./assets/xecancau.png') },
  { id: '4', name: 'Sản phẩm 4', shopName: 'Thế giới đồ chơi', imgPath: require('./assets/dochoimohinh.png') },
  { id: '5', name: 'Sản phẩm 5', shopName: 'Minh Long Book', imgPath: require('./assets/sachlanhdao.png') },
  { id: '6', name: 'Sản phẩm 6', shopName: 'Minh Long Book', imgPath: require('./assets/hieulongcontr.png') },
  { id: '7', name: 'Sản phẩm 7', shopName: 'Minh Long Book', imgPath: require('./assets/trump.png') },
];

export default function App() {
  const handleBackPress = () => {
    console.log('Back button pressed');
  };  

  const handleCartPress = () => {
    console.log('Cart button pressed');
  };

  const handleMenuPress = () => {
    console.log('Menu button pressed');
  };

  const handleHomePress = () => {
    console.log('Home button pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile button pressed');
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <Appbar.Header style={styles.appbar}>
          <Appbar.BackAction onPress={handleBackPress} color="white" />
          <Appbar.Content title="Chat" titleStyle={styles.appbarTitle} />
          <Appbar.Action icon="cart" onPress={handleCartPress} color="white" />
        </Appbar.Header>

        <View style={styles.mainContent}>
          <Text style={styles.text}>
            Bạn có thắc mắc về sản phẩm vừa xem? Đừng ngại chat với shop
          </Text>
          <ScrollView>
            {products.map(product => (
              <Card key={product.id} style={styles.card}>
                <Card.Content>
                  <View style={styles.imageContainer}>
                    {product.imgPath && (
                      <Image source={product.imgPath} style={styles.image} />
                    )}
                    <View style={styles.shopandproductName}>
                      <Text style={styles.productName}>{product.name}</Text>
                      <Text style={styles.shopLabel}>
                        Shop: <Text style={styles.shopName}>{product.shopName}</Text>
                      </Text>
                    </View>
                    <View style={styles.chatButtonContainer}>
                      <TouchableOpacity style={styles.chatButton}>
                        <Text style={styles.textChatButton}>Chat</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </View>

        {/* Thanh điều hướng dưới cùng */}
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={handleMenuPress} style={styles.navItem}>
            <MaterialCommunityIcons name="menu" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHomePress} style={styles.navItem}>
            <MaterialCommunityIcons name="home" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleProfilePress} style={styles.navItem}>
            <MaterialCommunityIcons name="account" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  appbar: {
    backgroundColor: '#3498db',
  },
  appbarTitle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  mainContent: {
    flex: 1,
    padding: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  card: {
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopandproductName: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  productName: {
    fontSize: 15,
    color: 'black',
  },
  shopLabel: {
    paddingTop: 10,
    fontSize: 14,
    color: 'gray',
  },
  shopName: {
    fontSize: 14,
    color: 'black',
  },
  chatButtonContainer: {
    paddingLeft: 10,
  },
  chatButton: {
    backgroundColor: 'red',
    width: 80,
    padding: 10,
    borderRadius: 4,
    marginTop: 10,
    alignItems: 'center',
  },
  textChatButton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#3498db',
    height: 50,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});