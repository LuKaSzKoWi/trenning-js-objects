// TABLICE OBIEKTÓW

// Tablica colors zawiera kolekcję kolorów. Każdy kolor jest reprezentowany przez obiekt i zawiera właściwości hex i rgb z odpowiednimi wartościami dla tego formatu i koloru.

// Przejdź przez tablicę obiektów colors używając pętli for...of. Dodaj do tablicy hexColors wartości właściwości hex, a do tablicy rgbColors wartości właściwości rgb ze wszystkich obiektów tablicy colors.

// Zadeklarowano zmienną colors
// Wartością zmiennej colors jest tablica
// Zadeklarowano zmienną hexColors
// Wartością zmiennej hexColors jest tablica ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Zadeklarowano zmienną rgbColors
// Wartością zmiennej rgbColors jest tablica ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

// Wyświetlenie wyników
console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]


// Powyższy kod deklaruje zmienne hexColors i rgbColors jako puste tablice.
// Następnie przechodzi przez każdy obiekt w tablicy colors i dodaje odpowiednie wartości właściwości hex i rgb do tych tablic.
// Na końcu wyświetla zawartość tablic hexColors i rgbColors.



// Funkcja getProductPrice(productName) przyjmuje jeden parametr productName - nazwę produktu. Funkcja zawiera tablicę obiektów products z takimi właściwościami jak name - nazwa produktu, price - cena i quantity - ilość.

// Uzupełnij kod funkcji tak, aby wyszukiwała obiekt produktu o określonej nazwie (właściwość name) w tablicy products i zwracała jego cenę (właściwość price). Jeśli produkt o tej nazwie nie zostanie znaleziony, funkcja powinna zwrócić wartość null.

// Zadeklarowano funkcję getProductPrice(productName).
// Wywołanie getProductPrice("Radar") zwraca 1300.
// Wywołanie getProductPrice("Grip") zwraca 1200.
// Wywołanie getProductPrice("Scanner") zwraca 2700.
// Wywołanie getProductPrice("Droid") zwraca 400.
// Wywołanie getProductPrice("Engine") zwraca null.

function getProductPrice(productName) {
  // Tablica obiektów products
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Grip", price: 1200, quantity: 7 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 8 },
  ];

  // Przechodzenie przez tablicę products
  for (const product of products) {
    // Sprawdzenie, czy nazwa produktu odpowiada podanemu productName
    if (product.name === productName) {
      return product.price; // Zwrócenie ceny produktu
    }
  }

  // Zwrócenie null, jeśli produkt nie został znaleziony
  return null;
}

// Przykładowe wywołania funkcji
console.log(getProductPrice("Radar"));   // 1300
console.log(getProductPrice("Grip"));    // 1200
console.log(getProductPrice("Scanner")); // 2700
console.log(getProductPrice("Droid"));   // 400
console.log(getProductPrice("Engine"));  // null

// W powyższym kodzie:

// Deklarujemy tablicę products zawierającą obiekty z właściwościami name, price i quantity.
// Używamy pętli for...of, aby przejść przez każdy obiekt w tablicy products.
// Sprawdzamy, czy właściwość name obiektu odpowiada wartości productName przekazanej jako argument.
// Jeśli znajdziemy odpowiedni produkt, zwracamy jego cenę (price).
// Jeśli żaden produkt o podanej nazwie nie zostanie znaleziony, zwracamy null.


// Napisz funkcję getAllPropValues(propName), która przyjmuje jeden parametr propName - nazwę (klucz) właściwości.
// Funkcja powinna zwrócić tablicę wszystkich wartości właściwości o tej nazwie z każdego obiektu w tablicy products.
// Jeśli obiekty nie mają właściwości o tej nazwie, funkcja powinna zwrócić pustą tablicę.

// Zadeklarowano funkcję getAllPropValues(propName)
// Wywołanie getAllPropValues("name") zwraca ["Radar", "Scanner", "Droid", "Grip"]
// Wywołanie getAllPropValues("quantity") zwraca [4, 3, 7, 9]
// Wywołanie getAllPropValues("price") zwraca [1300, 2700, 400, 1200]
// Wywołanie getAllPropValues("category") zwraca []

function getAllPropValues(propName) {
  // Tablica obiektów products
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  // Tablica do przechowywania wartości właściwości
  const propValues = [];

  // Pętla przechodząca przez tablicę products
  for (const product of products) {
    // Sprawdzenie, czy obiekt ma właściwość o nazwie propName
    if (propName in product) {
      propValues.push(product[propName]);
    }
  }

  // Zwrócenie tablicy wartości właściwości
  return propValues;
}

// Przykładowe wywołania funkcji
console.log(getAllPropValues("name"));    // ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
console.log(getAllPropValues("price"));   // [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")); // []

// W powyższym kodzie:

// Tablica products zawiera obiekty z różnymi właściwościami.
// Funkcja getAllPropValues(propName) tworzy pustą tablicę propValues.
// Pętla for...of przechodzi przez każdy obiekt w tablicy products.
// Funkcja sprawdza, czy właściwość propName istnieje w obiekcie, używając operatora in.
// Jeśli właściwość istnieje, jej wartość jest dodawana do tablicy propValues.
// Funkcja zwraca tablicę propValues po zakończeniu pętli.


// Funkcja calculateTotalPrice(productName) przyjmuje jeden parametr productName - nazwę produktu.
// Funkcja zawiera tablicę obiektów products z takimi właściwościami jak name - nazwa produktu, price - cena i quantity - ilość.

// Uzupełnij kod funkcji tak, aby zwracała ona całkowity koszt (cena * ilość) produktu o tej nazwie z tablicy products.

// Jeśli nie ma produktu o tej nazwie, funkcja powinna zwrócić ciąg "Product <productName> not found!", gdzie <productName> jest nazwą produktu.

// Zadeklarowano funkcję calculateTotalPrice(productName)
// Wywołanie calculateTotalPrice("Blaster") zwraca "Product Blaster not found!"
// Wywołanie calculateTotalPrice("Radar") zwraca 5200
// Wywołanie calculateTotalPrice("Droid") zwraca 2800
// Wywołanie calculateTotalPrice("Grip") zwraca 10800
// Wywołanie calculateTotalPrice("Scanner") zwraca 8100

function calculateTotalPrice(productName) {
  // Tablica obiektów products
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  // Pętla przechodząca przez tablicę products
  for (const product of products) {
    // Sprawdzenie, czy nazwa produktu odpowiada podanemu productName
    if (product.name === productName) {
      // Obliczenie całkowitego kosztu (cena * ilość)
      return product.price * product.quantity;
    }
  }

  // Zwrócenie komunikatu, jeśli produkt nie został znaleziony
  return `Product ${productName} not found!`;
}

// Przykładowe wywołania funkcji
console.log(calculateTotalPrice("Blaster"));  // "Product Blaster not found!"
console.log(calculateTotalPrice("Radar"));    // 5200
console.log(calculateTotalPrice("Droid"));    // 2800
console.log(calculateTotalPrice("Grip"));     // 10800
console.log(calculateTotalPrice("Scanner"));  // 8100

// W powyższym kodzie:

// Tablica products zawiera obiekty z właściwościami name, price i quantity.
// Funkcja calculateTotalPrice(productName) przechodzi przez każdy obiekt w tablicy products.
// Jeśli właściwość name obiektu odpowiada wartości productName, oblicza całkowity koszt przez pomnożenie price i quantity, a następnie zwraca tę wartość.
// Jeśli żaden produkt o podanej nazwie nie zostanie znaleziony, funkcja zwraca komunikat "Product <productName> not found!".


