// Używając składni parametru resztkowego, uzupełnij kod funkcji add() tak, aby akceptowała dowolną liczbę argumentów do parametru args i zwracała ich sumę.

// Zadeklarowano funkcję add
// Funkcja add deklaruje parametr args
// Do zbierania argumentów do zmiennej args w sygnaturze funkcji używana jest następująca składnia parametrów resztkowych:
// Wywołanie add(15, 27) zwraca 42
// Wywołanie add(12, 4, 11, 48) zwraca 75
// Wywołanie add(32, 6, 13, 19, 8) zwraca 78


function add(...args) {
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return sum;
}

// Przykładowe wywołania funkcji
console.log(add(15, 27)); // 42
console.log(add(12, 4, 11, 48)); // 75
console.log(add(32, 6, 13, 19, 8)); // 78

// Inicjalizujemy zmienną sum na 0.
// Iterujemy po każdym elemencie tablicy args za pomocą pętli for...of.
// Dodajemy każdy element num do sum.


// SKŁADNIA REST

// Funkcja addOverNum() przyjmuje dowolną liczbę argumentów liczbowych.

// Uzupełnij kod funkcji tak, aby obliczała sumę tylko tych argumentów, które są większe od podanej liczby. Liczba ta będzie zawsze przekazywana jako pierwszy argument.

// Aby rozwiązać to zadanie, należy wykonać następujące czynności:

// Pierwszy parametr value musi reprezentować daną liczbę, a reszta argumentów musi być zebrana przy użyciu składni (...args)
// Wewnątrz funkcji zainicjuj zmienną do przechowywania całkowitej kwoty
// Następnie przejdź przez każdy argument za pomocą pętli
// Sprawdź, czy każdy argument jest większy niż podana liczba i jeśli tak, dodaj go do sumy
// Na koniec zwróć całkowitą kwotę
// Zadeklarowano funkcję addOverNum()
// Funkcja addOverNum przyjmuje następujące parametry: value, ...args
// Wywołanie addOverNum(50, 15, 27) zwraca 0
// Wywołanie addOverNum(10, 12, 4, 11, 48, 10, 8) zwraca 71
// Wywołanie addOverNum(15, 32, 6, 13, 19, 8) zwraca 51
// Wywołanie addOverNum(20, 74, 11, 62, 46, 12, 36) zwraca 218


function addOverNum(value, ...args) {
  let sum = 0;

  for (let num of args) {
    if (num > value) {
      sum += num
    }
  }
  return sum;
}

// Pierwszy parametr value to liczba, względem której będziemy sprawdzać pozostałe argumenty.
// Składnia ...args zbiera wszystkie przekazane argumenty po pierwszym do tablicy args.
// Iterujemy po każdym elemencie tablicy args za pomocą pętli for...of.
// Sprawdzamy, czy bieżący element num jest większy niż value.
// Jeśli tak, dodajemy num do sum.

// addOverNum(50, 15, 27) zwraca 0 (żaden z argumentów nie jest większy niż 50).
// addOverNum(10, 12, 4, 11, 48, 10, 8) zwraca 71 (sumujemy 12, 11 i 48).
// addOverNum(15, 32, 6, 13, 19, 8) zwraca 51 (sumujemy 32 i 19).