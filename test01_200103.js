// alert(1 == 0);					//false

//동등 연산자: 값이 같은지 비교
console.log(1 == "1");				//true
console.log("" == false);			//true
console.log(undefined == null);		//true -> undefined 자료형이고 null은 object 자료형으로 값만 비교하니 둘 다 비어있어 true
console.log("\n");

//일치  연산자: 값과 자료형이 모두 같은지 비교 
console.log(1 === "1");				//false	
console.log("" === false);			//false
console.log(undefined === null);	//false
console.log("\n");

//형 변환
console.log(parseInt(3));			//3
console.log(parseInt(3.14));		//3	-> 소수점 생략
console.log(parseInt("3"));			//3
console.log(parseInt(true));		//NaN -> boolean을 정수로 형변환이 안됨
console.log(parseInt(undefined));	//NaN -> 숫자로 형변환이 안됨
console.log(parseInt(null));		//NaN -> 숫자로 형변환이 안됨

console.log(parseFloat(3));			//3 -> parseFloat()하면 정수로 나옴
console.log("\n");

console.log(Number(3));				//3
console.log(Number(3.14));			//3.14
console.log(Number("3"));			//3
console.log(Number("3.14"));		//3.14
console.log(Number(false));			//0		->Number()는 false는 숫자로 바꿔줌
console.log(Number(undefined));		//NaN	->Number()는 undefined는 숫자로 못 바꿈
console.log(Number(null));			//0		->Number()는 null을 숫자로 바꿔줌
console.log("\n");

//객체 만들기: Number객체를 만든다. 전부 다 object로 만들지만 값을 가지는 것
console.log(new Number(3));				//Number {3}
console.log(new Number(3.14));			//Number {3.14}
console.log(new Number("3"));			//Number {3}
console.log(new Number("3.14"));		//Number {3.14}
console.log(new Number(false));			//Number {0}		
console.log(new Number(undefined));		//Number {NaN}	
console.log(new Number(null));			//Number {0}		
console.log("\n");

//문자열을 숫자로 변환
console.log("3.14" * 1);				//3.14 ->크롬에서 글자색이 파란색이므로 숫자 타입으로 바뀜


