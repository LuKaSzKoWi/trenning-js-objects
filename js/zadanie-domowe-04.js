// Napisz funkcję isEnoughCapacity(products, containerSize), która oblicza, czy wszystkie towary zmieszczą się w kontenerze podczas pakowania.

// Funkcja deklaruje dwa parametry:

// products — obiekt, w którym klucze zawierają nazwy towarów, a ich wartości — ilość tych towarów. Na przykład { apples: 2, grapes: 4 }.
// containerSize — liczba, maksymalna ilość jednostek towaru, którą może pomieścić kontener.

// Funkcja powinna zwrócić wynik sprawdzenia, czy wszystkie towary zmieszczą się w kontenerze. Czyli policzyć łączną ilość towarów w obiekcie products i zwrócić true, jeśli jest ona mniejsza lub równa containerSize, i false, jeśli nie.

// Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli zostaną wyświetlone wyniki jej wywołań.



// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
// ); // false

// Zadeklarowana funkcja isEnoughCapacity(products, containerSize)
// Wywołanie isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8) zwraca true
// Wywołanie isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12) zwraca false
// Wywołanie isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14) zwraca true
// Wywołanie isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7) zwraca false


function isEnoughCapacity(products, containerSize) {
   
    let totalQuantity = 0;

    for (let product in products) {
        totalQuantity += products[product];
    }
    
     return totalQuantity <= containerSize;

}

// Testowanie funkcji
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false

// Wyjaśnienie:

// Funkcja isEnoughCapacity:

// Przyjmuje dwa argumenty: products(obiekt z nazwami towarów i ich ilościami) oraz containerSize(maksymalna ilość jednostek towaru,
//     którą może pomieścić kontener).
// Obliczanie sumy ilości towarów:

// Używamy pętli for...in, aby przejść przez każdy klucz (nazwę towaru) w obiekcie products.
// Dodajemy ilość każdego towaru do totalQuantity.
// Porównanie sumy z containerSize:

// Jeśli suma ilości towarów (totalQuantity) jest mniejsza lub równa containerSize, funkcja zwraca true.
// W przeciwnym razie funkcja zwraca false.
// Zakładamy tutaj, że obiekt products jest czystym obiektem i nie zawiera właściwości dziedziczonych.
// W typowych scenariuszach użycia w większości aplikacji internetowych, obiekty danych tworzone są bezpośrednio
// i nie mają dziedziczonych właściwości, co sprawia, że ten kod jest bezpieczny.

// ZADANIE NR 2

// Zadanie 2. Obliczanie kalorii

// Napisz funkcję calcAverageCalories(days), która zwraca średnią dzienną wartość liczby kalorii, które sportowiec spożywał w ciągu tygodnia.
//  Funkcja oczekuje jednego parametru: days — tablicy obiektów.Każdy obiekt opisuje dzień tygodnia oraz liczbę kalorii calories,
//   spożytych przez sportowca tego dnia.Weź poniższy kod i wstaw go po deklaracji swojej funkcji,
//     aby sprawdzić poprawność jej działania.W konsoli zostaną wyświetlone wyniki jej wywołań.


function calcAverageCalories(days) {

  

  let totalCalories = 0;

  for (let day of days) {
        totalCalories += day.calories;
    }
    
     return totalCalories / days.length;

}





console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0



// Zadanie 3. Profil gracza

// Obiekt profile opisuje profil użytkownika na platformie do gier.
// W jego właściwościach przechowywane są nazwa profilu username oraz liczba aktywnych godzin playTime, spędzonych w grze.



// const profile = {
// 	username: "Jacob",
//   playTime: 300,

//   changeUsername(newName) {
//     for (const name in this.username) {
//       // if (name.username === newName) {
//         name.username = newName;
//       // }
//     }
//   },

//   updatePlayTime(hours) {
//     for (const time in this.playTime) {
//       // if (time.playTime === hours) {
//         time.playTime += hours;
//       // }
//     }
//   },

//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
  
// };


const profile = {
    username: "Jacob",
    playTime: 300,
    
    changeUsername(newName) {
        this.username = newName;
    },
    
    updatePlayTime(hours) {
        this.playTime += hours;
    },
    
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};