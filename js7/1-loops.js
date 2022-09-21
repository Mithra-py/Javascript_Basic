//                          FOR LOOP
console.log("*********** LOOPS IN ARRAYS ************")

const işlemler = [-3000, 4500, -2200, -6000, 9000]
const işlemlerToplamı = () => {
    let yatırma = 0;
    let çekme = 0;
    for(let i = 0; i < işlemler.length; i++){
        if(işlemler[i]>=0){
            yatırma += işlemler[i];
        }else{
            çekme += işlemler[i];
        }
    }
    return `Toplam yatırma: ${yatırma}, toplam çekme: ${-çekme}`
};

console.log(işlemlerToplamı());

//                  FOR-IN LOOP
const öğrenciler = [
    "ahmet",
    "mehmet",
    "ismet",
    "saffet",
    "ahmet",
    "nur",
    "can",
    "nur",
    "mehmet",
    "cem"
];
    
const öğrenciBul = function(isim){
 let sayaç = 0   
    for(let i in öğrenciler){
        if(öğrenciler[i] === isim){
            sayaç++;
        }
    }

    if(sayaç === 0){
        return `${isim} bulunamadı.`;
    }else{
        return `${isim}, ${sayaç} adet bulundu.`
    }
};


let ogrİsim = prompt("Öğrenci adını firiniz:").toLocaleLowerCase();
console.log(öğrenciBul(ogrİsim));


//                      FOR-OF LOOP

const öğrenciBulForOf = function(isim){
    let sayaç = 0   
       for(let Öğrenci of öğrenciler){
        Öğrenci === isim ? sayaç++ : null; //Ternary
        // Öğrenci === isim && sayaç++; // Short circuit Yöntemi. Koşul doğru ise ifadeyi çalıştır.
        // Öğrenci === isim || sayaç--; // Short circuit Yöntemi. Koşul yanlış ise ifadeyi çalıştır.
       }
        return !sayaç ? `${isim} bulunamadı.` : `${isim}, ${sayaç} adet bulundu.`;
    };
   
let name = prompt("Öğrenci adını firiniz:").toLocaleLowerCase();
console.log(öğrenciBulForOf(name));