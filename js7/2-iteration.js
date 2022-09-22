//*                        FOREACH METHOD   
console.log("********** ITERATION ************");

// Dizideki her bir fiyatı konsola bastırınız.
const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach(yazdir)

function yazdir(value){
console.log(value);
}

console.log("*******************************")

//! Arrow function kullanılarak çözüm.
fiyatlar.forEach((value) => console.log(value));


// Fiyatlar dizisindekilerin toplamını konsola yazdırınız.

let toplam = 0
fiyatlar.forEach((fiyat) => (toplam += fiyat))
console.log("Toplam:", toplam);


let toplam1 = 0

// Array.forEach((value, index, array) => )
fiyatlar.forEach((değer, indis, dizi) => {
    toplam1 += değer
    console.log(`${indis}.iterasyon toplamı: ${toplam1}`);
    dizi[indis] = değer + 10;
});
console.log(fiyatlar)


//                      MAP METHOD

const isimler = [
    "Ahmet",
    "Mehmet",
    "ismet",
    "SAFFET",
    "nur",
    "CAN",
    "Cem"
];

console.log(isimler);
console.log(isimler.map((isim) => isim.toLocaleUpperCase()));

const küçükİsimler = isimler.map((isim) => isim.toLowerCase());
console.log(küçükİsimler)



const büyükİsimler = isimler.map((isim, i, dizi) =>{
    dizi[i] = isim.toLocaleLowerCase();
    return isim.toLocaleUpperCase();
});
console.log(büyükİsimler);



isimler
.map((x) => x.toLocaleUpperCase())
.forEach((name) => console.log(name));


console.log("*****************************")


isimler
.filter((x) => x === "ahmet")
.map((x) => x.toLocaleUpperCase())
.forEach((x) => console.log(x));


const maaşlar = [3000, 5000, 4000, 6000, 6500];

//                      REDUCE METHOD


const toplamMaaş = maaşlar.reduce((t, m) => t + m, 0);
console.log("Toplam Maaş", toplamMaaş);