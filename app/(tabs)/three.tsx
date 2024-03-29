import React, { useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text, Button } from 'react-native';
import Modal from 'react-native-modal';

const dataMap: { [key: string]: string[] } = {
  'ㄱ': ['가리산', '가리왕산', '가야산', '가지산', '감악산', '강천산', '계룡산', '계방산', '공작산', '관악산', '구병산', '금산', '금수산', '금오산', '금정산', '깃대봉'],
  'ㄴ': ['남산(금오산)', '내연산', '내장산(신선봉)'],
  'ㄷ': ['대둔산', '대암산', '대야산', '덕숭산(수덕산)', '덕유산(향적봉)', '덕항산', '도락산', '도봉산(자운봉)', '두륜산', '두타산'],
  'ㅁ': ['마니산', '마이산(암마이산)', '명성산', '명지산', '모악산', '무등산', '무학산', '미륵산', '민주지산'],
  'ㅂ': ['방장산', '방태산(주억봉)', '백덕산', '백암산', '백운산(포천)', '백운산(광양)', '백운산(정선)', '변산(의상봉)', '북한산(백운대)', '비슬산(천왕봉)'],
  'ㅅ': ['삼악산', '서대산', '선운산', '설악산(대청봉)', '성인봉', '소백산', '소요산', '속리산', '신불산'],
  'ㅇ': ['연화산', '오대산(비로봉)', '오봉산', '용문산', '용화산', '운문산', '운악산(현등산)', '운장산', '월악산', '월출산', '유명산', '응봉산(매봉산)'],
  'ㅈ': ['장안산', '재약산', '적상산', '점봉산', '조계산', '주왕산', '주흘산', '지리산(천왕봉)', '지리산'],
  'ㅊ': ['천관산', '천마산', '천성산', '천태산', '청량산', '추월산', '축령산', '치악산', '칠갑산'],
  'ㅌ': ['태백산', '태화산'],
  'ㅍ': ['팔공산', '팔봉산', '팔영산'],
  'ㅎ': ['한라산', '화악산', '화왕산', '황매산', '황석산', '황악산', '황장산', '희양산'],
};

interface ListItemProps {
  item: string;
  onPress: (item: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ item, onPress }) => (
  <TouchableOpacity onPress={() => onPress(item)}>
    <View style={styles.item}>
      <Text style={styles.title}>{item}</Text>
    </View>
  </TouchableOpacity>
);


