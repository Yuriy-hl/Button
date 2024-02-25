import React from 'react';
import { SafeAreaView, Button, Alert, StyleSheet } from 'react-native';

const App = () => {
    const handlePress = () => {
        Alert.alert('Внимание:', 'ХУЕПКА', [{
          text:"Да",
        }]);
    };

  
    return (
        <SafeAreaView style={Styles.container}>
            <Button title="кнопка" onPress={handlePress} />
        </SafeAreaView>
    );
};

const Styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});



export default App;