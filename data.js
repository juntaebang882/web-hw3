// data.js : 영화 10건 데이터 / 방준태

const movies = [
  {
    title: "신세계",
    year: 2013,
    date: "2013-02-21",
    rating: 7.9,
    audience: 0,
    poster: "/pvgTrpTHremKUjadVbvtQM73Vi8.jpg",
    type: "mine",
    rank: null,
    overview: "국내 최대 범죄 조직 골드문에 잠입한 경찰 자성과 그를 믿는 조직 2인자 정청 사이의 갈등."
  },
  {
    title: "크로우즈 제로",
    year: 2007,
    date: "2007-10-27",
    rating: 7.4,
    audience: 0,
    poster: "/v9vzQvfoWYwPexviVEzFvQx8Uto.jpg",
    type: "mine",
    rank: null,
    overview: "악명 높은 스즈란 고교에 전학 온 겐지가 정점을 차지하기 위해 파벌 싸움을 시작한다."
  },
  {
    title: "크로우즈 제로 2",
    year: 2009,
    date: "2009-04-11",
    rating: 7.3,
    audience: 0,
    poster: "/8Y8bZRspysP4LBQ7yxrRy2ijkdt.jpg",
    type: "mine",
    rank: null,
    overview: "스즈란 고교와 라이벌 학교 호센 학원 간의 깨어진 휴전, 거대한 전면전이 펼쳐진다."
  },
  {
    title: "HiGH&LOW THE MOVIE",
    year: 2016,
    date: "2016-07-16",
    rating: 8.4,
    audience: 0,
    poster: "/xXEMnx0uhHT2wbATl7Gdjb0URJq.jpg",
    type: "mine",
    rank: null,
    overview: "SWORD 지구를 노리는 거대 야쿠자 자본의 음모에 맞서 다섯 개의 조직이 힘을 합친다."
  },
  {
    title: "인터스텔라",
    year: 2014,
    date: "2014-11-06",
    rating: 8.4,
    audience: 0,
    poster: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    type: "mine",
    rank: null,
    overview: "세계 각국의 정부와 경제가 붕괴된 미래, 인류를 구하기 위해 시공간의 틈을 탐험한다."
  },
  {
    title: "군체",
    year: 2026,
    date: "2026-05-21",
    rating: 8.2,
    audience: 5212855,
    poster: "/hDPGsJxo8xX0OyqcMB8xI3RdaF3.jpg",
    type: "boxoffice",
    rank: 1,
    overview: "서울 도심의 초고층 빌딩에서 정체불명의 집단 감염사태가 발생한다. 건물은 순식간에 봉쇄되고, 그 안에 있던 사람들은 그대로 고립된다."
  },
  {
    title: "마이클",
    year: 2026,
    date: "2026-04-22",
    rating: 8.5,
    audience: 1589035,
    poster: "/piMZqtd0gGS7OgkhDwiQ7vVViBQ.jpg",
    type: "boxoffice",
    rank: 2,
    overview: "어린 나이에 형제들과 ‘잭슨 파이브’ 그룹의 막내로 데뷔하자마자 음악적 천재성과 스타성으로 주목을 받은 ‘마이클 잭슨’. 전세계적인 스타로 성공하지만, 그는 가족에 대한 책임감과 자신의 음악적 정체성 사이에서 고민에 빠지게 된다."
  },
  {
    title: "백룸",
    year: 2026,
    date: "2026-05-27",
    rating: 7.0,
    audience: 5212855,
    poster: "/tcqLtpb8EUDqbct2YFl8ZGNfP2p.jpg",
    type: "boxoffice",
    rank: 3,
    overview: "그곳은 대체 무엇인가? 낯설지만 익숙한 세계, 출구도 입구도 찾을 수 없다. 당신도 입장하시겠습니까?"
  },
  {
    title: "와일드 씽",
    year: 2026,
    date: "2026-06-03",
    rating: 6.2,
    audience: 869723,
    poster: "/s4IUDzLZJb4CosgEXcmouY32Jfg.jpg",
    type: "boxoffice",
    rank: 4,
    overview: "한때 가요계를 휩쓸었지만 예기치 못한 사건에 휘말려 하루아침에 해체된 3인조 혼성 댄스 그룹 트라이앵글. 20년 만에 리더 현우에게 재기의 발판이 될 트라이앵글 공연 제안이 들어오고, 인생의 마지막 기회를 잡기 위해 멤버들을 찾아 나선다."
  },
  {
    title: "싱 스트리트",
    year: 2016,
    date: "2016-03-11",
    rating: 7.9,
    audience: 589440,
    poster: "/kUYfLv9V5mKPb2lJadzgOI67AFt.jpg",
    type: "boxoffice",
    rank: 5,
    overview: "‘코너’는 전학을 가게 된 학교에서 모델처럼 멋진 ‘라피나’를 보고 첫 눈에 반해 사랑에 빠진다. ‘라피나’에게 잘 보이고 싶은 마음에 덜컥 밴드를 하고 있다는 거짓말을 한 ‘코너’는 급기야 뮤직비디오 출연까지 제안하고 승낙을 얻는다."
  }
];
