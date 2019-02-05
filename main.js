// Lesson 15, homework
/*var
a = 'Some text is here',
b = 10,
c = false,
d = [1,2,3],
e = {},
i = 199;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(b.toFixed(2)); //10.00
console.log(i++); //вывел значение и увеличил на 1
console.log(++i); //увеличил значение еще на 1 и вывел
b += 20;
console.log(b); //10+20=30
b -= 40;
console.log(b); //30-40=-10
b *= 5;
console.log(b); //-10*5=-50
b /= -0.5;
console.log(b); //-50/(-0.5)=100
b %= 33;
console.log(b); //100/33=3, остаток 1
console.log(Math.PI);
console.log(Math.round(89.279)); //89
console.log(Math.round(Math.random()*10)); //округлили выводимое число до целого
console.log(Math.pow(2,5)); //2^5=32
console.log(a.length); // в строке 17 символов
console.log(a.indexOf('here')); //13
console.log(a.indexOf('yes')); //-1, т.к. ничего подобного не нашло
console.log(a.replace('text','word')); //переименование/замена подстроки
console.log(a.toUpperCase());
console.log(a.toLowerCase());
*/

// Lesson 16, homework
/*
//пункт 1
var 
someString = 'Some text is here',
emtyString = '',
newString1 = emtyString || 'Default text';
console.log(someString);
console.log(newString1);

//пункт 2
var 
browser = {
	title: 'Google Chrome',
	version: 71.0,
	capacity: '32 bit',
	license: function () { //пункт 3
		return 'Official';
	}
};
console.log(browser);
console.log(browser.license());

//пункт 4
for (var i = 1; i <= 20; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

//пункт 5
var stSurname = 'Burlachenko', stName;
switch(stSurname) {
	case 'Panchenko': stName = 'Igor'; break;
	case 'Burlachenko': stName = 'Andrew'; break;
	case 'Serpuhova': stName = 'Svetlana'; break;
	default: stName = 'has no name';
}
console.log(stSurname + ' ' + stName);

//пункт 6
var x = 8;
var a = x > 8 ? 'x больше 8': x < 8 ? 'х меньше 8' : 'х равен 8';
console.log(a);

//пункт 7
var b = 4;
while (b < 8) console.log(b++);

//пункт 8
function myValue (arg1, arg2, callback) {
	console.log('Число ' + arg1 + ' в степени ' + arg2);
	arg3 = Math.pow(arg1, arg2);
	callback();
}
myValue(2, 4, function() {
	console.log('Результат ' + arg3);
});
*/ 

// Lesson 17, homework

//пункт 1
var counter = function () {
	var count = 0;
	return function (num) {
		count = num !== undefined ? num : count;
		return count++;
	}
}();
console.log(counter());
console.log(counter());
console.log(counter(8));
console.log(counter());

//пункт 2
var intro = function () {
	return 'I am ' + this.name + ' and I program in ' + this.lang;
};

var firstStudent = {
	name: 'Oleg',
	gender: 'male',
	lang: 'Java',
	_lvl: 'junor',
	intro: intro,
	get lvl() {                   //пункт 3
		return this._lvl;
	},
	set lvl(value) {
		this._lvl = value;
	}
};

var secondStudent = {
	name: 'Eugen',
	gender: 'male',
	lang: 'Pyton',
	_lvl: 'medium',
	intro: intro,
	get lvl() {
		return this._lvl;
	},
	set lvl(value) {
		this._lvl = value;
	}
};

console.log(firstStudent.intro());
console.log(firstStudent._lvl);
console.log(secondStudent.intro());
console.log(secondStudent._lvl);