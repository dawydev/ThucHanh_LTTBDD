import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorSelectionScreen from './ColorSelectionScreen'; // Component để chọn màu
import ProductCard from './ProductCard'; // Component hiển thị chi tiết sản phẩm
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductCard">
        <Stack.Screen name="ProductCard" component={ProductCard} options={{ title: 'Chi tiết sản phẩm' }} />
        <Stack.Screen name="ColorSelection" component={ColorSelectionScreen} options={{ title: 'Chọn màu' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
