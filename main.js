var
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
