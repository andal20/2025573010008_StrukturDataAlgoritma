// ---01-object literal---
// =============================================
// OBJECT LITERAL : PROPERTY,METHOD,DAN THIS
// =============================================

// --- 1.membuat object literal ---
const mahasiswa = {
    nama    : `Budi Santoso`,
    umur    : 20,
    jurusan : `Teknik Informatika`,
    ipk     : 3.75,
    aktif   : true,
};

//---2.mengakses property---
console.log(`=== akses property ===`);
console.log(`nama       :`,mahasiswa.nama); // dot notation
console.log(`jurusan    :`,mahasiswa[`jurusan`]); // bracket notation

//bracket notation berguna jika key disimpan di variabel
const keyYangDicari = `ipk`;
console.log(`ipk    :`,mahasiswa[keyYangDicari]); //berguna!

//---3.menambah dan mengubah property---
mahasiswa.email = `budi@email.com`;   //tamabah property kamu
mahasiswa.umur =21;     //ubah nilai yang ada

console.log(`\nSetelah diubah :`,mahasiswa);

//---4. menghapus property---
delete mahasiswa.aktif;
console.log(`Setelah delete :`,mahasiswa);

//---5. menambah method ke object---
const dosen ={
    nama        : `Dr. Ahmad Fauzi`,
    mataKuliah  : `Struktur Data`,
    pengalaman  : 10, // tahun

    //method: function di dalam object
    perkenalan() {
        // `this` merujuk ke object dosen itu sendiri
        return `halo,saya ${this.nama},mengajar ${this.mataKuliah}.`;
    },
    statusSenior() {
        if (this.pengalaman >= 10) {
            return `${this.nama} adalah dosen senior.`;
        }
        return `${this.nama} adalah dosen junior.`;
    }
};
console.log(`\n=== method object ===`);
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());
// --- 6. Iterasi key-value dengan for...in ---
console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
if (typeof dosen[key] !== 'function') { // skip method
console.log(` ${key}: ${dosen[key]}`);
}
}
// Object.keys(), Object.values(), Object.entries()
console.log('Keys :', Object.keys(mahasiswa));
console.log('Values:', Object.values(mahasiswa));


// 2. Membuat object buku
let buku = {
    judul: "Belajar JavaScript",
    pengarang: "Andi",
    tahunTerbit: 2022,
    harga: 100000,
    tersedia: true,

    // 3. Method info()
    info: function() {
        return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },

    // 4. Method diskon(persen)
    diskon: function(persen) {
        return this.harga * (1 - persen / 100);
    }
};

// Contoh penggunaan method
console.log(buku.info());
console.log("Harga setelah diskon 10%:", buku.diskon(10));


// 5. Array koleksiBuku
let koleksiBuku = [
    {
        judul: "HTML & CSS Dasar",
        pengarang: "Budi",
        tahunTerbit: 2020,
        harga: 80000,
        tersedia: true,
        info: function() {
            return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
        }
    },
    {
        judul: "JavaScript Lanjutan",
        pengarang: "Siti",
        tahunTerbit: 2021,
        harga: 120000,
        tersedia: false,
        info: function() {
            return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
        }
    },
    {
        judul: "Pemrograman Web",
        pengarang: "Rudi",
        tahunTerbit: 2019,
        harga: 95000,
        tersedia: true,
        info: function() {
            return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
        }
    }
];


// 6. Menampilkan semua buku dengan forEach
console.log("\n=== Semua Buku ===");
koleksiBuku.forEach(function(b) {
    console.log(b.info());
});


// 7. Filter buku yang tersedia
let bukuTersedia = koleksiBuku.filter(function(b) {
    return b.tersedia === true;
});

console.log("\n=== Buku yang Tersedia ===");
bukuTersedia.forEach(function(b) {
    console.log(b.info());
});