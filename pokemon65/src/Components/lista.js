import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon, Avatar} from 'react-native-elements';

const Lista =({url,nombre})=>{
    const [tipos,setTipos]=useState(['normal']);
    const [sprite,setSprite]=useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/6.png');
    const [peso,setPeso]=useState(0);
    const [altura,setAltura]=useState(0);

    return(
        <Card containerStyle={{padding: 0}}>
          <ListItem bottomDivider>
          <Avatar source={sprite && {uri: sprite}} />
            <ListItem.Content>
              <ListItem.Title>{nombre}</ListItem.Title>
              <ListItem.Subtitle>{tipos.join('/')}</ListItem.Subtitle>
              <ListItem.Subtitle>{peso/10} kilogramos/{altura/10} metros</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
      </Card>
    );
}

export default Lista;

