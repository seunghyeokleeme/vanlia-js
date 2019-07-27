const something = "Something";

const dayOfWeek = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  54,
  true,
  "stuff",
  "lalala",
  something
];
console.log(dayOfWeek[2]);

/*
[데이터 organize. 정렬하는 법]
1. Array: 리스트라 생각해. (eg 월화수목금토일) 
Array 월-일을 한줄씩 const로 정해줄 필요 없이 array 사용 
(eg const daysOfWeek = [])
[] 안에는: 텍스트, true/false, numbers, floats 사용가능
Array []안에 숫자 써주면 해당하는 순서의 값을 출력해줘
BUT 컴퓨터는 0부터 세. 사람이랑 달라

2. Object (다음편에서)

camelCase: 변수명 소문자로 시작. 중간에 space가 필요하면 대문자로 적어줘
*/
