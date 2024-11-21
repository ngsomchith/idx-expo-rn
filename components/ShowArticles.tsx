
import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedTitle } from './ThemedTitle'; // Assurez-vous d'importer ThemedTitle
import { ThemedText } from './ThemedText'; // Assurez-vous d'importer ThemedText
import { Button } from 'react-native-elements'; // Ou votre composant Button préféré
import images from './images';

export const ArticleCard = ({ title, imageUrl, text, onActionPress }) => {
  let myImage = '../assets/images/image-1achete-1offert.png'

  useEffect(()=>{
    console.log("imageUrl ", imageUrl)
  }, imageUrl)
  return (
    <ThemedView style={styles.cardContainer}>
      <ThemedTitle type="title" style={styles.text}>
        {title}
      </ThemedTitle>

      <ThemedText style={styles.text}>{ imageUrl }</ThemedText>   
      <Image source={images[`${imageUrl}`]  } style={styles.image} />

      <Button title="Action" onPress={onActionPress}  />
    </ThemedView>
  );
};

export const ArticleList = ({ articles }) => {

 
  return (
    <ScrollView>
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </ScrollView>
  );
};

const styles = {
  cardContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white', // Couleur de fond par défaut
  },
  title: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
    color: 'grey'
  },
};