const TabThreeScreen: React.FC = () => {
  const [selected, setSelected] = useState<string>('ㄱ');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedMountain, setSelectedMountain] = useState<string>('');

  const handleListItemPress = (item: string) => {
    setModalVisible(true);
    setSelectedMountain(item);
  };

  const renderModalContent = (selectedMountain: any) => {
    if (selectedMountain === '가리산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            강원도에서 진달래가 가장 많이 피는 산으로 알려져 있고, 참나무 중심의 울창한 산림과 부드러운 산줄기 등 우리나라 산의 전형적인 모습을 갖추고 있으며, 홍천강의 발원지 및 소양강의 수원(水源)을 이루고 있는 점 등을 고려하여 선정 암봉이 솟아있는 정상에서 소양호를 조망할 수 있고, 야생화가 많이 서식하여 자연학습관찰에도 좋은 여건을 갖추고 있음. '98년 강원도에서 자연휴양림으로 지정
          </Text>
        </View>
      );
    } else if (selectedMountain === '가리왕산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            가리왕산 8경이 전해질 만큼 경관이 수려하고, 활엽수 극상림이 분포해 있으며, 전국적인 산나물 자생지로 유명. 특히 백두대간의 중심으로 주목군락지가 있어 산림유전자원보호림과 자연휴양림으로 지정되는 등 경관·생태적으로 가치가 큰 점에서 선정 동강(東江)에 흘러드는 오대천과 조양강의 발원지이며 석회암 절리동굴인 얼음동굴이 유명. 산의 이름은 그 모습이 큰 가리(벼나 나무를 쌓은 더미)같다고 하여 유래 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '가야산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          예로부터 우리나라의 12대 명산 또는 8경에 속하는 산으로서 '72년 국립공원으로 지정되었으며, 특히 '95년 세계문화유산으로 지정된 국보 팔만대장경과 해인사가 있는 등 역사·문화적 가치가 높은 점을 고려하여 선정,
`가야국'이 있었던 곳으로 전해지며, `택리지'에서는 가야산의 기암괴봉을 불꽃에 비유하여 석화성(石火星)이라 하였음. 산위에서의 조망이 좋고, 특히 용문폭포와 홍류동 계곡 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '가지산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          백두대간 남단의 중심으로 "영남알프스"에서 가장 높은 산으로 '79년 도립공원으로 지정되었음. 수량이 풍부한 폭포와 아름다운 소(沼)가 많고, 천연기념물 224호인 얼음골과 도의국사 사리탑인 "8각운당형부도(보물 제369호)"가 보존되어 있는 석남사(石南寺)가 소재하는 점 등을 고려하여 선정능선 곳곳에 바위봉과 억새밭이 어우러져 있고 전망이 좋으며 자연휴양림이 있음. 밀양강의 지류인 산내천과 무적천의 발원지이다.
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '감악산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          예로부터 경기 5악의 하나로서 폭포·계곡·암벽 등을 고루 갖추고 있으며, 임진강·개성 송악산 등의 조망이 좋은 점 등을 고려하여 선정
수량이 풍부한 운계폭포가 있고, 정상에는 글자가 모두 마멸되어 판독이 불가능한 비뜰대왕비(파주군 향토유적 제8호)가 있는데 `설인귀(薛人貴)'설과 `진흥왕 순수비'설이 나뉘어 속전되고 있음. 임꺽정이 관군의 추격을 피하기 위해 숨어 지냈다는 장군봉 아래 임꺽정 굴이 있음. 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '강천산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          군립공원(1981년 지정)으로 지정되어 있으며, 강천계곡 등 경관이 수려하고 조망이 좋은 점 등을 고려하여 선정
신라 진성여왕때(887년) 도선국사가 개창한 강천사(剛泉寺)가 있으며, 산 이름도 강천사(剛泉寺)에서 유래. 삼국시대에 축조된 것으로 추정되는 금성산성(金城山城)이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '계룡산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          예로부터 신라 5악의 하나인 서악(西岳)으로 지칭되었고, 조선시대에는 3악 중 중악(中岳)으로 불리운 산으로서 국립공원으로 지정(1968년)된 점 등을 고려하여 선정산 능선이 마치 닭의 벼슬을 쓴 용의 모습과 닮았다고 하여 계룡산이라는 이름이 유래되었으며, "정감록(鄭鑑錄)"에 언급된 십승지지(十勝之地)중 하나임. 신라 성덕왕 2년(724년) 회의화상이 창건한 동학사(東鶴寺)와 백제 구이신왕(420년)때 고구려의 아도화상에 의하여 창건된 갑사(甲寺)등이 유명

          </Text>
        </View>
      );
    }
    else if (selectedMountain === '계방산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          남한에서 한라산, 지리산, 설악산, 덕유산에 이어 다섯 번째로 높은 산으로서 산약초·야생화 등이 많이 서식하고, 희귀수목인 주목·철쭉나무 등이 군락을 이루고 있어 생태계 보호지역으로 지정된 점 등을 고려하여 선정
백두대간을 한 눈에 조망할 수 있으며 겨울철 설경이 백미. 우리나라에서 자동차로 오를 수 있는 고개 중 가장 높은 운두령이 있으며 내린천(內麟川)으로 흐르는 계방천의 발원지임 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '공작산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          울창한 산림과 수타계곡 등 경관이 수려한 점 등을 고려하여 선정
산의 형세가 마치 한 마리의 공작이 날개를 펼친 듯하다는데서 산 이름이 유래. 보물 제745호인 월인석보 제17권과 18권이 보존되어 있는 수타사(壽陀寺)와 수타사에서 노천리에 이르는 20리계곡인 수타계곡이 특히 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '관악산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           예로부터 경기 5악의 하나로서 경관이 수려하며, 도심지 가까이 위치한 도시자연공원(1968년 지정)으로 수도권 주민들의 휴식처인 점 등을 고려하여 선정
주봉은 연주대(戀主臺)로서 정상에 기상 레이더 시설이 있음. 신라시대 의상이 창건하고 조선 태조가 중수(1392년)한 연주암과 약사여래입상이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '구병산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           주능선의 북쪽 지역이 속리산 국립공원에 속해 있고 서원계곡(書院溪谷) 등 경관이 수려한 점 등을 고려하여 선정
웅장한 아홉 개의 바위봉이 병풍처럼 연이어 솟아 예로부터 구봉산이라고 불리어 왔으며, 정상에서의 조망이 좋음. 예로부터 보은지방에서는 속리산 천황봉은 지아비 산, 구병산은 지어미 산, 금적산은 아들 산이라 하여 이들을 `삼산(三山)'이라 일컬어왔음. 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '금산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           한려해상국립공원의 유일한 산악공원으로 경관이 수려하고, 바다와 섬, 일출을 조망할 수 있으며 경상남도 기념물로 지정(1974년)된 점 등을 고려하여 선정
본래 보광산이라고 불리다가 조선 태조와 관련된 전설에 따라 금산으로 이름이 바뀌었다고 함. 조선 태조가 기도했다는 이씨기단을 비롯하여, 사자암, 촉대봉, 향로봉 등 38경이 유명하며, 정상에는 우리나라 3대 기도처의 하나인 보리암이 소재 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '금수산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           월악산국립공원 북단에 위치하고 울창한 소나무 숲과 맑고 깨끗한 계류 등 경관이 뛰어난 점을 고려하여 선정, 봄철의 철쭉과 가을철의 단풍이 특히 유명하고 능강계곡과 얼음골이 있음. 정상에서 소백산의 웅장한 산줄기와 충주호를 조망할 수 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '금오산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           기암절벽과 울창한 산림이 조화되어 경관이 수려하며, 문화유산이 많고 도립공원으로 지정(1970년)된 점 등을 고려하여 선정, 높이 38m의 명금폭포가 있으며, 정상부근에는 자연암벽을 이용해 축성한 길이 2㎞의 금오산성이 있음. 해운사, 약사암 등의 고찰과 금오산마애보살입상(보물 제490호), 선봉사대각국사비(보물 제251호), 석조석가여래좌상(보물 제245호) 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '금정산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           산림이 울창하고 산세가 비교적 웅장하며 도심지 가까이 위치한 시민들의 휴식처인 점 등을 고려하여 선정, 역사적으로 나라를 지키는 호국의 산으로서 호국사찰 범어사와 우리나라 5대 산성의 하나인 금정산성이 있음. 낙동강 지류와 수영강의 분수계(分水界)를 이루고, 금강공원 및 성지곡공원 등이 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '깃대봉') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           덩굴사철, 식나무 및 동백림 등이 자생하는 등 생태적 가치가 커 섬 전체가 천연보호구역으로 지정(1965년)되어 있으며, 다도해해상국립공원으로 지정(1981년)된 점 등을 고려하여 선정, 이름 그대로 깃대처럼 생긴 암봉이며, 홍도의 최고봉임. 깃대봉은 독립문, 석화굴 등 해안경관과 조화를 이뤄 홍도의 수려한 경관을 이루고 있음. 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '남산(금오산)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           길이 약 8km, 폭 약 4㎞의 산줄기안에 불상 80여체, 탑 60여기, 절터 110여 개소가 산재하여 경주국립공원으로 지정되어 있는 등 신라시대 역사 유물·유적의 보고인 점 등을 고려하여 선정, `경주남산불적지'로 마애여래좌상(보물 제913호), 칠불암마애석불 등이 유명. 동쪽에는 남산산성 등이 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '내연산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          남쪽의 천령산 줄기와 마주하면서 그 사이에 험준한 협곡을 형성하고 있는 청하골이 유명. 원진국사사리탑(보물 제430호)과 원진국사비(보물 제252호)가 보존된 보경사(寶鏡寺) 등이 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '내장산(신선봉)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           기암괴석과 울창한 산림, 맑은 계류가 어울어진 호남 5대 명산의 하나로 국립공원으로 지정(1971년)되어 있는 점 등을 고려하여 선정, 내장사를 중심으로 서래봉에서 불출봉, 연지봉, 까치봉, 신선봉, 장군봉에 이르기까지 산줄기가 말발굽처럼 둘러쳐져 마치 철옹성 같은 특이지형을 이룸. 내장사(內藏寺) 부속암자인 원적암 일대에 있는 비자림(천연기념물 제153호)이 특히 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '대둔산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           정상인 마천대를 비롯하여 사방으로 뻗은 바위능선의 기암괴석과 수목이 어우러져 경관이 뛰어나고, 도립공원으로 지정(1980년)된 점 등을 감안하여 선정, 마천대에서 낙조대에 이르는 바위능선과 일몰광경이 뛰어나며, 임금바위·장군봉·동심바위·신선바위 등이 있음. 임금바위와 입석대를 잇는 금강구름다리와 태고사(太古寺)가 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '대암산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           휴전선이 가까운 지역으로 각종 희귀생물과 원시림에 가까운 숲이 잘 보존되어 천연보호구역(천연기념물 제246호)으로 지정(1973년) 관리되는 등 우리나라 최대 희귀생물자원의 보고인 점 등을 감안하여 선정, 대암산 정상부에 있는 약 9,000여평이 넘는 풀밭 같은 넓은 초원에 큰 용늪과 작은용늪의 고층습지가 있음. 그 주위가 마치 화채(punch) 그릇(bowl)같아 펀치볼로 불리우며 해안분지(亥安盆地)가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '대야산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           기암괴석과 폭포·소(沼)가 어우러져 수려한 경관을 이루고 있으며, 속리산 국립공원구역에 포함되어 있는 점 등을 감안하여 선정, 용추폭포와 촛대바위가 있는 선유동계곡 및 `월영대'가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '덕숭산(수덕산)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          지역 주민들이 소금강이라고 할 만큼 기암괴석과 어우러진 경관이 수려하고, 도립공원으로 지정(1973년)되어 있는 점 등을 감안하여 선정, 백제 제29대 법왕 원년(599년) 지명법사가 창건한 수덕사(修德寺), 보물 제355호인 마애불과 덕산온천이 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '덕유산(향적봉)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           향적봉에서 남덕유까지 17km의 장대한 산줄기를 이루고 있으며, 금강과 낙동강의 수원(水源)이고 국립공원으로 지정(1975년)된 점 등을 고려하여 선정, 덕유산 북쪽으로 흘러 내리는 30여km의 무주구천동계곡(茂朱九千洞溪谷)과 자연휴양림, 신라 흥덕왕5년(830년) 무염국사가 창건한 백련사(白蓮社) 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '덕항산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           전형적인 경동지괴(傾動地塊) 지형으로 기암절벽과 초원이 어우러져 있으며 갈매굴, 제암풍혈, 양터목세굴, 덕발세굴, 큰재세굴 등 석회동굴이 많이 소재하고, 대이동굴 군립공원(1996년 지정) 구역내인 점 등을 고려하여 선정, 약 4∼5억년 전에 이루어진 길이 6.9㎞, 천장높이 30m에 이르는 동양최대의 동굴인 환선굴(幻仙窟 : 천연기념물 제178호)이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '도락산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           소백산과 월악산 중간에 위치하며, 단양8경인 하선암, 중선암과 사인암 등이 산재해 있는 바위산으로 경관이 수려한 점 등을 고려하여 선정, 남한강 지류인 단양천 10여km 구간에 있는 하선암(下仙岩)과 쌍룡폭포·옥렴대·명경대 등 웅장한 바위가 있는 중선암(中仙岩), 경천벽, 와룡암, 일사대, 명경담 등이 있는 상선암(上仙岩)이 특히 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '도봉산(자운봉)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
             최고봉인 자운봉을 중심으로 만장봉, 선인봉, 원도봉계곡, 용어천계곡, 송추계곡 등 경관이 수려하고 국립공원으로 지정(1983년)되어 있으며, 수도권 시민의 휴식처인 점 등을 고려하여 선정, 암벽등산에 최적지이며, 회룡사(回龍寺), 망월사(望月寺), 천축사(天竺寺), 보문사(普門寺) 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '두륜산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          한반도의 최남단 해남반도에 솟아 있는 산으로서 왕벚나무의 자생지가 있으며, 다도해를 조망하기에 적합하고 도립공원으로 지정(1972년)된 점 등을 감안하여 선정, 봄의 춘백, 여름의 녹음, 가을의 단풍, 겨울의 동백 등으로 유명하며 유자(柚子), 차(茶)의 산지로 알려져 있음. 보물 제320호인 삼층석탑을 비롯하여 많은 문화재를 보존하고 있는 대흥사(大興寺)가 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '두타산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            무릉계곡 등 경관이 아름다운 점 등을 고려하여 선정, 삼화사(三和寺), 관음암(觀音庵), 두타산성(頭陀山城)이 있음. 바위에 50여개의 크고 작은 구멍이 패여 산이름이 붙여졌으며, 예로부터 기우제를 지내는 등 토속신앙의 기도처인 쉰움산(五十井山)이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '마이산(암마이산)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           특이한 지형을 이루고 있으며, 섬진강과 금강(錦江) 발원지이고 도립공원(1979년)으로 지정된 점 등을 고려하여 선정, 중생대 백악기에 습곡운동을 받아 융기된 역암이 침식작용에 의하여 형성된 산으로 산의 형상이 마치 말의 귀를 닮았다 하여 마이산으로 불려짐. 암마이산 남쪽 절벽 밑에 있는 80여개의 크고 작은 돌탑이 있는 탑사(塔寺)와 금당사(金塘寺)가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '명성산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           도평천(都坪川), 영평천(永平川), 한탄강의 수계를 이루며, 산세가 가파르고 곳곳에 바위가 어우러져 경관이 아름다운 점 등을 고려하여 선정, 산 북쪽으로 삼부연폭포와 남쪽으로 산정호수를 끼고 있음. 전설에 의하면 왕건(王建)에게 쫓기던 궁예(弓裔)가 피살되었던 곳으로 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '명지산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           경기도내에서 두 번째로 높은 산으로 경기도의 최고봉인 화악산(1,468m)과 가평천을 사이에 하고 있으며, 강씨봉, 귀목봉, 청계산, 우목봉 등 산세가 웅장하고 군립공원으로 지정된 점 등을 감안하여 선정, 20여km를 흐르는 산 동쪽의 가평천 계곡과 익근리계곡의 명지폭포가 유명. 명지산 일대의 산과 계곡들은 경기도내에서는 첫째가는 심산유곡으로 알려져 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '모악산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           진달래와 철쭉이 유명한 호남 4경의 하나이며, 도립공원으로 지정(1971년)된 점 등을 고려하여 선정, 신라 말에 견훤이 이 곳을 근거로 후백제를 일으켰다고 전해짐. 국보 제62호인 미륵전을 비롯하여 대적광전(보물 제467호)·혜덕왕사응탑비(보물 제24호)·5층석탑(보물 제27호)등 많은 문화재가 있는 금산사(金山寺)가 있음. 특히 미륵전에 있는 높이 11.82m나 되는 미륵불이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '무등산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           최고봉인 천왕봉 가까이에는 원기둥 모양의 절리(節理)가 발달하여 기암괴석의 경치가 뛰어나고, 도시민의 휴식처이며, 도립공원으로 지정(1972년)된 점 등을 고려하여 선정
보물 제131호인 철조비로자나불좌상 등이 있는 증심사(證心寺)와 원효사(元曉寺)가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '무학산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           도시민의 휴식처로서 경관이 좋은 아기자기한 능선과 다도해를 바라다보는 조망이 좋은 점 등을 고려하여 선정
정상 북서쪽에 있는 시루봉 일대의 바위는 좋은 암벽등반 훈련장임. 예전부터 양조업이 성할 정도로 수질이 좋음 서원골 입구에 최치원의 제자들이 세운 관해정(觀海亭)이 있고 부근 원각사, 백운사 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '미륵산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           충무시와 연육교로 이어지는 미륵도(彌勒島)의 복판에 솟은 산으로 한려해상국립공원의 아름다운 경관을 한눈에 조망할 수 있는 등 경관이 아름다운 점 등을 고려하여 선정
지형도에는 용화산(龍華山)으로 표기되어 있으며, 석조여래상(경남유형문화재 43호)과 고려중기의 작품인 지장보살상과 시왕상 등이 보존되어 있는 용화사(龍華寺)가 있음. 도솔선사(兜率禪師)가 창건한 도솔암, 관음사(觀音寺), 봉수대터 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '민주지산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           1000m 이상의 고산준봉을 거느리고 울창한 산림과 바위가 어우러져 있으며, 국내 최대 원시림 계곡인 물한계곡이 있는 점 등을 고려하여 선정
물이 차다는 한천마을 상류에서부터 약 20㎞를 흐르는 깊은 계곡으로, 원시림 등이 잘 보존된 손꼽히는 생태관광지인 물한계곡(勿閑溪谷)이 특히 유명. 정상 남쪽 50m쯤 아래에는 삼두마애불상이 있음. 충북, 전북, 경북의 경계인 삼도봉과 연접 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '방장산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           옛부터 지리산, 무등산과 함께 호남의 삼신산으로 불려져 왔으며, 전북과 전남을 양분하는 산으로서 산세가 웅장하고 자연휴양림인 점 등을 고려하여 선정
옛이름은 방등산으로 백제가요중 `방등산가'의 방등산이 바로 방장산임. 정상에서 멀리 서해바다와 동쪽으로 무등산이 보임. 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '방태산(주억봉)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           가칠봉(1,241m), 응복산(1,156m), 구룡덕봉(1,388m), 주걱봉(1,444m) 등 고산준봉을 거느리고 있으며 한국에서 가장 큰 자연림이라고 할 정도로 나무들이 울창하고, 희귀식물과 희귀어종이 많은 생태적 특성 등을 고려하여 선정
정감록에는 난을 피해 숨을만한 피난처로 기록되어 있음. 자연휴양림이 있으며, 높이 10m의 이폭포와 3m의 저폭포가 있는 적가리골 및 방동약수, 개인약수 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '백덕산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           사자산(1120m), 사갓봉(1020m), 솟때봉(884m) 등이 솟아 있어 산세가 웅장하고 골이 깊은 등 경관이 좋으며, 평창강(平昌江)과 주천강(酒泉江)의 수계인 점 등을 고려하여 선정, 신라 때 자장율사가 창건하였다고 전해지는 법흥사(法興寺)와 경내에 있는 보물 제613호로 지정된 징효대사보인탑이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '백암산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           봄이면 백양, 가을이면 내장이라 하듯이 경관이 수려하고 천연기념물인 비자나무와 굴거리나무가 집단분포하고 있으며, 내장산국립공원구역에 포함되어 있는 점 등을 고려하여 선정, 학바위, 백양산 12경, 영천굴 등이 있음. 소요대사부도, 대웅전, 극락보전, 사천왕문을 포함하여 청류암의 관음전, 경관이 아름다운 쌍계루 등 수많은 문화유산들을 보존하고 있는 백양사(白羊寺)가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '백운산(포천)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           수려한 계곡미를 가지고 있으며 광덕산, 국망봉, 박달봉 등과 같은 높은 봉우리들과 무리를 이뤄 계곡·단애(斷崖) 등 독특한 경관을 가지고 있는 점 등을 고려하여 선정, 백운동 계곡 및 신라 말 도선이 창건하였다고 전하는 흥룡사(興龍寺)가 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '백운산(광양)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           주봉을 중심으로 하여 또아리봉과 도솔봉, 매봉, 억불봉 등 산세가 웅장하며 경관이 수려하고 억새풀과 철쭉 군락, 온·한대 900종의 식물이 서식하는 등 경관·생태적 특징을 고려하여 선정, 자연휴양림이 있으며, 백운사(白雲寺), 성불사(成佛寺) 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '백운산(정선)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           동강의 가운데에 위치하고 있어 경관이 아름답고, 조망이 좋으며 생태계보존지역으로 지정되어있는 점 등을 고려하여 선정 흰구름이 늘 끼어 있는데서 산 이름이 유래, 오대산에서 발원하는 오대천과 조양강(朝陽江)을 모아 남한강으로 흐르는 동강 및 천연기념물 제260호로 지정(1979년)된 백룡동굴(白龍洞窟)이 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '변산(의상봉)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           울창한 산과 계곡, 모래해안과 암석해안 및 사찰 등이 어울려 뛰어난 경관을 이루고 있으며 국립공원으로 지정(1968년)된 점 등을 고려하여 선정, 산이면서 바다와 직접 닿아 있는 특징이 있음. 직소폭포, 가마소, 봉래구곡, 채석강, 적벽강 및 내소사, 개암사 등 사찰과 호랑가시나무, 꽝꽝나무 등 희귀동·식물이 서식 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '북한산(백운대)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           최고봉인 백운대를 위시하여 인수봉, 만경대, 노적봉 등 경관이 수려하고 도시민들의 휴식처이며 국립공원으로 지정(1983년)되어 있는 점 등을 고려하여 선정, 북한산성, 우이동계곡, 정릉계곡, 세검정계곡 등이 유명. 도선국사가 창건한 도선사(道詵寺), 태고사(太古寺), 화계사(華溪寺), 문수사(文殊寺), 진관사(津寬寺) 등 수많은 고찰이 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '비슬산(천왕봉)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          봄에는 진달래, 가을에는 억새 등 경관이 아름다우며, 조망이 좋고 군립공원으로 지정된 점 등을 고려하여 선정, 북쪽의 팔공산과 함께 대구분지를 형성하며 낙동강을 끼고 있음. 고려말 공민왕 7년(1358년) 진보법사가 창건한 소재사(消災寺) 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '삼악산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           고고시대에 형성된 등선계곡과 맥국시대의 산성터가 있는 유서깊은 산으로 기암괴석의 경관이 아름답고, 의암호와 북한강을 굽어보는 조망이 좋은 점 등을 고려하여 선정, 남쪽 골짜기 초입의 협곡과 등선폭포(登仙瀑布)가 특히 유명하고, 흥국사(興國寺), 금선사(金仙寺), 상원사(上院寺) 등 7개 사찰이 있음. 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '서대산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           충청남도에서는 제일 높은 산으로 곳곳에 기암괴석과 바위 절벽이 있어 중부의 금강이라고 일컬을 정도로 경관이 아름다우며, 산정에서의 조망이 좋은 점 등을 고려하여 선정, 용굴, 사자굴, 견우장년대, 직녀탄금대, 북두칠성바위 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '선운산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           산세는 별로 크지 않으나 숲이 울창하고 곳곳이 기암괴석으로 이루어져 있어 경관이 빼어나며 천연기념물 제184호인 동백나무 숲이 있는 등 생태적 가치가 크고 도립공원으로 지정(1979년)된 점 등을 고려하여 선정, 백제 위덕왕 24년(577년) 검단선사가 창건한 선운사(禪雲寺)와 수령 5백년의 동백나무 ３천여 그루가 군락을 이루고 있는 선운사 동백 숲이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '설악산(대청봉)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           남한에서 세 번째로 높은 봉우리인 한계령, 마등령, 미시령 등 수많은 고개와 산줄기·계곡들이 어우러져 한국을 대표하는 산악미의 극치를 이루고 있으며, 국립공원(1970년 지정) 및 유네스코의 생물권 보존지역으로 지정(1982년)되어 관리되고 있는 점 등을 고려하여 선정, 백담사(百潭寺), 봉정암(鳳頂菴), 신흥사(新興寺), 계조암(繼祖菴), 오세암(五歲庵), 흔들바위, 토왕성폭포, 대승폭포 등이 특히 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '성인봉') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           휴화산인 울릉도의 최고봉으로서 울릉도 모든 하천의 수원을 이루고, 식생이 특이한 원시림이 잘 보전되어 있는 점 등을 감안하여 선정, 울릉도에서는 유일하게 평지를 이룬 나리분지(羅里盆地)와 천연기념물 제189호로 지정(1967년)된 원시림에 유명. 나리동의 울릉국화·섬백리향의 군락은 천연기념물 제52호(1962년)로 지정되어 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '소백산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           국망봉에서 비로봉, 연화봉으로 이어지는 해발 1,300여m의 일대 산군으로 1,000m이상은 고원지대와 같은 초원을 이루고 있으며, 국망천과 낙동강 상류로 들어가는 죽계천이 시작되고 국립공원으로 지정(1987년)된 점 등을 고려하여 선정, 주봉인 비로봉 일대에는 주목군락지(천연기념물 제244호)와 한국산 에델바이스인 솜다리가 군락을 이루고 있음. 희방사(喜方寺), 구인사, 소수서원(紹修書院 : 사적 제55호), 부석사(浮石寺), 온달성, 국립천문대
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '소요산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           규모는 작으나 상백운대, 하백운대, 중백운대 등 경관이 아름답고, 등산인의 선호도가 높아 '81년 국민관광지로 지정된 점을 고려하여 선정, 원효폭포, 청량폭포, 선녀탕절벽과 가을철 단풍이 유명하며, 신라 무열왕 1년(654년)에 원효대사가 창건하였다고 전해지는 자재암이 있음.
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '속리산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           예로부터 산세가 수려하여 제2금강 또는 소금강이라고도 불리울 정도로 경관이 아름답고 망개나무, 미선나무 등 1,000여 종이 넘는 동식물이 서식하고 있으며, 국립공원으로 지정(1970년)된 점 등을 고려하여 선정, 법주사(法住寺), 문장대, 천연기념물 제103호인 정이품송(正二品松) 및 천연기념물 제207호인 망개나무가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '신불산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           영남알프스 산군에 속하는 산으로 능선에는 광활한 억새와 바위절벽, 완만한 지대가 조화를 이루고 있으며 작천계곡, 파래소폭포 등이 있고 군립공원인 점 등을 고려하여 선정, 신불산 폭포자연휴양림 등이 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '연화산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           경관이 아름답고 오래된 사찰과 문화재가 많으며 도립공원으로 지정(1983년)된 점 등을 고려하여 선정, 산 중턱에 큰 대밭이 있음. 유서 깊은 옥천사(玉泉寺)와 연대암·백련암·청연암 등이 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '오대산(비로봉)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           국내 제일의 산림지대를 이루고 있으며, 경관이 수려하여 국립공원으로 지정(1975년)된 점 등을 고려하여 선정, 연꽃모양으로 둘러선 다섯 개의 봉우리가 모두 모나지 않고 평평한 대지를 이루고 있는데서 산이름이 유래. 월정사(月精寺), 적멸보궁(寂滅寶宮), 상원사(上院寺)가 있음. 골짜기마다 사찰, 암자 등 많은 불교유적이 산재해 있는 등 우리나라 최고의 불교 성지로 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '오봉산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           산세는 크지 않으나 바위와 수목이 어우러진 경관이 아름다운 점 등을 고려하여 선정, 다섯 개의 바위 봉이 연이어 솟아있는 데서 산이름이 유래. 신라때 아도화상이 창건하였다고 전해지는 청평사(淸平寺)와 구성폭포가 유명. 청평사 경내에 있는 보물 제164호인 회전문이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '용문산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           옛부터 경기의 금강산이라 불리워질 만큼 기암괴석과 고산준령을 고루 갖춘 경관이 뛰어난 산이며, 특히 신라 선덕여왕때 창건한 용문사와 높이 62m, 둘레 14m에 달하는 은행나무(천연기념물 제30호)가 있는 등 역사·문화적 가치가 높은 점을 고려하여 선정, 경기도에서 네 번째로 높은 산으로 미지산이라는 이름으로 불리었는데 조선을 개국한 이태조가 등극하면서 `용문산'이라 바꿔 부르게 되었다는 전설이 있음. 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '용화산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           파로호, 춘천호, 소양호 등과 연접해 있으며 산림과 기암괴석이 어우러져 경관이 아름다우며 조망이 좋은 점 등을 고려하여 선정, 성불사터가 있으며 광바위, 주전자바위, 바둑바위 등 갖가지 전설을 간직한 실물을 닮은 바위가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '운문산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           구연동(臼淵洞), 얼음골이라 부르는 동학(洞壑), 해바위(景岩) 등 천태만상의 기암괴석이 계곡과 어우러져 경관이 수려하고 군립공원으로 지정(1983년)된 점 등을 고려하여 선정, 보물 제835호 대웅전, 제678호 삼층석탑, 제193호 석등, 제316호 원응국사비, 제317호 석조여래좌상 등 각종 문화유적이 있는 운문사가 있음. 석남사 경내에 있는 4백년의 수령을 자랑하는 처진 소나무(반송 : 천연기념물 제180호)가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '운악산(현등산)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           주봉인 망경대를 둘러싼 경관이 경기 소금강이라고 불리울 만큼 뛰어난 점 등을 고려하여 선정, 천년고찰인 현등사 및 백년폭포, 오랑캐소, 눈썹바위, 코끼리바위, 망경대, 무우폭포, 큰골내치기암벽, 노채애기소 등 운악8경이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '운장산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           운일암(雲日岩)·반일암(半日岩)으로 유명한 대불천(大佛川) 계곡이 있으며, 물이 맑고 암벽과 숲으로 둘러싸여 경관이 아름답고 자연휴양림이 있는 점 등을 고려하여 선정, 북두칠성의 전설이 담겨있는 `칠성대'와 조선시대 송익필의 전설이 얽혀 있는 `오성대'가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '월악산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           산세가 험준하고 기암이 어우러져 예로부터 신령스런 산으로 여겨졌으며 송계 8경과 용하 9곡이 있고 국립공원으로 지정(1984년)된 점 등을 고려하여 선정, 신라말 마의태자와 덕주공주가 마주보고 망국의 한을 달래고 있다는 미륵사지의 석불입상, 덕주사의 마애불 및 덕주산성 등이 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '월출산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           경관이 아름다우며 난대림과 온대림이 혼생하여 생태적 가치가 크고 국립공원으로 지정(1988년)된 점 등을 고려하여 선정, 천황봉을 중심으로 무위사 극락보전(국보 제13호), 도갑사 해탈문(국보 제50호)가 있음. 구정봉 밑 용암사터 근처에는 우리나라에서 가장 높은 곳에 위치한 국보 제144호인 마애여래좌상이 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '유명산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           능선이 완만하고 부드러우며, 수량이 풍부한 계곡과 기암괴석 및 울창한 숲이 어우러져 경관이 아름다운 점 등을 고려하여 선정, 신라 법흥왕 27년(540년)에 인도에서 불법을 우리나라에 들여온 마라가미 스님에게 법흥왕이 하사한 사찰인 현등사가 유명. 자연휴양림이 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '응봉산(매봉산)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           아름다운 여러 계곡들을 끼고 있어 계곡탐험코스로 적합하며, 산림이 울창하고 천연노천온천인 덕구온천과 용소골의 폭포와 소가 많은 등 경관이 아름다운 점을 고려하여 선정, 울진조씨가 매사냥을 하다가 잃어버린 매를 이 산에서 찾고는 산 이름을 응봉이라 한 뒤 근처에 부모의 묘자리를 쓰자 집안이 번성하였다는 전설이 전해지고 있음. 정상에서 멀리 백암산·통고산·함백산·태백산을 조망할 수 있는 곳으로 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '장안산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           덕산계곡을 비롯한 크고 작은 계곡과 윗용소, 아랫용소 등 연못 및 기암괴석이 산림과 어우러져 군립공원(1986년)으로 지정된 점 등을 고려하여 선정, 산등에서 동쪽 능선으로 펼쳐진 광활한 갈대밭과 덕산용소계곡이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '재약산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           산세가 부드러우면서도 정상 일대에는 거대한 암벽을 갖추고 있어 경관이 아름다우며 우리나라에서 가장 넓은 억새밭인 사자평이 있는 점 등을 고려하여 선정, 삼복 더위에 얼음이 어는 천연기념물 제224호 얼음골이 있음. 신라 진덕여왕때 창건하고 서산대사가 의병을 모집한 곳인 표충사가 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '적상산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           가을에 마치 온 산이 빨간 치마를 입은 여인네의 모습과 같다 하여 이름이 붙여질 정도로 경관이 뛰어나며 덕유산 국립공원구역인 점 등을 고려하여 선정, 고려 공민왕 23년(1374) 최영 장군이 탐라를 토벌한 후 귀경길에 이 곳을 지나다가 산의 형세가 요새로서 적지임을 알고 왕에게 건의하여 축성된 적상산성(사적 제146호)과 안국사 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '점봉산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           원시림이 울창하고 모데미풀 등이 자생하는 등 생태적 가치가 커 유네스코에서 생물권보존구역으로 지정하고, 산림유전자원보호림으로 관리되고 있는 점 등을 고려하여 선정. 특히 제1회 아름다운 숲 전국대회에서 보전되어야 할 숲으로 선정. 12담 구곡으로 불리는 오색약수터 및 주전골 성국사터에 있는 보물 제497호인 양양 오색리 삼층석탑이 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '조계산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
          예로부터 소강남(小江南)이라 부른 명산으로 깊은 계곡과 울창한 숲·폭포·약수 등 자연경관이 아름답고, 불교 사적지가 많으며, 도립공원으로 지정(1979년)된 점 등을 고려하여 선정, 목조삼존불감(국보 제42호), 고려고종제서(高麗高宗制書 : 국보 제43호), 송광사국사전(국보 제56호) 등 많은 국보를 보유한 송광사와 곱향나무(천연기념물 제88호)가 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '주왕산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           석병산으로 불리울 만큼 기암괴봉과 석벽이 병풍처럼 둘러서 경관이 아름다우며 국립공원으로 지정(1976년)된 점 등을 고려하여 선정, 대전사(大典寺), 주왕암이 있음. 주왕굴을 중심으로 남아있는 자하성의 잔해는 주왕과 고려군의 싸움의 전설이 깃들여 있는 곳으로 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '주흘산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           소백산맥의 중심을 이루고 문경새재 등 역사적 전설이 있으며, 여궁폭포와 파랑폭포 등 경관이 아름답고, 월악산 국립공원구역인 점 등을 고려하여 선정, 야생화, 오색단풍, 산죽밭이 유명하며, 조선조 문경현의 진산으로 문경 1, 2, 3관문이 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '지리산(천왕봉)') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           신라 5악중 남악으로 남한 내륙의 최고봉인 천왕봉(1,915m)을 주봉으로 노고단(1,507m), 반야봉(1,751m) 등 동서로 100여리의 거대한 산악군을 이뤄 `지리산 12동천'을 형성하는 등 경관이 뛰어나고 우리나라 최대의 자연생태계 보고이며 국립공원 제1호로 지정(1967년)된 점 등을 고려하여 선정, 어리석은 사람이 머물면 지혜로운 사람으로 달라진다고 한데서 산이름이 유래.화엄사, 천은사, 연곡사, 쌍계사 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '지리산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           한려수도의 빼어난 경관과 조화를 이루고 특히 불모산, 가마봉, 향봉, 옥녀봉 등 산 정상부의 바위산이 기암괴석을 형성하고 조망이 좋은 점 등을 고려하여 선정,`지리산이 바라 보이는 산'이란 뜻에서 산이름이 유래하였으며, 현지에서는 지리산이라고도 불리워지고 있음. 다도해의 섬을 조망할 수 있으며 기묘한 바위 능선이 특히 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '천관산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           호남의 5대 명산으로 꼽을 만큼 경관이 아름다우며 조망이 좋고 도립공원으로 지정(1998년)된 점 등을 고려하여 선정, 신라시대에 세워진 천관사와 동백숲이유명하고, 자연휴양림이 있음. 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '천마산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           산꼭대기를 중심으로 능선이 사방에 뻗어있어 어느 지점에서나 정상을 볼수 있는 특이한 산세와 식물상이 풍부하여 식물관찰 산행지로 이름나 있는 점 등을 고려하여 선정, 산 남쪽에 천마산스키장이 있음
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '천성산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           금강산의 축소판이라고 불릴 정도로 경관이 뛰어나고, 특히 산정상부에 드넓은 초원과 산지습지가 발달하여 끈끈이주걱 등 희귀식물과 수서곤충이 서식하는 등 생태적 가치가 높은 점을 고려하여 선정, 봄에는 진달래와 철쭉, 가을에는 능선의 억새가 장관을 이루며, 원효대사가 창건했다는 내원사가 있음.
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '천태산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           충북의 설악산으로 불려질 만큼 경관이 아름다운 점 등을 고려하여 선정, 고려시대 대각국사 의천이 창건한 영국사와 수령이 약 500년 된 은행나무(천연기념물 제223호), 3층석탑(보물 제533호), 원각국사비(보물 제534호) 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '청량산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           산세는 크지 않으나 연이어 솟는 바위 봉우리와 기암절벽이 어우러져 예로부터 소금강으로 꼽힐 만큼 산세가 수려하고, 도립공원으로 지정(1982년)된 점 등을 고려하여 선정, 원효대사가 창건한 유리보전, 신라시대의외청량사, 최치원의 유적지인 고운대와 독서당, 공민왕이 홍건적의 난을 피해 은신한 오마대(五馬臺)와 청량산성, 김생이 글씨를 공부하던 김생굴, 퇴계 이황이 수도하며 성리학을 집대성한 오산당(청량정사) 등 역사적 유적지로 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '추월산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           울창한 산림과 담양호가 어우려져 경관이 아름다우며 추월난이 자생하는 점 등을 고려하여 선정, 산 정상에서 65m 정도 아래 지점에 있는 보리암(菩提庵)과 전라북도 순창을 경계로 한 산록에 있는 용추사가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '축령산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           소나무와 잣나무 장령림이 울창한 숲을 이루고 단애가 형성되어 있으며, 산 정상에서 북으로는 운악산, 명지산, 화악산이 보이고, 동남쪽으로 청평호가 보이는 등 조망이 뛰어난 점을 고려하여 선정, 가평 7경의 하나인 축령백림과 남이장군의 전설이 깃든 남이바위, 수리바위 축령백림 등이 유명. 자연휴양림이 있음. 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '치악산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           주봉인 비로봉을 중심으로 남대봉 (1,181m)과 매화산(1,085m) 등 1천여 미터의 고봉들이 연이어 있어 경관이 아름다우며 곳곳에 산성과 사찰, 사적지들이 널리 산재해 있고 국립공원으로 지정(1984년)된 점 등을 고려하여 선정, 구룡계곡, 부곡계곡, 금대계곡 등과 신선대, 구룡소, 세렴폭포, 상원사 등이 있음. 사계절별로 봄 진달래와 철쭉, 여름 구룡사의 울창한 숲과 깨끗한 물, 가을의 단풍, 겨울 설경이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '칠갑산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           백운동 계곡 등 경관이 아름다우며 도립공원으로 지정(1973년)된 점 등을 고려하여 선정, 계곡은 깊고 급하며 지천과 계곡을 싸고 돌아 7곳에 명당이 생겼다는 데서 산이름이 유래. 신라 문성왕 때 보조(普照) 승려가 창건한 장곡사(長谷寺)에 있는 철조약사여래좌상(보물 제174호) 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '태백산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           예로부터 삼한의 명산이라 불리웠으며 산 정상에는 고산 식물이 자생하고 겨울 흰 눈으로 덮인 주목군락의 설경 등 경관이 뛰어나며 도립공원으로 지정(1989년)된 점 등을 고려하여 선정, 삼국사기에 따르면 산 정상에 있는 천제단에서 왕이 친히 천제를 올렸다는 기록이 있음. 망경사, 백단사 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '태화산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           경관이 아름답고 고구려 시대에 쌓았던 토성인 태화산성 등 역사적 유적이 있고, 고씨동굴(高氏洞窟 : 천연기념물 제219호) 등이 소재하고 있는 점 등을 고려하여 선정 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '팔공산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           비로봉(毘盧峰)을 중심으로 하여 동·서로 16km에 걸친 능선 경관이 아름다우며 대도시 근교에서는 가장 높은 산으로 도시민에게 휴식처를 제공하고 도립공원으로 지정(1980년)된 점 등을 고려하여 선정, 동화사(桐華寺), 은해사(銀海寺), 부인사(符仁寺), 송림사(松林寺), 관암사(冠岩寺) 등 불교문화의 성지로 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '팔봉산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           산은 나지막하고 규모도 작으나 여덟개의 바위봉이 팔짱 낀 8형제처럼 이여져 있고 홍천강과 연접하여 경관이 아름다운 점 등을 고려하여 선정, 국민관광지로 지정되어 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '팔영산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           여덟개의 암봉으로 이루어진 산세가 험준하고 기암괴석이 많으며 조망이 좋고 도립공원으로 지정(1998년)된 점 등을 고려하여 선정, 예전에 화엄사, 송광사, 대흥사와 함께 호남 4대 사찰로 꼽히던 능가사가 있음. 신선대, 강산폭포 및 자연휴양림이 있음. 정상에서 대마도까지 보일 정도로 조망이 좋음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '한라산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           남한에서 가장 높은 우리나라 3대 영산의 하나로 산마루에는 분화구인 백록담이 있고 1,800여종의 식물과 울창한 자연림 등 고산식물의 보고이며 국립공원으로 지정(1970년)된 점 등을 고려하여 선정, 남한의 최고봉으로서 백록담, 탐라계곡, 안덕계곡, 왕관릉, 성판암, 천지연 등이 유명
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '화악산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           경기 제１의 고봉으로 애기봉을 거쳐 수덕산까지 약 10㎞의 능선 경관이 뛰어나며 시계가 거의１백㎞에 달하는 등 조망이 좋은 점 등을 고려하여 선정, 집다리골 자연휴양림이 있으며, 정상에서 중서부지역 대부분의 산을 조망할 수 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '황매산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           화강암 기암괴석과 소나무, 철쭉, 활엽수림이 어우러져 경관이 아름다운 점 등을 고려하여 선정, 합천호 푸른물에 하봉, 중봉, 상봉의 산 그림자가 잠기면 세송이 매화꽃이 물에 잠긴 것 같다고 하여 수중매라는 별칭으로도 불림. 산 아래의 황매평전에는 목장지대와 고산 철쭉 자생지가 있으며, 통일신라시대의 고찰인 염암사지(사적131호)가 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '황석산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           거망에서 황석으로 이어지는 능선에 있는 광활한 억새밭 등 경관이 아름답고 황석산성 등 역사적 유적이 있는 점 등을 고려하여 선정, 정유재란 당시 왜군에게 마지막까지 항거하던 사람들이 성이 무너지자 죽음을 당하고 부녀자들은 천길 절벽에서 몸을 날려 지금껏 황석산 북쪽 바위 벼랑이 핏빛이라는 전설이 있는 황석산성이 있음 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '황악산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           전체적인 산세는 특징 없이 완만한 편이나 산림이 울창하고 산 동쪽으로 흘러내리는 계곡은 곳곳에 폭포와 소를 이뤄 계곡미가 아름다운 점 등을 고려하여 선정, 특히 직지사 서쪽 200m 지점에 있는 천룡대부터 펼쳐지는 능여계곡은 대표적인 계곡으로 봄철에는 진달래, 벚꽃, 산목련이 유명. 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '화왕산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           억새밭과 진달래 군락 등 경관이 아름다우며 화왕산성, 목마산성 등이 있고 군립공원인 점 등을 고려하여 선정, 해마다 정월대보름이 되면 정상 일대의 억새평전에서 달맞이 행사가 열림. 정상에 화산활동으로 생긴 분화구 못(용지)이 3개 있음. 송현동 고분군 및 석불좌상, 대웅전 등 4점의 보물이 있는 관룡사 등이 유명 
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '황장산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           울창한 산림이 암벽과 어우러져 경관이 아름다우며 황장목이 유명하고 조선시대 봉산 표지석이 있는 등 경관 및 산림문화적 측면을 고려하여 선정, 동국여지승람, 대동지지, 예천군 읍지 등에는 작성산으로 표기
          </Text>
        </View>
      );
    }
    else if (selectedMountain === '희양산') {
      return (
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
           산 전체가 하나의 바위처럼 보이고 바위 낭떠러지들이 하얗게 드러나 있어 주변의 산에서뿐만 아니라 먼 산에서도 쉽게 알아볼 수 있으며 기암괴석과 풍부한 수량이 어우러진 백운곡 등 경관이 수려하고 마애본좌상 등 역사유적이 있는 점 등을 고려하여 선정
          </Text>
        </View>
      );
    }
    return null;
    // Add more conditions for other mountains if needed
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {Object.keys(dataMap).map((letter) => (
          <TouchableOpacity key={letter} onPress={() => setSelected(letter)}>
            <Text style={styles.letter}>{letter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={dataMap[selected]}
          renderItem={({ item }) => <ListItem item={item} onPress={handleListItemPress} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {/* Modal */}
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        {modalVisible && renderModalContent(selectedMountain)}
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    marginLeft: 20,
  },
  tabContainer: {
    flexDirection: 'column',
    marginRight: 20,
    borderRightWidth: 1,
    borderColor: '#E0E0E0',
    height: '100%', // 화면 높이에 맞게 조정
    justifyContent: 'space-evenly', // 간격을 균일하게 조절
    paddingRight: 10,
    paddingLeft: 10, // 좌측 패딩 추가
  },
  letter: {
    backgroundColor: '#1976D2',
    color: 'white',
    paddingVertical: 15, // 상하 패딩 조정
    paddingHorizontal: 10, // 좌우 패딩 조정
    marginBottom: 10,
    borderRadius: 5,
    textAlign: 'center',
    width: 50, // 너비 조정
    fontSize: 18, // 글자 크기 조정
    fontWeight: 'bold',
  },

  listContainer: {
    flex: 1,
    width: '100%',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalText: {
    fontSize: 16,
    color: 'black',
  },
});

export default TabThreeScreen;




