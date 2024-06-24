const khodamNames = [
  "Ultraman Hijau",
  "Ultraman Hijau",
  "Ultraman Hijau",
  "Rangger Pink",
  "Rangger Pink",
  "Rangger Pink",
  "Ikan Kepala Ultraman",
  "Ikan Kepala Ultraman",
  "Ikan Kepala Ultraman",
  "kakek sugiono",
  "kenalpot recing",
  "kenalpot recing",
  "kenalpot recing",
  "kunti bogel",
  "kunti bogel",
  "kunti bogel",
  "Kosong!",
  "Coba lagi",
  "Coba lagi",
  "Coba lagi",
  "lauk sepat",
  "ceker hayam",
  "Naga ompong!",
  "kosong!",
  "Simet!",
  "kosong!",
  "kosong!",
  "congcorang!",
  "Bulu babi",
  "Masa lalu",
  "Masa lalu",
  "Masa lalu",
  "Masa lalu",
  "Ayam Kampung",
  "kuda lumping",
  "Sabun Batang",
  "pocong tisoledat",
  "pocong tisoledat",
  "pocong tisoledat",
  "Belut sawah",
  "Neymar Bogor",
  "Lauk Sepat",
  "tunggir hayam",
  "Masa lalu!",
  "kunti beranak!",
  "kolor hejo!",
  "kolor hejo!",
  "kolor hejo!",
  "Tuyul nyengir!",
  "Tuyul nyengir!",
  "Tuyul nyengir!",
];

function cekKhodam() {
  const randomIndex = Math.floor(Math.random() * khodamNames.length);
  const randomKhodam = khodamNames[randomIndex];

  const nama = document.getElementById("nama").value.trim();

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  console.log(`Khodam yang muncul: ${randomKhodam}`);

  const resultContainer = document.getElementById("result");
  resultContainer.innerHTML = `<h6 class="text-danger">Khodam anda : ${randomKhodam}</h6>`;

  const inputNama = document.getElementById("nama");
  inputNama.value = "";
}

document
  .getElementById("khodamForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    cekKhodam();
  });
