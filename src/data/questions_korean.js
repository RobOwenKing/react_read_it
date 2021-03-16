// Question template
/*
,
  {
    prompt: '',
    answers: [''],
    translation: ''
  }
*/

const QUESTIONS = [
  {
    prompt: '한글',
    answers: ['hangeul'],
    translation: 'Hangeul (or Hangul after a former romanisation scheme)'
  },
  {
    prompt: '세종',
    answers: ['sejong'],
    translation: 'Sejong the Great (1397-1450), king best known for creating Hangeul'
  },
  {
    prompt: '한국',
    answers: ['hanguk'],
    translation: 'Korea'
  },
  {
    prompt: '네',
    answers: ['ne'],
    translation: 'yes'
  },
  {
    prompt: '아니요',
    answers: ['aniyo'],
    translation: 'no'
  },
  {
    prompt: '물',
    answers: ['mul'],
    translation: 'water'
  },
  {
    prompt: '밥',
    answers: ['bap'],
    translation: 'rice'
  },
  {
    prompt: '빵',
    answers: ['ppang'],
    translation: 'bread'
  },
  {
    prompt: '커피',
    answers: ['keopi'],
    translation: 'coffee'
  },
  {
    prompt: '단어',
    answers: ['daneo'],
    translation: 'word'
  },
  {
    prompt: '눈',
    answers: ['nun'],
    translation: 'eye'
  },
  {
    prompt: '아이',
    answers: ['ai'],
    translation: 'child'
  },
  {
    prompt: '메뉴',
    answers: ['menyu'],
    translation: 'menu'
  },
  {
    prompt: '문',
    answers: ['mun'],
    translation: 'door'
  },
  {
    prompt: '영',
    answers: ['yeong'],
    translation: '0 (Sino-Korean system)'
  },
  {
    prompt: '일',
    answers: ['il'],
    translation: '1 (Sino-Korean system)'
  },
  {
    prompt: '이',
    answers: ['i'],
    translation: '2 (Sino-Korean system); this; tooth'
  },
  {
    prompt: '삼',
    answers: ['sam'],
    translation: '3 (Sino-Korean system)'
  },
  {
    prompt: '사',
    answers: ['sa'],
    translation: '4 (Sino-Korean system)'
  },
  {
    prompt: '오',
    answers: ['o'],
    translation: '5 (Sino-Korean system)'
  },
  {
    prompt: '육',
    answers: ['yuk'],
    translation: '6 (Sino-Korean system)'
  },
  {
    prompt: '칠',
    answers: ['chil'],
    translation: '7 (Sino-Korean system)'
  },
  {
    prompt: '팔',
    answers: ['pal'],
    translation: 'arm, 8 (Sino-Korean system)'
  },
  {
    prompt: '구',
    answers: ['gu'],
    translation: '9 (Sino-Korean system)'
  },
  {
    prompt: '십',
    answers: ['ship'],
    translation: '10 (Sino-Korean system)'
  },
  {
    prompt: '하나',
    answers: ['hana'],
    translation: '1 (Native-Korean system)'
  },
  {
    prompt: '둘',
    answers: ['dul'],
    translation: '2 (Native-Korean system)'
  },
  {
    prompt: '셋',
    answers: ['set'],
    translation: '3 (Native-Korean system)'
  },
  {
    prompt: '넷',
    answers: ['net'],
    translation: '4 (Native-Korean system)'
  },
  {
    prompt: '다섯',
    answers: ['daseot'],
    translation: '5 (Native-Korean system)'
  },
  {
    prompt: '여섯',
    answers: ['yeoseot'],
    translation: '6 (Native-Korean system)'
  },
  {
    prompt: '일곱',
    answers: ['ilgop'],
    translation: '7 (Native-Korean system)'
  },
  {
    prompt: '여덟',
    answers: ['yeodeol'],
    translation: '8 (Native-Korean system)'
  },
  {
    prompt: '아홉',
    answers: ['ahop'],
    translation: '9 (Native-Korean system)'
  },
  {
    prompt: '열',
    answers: ['yeol'],
    translation: '10 (Native-Korean system)'
  },
  {
    prompt: '오늘',
    answers: ['oneul'],
    translation: 'today'
  },
  {
    prompt: '가다',
    answers: ['gada'],
    translation: 'to go'
  },
  {
    prompt: '자다',
    answers: ['jada'],
    translation: 'to sleep'
  },
  {
    prompt: '먹다',
    answers: ['meokda'],
    translation: 'to eat'
  },
  {
    prompt: '말하다',
    answers: ['malhada'],
    translation: 'to speak'
  },
  {
    prompt: '만나다',
    answers: ['mannada'],
    translation: 'to meet, to see (someone)'
  },
  {
    prompt: '보다',
    answers: ['boda'],
    translation: 'to see, to look at'
  },
  {
    prompt: '기역',
    answers: ['giyeok'],
    translation: 'the letter ㄱ'
  },
  {
    prompt: '니은',
    answers: ['nieun'],
    translation: 'the letter ㄴ'
  },
  {
    prompt: '디귿',
    answers: ['digeut'],
    translation: 'the letter ㄷ'
  },
  {
    prompt: '리을',
    answers: ['rieul'],
    translation: 'the letter ㄹ'
  },
  {
    prompt: '미음',
    answers: ['mieum'],
    translation: 'the letter ㅁ'
  },
  {
    prompt: '비읍',
    answers: ['bieup'],
    translation: 'the letter ㅂ'
  },
  {
    prompt: '시옷',
    answers: ['siot'],
    translation: 'the letter ㅅ'
  },
  {
    prompt: '이응',
    answers: ['ieung'],
    translation: 'the letter ㅇ'
  },
  {
    prompt: '지읒',
    answers: ['jieut'],
    translation: 'the letter ㅈ'
  },
  {
    prompt: '치읓',
    answers: ['chieut'],
    translation: 'the letter ㅊ'
  },
  {
    prompt: '키읔',
    answers: ['kieuk'],
    translation: 'the letter ㅋ'
  },
  {
    prompt: '티읕',
    answers: ['tieut'],
    translation: 'the letter ㅌ'
  },
  {
    prompt: '피읖',
    answers: ['pieup'],
    translation: 'the letter ㅍ'
  },
  {
    prompt: '히읗',
    answers: ['hieut'],
    translation: 'the letter ㅎ'
  },
  {
    prompt: '집',
    answers: ['jip'],
    translation: 'house'
  },
  {
    prompt: '아마도',
    answers: ['amado'],
    translation: 'maybe, perhaps'
  },
  {
    prompt: '머리',
    answers: ['meori'],
    translation: 'head; hair'
  },
  {
    prompt: '코',
    answers: ['ko'],
    translation: 'nose'
  },
  {
    prompt: '귀',
    answers: ['gwi'],
    translation: 'ear'
  },
  {
    prompt: '입',
    answers: ['ip'],
    translation: 'mouth'
  },
  {
    prompt: '이',
    answers: ['i'],
    translation: 'teeth'
  },
  {
    prompt: '목',
    answers: ['mok'],
    translation: 'neck'
  },
  {
    prompt: '손',
    answers: ['son'],
    translation: 'hand; guest'
  },
  {
    prompt: '다리',
    answers: ['dari'],
    translation: 'leg'
  },
  {
    prompt: '발',
    answers: ['bal'],
    translation: 'foot'
  },
  {
    prompt: '몸',
    answers: ['mom'],
    translation: 'body'
  },
  {
    prompt: '개',
    answers: ['gae'],
    translation: 'dog'
  },
  {
    prompt: '고양이',
    answers: ['goyangi'],
    translation: 'cat'
  },
  {
    prompt: '새',
    answers: ['sae'],
    translation: 'bird'
  },
  {
    prompt: '물고기',
    answers: ['mulgogi'],
    translation: 'fish'
  },
  {
    prompt: '토끼',
    answers: ['tokki'],
    translation: 'rabbit'
  },
  {
    prompt: '말',
    answers: ['mal'],
    translation: 'horse'
  },
  {
    prompt: '소',
    answers: ['so'],
    translation: 'cow'
  },
  {
    prompt: '쥐',
    answers: ['jwi'],
    translation: 'mouse'
  },
  {
    prompt: '돼지',
    answers: ['dwaeji'],
    translation: 'pig'
  },
  {
    prompt: '염소',
    answers: ['yeomso'],
    translation: 'goat'
  },
  {
    prompt: '양',
    answers: ['yang'],
    translation: 'sheep'
  },
  {
    prompt: '닭',
    answers: ['dak'],
    translation: 'chicken'
  },
  {
    prompt: '늑대',
    answers: ['neukdae'],
    translation: 'wolf'
  },
  {
    prompt: '여우',
    answers: ['yeou'],
    translation: 'fox'
  },
  {
    prompt: '사슴',
    answers: ['saseum'],
    translation: 'deer'
  },
  {
    prompt: '황소',
    answers: ['hwangso'],
    translation: 'ox'
  },
  {
    prompt: '곰',
    answers: ['gom'],
    translation: 'bear'
  },
  {
    prompt: '판다',
    answers: ['panda'],
    translation: 'panda'
  },
  {
    prompt: '오리',
    answers: ['ori'],
    translation: 'duck'
  },
  {
    prompt: '사자',
    answers: ['saja'],
    translation: 'lion'
  },
  {
    prompt: '고릴라',
    answers: ['gorilla'],
    translation: 'gorilla'
  },
  {
    prompt: '뱀',
    answers: ['baem'],
    translation: 'snake'
  },
  {
    prompt: '호랑이',
    answers: ['horangi'],
    translation: 'tiger'
  },
  {
    prompt: '과일',
    answers: ['gwail'],
    translation: 'fruit'
  },
  {
    prompt: '딸기',
    answers: ['ttalgi'],
    translation: 'strawberry'
  },
  {
    prompt: '오렌지',
    answers: ['orenji'],
    translation: 'orange'
  },
  {
    prompt: '바나나',
    answers: ['banana'],
    translation: 'banana'
  },
  {
    prompt: '사과',
    answers: ['sagwa'],
    translation: 'apple'
  },
  {
    prompt: '키위',
    answers: ['kiwi'],
    translation: 'kiwi'
  },
  {
    prompt: '망고',
    answers: ['manggo'],
    translation: 'mango'
  },
  {
    prompt: '배',
    answers: ['bae'],
    translation: 'pear'
  },
  {
    prompt: '포도',
    answers: ['podo'],
    translation: 'grapes'
  },
  {
    prompt: '수박',
    answers: ['subak'],
    translation: 'watermelon'
  },
  {
    prompt: '체리',
    answers: ['cheri'],
    translation: 'cherry'
  },
  {
    prompt: '자두',
    answers: ['jadu'],
    translation: 'plum'
  },
  {
    prompt: '살구',
    answers: ['salgu'],
    translation: 'apricot'
  },
  {
    prompt: '감',
    answers: ['gam'],
    translation: 'persimmon'
  },
  {
    prompt: '멜론',
    answers: ['mellon'],
    translation: 'melon'
  },
  {
    prompt: '야채',
    answers: ['yachae'],
    translation: 'vegetable'
  },
  {
    prompt: '오이',
    answers: ['oi'],
    translation: 'cucumber'
  },
  {
    prompt: '토마토',
    answers: ['tomato'],
    translation: 'tomato'
  },
  {
    prompt: '감자',
    answers: ['gamja'],
    translation: 'potato'
  },
  {
    prompt: '피망',
    answers: ['pimang'],
    translation: 'bell pepper'
  },
  {
    prompt: '마늘',
    answers: ['maneul'],
    translation: 'garlic'
  },
  {
    prompt: '콩',
    answers: ['kong'],
    translation: 'bean'
  },
  {
    prompt: '버섯',
    answers: ['beoseot'],
    translation: 'mushroom'
  },
  {
    prompt: '부추',
    answers: ['buchu'],
    translation: 'leek'
  },
  {
    prompt: '생강',
    answers: ['saenggang'],
    translation: 'ginger'
  },
  {
    prompt: '양파',
    answers: ['yangpa'],
    translation: 'onion'
  },
  {
    prompt: '밤',
    answers: ['bam'],
    translation: 'chestnut'
  },
  {
    prompt: '잣',
    answers: ['jat'],
    translation: 'pine nut'
  },
  {
    prompt: '호두',
    answers: ['hodu'],
    translation: 'walnut'
  }
];

export default QUESTIONS;
