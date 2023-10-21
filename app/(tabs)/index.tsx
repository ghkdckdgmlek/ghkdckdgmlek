import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import MapView,  {Marker} from 'react-native-maps';

// firebase firestore
import { db } from '../firebaseConfig';
import { setDoc, doc } from 'firebase/firestore';


const apiKey = 'f42258d96123e5a79cca25d7b113d9f7';


const mountains = [
  {
    id: 1,
    name: '가리산',
    location: { latitude: 37.87347, longitude: 127.9613 },
  },
  {
    id: 2,
    name: '가리왕산',
    location: { latitude: 37.461826298, longitude: 128.5634777835 },
  },
  {
    id: 3,
    name: '가야산',
    location: { latitude: 35.82255156714059, longitude: 128.1229420803412 },
  },
  {
    id: 4,
    name: '가지산',
    location: { latitude: 35.620273882850114, longitude: 129.00296236104955 },
  },
  {
    id: 5,
    name: '감악산',
    location: { latitude: 37.94121696829392, longitude: 126.96992122833498 },
  },
  {
    id: 6,
    name: '강천산',
    location: { latitude: 35.40192, longitude: 127.04838 },
  },
  {
    id: 7,
    name: '계룡산',
    location: { latitude: 36.3433059, longitude: 127.2059484 },
  },
  {
    id: 8,
    name: '계방산',
    location: { latitude: 37.7282371, longitude: 128.4655146 },
  },
  {
    id: 9,
    name: '공작산',
    location: { latitude: 37.7155633, longitude: 128.0100592 },
  },
  {
    id: 10,
    name: '관악산',
    location: { latitude: 37.4429385, longitude: 126.9610024 },
  },
  {
    id: 11,
    name: '구병산',
    location: { latitude: 36.4694895, longitude: 127.8616372 },
  },
  {
    id: 12,
    name: '금산',
    location: { latitude: 34.7561125, longitude: 127.9774498 },
  },
  {
    id: 13,
    name: '금수산',
    location: { latitude: 36.9837958, longitude: 128.2566680 },
  },
  {
    id: 14,
    name: '금오산',
    location: { latitude: 36.0884878, longitude: 128.3053000 },
  },
  {
    id: 15,
    name: '금정산',
    location: { latitude: 35.2830419, longitude: 129.0554739 },
  },
  {
    id: 16,
    name: '깃대봉',
    location: { latitude: 34.6950000, longitude: 125.2019440 },
  },
  {
    id: 17,
    name: '남산(금오산)',
    location: { latitude: 36.0884878, longitude: 128.3053000 },
  },
  {
    id: 18,
    name: '내연산',
    location: { latitude: 36.2788445, longitude: 129.2836463 },
  },
  {
    id: 19,
    name: '내장산',
    location: { latitude: 35.4797022, longitude: 126.8879786 },
  },
  {
    id: 20,
    name: '대암산',
    location: { latitude: 38.2111995, longitude: 128.1350874 },
  },
  {
    id: 21,
    name: '대둔산',
    location: { latitude: 36.1200497, longitude: 127.3233093 },
  },
  {
    id: 22,
    name: '대야산',
    location: { latitude: 36.6705776, longitude: 127.9324859 },
  },
  {
    id: 23,
    name: '덕숭산(수덕산)',
    location: { latitude: 36.6726096, longitude: 126.6187789 },
  },
  {
    id: 24,
    name: '덕유산(향적봉)',
    location: { latitude: 35.8600328, longitude: 127.7468314 },
  },
  {
    id: 25,
    name: '덕항산',
    location: { latitude: 37.3088889, longitude: 129.0116667 },
  },
  {
    id: 26,
    name: '도락산',
    location: { latitude: 36.8562289, longitude: 128.3116942 },
  },
  {
    id: 27,
    name: '도봉산',
    location: { latitude: 37.7004635, longitude: 127.0156843 },
  },
  {
    id: 28,
    name: '두륜산',
    location: { latitude: 34.4792889, longitude: 126.6193897 },
  },
  {
    id: 29,
    name: '두타산',
    location: { latitude: 37.2600000, longitude: 129.1000000 },
  },
  {
    id: 30,
    name: '마니산',
    location: { latitude: 37.6116030, longitude: 126.4348270 },
  },
  {
    id: 31,
    name: '마이산(암마이산)',
    location: { latitude: 35.7621774, longitude: 127.4048110 },
  },
  {
    id: 32,
    name: '명성산',
    location: { latitude: 38.1069751, longitude: 127.3377243 },
  },
  {
    id: 33,
    name: '명지산',
    location: { latitude: 37.9416667, longitude: 127.4319444 },
  },
  {
    id: 34,
    name: '모악산',
    location: { latitude: 35.7297590, longitude: 127.0843701 },
  },
  {
    id: 35,
    name: '무등산',
    location: { latitude: 35.1341340, longitude: 126.9887555 },
  },
  {
    id: 36,
    name: '무학산',
    location: { latitude: 35.2110687, longitude: 128.5357745 },
  },
  {
    id: 37,
    name: '미륵산',
    location: { latitude: 34.8105028, longitude: 128.4163241 },
  },
  {
    id: 38,
    name: '민주지산',
    location: { latitude: 36.0400409, longitude: 127.8490946 },
  },
  {
    id: 39,
    name: '방장산',
    location: { latitude: 35.4477780, longitude: 126.7600000 },
  },
  {
    id: 40,
    name: '방태산(주억봉)',
    location: { latitude: 37.8948536, longitude: 128.3560479 },
  },
  {
    id: 41,
    name: '백덕산',
    location: { latitude: 37.3965520, longitude: 128.2934023 },
  },
  {
    id: 42,
    name: '백암산',
    location: { latitude: 35.4613101, longitude: 126.8685605 },
  },
  {
    id: 43,
    name: '백운산(포천)',
    location: { latitude: 38.0746477, longitude: 127.4440759 },
  },
  {
    id: 44,
    name: '백운산(광양)',
    location: { latitude: 35.1072220, longitude: 127.6219440 },
  },
  {
    id: 45,
    name: '백운산(정선)',
    location: { latitude: 37.1752778, longitude: 128.8288889 },
  },
  {
    id: 46,
    name: '변산(의상봉)',
    location: { latitude: 35.6740907, longitude: 126.5988901 },
  },
  {
    id: 47,
    name: '북한산(백운대)',
    location: { latitude: 37.6591667, longitude: 126.9775000 },
  },
  {
    id: 48,
    name: '비슬산',
    location: { latitude: 35.7155556, longitude: 128.5233333 },
  },
  {
    id: 49,
    name: '삼악산',
    location: { latitude: 37.8399027, longitude: 127.6603117 },
  },
  {
    id: 50,
    name: '서대산',
    location: { latitude: 36.2309012, longitude: 127.5357582 },
  },
  {
    id: 51,
    name: '선운산',
    location: { latitude: 35.5080560, longitude: 126.5711110 },
  },
  {
    id: 52,
    name: '설악산(대청봉)',
    location: { latitude: 38.1191893, longitude: 128.4652526 },
  },
  {
    id: 53,
    name: '성인봉',
    location: { latitude: 37.5032571, longitude: 130.8661528 },
  },
  {
    id: 54,
    name: '소백산',
    location: { latitude: 36.9517199, longitude: 128.4461230 },
  },
  {
    id: 55,
    name: '소요산',
    location: { latitude: 37.9426296, longitude: 127.0878091 },
  },
  {
    id: 56,
    name: '속리산(문장대)',
    location: { latitude: 36.5677230, longitude: 127.8621164 },
  },
  {
    id: 57,
    name: '신불산',
    location: { latitude: 35.5399560, longitude: 129.0561611 },
  },
  {
    id: 58,
    name: '연화산',
    location: { latitude: 35.0733579, longitude: 128.2653035 },
  },
  {
    id: 59,
    name: '오대산(비로봉)',
    location: { latitude: 37.7944540, longitude: 128.5435770 },
  },
  {
    id: 60,
    name: '오봉산',
    location: { latitude: 38.0007746, longitude: 127.8060938 },
  },
  {
    id: 61,
    name: '용문산',
    location: { latitude: 37.5622124, longitude: 127.5518582 },
  },
  {
    id: 62,
    name: '용화산',
    location: { latitude: 38.0394076, longitude: 127.7438254 },
  },
  {
    id: 63,
    name: '운문산',
    location: { latitude: 35.6763890, longitude: 129.0341670 },
  },
  {
    id: 64,
    name: '운악산(현등산)',
    location: { latitude: 37.8780030, longitude: 127.3248989 },
  },
  {
    id: 65,
    name: '운장산',
    location: { latitude: 37.8780030, longitude: 127.3248989 },
  },
  {
    id: 66,
    name: '월악산',
    location: { latitude: 36.8893041, longitude: 128.0909644 },
  },
  {
    id: 67,
    name: '월출산',
    location: { latitude: 34.7743388, longitude: 126.7104573 },
  },
  {
    id: 68,
    name: '유명산',
    location: { latitude: 37.5762651, longitude: 127.4876140 },
  },
  {
    id: 69,
    name: '응봉산(매봉산)',
    location: { latitude: 37.0769976, longitude: 129.2299332 },
  },
  {
    id: 70,
    name: '장안산',
    location: { latitude: 35.6299465, longitude: 127.5959075 },
  },
  {
    id: 71,
    name: '재약산',
    location: { latitude: 35.5475647, longitude: 128.9793348 },
  },
  {
    id: 72,
    name: '적상산',
    location: { latitude: 35.9476602, longitude: 127.6897512 },
  },
  {
    id: 73,
    name: '점봉산',
    location: { latitude: 38.0492805, longitude: 128.4252587 },
  },
  {
    id: 74,
    name: '조계산',
    location: { latitude: 35.0025000, longitude: 127.3136110 },
  },
  {
    id: 75,
    name: '주왕산',
    location: { latitude: 36.3882181, longitude: 129.1665986 },
  },
  {
    id: 76,
    name: '주흘산',
    location: { latitude: 36.7885665, longitude: 128.1006053 },
  },
  {
    id: 77,
    name: '지리산(천왕봉)',
    location: { latitude: 35.3371088, longitude: 127.7306952 },
  },
  {
    id: 78,
    name: '지리산',
    location: { latitude: 35.4477780, longitude: 126.7600000 },
  },
  {
    id: 79,
    name: '천관산',
    location: { latitude: 34.5323431, longitude: 126.9159716 },
  },
  {
    id: 80,
    name: '천마산',
    location: { latitude: 37.6805560, longitude: 127.2727780 },
  },
  {
    id: 81,
    name: '천성산',
    location: { latitude: 35.4202490, longitude: 129.1121592 },
  },
  {
    id: 82,
    name: '천태산',
    location: { latitude: 36.1571615, longitude: 127.6135306 },
  },
  {
    id: 83,
    name: '청량산',
    location: { latitude: 36.7964974, longitude: 128.9083889 },
  },
  {
    id: 84,
    name: '추월산',
    location: { latitude: 35.3992133, longitude: 126.9756112 },
  },
  {
    id: 85,
    name: '축령산',
    location: { latitude: 37.7528795, longitude: 127.3330406 },
  },
  {
    id: 86,
    name: '치악산',
    location: { latitude: 37.3716893, longitude: 128.0505099 },
  },
  {
    id: 87,
    name: '칠갑산',
    location: { latitude: 36.4133678, longitude: 126.8842880 },
  },
  {
    id: 88,
    name: '태백산',
    location: { latitude: 37.0957392, longitude: 128.9152404 },
  },
  {
    id: 89,
    name: '태화산',
    location: { latitude: 37.1170617, longitude: 128.4847533 },
  },
  {
    id: 90,
    name: '팔공산',
    location: { latitude: 36.0169440, longitude: 128.6950000 },
  },
  {
    id: 91,
    name: '팔봉산',
    location: { latitude: 37.7027780, longitude: 127.7538890 },
  },
  {
    id: 92,
    name: '팔영산',
    location: { latitude: 34.6182027, longitude: 127.4341153 },
  },
  {
    id: 93,
    name: '한라산',
    location: { latitude: 33.3616666, longitude: 126.5291666 },
  },
  {
    id: 94,
    name: '화악산',
    location: { latitude: 37.9950197, longitude: 127.5031003 },
  },
  {
    id: 95,
    name: '화왕산',
    location: { latitude: 35.5372222, longitude: 128.5605556 },
  },
  {
    id: 96,
    name: '황매산',
    location: { latitude: 35.4958333, longitude: 127.9744444 },
  },
  {
    id: 97,
    name: '황석산',
    location: { latitude: 35.6567795, longitude: 127.7574192 },
  },
  {
    id: 98,
    name: '황악산',
    location: { latitude: 36.1191670, longitude: 127.9661110 },
  },
  {
    id: 99,
    name: '황장산',
    location: { latitude: 36.8130560, longitude: 128.2761110 },
  },
  {
    id: 100,
    name: '희양산',
    location: { latitude: 36.7159623, longitude: 128.0027001 },
  },
];

