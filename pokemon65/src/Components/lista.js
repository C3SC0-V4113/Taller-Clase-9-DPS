import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';

const Lista = ({url, nombre}) => {
  const [pokemon, setPokemon] = useState({});
  const [tipos, setTipos] = useState(['normal']);
  const [sprite, setSprite] = useState(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/6.png',
  );
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);


    const consultarPoke = async () => {
      try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setPokemon(resultado);
        try {
            setSprite(pokemon.sprites.front_default);
            setTipos(pokemon.types.map(Tipe));
            setPeso(pokemon.weight);
            setAltura(pokemon.height);
        } catch (error) {
            console.log("Ha fallado la carga")
        }
      } catch (error) {
        console.error(error);
      }
    };
    const Tipe=(tipxs)=>{
        return [tipxs.type.name]
    }
    consultarPoke();


  return (
    <Card containerStyle={{padding: 0}}>
      <ListItem bottomDivider>
        <Avatar source={sprite && {uri: sprite}} />
        <ListItem.Content>
          <ListItem.Title>{nombre}</ListItem.Title>
          <ListItem.Subtitle>{tipos.join('/')}</ListItem.Subtitle>
          <ListItem.Subtitle>
            {peso/10} Kilogramos/{altura/10} Metros
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </Card>
  );
};

export default Lista;
