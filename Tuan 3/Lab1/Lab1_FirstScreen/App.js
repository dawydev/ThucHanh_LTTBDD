import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
            <Text style={styles.paragraph}>
        GROW 
      </Text>
      <Text style={styles.paragraph}>
        YOUR BUSINESS
      </Text>
      <Text style={styles.paragraph1}>
        We will help you to grow your business using
online server
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={{fontWeight: 'bold'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSignUp}>
          <Text style={{fontWeight: 'bold'}}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00CCF9',
    padding: 8,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph1: {
    paddingTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer:{
    height: 200,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogin:{
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 80,
    height:40,
    backgroundColor: '#E3C000'
  },
  buttonSignUp:{
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 80,
    height:40,
    backgroundColor: '#E3C000'
  }
});
