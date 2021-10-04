import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, ListItem, Button, Icon} from 'react-native-elements';

const Lista =({url})=>{
    return(
        <Card containerStyle={{padding: 0}}>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{url}</ListItem.Title>
              <ListItem.Subtitle>Poke</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        
      </Card>
    );
}

export default Lista;