const TabOneScreen = () => {
  const [selectedMountainData, setSelectedMountainData] = useState<any | null>(null);
  const [mountainData, setMountainData] = useState<{ weatherData: any; id: number; name: string; location: { latitude: number; longitude: number } }[]>([]);
  //날씨데이터 최초 1회 불러온다. -> mountainData state에 setting
  const [loading, setLoading] = useState(true); // 로딩 상태를 나타내는 변수

  useEffect(() => {
    const fetchMountainData = async () => {
      const updatedMountainData = [];
      try {
        // firestore에 저장된 값 가져오기 -- read
        // const data = await getDocs(collection(db, "Mountains"));
        // data.docs.map(doc => { 
        //   console.log(doc.data()) 
        // })

        for (const mountain of mountains) {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${mountain.location.latitude}&lon=${mountain.location.longitude}&appid=${apiKey}&units=metric`
          );
          const data = await response.json();
          updatedMountainData.push({
            ...mountain,
            weatherData: data,
          });
          // firebase firestore db 데이터 저장
          const docRef = await setDoc(doc(db, "Mountains", mountain.id.toString()), {
            name: mountain.name,
            location: mountain.location,
            weatherData: data,
          });
        }
        setMountainData(updatedMountainData);
      } catch (error) {
        console.error('Error fetching weather data', error);
      } finally {
        setLoading(false); // 데이터 로딩이 끝났을 때 로딩 상태를 false로 변경
      }
    };
    fetchMountainData();
  }, []);

  // 현재 UTC 시간을 가져옴
  const now = new Date();

  // 한국 시간대로 현재 시간 변경
  const nowInKorea = new Date(now.getTime() + (9 * 3600 * 1000)); // UTC로부터 +9시간
  
  const get6AMWeatherIndex = (daysFromNow: number) => {
    const hoursUntilNext6AM = (24 + 6 - nowInKorea.getHours()) % 24;
    const totalHoursFromNow = hoursUntilNext6AM + (daysFromNow * 24);
    return Math.ceil(totalHoursFromNow / 3);
};


const formatDate = (date: Date) => `${date.getFullYear()}년 ${date.getMonth() + 1}-${date.getDate()}일`; // 변환하는법

const tomorrow = new Date(nowInKorea);
tomorrow.setDate(tomorrow.getDate() );

const dayAfterTomorrow = new Date(nowInKorea);
dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

const twoDaysAfterTomorrow = new Date(nowInKorea);
twoDaysAfterTomorrow.setDate(twoDaysAfterTomorrow.getDate() + 2);





const getMarkerImage = (mountainData: any) => {
  const condition1 = 
    mountainData.weatherData.list[get6AMWeatherIndex(0)].main.humidity > 90 &&
    mountainData.weatherData.list[get6AMWeatherIndex(0)].wind.speed < 2 &&
    mountainData.weatherData.list[get6AMWeatherIndex(0)].weather[0].description === "Clear sky";

const condition2 = 
    mountainData.weatherData.list[get6AMWeatherIndex(1)].main.humidity > 90 &&
    mountainData.weatherData.list[get6AMWeatherIndex(1)].wind.speed < 2 &&
    mountainData.weatherData.list[get6AMWeatherIndex(1)].weather[0].description === "Clear sky";

const condition3 = 
    mountainData.weatherData.list[get6AMWeatherIndex(2)].main.humidity > 90 &&
    mountainData.weatherData.list[get6AMWeatherIndex(2)].wind.speed < 2 &&
    mountainData.weatherData.list[get6AMWeatherIndex(2)].weather[0].description === "Clear sky";

  if (condition1 || condition2 || condition3) {
    return require('../../assets/images/c.png');
  } else {
    return require('../../assets/images/a.png');
  }
};

  const handleMarkerPress = async (mountain: any) => {
    try {
      for (const mountainData of mountains) { // for문으로 값을 하나하나 읽음
        if (mountain.id === mountainData.id)   { // 클릭한 마커와 동일하다면
          setSelectedMountainData(mountain);
        }
      }

    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.5665,
          longitude: 126.9780, // Please change it to an appropriate initial longitude value.
          latitudeDelta: 9,
          longitudeDelta: 9,
        }}
      >
        {mountainData.map((mountain) => (
          <Marker
            key={mountain.id}
            coordinate={mountain.location}
            title={mountain.name}
            onPress={() => handleMarkerPress(mountain)}
          >
            <Image
              source={getMarkerImage(mountain)}
              style={{ width: 30, height: 30 }}
            />
          </Marker>
        ))}
      </MapView>
      {selectedMountainData && selectedMountainData.weatherData && (
        <View style={styles.weatherContainer}>
          <Text>           산: {selectedMountainData.name}</Text>

          <Text>{formatDate(tomorrow)} 6 AM 습도: {selectedMountainData.weatherData.list[get6AMWeatherIndex(0)].main.humidity}%</Text>
          <Text>{formatDate(tomorrow)} 6 AM 풍속: {selectedMountainData.weatherData.list[get6AMWeatherIndex(0)].wind.speed} m/s</Text>
          <Text>{formatDate(tomorrow)} 6 AM 날씨: {selectedMountainData.weatherData.list[get6AMWeatherIndex(0)].weather[0].description}</Text>

          {selectedMountainData.weatherData.list[get6AMWeatherIndex(0)].main.humidity > 90 &&
            selectedMountainData.weatherData.list[get6AMWeatherIndex(0)].wind.speed < 2 &&
            selectedMountainData.weatherData.list[get6AMWeatherIndex(0)].weather[0].description === "Clear sky" ? (
            <Image
              source={require('../../assets/images/b.png')}
              style={{ width: 30, height: 30 }}
            />
          ) : (
            <Image
              source={require('../../assets/images/a.png')}
              style={{ width: 30, height: 30 }}
            />
          )}
          <Text>{formatDate(dayAfterTomorrow)} 6 AM 습도: {selectedMountainData.weatherData.list[get6AMWeatherIndex(1)].main.humidity}%</Text>
          <Text>{formatDate(dayAfterTomorrow)} 6 AM 풍속: {selectedMountainData.weatherData.list[get6AMWeatherIndex(1)].wind.speed} m/s</Text>
          <Text>{formatDate(dayAfterTomorrow)} 6 AM 날씨: {selectedMountainData.weatherData.list[get6AMWeatherIndex(1)].weather[0].description}</Text>

          {selectedMountainData.weatherData.list[get6AMWeatherIndex(1)].main.humidity > 90 &&
            selectedMountainData.weatherData.list[get6AMWeatherIndex(1)].wind.speed < 2 &&
            selectedMountainData.weatherData.list[get6AMWeatherIndex(1)].weather[0].description === "Clear sky" ? (
            <Image
              source={require('../../assets/images/b.png')}
              style={{ width: 30, height: 30 }}
            />
          ) : (
            <Image
              source={require('../../assets/images/a.png')}
              style={{ width: 30, height: 30 }}
            />
          )}
          
          <Text>{formatDate(twoDaysAfterTomorrow)} 6 AM 습도: {selectedMountainData.weatherData.list[get6AMWeatherIndex(2)].main.humidity}%</Text>
          <Text>{formatDate(twoDaysAfterTomorrow)} 6 AM 풍속: {selectedMountainData.weatherData.list[get6AMWeatherIndex(2)].wind.speed } m/s</Text>
          <Text>{formatDate(twoDaysAfterTomorrow)} 6 AM 날씨: {selectedMountainData.weatherData.list[get6AMWeatherIndex(2)].weather[0].description}</Text>

          {selectedMountainData.weatherData.list[get6AMWeatherIndex(2)].main.humidity > 90 &&
            selectedMountainData.weatherData.list[get6AMWeatherIndex(2)].wind.speed < 2 &&
            selectedMountainData.weatherData.list[get6AMWeatherIndex(2)].weather[0].description === "Clear sky" ? (
            <Image
              source={require('../../assets/images/b.png')}
              style={{ width: 30, height: 30 }}
            />
          ) : (
            <Image
              source={require('../../assets/images/a.png')}
              style={{ width: 30, height: 30 }}
            />
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  }
  ,
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  weatherContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
    bottom: 50,
    left: 20,
  },
});

export default TabOneScreen;
