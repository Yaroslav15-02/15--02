function numbers(number1, number2) {
    if (number1 < number2){
        console.log("Первое меньше")
    }else if (number2 < number1){
        console.log("второе меньше")
    }else{
        console.log("Они равны")
    }
}

const number = {
    number1: prompt("Первое число?"),
    number2: prompt("Второе число?")
}

numbers(number.number1, number.number2)



