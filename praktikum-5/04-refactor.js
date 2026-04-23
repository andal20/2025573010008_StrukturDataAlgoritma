// 05-refactor.js — Refactoring kode berperforma buruk

// ═══════════════════════════════════════════════
// SKENARIO 1: Cek duplikat dalam array
// ═══════════════════════════════════════════════

// BURUK: O(n^2) Time | O(1) Space
function adaDuplikatLambat(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// BAIK: O(n) Time | O(n) Space
function adaDuplikatCepat(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}

// ═══════════════════════════════════════════════
// SKENARIO 2: Frekuensi kemunculan elemen
// ═══════════════════════════════════════════════

// BURUK: O(n^2) Time | O(n) Space
function frekuensiLambat(arr) {
  const unik = [];
  const hitung = [];

  for (const x of arr) {
    const idx = unik.indexOf(x); // O(n)
    if (idx === -1) {
      unik.push(x);
      hitung.push(1);
    } else {
      hitung[idx]++;
    }
  }

  return Object.fromEntries(unik.map((u, i) => [u, hitung[i]]));
}

// BAIK: O(n) Time | O(n) Space
function frekuensiCepat(arr) {
  const counter = {};
  for (const x of arr) {
    counter[x] = (counter[x] || 0) + 1;
  }
  return counter;
}

// ═══════════════════════════════════════════════
// BENCHMARK
// ═══════════════════════════════════════════════
const besar = Array.from({ length: 20000 }, () =>
  Math.floor(Math.random() * 1000)
);

// Duplikat
let t = Date.now();
adaDuplikatLambat(besar);
console.log("Duplikat LAMBAT O(n^2):", Date.now() - t, "ms");

t = Date.now();
adaDuplikatCepat(besar);
console.log("Duplikat CEPAT  O(n) :", Date.now() - t, "ms");

// Frekuensi
t = Date.now();
frekuensiLambat(besar);
console.log("Frekuensi LAMBAT O(n^2):", Date.now() - t, "ms");

t = Date.now();
frekuensiCepat(besar);
console.log("Frekuensi CEPAT  O(n) :", Date.now() - t, "ms");

// Contoh kecil
const kata = ["a", "b", "a", "c", "b", "a", "d"];
console.log("\nFrekuensi (cepat):", frekuensiCepat(kata));