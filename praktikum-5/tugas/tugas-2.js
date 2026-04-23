// ═══════════════════════════════════════
// FUNGSI-FUNGSI DENGAN KOMPLEKSITAS BERBEDA
// ═══════════════════════════════════════

// O(1)
function fn_O1(n) {
  return n + 1;
}

// O(n)
function fn_On(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

// O(n log n)
function fn_OnLogn(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j *= 2) {
      total += j;
    }
  }

  return total;
}

// O(n²)
function fn_On2(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += i + j;
    }
  }

  return total;
}


// ═══════════════════════════════════════
// BENCHMARK
// ═══════════════════════════════════════

function benchmarkSemua(ukuranData) {
  for (let n of ukuranData) {
    console.log("Ukuran data:", n);

    console.time("O(1)");
    fn_O1(n);
    console.timeEnd("O(1)");

    console.time("O(n)");
    fn_On(n);
    console.timeEnd("O(n)");

    console.time("O(n log n)");
    fn_OnLogn(n);
    console.timeEnd("O(n log n)");

    console.time("O(n^2)");
    fn_On2(n);
    console.timeEnd("O(n^2)");

    console.log("----------------------------");
  }
}


// ═══════════════════════════════════════
// PANGGIL BENCHMARK
// ═══════════════════════════════════════

benchmarkSemua([100, 500, 1000, 5000, 10000]);


// ═══════════════════════════════════════
// HASIL OBSERVASI (DITULIS DI KOMENTAR)
// ═══════════════════════════════════════

/*
Observasi:

1. O(1):
Waktu eksekusi hampir tidak berubah walaupun n bertambah.
Ini sesuai teori karena operasi konstan.

2. O(n):
Waktu bertambah secara linear.
Semakin besar n, waktu meningkat secara proporsional.

3. O(n log n):
Lebih lambat dari O(n), tapi tidak separah O(n²).
Terlihat peningkatan sedang.

4. O(n²):
Paling lambat.
Ketika n diperbesar, waktu meningkat sangat drastis.

Kesimpulan:
Hasil benchmark konsisten dengan teori Big O.
Semakin tinggi kompleksitas, semakin cepat waktu eksekusi meningkat.
*/