import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native';
import { Card, Provider as PaperProvider, Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const products = [
  { id: 1, name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 60000,discount: 39,image: require('./assets/daucam.png'), rating: 4 },
  { id: 2, name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 20000,discount: 39,image: require('./assets/dauchuyendoi.png'), rating: 3.5 },
  { id: 3, name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 20000,discount: 39,image: require('./assets/dauchuyendoi2.png'), rating: 5 },
  { id: 4, name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 20000,discount: 39,image: require('./assets/daycap.png'), rating: 4.5 },
  { id: 5, name: 'Cáp chuyển từ Cổng USB sang PS2...', price: 20000,discount: 39,image: require('./assets/daynguoin.png'), rating: 3 },
  { id: 6, name: 'Cáp chuyển từ Cổng USB sang PS2', price: 20000,discount: 39,image: require('./assets/giacchuyen.png'), rating: 2.5 },
];

const TowColumnGrid = ({ products }) => {
  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <Card key={product.id} style={{ width: '50%', padding: 10, flexDirection:'column', borderRadius:0}}>
            <Card.Cover style={{borderRadius: 0}} source={product.image} />
            <Card.Content>
            <Text>{product.name}</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                {[...Array(5)].map((_, index) => (
                  <MaterialCommunityIcons
                    key={index}
                    name={
                      index < Math.floor(product.rating)
                        ? 'star'
                        : index < product.rating
                        ? 'star-half-full'
                        : 'star-outline'
                    }
                    size={20}
                    color='gold'
                  />
                ))}
                <Text style={{ marginLeft: 5 }}>({product.rating})</Text>
                
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(product.price)}
                </Text>
                <Text style={{paddingLeft: 30, color: 'gray'}}>-{product.discount}%</Text>
              </View>
            </Card.Content>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};


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
const handleThreeDots = () => {
  console.log('Three dots button pressed');
};

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>

      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={handleBackPress} color="white" />
        
        <View style={styles.searchContainer}>
          <MaterialCommunityIcons name="magnify" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholderTextColor="gray"
          />
        </View>
        
        <Appbar.Action icon="cart" onPress={handleCartPress} color="white" />
        <Appbar.Action icon="dots-horizontal" onPress={handleThreeDots} color="white" />
      </Appbar.Header>

      <TowColumnGrid products={products} />

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
    backgroundColor: '#fff',
  },
  appbar: {
    backgroundColor: '#3498db',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appbarTitle: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
  },
  searchInput:{
    height:40,
    width: 100,
    backgroundColor: 'white',
  },
  searchContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
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
