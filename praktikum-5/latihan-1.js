// latihan-1.js

// 3. Fungsi A
// Big O: O(1)
// Alasan: operasi tetap (perkalian), tidak tergantung ukuran n
function fnA(n) {
  return n * 2;
}


// 4. Fungsi B
// Big O: O(n^2)
// Alasan: dua loop bersarang, masing-masing berjalan n kali
function fnB(n) {
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++)
      console.log(i, j);
}


// 5. Fungsi C
// Big O: O(log n)
// Alasan: nilai i dikali 2 setiap iterasi (pertumbuhan eksponensial)
function fnC(n) {
  for (let i = 1; i < n; i *= 2)
    console.log(i);
}


// 6. Fungsi D
// Big O: O(n^3)
// Alasan: tiga loop bersarang (forEach di dalam forEach di dalam forEach)
function fnD(arr) {
  arr.forEach(x =>
    arr.forEach(y =>
      arr.forEach(z =>
        console.log(x, y, z)
      )
    )
  );
}


// 8. Function untuk mengukur waktu eksekusi
function hitungKompleksitas(n, fn) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  console.log(`Waktu eksekusi: ${end - start} ms`);
}


// 7. Jalankan semua fungsi dengan n = 1000
console.log("=== Fungsi A ===");
hitungKompleksitas(1000, fnA);

console.log("\n=== Fungsi B ===");
hitungKompleksitas(1000, fnB);

console.log("\n=== Fungsi C ===");
hitungKompleksitas(1000, fnC);

console.log("\n=== Fungsi D ===");
const arr = Array.from({ length: 1000 }, (_, i) => i);
const start = Date.now();
fnD(arr);
const end = Date.now();
console.log(`Waktu eksekusi: ${end - start} ms`);