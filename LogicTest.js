//1
function noSatu(angka) {
  var kali = 1;
  for (i=angka; i>0; i--){
      kali *= i;
  }
  alert(kali);
  return kali;
}

const angka = prompt("Masukkan angka: ");
noSatu(angka);

//2
function Reverse(huruf) {
  var curString = huruf;
  var newString = "";

  for (let i = huruf.length - 1; i >= 0; i--) {
    newString = newString + curString[i];
  }

  return newString;
}

const huruf = prompt("Masukkan huruf: ");
Reverse(huruf);
alert(Reverse(huruf));

//4
function swap() {
    
  [a, b] = [b, a];
  
  console.log(`Variable a setelah di swap: ${a}`);
  console.log(`Variable b setelah di swap: ${b}`);
}

let a = prompt('masukkan variable a: ');
let b = prompt('masukkan variable b: ');
swap();

//5
function noEmpat(nilai){
  var simpanNilaiBagi=0;
  var huruf = ["", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas"];
  var temp="";

  if (nilai < 12) {
      temp = " "+huruf[nilai];
  }
  else if (nilai <20) {
      temp = noEmpat(nilai - 10) + " Belas";
  }
  else if (nilai < 100) {
      simpanNilaiBagi = Math.floor(nilai/10);
      temp = noEmpat(simpanNilaiBagi)+" Puluh"+ noEmpat(nilai % 10);
  }
  else if (nilai == 100) {
      temp = "Seratus";
  } else {
      temp = "silahkan masukkan bilangan 1-100"
  }

  return temp;
}

const nilai = prompt("Masukkan angka: ");
noEmpat(nilai);
alert(noEmpat(nilai));

//9
function noSembilan(value) {
  var angka = value;
  var terbesar = angka[0];
  var terkecil = angka[0];
  
  for (var i = 0; i < angka.length; i++) {
      if(angka[i] < terkecil) {
          terkecil = angka[i];
      }
  }
  
  for( i = 0; i < angka.length; i++ ){
      if(angka[i] > terbesar ) {
          terbesar = angka[i];
      }
  }
  
  console.log('min: ' + terkecil + ' max: ' + terbesar)
}

var a = prompt("Angka pertama: ");
var b = prompt("Angka kedua: ");
var c = prompt("Angka ketiga: ");
var d = prompt("Angka keempat: ");
var value = [a, b, c, d ];

noSembilan(value)

//10
function tahunKabisat(tahun) {
  if ((0 == tahun % 4 && 0 != tahun % 100) || 0 == tahun % 400) {
    console.log(tahun + " adalah tahun kabisat");
    alert(tahun + " adalah tahun kabisat")
  } else {
    console.log(tahun + " bukan tahun kabisat");
    alert(tahun + " bukan tahun kabisat")
  }
}

const tahun = prompt("Masukkan tahun: ");
tahunKabisat(tahun);