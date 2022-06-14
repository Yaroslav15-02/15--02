//DZ1
const name = prompt("Кто ты Воин?");
console.log('Привет ' + name);
alert("Приветствую  " + name);



//DZ2
const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = [0,1,2,3,4,5,6,7,8,9];
if (arr1.length > arr2.length){
    console.log('первый массив больше');
} else if(arr2.length > arr1.length) {
    console.log('второй массив больше');
} else{
    console.log('одинаковы');
}

// dz3
const colors = 'red';   //необходимо менять цвет
switch (colors){
    case 'red':
        console.log('горит красный свет');
        break;
    case 'yellow':
        console.log('горит желтый свет');
        break;
    case 'green':
        console.log('горит зеленый свет');
        break;
}


// dz4
const arr3 = [[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]
console.log(arr3[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0])

