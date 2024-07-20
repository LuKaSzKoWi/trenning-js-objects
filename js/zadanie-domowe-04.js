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
   
    const totalQuantity = 0;

    for (const product in products) {
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
// W typowych scenariuszach użycia w większości aplikacji internetowych, obiekty danych tworzone są bezpośrednio i nie mają dziedziczonych właściwości, co sprawia, że ten kod jest bezpieczny.