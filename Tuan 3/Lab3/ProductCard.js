import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import products from './productData'; // Import dữ liệu sản phẩm

const ProductCard = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const [product] = useState(products[0]);
  
  // Trạng thái lưu màu đã chọn và hình ảnh tương ứng
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedColorImage, setSelectedColorImage] = useState(product.img); // Ban đầu hiển thị hình ảnh mặc định

  // Lắng nghe sự thay đổi của route để lấy dữ liệu màu và hình ảnh đã chọn
  useEffect(() => {
    if (route.params?.color && route.params?.colorImage) {
      setSelectedColor(route.params.color); // Cập nhật màu khi quay lại từ ColorSelectionScreen
      setSelectedColorImage(route.params.colorImage); // Cập nhật hình ảnh theo màu đã chọn
    }
  }, [route.params?.color, route.params?.colorImage]);

  return (
    <View style={styles.container}>
      {/* Hình ảnh sản phẩm theo màu đã chọn */}
      <Image
        style={styles.productImage}
        source={selectedColorImage}
      />

      {/* Tên sản phẩm */}
      <Text style={styles.productName}>{product.name}</Text>

      {/* Nhà cung cấp */}
      <Text style={styles.supplier}>Nhà cung cấp: {product.supplier}</Text>

      {/* Đánh giá */}
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>★★★★★</Text>
        <Text style={styles.reviewCount}>(Xem 828 đánh giá)</Text>
      </View>

      {/* Giá sản phẩm */}
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.price}>{product.price.toLocaleString()} đ</Text>
        <Text style={styles.oldPrice}>{product.price.toLocaleString()} đ</Text>
      </View>

      {/* Thông báo */}
      <Text style={styles.notification}>Ở đâu rẻ hơn hoàn tiền</Text>

      {/* Màu đã chọn */}
      {selectedColor ? (
        <Text style={styles.selectedColor}>Màu đã chọn: {selectedColor}</Text>
      ) : (
        <Text style={styles.selectedColor}>Chưa chọn màu</Text>
      )}

      {/* Nút chọn màu */}
      <TouchableOpacity
        style={styles.colorButton}
        onPress={() => navigation.navigate('ColorSelection')}
      >
        <Text style={styles.colorButtonText}>4 MÀU - CHỌN MÀU</Text>
      </TouchableOpacity>

      {/* Nút chọn mua */}
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 16,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  supplier: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  rating: {
    fontSize: 14,
    color: '#ffcc00',
  },
  reviewCount: {
    fontSize: 12,
    marginLeft: 8,
    color: '#555',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e60000',
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#999',
    marginVertical: 4,
    paddingLeft: 30,
  },
  notification: {
    color: '#e60000',
    fontSize: 12,
    marginVertical: 4,
  },
  selectedColor: {
    fontSize: 14,
    color: 'blue',
    marginVertical: 8,
  },
  colorButton: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    paddingVertical: 10,
    marginVertical: 8,
    alignItems: 'center',
    borderRadius: 5,
  },
  colorButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#e60000',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductCard;
