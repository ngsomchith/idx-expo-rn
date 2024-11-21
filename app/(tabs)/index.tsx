import { Image, StyleSheet, Platform, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedTitle } from '@/components/ThemedTitle';
import { ArticleList } from '@/components/ShowArticles';
import ArticlesToShow from '@/components/ArticlesToShow';
import { useEffect, useState } from 'react';
import { Button } from 'react-native-elements'; // Ou votre composant Button préféré
import images from '@/components/images';

export default function HomeIndex() {
  const articles0 = [
    {
      title: "Article 11",
      // imageUrl: "https://delicatessen.cloud/Html_images/poke-thon-saumon-delicatessen.webp",
      imageUrl: "livreur",
      text: "Content for article 1",
      onActionPress: () => { /* Handle action for article 1 */ },
    },
    {
      title: "Article 22",
      imageUrl: "image1achete1offert",
      text: "Content for article 2",
      onActionPress: () => { /* Handle action for article 2 */ },
    },
    // Add more articles as needed
  ];
  
  // const ArticleList = ({ articles }) => {

  //   return (
  //     <ScrollView>
  //       {articles.map((article, index) => (
  //         <ArticleCard key={index} {...article} />
  //       ))}
  //     </ScrollView>
  //   );
  // };

  // const ArticleCard = ({ title, imageUrl, text, onActionPress }) => {
  //   // let myImage = '../../assets/images/image-1achete-1offert.png'
  //   // let myImage = imageUrl
  //   // let imageUrl0 = imageUrl.toString()
  //   const myImage = '../../assets/images/image-1achete-1offert.png'

  //   // const myImage= imageUrl
  
  //   useEffect(()=>{
  //     // setMyImage(imageUrl0)
  //     console.log("imageUrl ", imageUrl)
  //   }, imageUrl)
  //   return (
  //     <ThemedView style={styles.cardContainer}>
  //       <ThemedTitle type="title" style={styles.text}>
  //         {title}
  //       </ThemedTitle>
  
  //       <ThemedText style={styles.text}>{imageUrl === myImage ? 'Y':'N' }</ThemedText>
  //       <ThemedText style={styles.text}>{typeof(imageUrl) + imageUrl.toString() }</ThemedText>
  
       
  //       <Image source={images.livreur}/>

  //       <Button title="Action" onPress={onActionPress} />
  //     </ThemedView>
  //   );
  // };

  return (
    <ParallaxScrollView //background image
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/livreurs-a-TOULON.webp')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedTitle type="title">Faites livrer vos repas à TOULON
        
        </ThemedTitle>
        <HelloWave />

      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedTitle type="subtitle">Savourez votre expérience gourmande dans cette ville aux multiples saveurs !</ThemedTitle>
        

          <ThemedText type="defaultSemiBold">Vous pouvez faire des économies </ThemedText>

          <ThemedText>tout en soutenant {' '}

          <ThemedText type="defaultSemiBold">
          vos restaurateurs locaux ! {' '}
          </ThemedText>
          </ThemedText>
        <ThemedText>
          {/* <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '} */}
          <ThemedText type="defaultSemiBold">
            Commandez vos plats préférés {' '}
          </ThemedText>
          directement auprès des restaurateurs
          et profitez {' '}
          <ThemedText type="defaultSemiBold">
          des tarifs avantageux, {' '}
          </ThemedText>
           
          sans intermédiaires ni frais cachés.
        </ThemedText>

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedTitle type="subtitle">🍕🍣🍔 Des saveurs pour tous les goûts, à prix malin !</ThemedTitle>

      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="defaultSemiBold">📍 Livraison rapide à Toulon et alentours.</ThemedText>
        <ThemedText>
          Découvrez, commandez, dégustez : c'est bon pour vous et pour votre portefeuille ! 🥂✨
        </ThemedText>
      </ThemedView>


      <ThemedView style={styles.stepContainer}>
        <ThemedTitle type="subtitle">Un site simple et facile à retenir :</ThemedTitle>
        <ThemedText type="defaultSemiBold">👉 livraison-repas-toulon.fr</ThemedText>

      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        {/* <ArticlesToShow  /> */}
        {/* <ArticleList /> */}
        <ArticleList articles={articles0} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  cardContainer: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'white', // Couleur de fond par défaut
  },
  text: {
    marginBottom: 10,
    color: 'grey'
  },
});
