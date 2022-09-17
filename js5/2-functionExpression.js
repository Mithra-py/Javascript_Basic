console.log("************ FUNCTION EXPRESSION ************")


//* Örnek 1

// console.log(tekCift(5));
// Fonksiyondan önce çağırınca hata veriyor.

const tekCift = function(number){
    return number % 2 === 0 ? `${number} çifttir.` : `${number} tektir.`
}

console.log(tekCift(5));
console.log(tekCift(2));

// Örnek 3: 3 sayının en büyüğünü bulan fonksiyon

const büyükBul = function(x, y, z = -Number.MAX_VALUE){
    let enBüyük;
    if(x >= y && x >= z){
        enBüyük = x
    }else if(y >= x && y >= z){
        enBüyük = y
    }else if(z >= x && z >= y){
        enBüyük = z
    }else{
        enBüyük = x;
    }
    return enBüyük
}

console.log('En büyük sayı', büyükBul(1, 3, 2))
console.log('En büyük sayı', büyükBul(5, 1, 2))
console.log('En büyük sayı', büyükBul(-1, -2,))

//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/

const hesapla = function (islem, s1, s2) {
    let sonuc;
  
    if (islem == '+') {
      sonuc = topla(s1, s2);
    } else if (islem == '-') {
      sonuc = cikar(s1, s2);
    } else if (islem == '*') {
      sonuc = carp(s1, s2);
    } else if (islem == '/') {
      sonuc = bol(s1, s2);
    }
    return sonuc;
  };
  
  const topla = function (s1, s2) {
    return s1 + s2;
  };
  const cikar = function (s1, s2) {
    return s1 - s2;
  };
  const carp = function (s1, s2) {
    return s1 * s2;
  };
  const bol = function (s1, s2) {
    return s1 / s2;
  };
  
  console.log(hesapla('+', 3, 5));
  console.log(hesapla('-', 3, 5));