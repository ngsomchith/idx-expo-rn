import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedTitle } from '@/components/ThemedTitle';

export default function HomeIndex() {

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
});
