import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import React, { useState } from 'react';

import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isReady, setReady] = useState(false);

// isReady 변수가 true일 때만 아래의 UI를 렌더링합니다.
if (isReady) {
  return (
    // Tabs는 탭 네비게이션의 컨테이너 역할을 합니다.
    <Tabs
      screenOptions={{
        // 활성화된 탭의 글자색을 설정합니다.
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        // 탭의 이름을 "index"로 설정합니다.
        name="index"
        options={{
          // 탭의 제목을 '우리나라 100대 명산'으로 설정합니다.
          title: '우리나라 100대 명산',
          // 탭 아이콘을 지도 아이콘으로 설정하고, 색상을 조정합니다.
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
          // 헤더의 오른쪽 부분에 질문 아이콘을 추가하고, 클릭시 '/정보' 링크로 이동하도록 설정합니다.
          headerRight: () => (
            <Link href="/정보" asChild>
              <Pressable>
                {({ pressed }) => (
                  // 질문 아이콘을 추가하고, 클릭되었을 때 투명도를 조절하여 눌림 효과를 제공합니다.
                  <FontAwesome
                    name="question-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '사진첩',
          tabBarIcon: ({ color }) => <TabBarIcon name="picture-o" color={color} />,
          
        }}
      />
      <Tabs.Screen
        name="three" // 새 탭의 이름
        options={{
          title: '산림청 top 100', // 새 탭의 이름
          tabBarIcon: ({ color }) => <TabBarIcon name="tree" color={color} />, // 탭 아이콘 설정
          
        }}
      />
      
    </Tabs>
  );
}
return (
  <View style={styles.container}>
    <Image style={{ marginTop: hp(20), width: wp(70), height: wp(70), alignSelf: "center" }} source={require("../../assets/images/m.png")} />
    <Text style={{ marginTop: hp(5), width: wp(70), textAlign: "center", alignSelf: "center", fontSize: hp(4) }}>
      <Text style={{ color: "#BBACF2", fontWeight: "bold" }}>운해보러가자~</Text>
    </Text>
    <Text style={{ marginTop: hp(2), width: wp(70), textAlign: "center", alignSelf: "center", fontSize: hp(2), color: "#bbb" }}>
      삼대가 덕을 쌓아야 볼 수 있는 운해들도 쉽게 보자!
    </Text>
    <Pressable
      style={{
        width: wp(50),
        height: hp(6),
        marginTop: hp(15),
        backgroundColor: "#BBACF2",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
      }}
      onPress={() => setReady(true)}
    >
      <Text style={{ fontSize: hp(2), color: "#fff", fontWeight: "bold" }}>시작하기</Text>
    </Pressable>
    <StatusBar style="auto" />
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAE6F5",
  }
});
