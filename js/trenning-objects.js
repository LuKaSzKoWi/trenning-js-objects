// Pętla for...in

// Przejdź przez obiekt apartment używając pętli for...in i zapisz wszystkie jego klucze do tablicy keys, a wszystkie wartości jego właściwości do tablicy values.

// Zadeklarowano zmienną apartment
// Wartością zmiennej apartment jest obiekt
// Zadeklarowano zmienną keys
// Wartością zmiennej keys jest tablica ["descr", "rating", "price"]
// Zadeklarowano zmienną values
// Wartością właściwości values jest tablica ["Spacious apartment in the city center", 4, 2153]
// Użyto pętli for...in

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};


const keys = [];
const values = [];

for (const key in apartment) {
    keys.push(key);
    values.push(apartment[key]);
}

console.log(keys);   // ["descr", "rating", "price"]
console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// W tym kodzie:

// Zadeklarowano zmienną apartment jako obiekt, który zawiera sześć właściwości.
// Zadeklarowano puste tablice keys i values.
// Użyto pętli for...in, aby przejść przez wszystkie właściwości obiektu apartment.
// Do tablicy keys dodawane są klucze obiektu, a do tablicy values dodawane są wartości odpowiednich właściwości.
// console.log wyświetla zawartość tablic keys i values.


// Pętla for...Of

// Przejdź przez obiekt apartment używając metody Object.keys() i pętli for...of. Zapisz do zmiennej keys tablicę kluczy właściwości obiektu apartment i dodaj do tablicy values wszystkie wartości jego właściwości.

// Zadeklarowano zmienną apartment.
// Wartością zmiennej apartment jest obiekt.
// Zadeklarowano zmienną keys.
// Wartością zmiennej keys jest tablica ["descr", "rating", "price"].
// Wartość zmiennej keys uzyskano przy użyciu metody Object.keys().
// Zadeklarowano zmienną values.
// Wartością zmiennej values jest tablica ["Spacious apartment in the city center", 4, 2153].
// Wartość zmiennej values jest uzyskana za pomocą pętli for...of.

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for (const key of keys) {

  values.push(apartment[key]);
}

// W tym kodzie:

// Zadeklarowano zmienną apartment jako obiekt z trzema właściwościami.
// Użyto metody Object.keys(apartment), aby uzyskać tablicę kluczy obiektu apartment i przypisano ją do zmiennej keys.
// Zadeklarowano pustą tablicę values.
// Użyto pętli for...of, aby przejść przez każdy klucz w tablicy keys i dodać odpowiednią wartość właściwości obiektu apartment do tablicy values.
// console.log wyświetla zawartość tablic keys i values.



// Przeprowadź refaktoryzację funkcji countProps(object), zastępując przeszukiwanie kluczy za pomocą pętli for...in metodą Object.keys(), aby uzyskać tablicę właściwości. Funkcja powinna zwrócić liczbę właściwości w obiekcie object.

// Zadeklarowano funkcję countProps(object)
// Wywołanie countProps({}) zwraca 0
// Wywołanie countProps({ name: "Mango", age: 2 }) zwraca 2
// Wywołanie countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) zwraca 3
// Funkcja używa metody Object.keys()

function countProps(object) {
  let propCount = 0;

  
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
}

// Refaktoryzacja

function countProps(object) {
  return Object.keys(object).length;
}

// Przykłady użycia:
console.log(countProps({})); // 0
console.log(countProps({ name: "Mango", age: 2 })); // 2
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

Wyjaśnienie:

// Funkcja Object.keys(object) zwraca tablicę zawierającą wszystkie własne klucze obiektu object.
// Object.keys(object).length zwraca długość tej tablicy, czyli liczbę własnych właściwości obiektu.



// Zapisz do zmiennej keys tablicę kluczy właściwości obiektu apartment, a do zmiennej values tablicę ich wartości. Użyj metod Object.keys() i Object.values().

// Zadeklarowano zmienną apartment
// Wartością zmiennej apartment jest obiekt
// Zadeklarowano zmienną keys
// Wartością zmiennej keys jest tablica ["descr", "rating", "price"]
// Zadeklarowano zmienną values
// Wartością właściwości values jest tablica ["Spacious apartment in the city center", 4, 2153]
// W celu uzyskania tablicy kluczy obiektu apartment użyto Object.keys()
// W celu uzyskania tablicy wartości obiektu apartment użyto Object.values()

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = Object.keys(apartment);
const values = Object.values(apartment);


// Funkcja countTotalSalary(salaries) przyjmuje obiekt wynagrodzenia (salaries) jako parametr. Każda właściwość obiektu salaries jest kluczem zawierającym nazwisko pracownika, a wartością jest odpowiadające mu wynagrodzenie.

// Uzupełnij kod funkcji countTotalSalary(salaries) tak, aby zwracała ona całkowitą kwotę wynagrodzeń wszystkich pracowników.

// Wskazówki:

// Zainicjuj zmienną totalSalary z wartością 0, która będzie odpowiedzialna za całkowitą kwotę wynagrodzeń wszystkich pracowników
// Użyj metody Object.values(), aby pobrać wartości (wynagrodzenia) z obiektu salaries
// Przejdź przez wartości za pomocą pętli i dodaj każdą wartość do zmiennej totalSalary.
// Zwróć totalSalary jako wynik
// Zadeklarowano funkcję countTotalSalary(salaries)
// Wywołanie countTotalSalary({}) zwraca 0
// Wywołanie countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) zwraca 330
// Wywołanie countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) zwraca 400

function countTotalSalary(salaries) {
  let totalSalary = 0;

  // Pobierz wszystkie wartości (wynagrodzenia) z obiektu salaries
  const values = Object.values(salaries);

  // Przejdź przez każdą wartość i dodaj ją do totalSalary
  for (const value of values) {
    totalSalary += value;
  }

  return totalSalary;
}

// Przykłady użycia:
console.log(countTotalSalary({})); // 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

// W tej funkcji:

// Zmienna totalSalary jest inicjowana wartością 0, aby przechowywać sumę wynagrodzeń.
// Object.values(salaries) zwraca tablicę wartości (wynagrodzeń) z obiektu salaries.
// Pętla for...of przechodzi przez każdą wartość w tablicy i dodaje ją do totalSalary.
// totalSalary jest zwracane jako wynik.






