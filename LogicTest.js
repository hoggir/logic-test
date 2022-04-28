//2
function Reverse(huruf) {
  var curString = huruf;
  var newString = "";

  for (let i = huruf.length - 1; i >= 0; i--) {
    newString = newString + curString[i];
  }

  return newString;
}

console.log(Reverse("abcde"));

//4
let a = 3;
let b = 7;
[a, b] = [b, a]

//5
function noEmpat(angka) {
  var curAngka = angka;
  var newString = "";

  if (curAngka == 4) {
    newString = "empat";
    console.log(newString);
  } else if (curAngka == 20) {
    newString = "dua puluh";
    console.log(newString);
  } else if (curAngka == 39) {
    newString = "tiga puluh sembilan";
    console.log(newString);
  } else if (curAngka == 104) {
    newString = "silahkan masukkan bilangan 1-100";
    console.log(newString);
  }

  return newString;
}

const angka = prompt("Masukkan angka: ");
noEmpat(angka);

//10
function tahunKabisat(tahun) {
  if ((0 == tahun % 4 && 0 != tahun % 100) || 0 == tahun % 400) {
    console.log(tahun + " adalah tahun kabisat");
  } else {
    console.log(tahun + " bukan tahun kabisat");
  }
}

const tahun = prompt("Masukkan tahun: ");
tahunKabisat(tahun);
