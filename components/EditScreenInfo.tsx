import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';


export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)">
          <MonoText>{path}</MonoText>
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          "100대 명산"은 "2002년 세계 산의 해"를 기념하고 산의 가치와 중요성을 새롭게 인식하기 위해 2002년 10월 산림청에서 선정 공표하였습니다. 산림청에서 선정한 "100대 명산"은 학계, 산악계, 언론계 등 13명의 전문가로 구성된 선정위원회가 지방자치단체를 통해 추천받은 105개 산과 산악회 및 산악 전문지가 추천하는 산, 인터넷 사이트를 통해 선호도가 높은 산을 대상을 산의 역사, 문화성, 접근성, 선호도, 규모, 생태계 특성 등 5개 항목에 가중치를 부여하여 심사 후 선정하였습니다. 100대 명산에는 국립공원(31)·도립공원(15)·군립공원(10) 지역에서 56개가 선정되었습니다. 또 가리왕산, 운장산, 황악산 등 생태적 가치가 큰 산(16)과 역사, 문화, 경관 등 모든 면에서 우수한 산(28)이 포함되어 있습니다.
        </Text>
      </View>

      <View style={styles.helpContainer}>
        <ExternalLink
          style={styles.helpLink}
          href="https://www.forest.go.kr/kfsweb/kfi/kfs/foreston/main/contents/FmmntSrch/selectFmmntSrchList.do?mn=NKFS_03_01_12#m100_05">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            더 궁금한게 있다면 버튼을 눌러주세요
          </Text>
        </ExternalLink>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
