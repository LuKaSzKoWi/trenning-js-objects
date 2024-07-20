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


// Funkcja getExtremeScores(scores) przyjmuje tablicę ocen (liczb) w parametrze scores.

// Uzupełnij kod funkcji tak, aby zwracała obiekt z dwiema właściwościami:

// Właściwość best musi zawierać największą liczbę z tablicy scores
// Właściwość worst musi zawierać najmniejszą liczbę z tablicy scores.
// Użyj operatora (...spread) i metod Math.max() i Math.min().

// Zadeklarowano funkcję getExtremeScores(scores)
// Wywołanie funkcji getExtremeScores([89, 64, 42, 17, 93, 51, 26]) zwraca obiekt { best: 93, worst: 17 }
// Wywołanie funkcji getExtremeScores([19, 7, 4, 17, 81, 24]) zwraca obiekt { best: 81, worst: 4 }
// Aby przekazać argumenty do metod Math.max() i Math.min(), użyj składni ... na tablicy scores

function getExtremeScores(scores) {
    return {
        best: Math.max(...scores),
        worst: Math.min(...scores)
    };
}

// Przykładowe wywołania funkcji
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // { best: 93, worst: 17 }
console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); // { best: 81, worst: 4 }

Wyjaśnienie:

// Używamy operatora spread ... na tablicy scores, aby przekazać jej elementy jako osobne argumenty do metod Math.max() i Math.min().
// Math.max(...scores) zwraca największą wartość z tablicy scores.
// Math.min(...scores) zwraca najmniejszą wartość z tablicy scores.
// Zwracamy obiekt z właściwościami best i worst, przypisując odpowiednio wyniki Math.max(...scores) i Math.min(...scores).


// Zmienne firstGroupScores, secondGroupScores i thirdGroupScores przechowują wyniki testów poszczególnych grup. Używając sprayu, uzupełnij kod tak, aby:

// Zmienna allScores przechowywała tablicę wszystkich wyników od pierwszej do trzeciej grupy włącznie.
// Zmienna bestScore zawierała najwyższy ogólny wynik.
// Zmienna worstScore zawierała najniższy ogólny wynik.
// Zadeklarowano zmienną firstGroupScores
// Wartością zmiennej firstGroupScores' jest tablica [64, 42, 93]`
// Zadeklarowano zmienną secondGroupScores
// Wartością zmiennej secondGroupScores' jest tablica [89, 14, 51, 26]`
// Zadeklarowano zmienną thirdGroupScores
// Wartością zmiennej thirdGroupScores jest tablica [29, 47, 18, 97, 81]
// Zadeklarowano zmienną allScores.
// Wartością zmiennej allScores jest tablica [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Zadeklarowano zmienną bestScore
// Wartością zmiennej bestScore jest liczba 97
// Zadeklarowano zmienną worstScore
// Wartością zmiennej worstScore jest liczba 14
// W celu przypisania wartości do zmiennej allScores użyto składni ... do wypełnienia tablicy
// W celu przekazania argumentów do metody Math.max() użyto składni ... w tablicy allScores
// W celu przekazania argumentów do metody Math.min() użyto składni ... na tablicy allScores

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// Wyjaśnienie:

// Zmienna allScores:

// Używamy operatora spread ... na każdej z tablic (firstGroupScores, secondGroupScores, thirdGroupScores), aby połączyć je w jedną tablicę allScores.
// Zmienna bestScore:

// Używamy Math.max(...allScores), aby znaleźć największy element w tablicy allScores.
// Zmienna worstScore:

// Używamy Math.min(...allScores), aby znaleźć najmniejszy element w tablicy allScores.





// ŁĄCZENIE I NADPISYWANIE ...SPREAD


// W konstruktorze możesz tworzyć nowe testy, które mają domyślne ustawienia przechowywane w zmiennej defaultSettings.
// Podczas tworzenia testu, wszystkie lub część ustawień może zostać zastąpiona, ustawienia niestandardowe są przechowywane w zmiennej overrideSettings.

// Aby uzyskać końcowe ustawienia testu, należy wziąć ustawienia domyślne i zastosować do nich nadpisane ustawienia niestandardowe.
// Uzupełnij kod tak, aby zmienna finalSettings zawierała obiekt końcowych ustawień testu.

// Zadeklarowano zmienną defaultSettings
// Wartością zmiennej defaultSettings jest obiekt
// Zadeklarowano zmienną overrideSettings
// Wartością zmiennej overrideSettings jest obiekt
// Zadeklarowano zmienną finalSettings
// Wartością zmiennej finalSettings jest obiekt
// Wartością właściwości finalSettings.theme jest light
// Wartością właściwości finalSettings.public jest "false"
// Wartością właściwości finalSettings.withPassword jest "true"
// Wartością właściwości finalSettings.minNumberOfQuestions jest 10
// Wartością właściwości finalSettings.timePerQuestion jest 30
// W celu przypisania wartości do zmiennej finalSettings użyto składni ...


const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {...defaultSettings, ...overrideSettings};

// Wyjaśnienie:

// Obiekt defaultSettings:

// Zawiera domyślne ustawienia testu.
// Obiekt overrideSettings:

// Zawiera ustawienia niestandardowe, które mają nadpisać domyślne ustawienia.
// Obiekt finalSettings:

// Używa operatora spread ... do połączenia obiektów defaultSettings i overrideSettings.
// Kolejność operatora spread jest istotna: ustawienia z overrideSettings nadpisują te same klucze w defaultSettings.
// Przykładowe wywołanie console.log(finalSettings) pokazuje, że funkcja działa zgodnie z oczekiwaniami. 
// Niestandardowe ustawienia zostały poprawnie zastosowane do domyślnych ustawień, tworząc ostateczne ustawienia testu.







