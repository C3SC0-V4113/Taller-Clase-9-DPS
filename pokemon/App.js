import React, {useState} from 'react';
import {Text, Button, View, FlatList, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// npx react-native run-android
// npx @react-native-community/cli doctor
//expo start --clear
//keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function PokemonScreen() {
  const [elementos, guardarlista] = useState([]);
  fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(responseJson => {
      const listado = responseJson.results;
      guardarlista(listado);
    })
    .catch(error => {
      console.error(error);
    });
  return (
    <>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            height: 40,
            marginTop: 10,
            backgroundColor: 'lightgray',
            textAlignVertical: 'center',
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}>
          {' '}
          Pokemones
        </Text>
        <FlatList
          data={elementos}
          renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        />
      </View>
    </>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Lista" component={PokemonScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
