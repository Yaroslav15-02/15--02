// DZ1
var str = '';
for (var i = 0; i < 7; i++) {
	str = str + '*';
    console.log(str)
}








// DZ2
for (i = 1; i <= 100; i ++ ) {
    if ( i % 3 ==0 ) {
        console.log("Fizz" + i)
    }else if (i % 5 == 0) {
        console.log("Buzz" + i)
    }
}



// DZ про роботов
const robot = [
    {
        name: "Ted",
        strength: "150"
    },
    {
        name: "Gomer",
        strength: "400"
    },
    {
        name: "Burt",
        strength: "200"
    },
    {
        name: "Ben",
        strength: "800"
    },
    {
        name: "Gari",
        strength: "1000"
    }
]

const filteredRobot = robot.filter(robot => robot.strength > 400)
console.log(filteredRobot)


