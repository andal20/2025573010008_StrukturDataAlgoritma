// ================================================
// TUGAS 1: SISTEM MANAJEMEN TOKO ONLINE
// ================================================

// 2. Parent class Produk
class Produk {
    constructor(id, nama, harga, stok) {
        this.id = id;
        this.nama = nama;
        this.harga = harga;
        this.stok = stok;
    }

    info() {
        return `ID: ${this.id} | ${this.nama} | Harga: Rp${this.harga} | Stok: ${this.stok}`;
    }

    tersedia() {
        return this.stok > 0;
    }

    jual(jumlah) {
        if (jumlah <= 0) {
            console.log('Jumlah harus lebih dari 0');
            return;
        }
        if (jumlah > this.stok) {
            console.log('Stok tidak mencukupi');
            return;
        }
        this.stok -= jumlah;
        console.log(`${this.nama} terjual ${jumlah}, sisa stok: ${this.stok}`);
    }
}


// 3. Child class ProdukDigital
class ProdukDigital extends Produk {
    constructor(id, nama, harga, stok, ukuranFile, formatFile) {
        super(id, nama, harga, stok);
        this.ukuranFile = ukuranFile;
        this.formatFile = formatFile;
    }

    info() {
        return `${super.info()} | File: ${this.ukuranFile}MB (${this.formatFile})`;
    }

    download() {
        console.log(`${this.nama} sedang didownload...`);
    }

    // override jual (tidak mengurangi stok)
    jual(jumlah) {
        console.log(`${this.nama} (digital) berhasil dibeli sebanyak ${jumlah}`);
    }
}


// 4. Child class ProdukFisik
class ProdukFisik extends Produk {
    constructor(id, nama, harga, stok, beratGram, dimensi) {
        super(id, nama, harga, stok);
        this.beratGram = beratGram;
        this.dimensi = dimensi;
    }

    info() {
        return `${super.info()} | Berat: ${this.beratGram}g | Dimensi: ${this.dimensi}`;
    }

    hitungOngkir(tarifPerKg) {
        const beratKg = this.beratGram / 1000;
        return beratKg * tarifPerKg;
    }
}


// 5. Membuat instance
const p1 = new ProdukDigital(1, 'Ebook JS', 50000, 999, 5, 'PDF');
const p2 = new ProdukDigital(2, 'Video Course', 150000, 999, 200, 'MP4');

const p3 = new ProdukFisik(3, 'Mouse Gaming', 200000, 10, 300, '10x5x3 cm');
const p4 = new ProdukFisik(4, 'Keyboard', 500000, 5, 800, '40x15x3 cm');

const daftarProduk = [p1, p2, p3, p4];


// 6a. Tampilkan semua info
console.log('\n=== Semua Produk ===');
daftarProduk.forEach(p => console.log(p.info()));

// 6b. Produk tersedia
console.log('\n=== Produk Tersedia ===');
const tersedia = daftarProduk.filter(p => p.tersedia());
tersedia.forEach(p => console.log(p.nama));

// 6c. Ambil nama produk saja
console.log('\n=== Nama Produk ===');
const namaProduk = daftarProduk.map(p => p.nama);
console.log(namaProduk);