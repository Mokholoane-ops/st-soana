import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.box1}>
        
        <View style={styles.boxTextContainer}>
        <Image
          style={styles.image}
          source={require('./cat.jpg')} 
          resizeMode="cover" 
        />
          <Text style={styles.boxText}>Ngwana 'Mae</Text>
          <Text style={styles.time}>8min ago</Text>
          <Text style={styles.subText}>This is My Facebook account created by me on the year 2017</Text>
          <Image
            style={styles.subImage}
            source={require('./nana.jpg')} 
            resizeMode="cover" 
            
          />
          
          <AntDesign name="like2" size={24} color="black" />
          <Entypo name="share" size={24} color="black" />
          <FontAwesome name="comment" size={24} color="black" />

        </View>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 1,
    backgroundColor: 'white',
    width: 300,
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    margin: 10,
    paddingLeft: 10, 
  },
  time: {
    fontSize: 14,
  },
  image: {
    width: 80,
    height: 80,
 
  },
  boxTextContainer: {
    justifyContent: 'center',
  },
  boxText: {
    fontSize: 25, 
  },
  subText: {
    fontSize: 12, 
    marginTop:0
  },
  subImage: {
    width: 275,
    height: 400,
    marginTop: 10, 
  },
});