class Product {
  // nama;
  // jumlah;
  // rasa;
  // constructor(nama, jumlah, rasa) {
  //   this.nama = nama;
  //   this.jumlah = jumlah;
  //   this.rasa = rasa;
  // }

  kosong(nama, jumlah, status) {
    document.getElementById("hasil1").innerHTML = "Nama produk = " + nama + "</br> Jumlah = " + jumlah + " </br> Status = " + status + " </br></br>";
  }

  dijual(nama, jumlah, status) {
    document.getElementById("hasil2").innerHTML = "Nama produk = " + nama + "</br> Jumlah = " + jumlah + " </br> Status = " + status + " </br></br>";
    // console.log("Ok");
  }

  dibeli(nama, jumlah, status) {
    document.getElementById("hasil3").innerHTML = "Nama produk = " + nama + "</br> Jumlah = " + jumlah + " </br> Status = " + status + " </br></br>";
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

  let jumlah1 = document.getElementById("jumlah1").value;
  let jumlah2 = document.getElementById("jumlah2").value;
  let jumlah3 = document.getElementById("jumlah3").value;

  let status1 = document.getElementById("status1").value;
  let status2 = document.getElementById("status2").value;
  let status3 = document.getElementById("status3").value;

  switch (status1) {
    case "dijual":
      produk1.dijual(nama1, jumlah1, status1);
      break;

    case "dibeli":
      produk1.dibeli(nama1, jumlah1, status1);
      break;

    case "kosong":
      produk1.kosong(nama1, jumlah1, status1);
      break;
  }

  switch (status2) {
    case "dijual":
      produk2.dijual(nama2, jumlah2, status2);
      break;

    case "dibeli":
      produk2.dibeli(nama2, jumlah2, status2);
      break;

    case "kosong":
      produk2.kosong(nama2, jumlah2, status2);
      break;
  }

  switch (status3) {
    case "dijual":
      produk3.dijual(nama3, jumlah3, status3);
      break;

    case "dibeli":
      produk3.dibeli(nama3, jumlah3, status3);
      break;

    case "kosong":
      produk3.kosong(nama3, jumlah3, status3);
      break;
  }
});
