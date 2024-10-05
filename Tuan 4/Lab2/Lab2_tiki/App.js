import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const basePrice = 149000;
  const formatPrice = basePrice.toLocaleString('vi-VN');
  const [voucher, setVoucher] = useState('');
  const [discount, setDiscount] = useState(0);
  const [unit, setUnit] = useState(1);
  const total = ((basePrice * unit) - (basePrice * unit) * discount).toLocaleString('vi-VN');
  const [appliedVoucher, setAppliedVoucher] = useState('');

  // Hàm tăng số lượng
  const increaseUnit = () => {
    setUnit(prevUnit => prevUnit + 1);
  };

  // Hàm giảm số lượng
  const decreaseUnit = () => {
    if (unit > 1) {
      setUnit(prevUnit => prevUnit - 1);
    }
  };

  // Hàm mở đường liên kết chứa voucher
  const handlePress = () => {
    Linking.openURL('https://tiki.vn/');
  };

  const muaSau = () => {
    Linking.openURL('https://tiki.vn/');
  };

  const applyVoucher = () => {
    if (voucher === 'SALE2024') {
      setDiscount(0.2); // Giảm 20%
      setAppliedVoucher('SALE2024');
    } else if (voucher === 'FREESHIP') {
      setDiscount(0.1); // Giảm 10%
      setAppliedVoucher('FREESHIP');
    } else if (voucher === 'DISCOUNT50') {
      setDiscount(0.5); // Giảm 50%
      setAppliedVoucher('DISCOUNT50');
    } else {
      alert('Mã giảm giá không hợp lệ');
      setDiscount(0);
      setAppliedVoucher('');
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.imgstyle}
          source={{ uri: 'https://cdn0.fahasa.com/media/catalog/product/d/o/doraemon-movie-story-mau_nobita-va-ban-giao-huong-dia-cau_bia.jpg' }} />

        <View style={styles.titleContainer}>

          <Text style={styles.title}>Doraemon : Ban Giao Huong Dia Cau</Text>
          <Text style={styles.supplier}>Cung cấp bởi tiki trading</Text>
          <Text style={styles.price}>{formatPrice} đ</Text>
          <Text style={styles.discountPrice}>{basePrice}đ</Text>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.button} onPress={decreaseUnit}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={unit.toString()}
              keyboardType="numeric"
              onChangeText={(text) => setUnit(Number(text))}
            />
            <TouchableOpacity style={styles.button} onPress={increaseUnit}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <Text style={{ marginLeft: 10, fontWeight: 'bold', color: 'blue' }} onPress={muaSau}>Mua sau</Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.savedVoucher}>Mã giảm giá đã lưu </Text>
        <Text style={styles.linkText} onPress={handlePress}>Xem tại đây</Text>
      </View>

      <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <TextInput
          style={styles.inputVoucher}
          placeholder="Nhập mã giảm giá"
          value={voucher}
          onChangeText={(text) => setVoucher(text)} // Cập nhật mã voucher
        />
        <Button title="Áp dụng" onPress={applyVoucher} />
      </View>
      <View style={{height:50, width:'100%', flexDirection:'row'}}>
        <Text style={{fontWeight: 10}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?<Text style={{color: 'blue'}} >Nhập tại đây</Text></Text>
        
      </View>
      <View style={styles.tamTinhContainer}>
        <Text style={styles.tamTinhText}>Tạm tính:</Text>
        <Text style={styles.tamTinhTotal}>{total}đ</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>Thành tiền:</Text>
        <Text style={styles.totalPrice}>{total}đ</Text>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity >
              <Text style={styles.orderButton}>Tiến hành đặt hàng</Text>
            </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    height:270,
  },
  titleContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  title: {
    padding: 10,
    fontSize: 10,
    fontWeight: 'bold',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  supplier: {
    padding: 10,
    fontSize: 10,
    fontWeight: 'bold',
  },
  price: {
    padding: 10,
    fontSize: 20,
    color: 'red',
  },
  discountPrice: {
    textDecorationLine: 'line-through',
    padding: 15,
    fontSize: 10,
    color: 'gray',
    fontStyle: 'italic',
  },
  imgstyle: {
    height: 200,
    width: 100,
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#ddd',
    padding: 5,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    height: 25,
    width: 25,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  savedVoucher: {
    marginTop: -10,
    padding: 10,
  },
  linkText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  inputVoucher: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    fontSize: 10,
    fontWeight: 'bold',
    flexShrink: 1,
    flexWrap: 'wrap',
    width: 200,
  },
  bottomContainer: {
    height: 150,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 10,
  },
  totalPrice: {
    flex: 1,
    textAlign: 'right',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  orderButton: {
    color: 'white',
    backgroundColor:'red',
    fontWeight: 'bold',
    fontSize: 20,
    alignContent: 'center',
    bottom: 0,
    padding: 10,
    borderRadius:5,
    width: 300,
    alignSelf:'center',
    alignItems:'center'
  },
  tamTinhContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderWidth:4,
    borderColor: 'gray',
  },
  tamTinhText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tamTinhTotal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});
