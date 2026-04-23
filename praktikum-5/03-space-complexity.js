// 04-space-complexity.js

// --- O(1) Space: hanya pakai variabel tambahan konstan ---
function jumlahArray(arr) {
let total = 0; // hanya 1 variabel tambahan
for (const x of arr) total += x;
return total;
}

// --- O(n) Space: membuat struktur baru sebesar input ---
function duplikasiArray(arr) {
const baru = []; // array baru tumbuh seiring arr
for (const x of arr) baru.push(x * 2);
return baru;
}

// --- O(n) Space: rekursi (call stack) ---
function faktorialRekursif(n) {
if (n <= 1) return 1;
return n * faktorialRekursif(n - 1); // n frame di call stack
}

// --- O(1) Space: faktorial iteratif ---
function faktorialIteratif(n) {
let hasil = 1;
for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel
return hasil;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Jumlah array :', jumlahArray(arr)); // O(1) space
console.log('Duplikasi array:', duplikasiArray(arr)); // O(n) space
console.log('Faktorial 10 rekursif :', faktorialRekursif(10));
console.log('Faktorial 10 iteratif :', faktorialIteratif(10));

// Visualisasi: hitung elemen unik (O(n) space)
function hitungUnik(arr) {
const seen = new Set(); // Set tumbuh hingga n elemen
for (const x of arr) seen.add(x);
return seen.size;
}

const dataAcak = [1,2,3,2,1,4,5,3,6,4,7];
console.log('Elemen unik:', hitungUnik(dataAcak)); // 7


// ==============================
// Cari pasangan jumlah = target
// ==============================

// --- Versi Lambat (Nested Loop) ---
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// --- Versi Cepat (Menggunakan Set) ---
// Time Complexity: O(n)
// Space Complexity: O(n)
function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (const num of arr) {
    const pasangan = target - num;
    if (seen.has(pasangan)) {
      return [pasangan, num];
    }
    seen.add(num);
  }

  return null;
}

// ==============================
// Pengujian sederhana
// ==============================
const testArr = [2, 7, 11, 15];
const target = 9;

console.log("Lambat:", cariPasanganLambat(testArr, target)); // [2,7]
console.log("Cepat :", cariPasanganCepat(testArr, target));  // [2,7]

// ==============================
// Uji performa (50.000 data)
// ==============================
function generateArray(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100000));
  }
  return arr;
}

const bigArray = generateArray(50000);
const targetTidakAda = -1; // hampir pasti tidak ada

console.time("Lambat O(n^2)");
cariPasanganLambat(bigArray, targetTidakAda);
console.timeEnd("Lambat O(n^2)");

console.time("Cepat O(n)");
cariPasanganCepat(bigArray, targetTidakAda);
console.timeEnd("Cepat O(n)");