import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Modal, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebaseConfig';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getDocs, QuerySnapshot, DocumentData, collection, doc, setDoc } from 'firebase/firestore';

type Mountain = {
    name: string;
    location: {
        latitude: number;
        longitude: number;
    };
};

const App: React.FC = () => {
  
  const [markerLocations, setMarkerLocations] = useState<any[]>([]);
  const [markerImages, setMarkerImages] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [mountains, setMountains] = useState<Mountain[]>([]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setSearchTerm('');
  };

  useEffect(() => {
    const fetchMountains = async () => {
      try {
        const data: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'Mountains'));
        const mountainData: Mountain[] = data.docs.map((doc) => doc.data() as Mountain);
        setMountains(mountainData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMountains();
  }, []);

  const searchAPI = (keyword: string): Mountain[] => {
    return mountains.filter((mountain) => mountain.name.includes(keyword));
  }

  const [mapRegion, setMapRegion] = useState({
    latitude: 36.7992587626175,
    longitude: 127.07589223496811,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleMarkerPress = async (location: any) => {
    console.log('Launching Image Picker...');
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }) as any;
  
    console.log('Image Picker Result:', JSON.stringify(result));
  
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      console.log('Image selected:', uri);
  
      const storage = getStorage();
      const imageName = `image_${Date.now()}.jpg`;
      const imageRef = ref(storage, `images/${imageName}`);
      const response = await fetch(uri);
      const blob = await response.blob();
      
      console.log('Uploading image to Firebase Storage...');
      await uploadBytes(imageRef, blob);
      
      console.log('Image uploaded successfully. Fetching download URL...');
      const url = await getDownloadURL(imageRef);
      console.log('Download URL:', url);
  
      setMarkerImages(prevImages => [...prevImages, url]);
      setMarkerLocations(prevLocations => [...prevLocations, location]);
  
      const newMarkerData = {
        location,
        imageUrl: url,
      };
      
      const mountainImagesRef = doc(db, 'mountainImages', imageName);
      
      console.log('Saving marker data to Firestore...');
      try {
        await setDoc(mountainImagesRef, newMarkerData);
        console.log('Data saved to Firestore successfully');
      } catch (error) {
        console.error("Error saving data: ", error);
      }
    } else {
      console.log('Image selection was canceled');
    }
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker
          coordinate={mapRegion}
          title=" 여기얌 "
          onPress={() => handleMarkerPress(mapRegion)}
        />
        {markerLocations.map((location, index) => (
    <Marker
        key={index}
        coordinate={location}
        anchor={{ x: 0.5, y: 0.5 }} // centers the image on the coordinate
    >
        <Image
            style={styles.overlayImage}
            source={{ uri: markerImages[index] }}
        />
    </Marker>
))}
      </MapView>

      <Icon
        name="search"
        size={30}
        color="black"
        style={styles.searchIcon}
        onPress={toggleModal}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.searchContainer}>
            <Text>검색어 입력</Text>
            <TextInput
              value={searchTerm}
              onChangeText={text => setSearchTerm(text)}
              style={{ borderColor: 'gray', borderWidth: 1, marginTop: 20, marginBottom: 20, backgroundColor: 'white', width: '50%' }}
            />
            <FlatList
              data={searchAPI(searchTerm)}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                  setMapRegion({
                    latitude: item.location.latitude,
                    longitude: item.location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  });
                  setModalVisible(false);
                }}>
                  <Text style={styles.title}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <Button title="닫기" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    height: '50%',
    width: 300,
    padding: 20,
    backgroundColor: 'pink',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  overlayImage: {
    width: 60, // adjust this as desired
    height: 60, // adjust this as desired
},
  searchIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  
});

export default App;