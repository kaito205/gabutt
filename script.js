const khodamNames = [
  "Ultraman Hijau",
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
  "masa lalu mu!",
  "masa lalu mu!",
  "masa lalu mu!",
  "kosong!",
  "kosong!",
  "kosong!",
  "kosong!",
  "kosong!",
  "kosong!",
  "Bulu babi",
  "Masa lalu",
  "Ayam Kampung",
  "kuda lumping",
  "Sabun Batang",
  "pocong tisoledat",
  "pocong tisoledat",
  "pocong tisoledat",
  "sawah ngaralet",
  "Neymar Bogor",
  "Ikan Sepat",
  "tunggir hayam",
  "hulu lalay",
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
  resultContainer.innerHTML = `<h3 class="text-danger">Khodam anda : ${randomKhodam}</h3>`;

  const inputNama = document.getElementById("nama");
  inputNama.value = "";
}

const form = document.getElementById("khodamForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  cekKhodam();
});
