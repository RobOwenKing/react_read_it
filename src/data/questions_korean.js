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
    translation: '2 (Sino-Korean system)'
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
  }
];

export default QUESTIONS;
