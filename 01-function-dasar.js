// 01-function-dasar.js

// =========================================
// function: DEKLARASI, PARAMETER, RETURN, SCOPE
// =========================================

// ---1. function tanpa parameter ---
function sapa() {
  console.log("Halo! Selamat datang di praktikum JavaScript.");
}

sapa();
sapa();

// ---2. function dengan parameter ---
function sapaNama(nama) {
  console.log(`Halo, ${nama}! Selamat belajar.`);
}

sapaNama("Budi");
sapaNama("Siti");

// ---3. function dengan return ---
function tambah(angka1, angka2) {
  const hasil = angka1 + angka2;
  return hasil;
}

console.log("10 + 25 =", tambah(10, 25));
console.log("7 + 13 =", tambah(7, 13));

// ---4. function dengan default parameter ---
function hitung(nilai, pengali = 2) {
  return nilai * pengali;
}

console.log(hitung(5));     // 10
console.log(hitung(5, 3));  // 15

// ---5. scope variabel ---
const pesanGlobal = 'saya ada dimana saja';

function cekscope() {
  const pesanLokal = 'saya hanya ada didalam function ini';
  console.log(pesanGlobal); // bisa
  console.log(pesanLokal);  // bisa
}

cekscope();

console.log(pesanGlobal); // bisa
// console.log(pesanLokal); //  error kalau dibuka


// ================================================
// LATIHAN 1: FUNCTION KALKULATOR LENGKAP
// ================================================

// 1. Function kurang
function kurang(a, b) {
  return a - b;
}

// 2. Function kali
function kali(a, b) {
  return a * b;
}

// 3. Function bagi (dengan pengecekan)
function bagi(a, b) {
  if (b === 0) {
    console.log('Error: tidak bisa membagi dengan nol');
    return null;
  }
  return a / b;
}

// 4. Function kalkulator
function kalkulator(a, operator, b) {
  if (operator === '+') {
    return tambah(a, b); // dari function sebelumnya
  } else if (operator === '-') {
    return kurang(a, b);
  } else if (operator === '*') {
    return kali(a, b);
  } else if (operator === '/') {
    return bagi(a, b);
  } else {
    console.log('Operator tidak dikenali');
    return null;
  }
}

// 5. Pengujian (minimal 5 kali)
console.log('=== UJI KALKULATOR ===');
console.log('10 + 5 =', kalkulator(10, '+', 5));
console.log('10 - 5 =', kalkulator(10, '-', 5));
console.log('10 * 5 =', kalkulator(10, '*', 5));
console.log('10 / 5 =', kalkulator(10, '/', 5));
console.log('10 / 0 =', kalkulator(10, '/', 0)); // uji pembagian nol