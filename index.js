const deviInfo = {
  name: "Devinan",
  age: 20,
  gender: "Male"
};

console.log(deviInfo.gender);

deviInfo.gender = "Female";

console.log(deviInfo.gender);

/*
Object는 value에 이름을 줄 수 있어
리스트 만들땐 Array 사용해
하지만 예를들어, Array로 내 개인정보를 저장하려면 (이름, 나이, 성별 등)
내가 원하는 방식으로 정보가 저장되지 않아
**Object는 각 데이터에 label이 가능해

예를들면,

const nicoInfo = {
  name: "Nico",
  age: 33,
  gender: "Male",
}
Console.log(nicoInfo.gender);
추후 label 값 재지정할 수 있어
nicoInfo.gender = "Female"

***Array 안에 object 넣을 수 있어
favFood: [{name:"kimchi", fatty:false}, {name: "cheese", fatty:true}]

[그래머 기억할 것들]
',' 콤마 빼먹지 말 것
" " 쿼테이션 까먹지 말고 닫아
*/
