import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView, StyleSheet, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Provider as PaperProvider, Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const products = [
  { id: '1', name: 'Sản phẩm 1', shopName: 'Shop 1', imgPath: 'assets\\canaulau.jpg' },
  { id: '2', name: 'Sản phẩm 2', shopName: 'Shop 2', imgPath: 'https://ggmeo.com/images/linh-thu-dtcl/sona-co-cam-ti-ni.jpg' },
  { id: '3', name: 'Sản phẩm 3', shopName: 'Shop 3', imgPath: 'https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/415753818_877058177538573_9027738771034412362_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6uL__NNgQowQ7kNvgG3JTU7&_nc_ht=scontent.fsgn5-6.fna&_nc_gid=AibGz9FAmJwVN38cPNCB2Rl&oh=00_AYAW_QIy885zmrOPSOqQu9IrNU0cWOqjJkts0xOxk_AMmQ&oe=670052F7' },
  { id: '4', name: 'Sản phẩm 4', shopName: 'Shop 4', imgPath: 'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/458312680_1029483115629411_7512918684098277239_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=3vUAzHLiR5YQ7kNvgHkWNyB&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYCNjwwGryubFTnFOtCDVOuuYr2Zg7prv3qUvlKux3W6AQ&oe=67005AB8' },
  { id: '5', name: 'Sản phẩm 5', shopName: 'Shop 5', imgPath: 'https://ggmeo.com/images/linh-thu-dtcl/yasuo-long-kiem-ti-ni.jpg' },
  { id: '6', name: 'Sản phẩm 6', shopName: 'Shop 6', imgPath: 'https://ggmeo.com/images/linh-thu-dtcl/yone-ta-anh-song-kiem-ti-ni.jpg' },
  { id: '7', name: 'Sản phẩm 7', shopName: 'Shop 7', imgPath: 'https://ggmeo.com/images/linh-thu-dtcl/annie-gau-truc-ti-ni.jpg' },
  { id: '8', name: 'Sản phẩm 8', shopName: 'Shop 8', imgPath: 'https://ggmeo.com/images/linh-thu-dtcl/lux-ve-binh-tinh-tu-ti-ni.jpg' },
  { id: '9', name: 'Sản phẩm 9', shopName: 'Shop 9', imgPath: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDZYMx8oUTloMvFAduZbTuTkHgh5wu3FQwYvF3cCuFEuDxdFfVGLzGmZKoo-h-mEJT6E_5id8jHGLEJhBIhn2bKQuM0wpsq7yn09X5k_DNqZ9xMrxIzNm_JcnyKmKddHMyJ5slqNbkKAByArrgfNImnGrrQyws9e5fAdXbPkJz4nAXbs0HO89_uU8a0h6J/s16000/missfortune-tho-chi-huy-ti-ni.jpg' }, 
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
        {/* Thanh điều hướng trên cùng */}
        <Appbar.Header style={styles.appbar}>
          <Appbar.BackAction onPress={handleBackPress} color="white" />
          <Appbar.Content title="Chat" titleStyle={styles.appbarTitle} />
          <Appbar.Action icon="cart" onPress={handleCartPress} color="white" />
        </Appbar.Header>

        {/* Nội dung chính */}
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
                      <Image source={{ uri: product.imgPath }} style={styles.image} />
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
