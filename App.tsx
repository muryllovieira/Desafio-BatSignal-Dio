import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import batSignal from '../Bat-Signal-Desafio/assets/batsignal.png'
import { useState } from 'react';

export default function App() {

  const [isActive, setisActive] = useState(false)

  function handlerForm() {
    setisActive((oldValue) => !oldValue);
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>

      <Image
        source={batSignal}
        style={isActive ? styles.batsignalLogoOn : styles.batsignalLogoOff}
      />

      <ScrollView>
        {!isActive && (
          <>
          
            <TextInput
              style={styles.inputName}
              placeholder="Nome..."
              placeholderTextColor="#ccc"
            />

            <TextInput
              style={styles.inputTelephone}
              placeholder="Telefone..."
              placeholderTextColor="#ccc"
            />

            <TextInput
              style={styles.inputLocation}
              placeholder="Localização..."
              placeholderTextColor="#ccc"
            />

            <TextInput
              style={styles.inputObservation}
              placeholder="Observação..."
              placeholderTextColor="#ccc"
            />

          </>
        )}
      </ScrollView>


      <Pressable
        style={isActive ? styles.buttonOff : styles.buttonOn}
        onPress={handlerForm}
      >
        <Text style={styles.textButton}>
          Activate Bat Signal
        </Text>
      </Pressable>



    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 100,
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40
  },
  batsignalLogoOn:{
    width: 200, 
    height: 200 
  },
  batsignalLogoOff:{
    width: 100, 
    height: 100,
    
  },
  buttonOn: {
    backgroundColor: '#2f2f2f',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOff: {
    backgroundColor: '#2f2f2f',
    padding: 50,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',

  },
  textButton: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  inputName: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    width: 250,
    color: '#fff',
    marginTop: 20,
  },
  inputTelephone: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    width: 250,
    color: '#fff',
    marginTop: 20,
  },
  inputLocation: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    width: 250,
    height: 250,
    color: '#fff',
    marginTop: 20,
  },
  inputObservation: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    width: 250,
    height: 250,
    color: '#fff',
    marginTop: 20,
  }

});
