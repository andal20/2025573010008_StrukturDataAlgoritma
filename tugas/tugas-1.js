// tugas-1.js
// ================================================
// SISTEM NILAI MAHASISWA
// ================================================

// 1. Data mahasiswa (minimal 6)
const dataMahasiswa = [
  { nama: 'Budi', nilai: 85 },
  { nama: 'Siti', nilai: 92 },
  { nama: 'Andi', nilai: 78 },
  { nama: 'Rina', nilai: 60 },
  { nama: 'Doni', nilai: 55 },
  { nama: 'Lina', nilai: 88 }
];

// 2. Function hitung statistik
function hitungStatistik(arrMahasiswa) {
  const hasil = arrMahasiswa.reduce((acc, mhs) => {
    acc.total++;
    acc.jumlahNilai += mhs.nilai;
    acc.tertinggi = Math.max(acc.tertinggi, mhs.nilai);
    acc.terendah = Math.min(acc.terendah, mhs.nilai);
    return acc;
  }, {
    total: 0,
    jumlahNilai: 0,
    tertinggi: -Infinity,
    terendah: Infinity
  });

  hasil.rataRata = hasil.jumlahNilai / hasil.total;
  return hasil;
}

// 3. Function filter lulus
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

// 4. Function tambah grade
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map(mhs => {
    let grade;
    if (mhs.nilai >= 90) grade = 'A';
    else if (mhs.nilai >= 80) grade = 'B';
    else if (mhs.nilai >= 70) grade = 'C';
    else if (mhs.nilai >= 60) grade = 'D';
    else grade = 'E';

    return { ...mhs, grade };
  });
}

// 5. Menjalankan semua function
console.log('=== DATA MAHASISWA ===');
dataMahasiswa.forEach(m => {
  console.log(`${m.nama} - ${m.nilai}`);
});

// Statistik
const statistik = hitungStatistik(dataMahasiswa);
console.log('\n=== STATISTIK ===');
console.log(`Total Mahasiswa : ${statistik.total}`);
console.log(`Rata-rata       : ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi : ${statistik.tertinggi}`);
console.log(`Nilai Terendah  : ${statistik.terendah}`);

// Lulus
const lulus = filterLulus(dataMahasiswa, 60);
console.log('\n=== MAHASISWA LULUS ===');
lulus.forEach(m => {
  console.log(`${m.nama} - ${m.nilai}`);
});

// Tambah grade
const denganGrade = tambahGrade(dataMahasiswa);
console.log('\n=== DATA + GRADE ===');
denganGrade.forEach(m => {
  console.log(`${m.nama} - ${m.nilai} (Grade ${m.grade})`);
});