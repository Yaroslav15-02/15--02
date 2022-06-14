










// const obj = {
//     kei1: "b1",
//     kei2: "b2",
//     kei3: "b3",
//     kei4: "b4",
//     kei5: "b5",
// }
// for (let key in obj){
//     console.log(obj[key])
// }


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
