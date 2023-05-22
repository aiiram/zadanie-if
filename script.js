// Template string

// const x = 50
// const y = 30
// if (x > y) {
//     console.log (`${x} > ${y}`);
// }

// const color = 'blue' 
// const newColor = 'green' 
// if (color == newColor) {
//     console.log ('Kolory się zgadzają');
// }
//     else {
// console.log('Kolory się nie zgadzają')
//     }

// const x = 100
// const y = 50
// if (x > y) {
//     console.log ('x > y');
// } else if (x === y) {
//     console.log ('x = y');
//  } else {
//     console.log ('x < y');
//  }

// const promo = '20%'

// switch (promo) {
//     case '10%':
//         console.log ('Dziś mamy 10% zniżki') 
//         break

//         case '20%':
//         console.log ('Dziś mamy 20% zniżki')
//         break

//         case '30%':
//             console.log ('Dziś mamy 30% zniżki')
//             break
           
// default: 
// console.log (`Dziś mamy %{promo} zniżki`);
// }

// const x = 10
// const check = (x % 2 === 0) ? 'X jest parzyste' : 'X nie jest parzyste'
// console.log(check)
// console.log(x % 2)



// const x = 50
// if (x >= 100) {
//     console.log ('x >= 100')
// } else if  (x < 100 && x > 30) {
// console.log (('X jest średniakiem').toUpperCase())
// } else if (x <= 30) {
//     console.log (('X jest mały').toUpperCase())
//    }

// lub

// const x = 50
// let text
// if (x >= 100) {
//     text = 'x >= 100'
// } else if (x < 100 && x > 30) {
//         text = 'X jest średniakiem'
//     } else {
//         text = 'x jest mały'
//     }

//     console.log (text.toUpperCase());
    

// const cities = ['Wroclaw', 'Kraków', 'Warszawa', 'Katowice', 'Przemysl']

// for(let i = 0; i < cities.length; i++) {
//     console.log(`To miasto nazywa się: ${cities[i].toUpperCase()}`)
// }



// let x = 0
// while (x < 10) {
//     x += 2
//     console.log(x);
   
// }


// let x = 20
// do {
//     x -= 3
   
// } while (x >= 0)
// console.log(x)



const numbers = [5, 8, 10, 23, 48, 60]

for(const number of numbers) {
    console.log(number / 5);
}

console.log('______')


for(const number of numbers) {
    if(number % 2 === 0) {
        console.log(`%cLiczba ${number} jest parzysta`, 'background-color: gold; color: black');
    } else {
        console.log(`%cLiczba ${number} jest nie pzrzysta`, 'background-color: tomato; color: black');
    }
}
