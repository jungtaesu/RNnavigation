const foods = [
  // 한식
  { name: "김치찌개", flavor: "매운맛", category: "한식" },
  { name: "된장찌개", flavor: "구수한 맛", category: "한식" },
  { name: "비빔밥", flavor: "고소한 맛", category: "한식" },
  { name: "불고기", flavor: "달콤한 맛", category: "한식" },
  { name: "제육볶음", flavor: "매콤한 맛", category: "한식" },
  { name: "삼겹살", flavor: "고소한 맛", category: "한식" },
  { name: "갈비찜", flavor: "달콤한 맛", category: "한식" },
  { name: "닭갈비", flavor: "매콤한 맛", category: "한식" },
  { name: "순두부찌개", flavor: "얼큰한 맛", category: "한식" },
  { name: "보쌈", flavor: "담백한 맛", category: "한식" },

  // 중식
  { name: "유산슬", flavor: "고급스러운 맛", category: "중식" },
  { name: "깐풍기", flavor: "매콤새콤한 맛", category: "중식" },
  { name: "고추잡채", flavor: "아삭한 맛", category: "중식" },
  { name: "마파두부", flavor: "매운맛", category: "중식" },
  { name: "깐쇼새우", flavor: "새콤달콤한 맛", category: "중식" },
  { name: "짜장면", flavor: "달콤한 맛", category: "중식" },
  { name: "짬뽕", flavor: "매운맛", category: "중식" },
  { name: "탕수육", flavor: "새콤달콤한 맛", category: "중식" },
  { name: "볶음밥", flavor: "고슬고슬한 맛", category: "중식" },

  // 일식 (10개 추가)
  { name: "라멘", flavor: "짭짤한 맛", category: "일식" },
  { name: "스시", flavor: "신선한 맛", category: "일식" },
  { name: "돈까스", flavor: "바삭한 맛", category: "일식" },
  { name: "우동", flavor: "따뜻한 맛", category: "일식" },
  { name: "가츠동", flavor: "달콤짭짤한 맛", category: "일식" },
  { name: "오야코동", flavor: "따뜻한 맛", category: "일식" },
  { name: "규동", flavor: "짭짤한 맛", category: "일식" },
  { name: "회덮밥", flavor: "신선한 맛", category: "일식" },
  { name: "초밥", flavor: "신선한 맛", category: "일식" },

  //양식
  { name: "파스타", flavor: "다양한 맛", category: "양식" },
  { name: "피자", flavor: "고소한 맛", category: "양식" },
  { name: "스테이크", flavor: "육즙 가득한 맛", category: "양식" },
  { name: "샌드위치", flavor: "상큼한 맛", category: "양식" },
  { name: "리조또", flavor: "크리미한 맛", category: "양식" },
  { name: "라자냐", flavor: "고소한 맛", category: "양식" },
  { name: "샐러드", flavor: "신선한 맛", category: "양식" },
  { name: "수프", flavor: "따뜻한 맛", category: "양식" },
  { name: "버거", flavor: "푸짐한 맛", category: "양식" },

  // 분식 (10개 추가)
  { name: "떡볶이", flavor: "매콤한 맛", category: "분식" },
  { name: "김밥", flavor: "고소한 맛", category: "분식" },
  { name: "라볶이", flavor: "매콤달콤한 맛", category: "분식" },
  { name: "순대", flavor: "쫄깃한 맛", category: "분식" },
  { name: "쫄면", flavor: "매콤한 맛", category: "분식" },
  { name: "비빔국수", flavor: "새콤달콤한 맛", category: "분식" },
  { name: "잔치국수", flavor: "따뜻한 맛", category: "분식" },
  { name: "만두", flavor: "고소한 맛", category: "분식" },
  { name: "떡갈비", flavor: "달콤한 맛", category: "분식" },

  // 기타 (10개 추가)
  { name: "샐러드", flavor: "신선한 맛", category: "기타" },
  { name: "국밥", flavor: "든든한 맛", category: "기타" },
  { name: "죽", flavor: "부드러운 맛", category: "기타" },
  { name: "샌드위치", flavor: "상큼한 맛", category: "기타" },
  { name: "샐러드", flavor: "신선한 맛", category: "기타" },
  { name: "베이글", flavor: "고소한 맛", category: "기타" },
  { name: "도넛", flavor: "달콤한 맛", category: "기타" },
  { name: "커피", flavor: "쌉쌀한 맛", category: "기타" },
];
