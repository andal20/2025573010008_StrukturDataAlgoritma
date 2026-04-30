// tugas-2.js
// ================================================
// REKURSI: PANGKAT & PALINDROM
// ================================================

// 1. Function rekursif pangkat
function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1; // base case
  return basis * pangkat(basis, eksponen - 1);
}

// Uji pangkat
console.log('=== PANGKAT ===');
console.log('2^3 =', pangkat(2, 3));
console.log('5^2 =', pangkat(5, 2));
console.log('3^4 =', pangkat(3, 4));


// 2. Function balik string
function balikString(str) {
  if (str.length <= 1) return str; // base case
  return str[str.length - 1] + balikString(str.slice(0, str.length - 1));
}

// 3. Function cek palindrom
function cekPalindrom(str) {
  const hasilBalik = balikString(str);
  return str === hasilBalik;
}

// Uji palindrom
console.log('\n=== PALINDROM ===');
const kata = ['katak', 'civic', 'level', 'halo'];

kata.forEach(k => {
  console.log(`${k} -> ${cekPalindrom(k) ? 'Palindrom' : 'Bukan Palindrom'}`);
});
