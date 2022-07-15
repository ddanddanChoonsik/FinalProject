import React from 'react';
import '../../styles/plan.css';

const PlaceItem = ({place, setMapX, setMapY}) => {
  const contentTypeId = {
    A01010100: '국립공원',
    A01010200: '도립공원',
    A01010300: '군립공원',
    A01010400: '산',
    A01010500: '자연생태관광지',
    A01010600: '자연휴양림',
    A01010700: '수목원',
    A01010800: '폭포',
    A01010900: '계곡',
    A01011000: '약수터',
    A01011100: '해안절경',
    A01011200: '해수욕장',
    A01011300: '섬',
    A01011400: '항구/포구',
    A01011500: '어촌',
    A01011600: '등대',
    A01011700: '호수',
    A01011800: '강',
    A01011900: '동굴',
    A01020100: '희귀동.식물',
    A01020200: '기암괴석',
    A02010100: '고궁',
    A02010200: '성',
    A02010300: '문',
    A02010400: '고택',
    A02010500: '생가',
    A02010600: '민속마을',
    A02010700: '유적지/사적지',
    A02010800: '사찰',
    A02010900: '종교성지',
    A02011000: '안보관광',
    A02020100: '유원지',
    A02020200: '관광단지',
    A02020300: '온천/욕장/스파',
    A02020400: '이색찜질방',
    A02020500: '헬스투어',
    A02020600: '테마공원',
    A02020700: '공원',
    A02020800: '유람선/잠수함관광',
    A02030100: '농.산.어촌 체험',
    A02030200: '전통체험',
    A02030300: '산사체험',
    A02030400: '이색체험',
    A02030500: '관광농원',
    A02030600: '이색거리',
    A02040100: '제철소',
    A02040200: '조선소',
    A02040300: '공단',
    A02040400: '발전소',
    A02040500: '광산',
    A02040600: '식음료',
    A02040700: '화학/금속',
    A02040800: '기타',
    A02040900: '전자/반도체',
    A02041000: '자동차',
    A02050100: '다리/대교',
    A02050200: '기념탑/기념비/전망대',
    A02050300: '분수',
    A02050400: '동상',
    A02050500: '터널',
    A02050600: '유명건물',
    A02060100: '박물관',
    A02060200: '기념관',
    A02060300: '전시관',
    A02060400: '컨벤션센터',
    A02060500: '미술관/화랑',
    A02060600: '공연장',
    A02060700: '문화원',
    A02060800: '외국문화원',
    A02060900: '도서관',
    A02061000: '대형서점',
    A02061100: '문화전수시설',
    A02061200: '영화관',
    A02061300: '어학당',
    A02061400: '학교',
    A02070100: '문화관광축제',
    A02070200: '일반축제',
    A02080100: '전통공연',
    A02080200: '연극',
    A02080300: '뮤지컬',
    A02080400: '오페라',
    A02080500: '전시회',
    A02080600: '박람회',
    A02080700: '컨벤션',
    A02080800: '무용',
    A02080900: '클래식음악회',
    A02081000: '대중콘서트',
    A02081100: '영화',
    A02081200: '스포츠경기',
    A02081300: '기타행사',
    A03010100: '육상레포츠',
    A03010200: '수상레포츠',
    A03010300: '항공레포츠',
    A03020100: '스포츠센터',
    A03020200: '수련시설',
    A03020300: '경기장',
    A03020400: '인라인(실내 인라인 포함)',
    A03020500: '자전거하이킹',
    A03020600: '카트',
    A03020700: '골프',
    A03020800: '경마',
    A03020900: '경륜',
    A03021000: '카지노',
    A03021100: '승마',
    A03021200: '스키/스노보드',
    A03021300: '스케이트',
    A03021400: '썰매장',
    A03021500: '수렵장',
    A03021600: '사격장',
    A03021700: '야영장,오토캠핑장',
    A03021800: '암벽등반',
    A03021900: '빙벽등반',
    A03022000: '서바이벌게임',
    A03022100: 'ATV',
    A03022200: 'MTB',
    A03022300: '오프로드',
    A03022400: '번지점프',
    A03022500: '자동차경주',
    A03022600: '스키(보드) 렌탈샵',
    A03022700: '트래킹',
    A03030100: '윈드서핑/제트스키',
    A03030200: '카약/카누',
    A03030300: '요트',
    A03030400: '스노쿨링/스킨스쿠버다이빙',
    A03030500: '민물낚시',
    A03030600: '바다낚시',
    A03030700: '수영',
    A03030800: '래프팅',
    A03040100: '스카이다이빙',
    A03040200: '초경량비행',
    A03040300: '헹글라이딩/패러글라이딩',
    A03040400: '열기구',
    A03050100: '복합 레포츠',
    A04010100: '5일장',
    A04010200: '상설시장',
    A04010300: '백화점',
    A04010400: '면세점',
    A04010500: '할인매장',
    A04010600: '전문상가',
    A04010700: '공예,공방',
    A04010800: '관광기념품점',
    A04010900: '특산물판매점',
    A05020100: '한식',
    A05020200: '서양식',
    A05020300: '일식',
    A05020400: '중식',
    A05020500: '아시아식',
    A05020600: '패밀리레스토랑',
    A05020700: '이색음식점',
    A05020800: '채식전문점',
    A05020900: '바/까페',
    A05021000: '클럽',
    B02010100: '관광호텔',
    B02010200: '수상관광호텔',
    B02010300: '전통호텔',
    B02010400: '가족호텔',
    B02010500: '콘도미니엄',
    B02010600: '유스호스텔',
    B02010700: '펜션',
    B02010800: '여관',
    B02010900: '모텔',
    B02011000: '민박',
    B02011100: '게스트하우스',
    B02011200: '홈스테이',
    B02011300: '서비스드레지던스',
    B02011400: '의료관광호텔',
    B02011500: '소형호텔',
    B02011600: '한옥스테이',
    C01120001: '가족코스',
    C01130001: '나홀로코스',
    C01140001: '힐링코스',
    C01150001: '도보코스',
    C01160001: '캠핑코스',
    C01170001: '맛코스',
  }

  return (
    <div className='place-wrap'>
      {
        // 이미지 없으면 표시하지 않음
        place.firstimage ? <img className='place-img' src={place.firstimage} alt=''/> : <span className="no-image material-symbols-outlined">image_not_supported</span>
      }

      <div className='place-info-wrap'>
        <div>{place.title}</div>
        {/* <div>{place.cat3}</div> */}
        <div className='place-info'>{contentTypeId[place.cat3]}</div>
        {/* <div className='place-info'>{place.contentid}</div> */}
      </div>
    </div>
  );
};

export default PlaceItem;