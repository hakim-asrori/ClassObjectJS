class Product {
  nama;
  jumlah;
  rasa;
  constructor(nama, jumlah) {
    this.nama = nama;
    this.jumlah = Math.ceil(Math.random() * 100);
  }

  dijual(nama) {
    document.getElementById("hasil1").innerHTML = "Nama produk = " + nama + "</br> Jumlah = " + this.jumlah + " </br> Status = Barang sedang dijual </br></br>";
  }

  dibeli(nama) {
    document.getElementById("hasil2").innerHTML = "Nama produk = " + nama + "</br> Jumlah = " + this.jumlah + " </br> Status = 1 barang sudah dibeli </br></br>";
  }

  kosong(nama) {
    document.getElementById("hasil3").innerHTML = "Nama produk = " + nama + "</br> Jumlah = 0 </br> Status = Barang sedang kosong </br></br>";
  }
}

let produk1 = new Product();
let produk2 = new Product();
let produk3 = new Product();

let kirim = document.getElementById("kirim");

kirim.addEventListener("click", function () {
  let nama1 = document.getElementById("nama1").value;
  let nama2 = document.getElementById("nama2").value;
  let nama3 = document.getElementById("nama3").value;

  produk1.dijual(nama1);
  produk2.dibeli(nama2);
  produk3.kosong(nama3);
});
