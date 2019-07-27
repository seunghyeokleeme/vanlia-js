function sayHello(name, age) {
  console.log(`Hello! ${name} you have ${age} years of age.`);
}

const greetDevinan = sayHello("Devinan", 20);

console.log(greetDevinan);

/*
greetDevinan 은 sayHello의 실행된 결과값이다.(반환)
but.sayHello는 반환을 안해서 정의 가되지않는다.
*/
