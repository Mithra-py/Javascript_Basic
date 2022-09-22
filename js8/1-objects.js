//                          OBJECTS 
console.log("************ Objects *************")

// 1-Object classından new operatörü ile

const araclar = new Object();
araclar.marka = "BMW";
araclar.motor = 1.3;
araclar.model = 2022;

console.log(araclar);
console.log(araclar.motor);
console.log(araclar['model']);


// 2- object constructor'ı kullanarak (OOP ile ayrıntılandırılacak)

//* Object constructor
function Personel(id, ad, maas) {
  this.perId = id;
  this.perAdi = ad;
  this.perMaas = maas;
  console.log(this); //! Personel objesine bağlanmıştır (binded)
}

const ahmet = new Personel(101, 'Ahmet', 75000);
const canan = new Personel(102, 'Canan', 85000);
console.log(ahmet, canan);
console.log(canan.perMaas);
console.log(ahmet.perAdi);
console.log(this); //! window objesine bağlanmıştır

// 3- Object Literal (En çok tercih edilen yöntem.)

const calısan = {
  ad: "Ahmet",
  soyad: "Yılmaz",
  yaş: 30,
  iş: "developer",
  diller: ["C", "C++", "Python", "JS"],
  maaş: 120000,
};

console.log(calısan);
console.log(calısan.yaş);
console.log(calısan.diller);
console.log(calısan.diller[3]);

calısan.konum = "Turkey"
calısan.email = "ahmet@gmail.com"
calısan["dogum"] = 1992
console.log(calısan)

const isci = calısan
isci.maaş = 50000
console.log(isci, calısan)


//                    Object Metotları

const kisi = {
  ad: "Can",
  soyad: "Canan",
  dogum: 1990,
  meslek: "developer",
  ehliyet: true,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogum;
  },
  ozet: function(){
    return `${this.ad}, ${this.yasHesapla()} yaşındadır.`
  },
  // ozet: () => {
  //   console.log(this);
  //   return `${this.ad}, ${this.yasHesapla()} yaşındadır.`;
  // },
};
console.log("Yaş", kisi.yasHesapla());

console.log("Bilgi:", kisi.ozet());


//                        OBJECT ITERATION
// Nested objects
const kişiler = { 
  ahmet: {
  ad: "Ahmet",
  soyad: "Yılmaz",
  yaş: 30,
  is: "developer",
  diller: ["C", "C++", "Python", "JS"],
  maaş: 120000,
},
  mehmet: {
  ad: "Mehmet",
  soyad: "Yılmaz",
  yaş: 24,
  is: "developer",
  diller: ["C", "C++", "Python", "JS"],
  maaş: 200000,
  }
};

console.log(kişiler);
console.log(kişiler.ahmet.is);

// JSON => Javascript Object Notation

const kisiler = [
  {
    name: 'Ahmet',
    surname: 'Can',
    job: 'developer',
    age: 30,
  },
  {
    name: 'Mehmet',
    surname: 'Baki',
    job: 'tester',
    age: 35,
  },
  {
    name: 'Nur',
    surname: 'Ersan',
    job: 'team lead',
    age: 40,
  },
  {
    name: 'Merve',
    surname: 'Veli',
    job: 'developer',
    age: 26,
  },

  {
    name: 'Ruzgar',
    surname: 'Kuzey',
    job: 'tester',
    age: 24,
  },
];

console.log(kisiler);
console.log(kisiler[4]);




// Kişiler dizisindeki jobları tek tek yazdırma

kisiler.forEach((kisi) => console.log(kisi.job));




// Yaşları bir artırarak yeni bir diziye saklamak

const yaşlar = kisiler.map((kisi) => kisi.age + 1);
console.log(yaşlar)



// name ve surnameleri birletirip büyük harfe çevirin ve bunu name key olarak saklayın. Aynı zamanda age değerlerini 5 arttırarak age keyine saklayın ve oluşan diziyi döndüren kodu yazınız

const kisilerFullIsim = kisiler.map((kisi) => ({
  fulname: kisi.name.toUpperCase() + " " + kisi.surname.toUpperCase(),
  age: kisi.age + 5
}));

console.log(kisilerFullIsim)

const kisilerFullIsim1 = kisiler.map((kisi) => {
  return {
    fulname: kisi.name.toUpperCase() + " " + kisi.surname.toUpperCase(),
  age: kisi.age + 5
}});

console.log(kisilerFullIsim1)




// Kişilerin ortalama yaşını hesaplayınız.

const ortYas = kisiler.reduce((t, kisi ) => t + kisi.age, 0) / kisiler.length

console.log("Ortalama Yaş: ", ortYas)