console.log("********** FUNCTION DECLARATION **********")

// Örnek 1

function yazdır(){
    console.log("Merhaba")
}

yazdır();

console.log(typeof yazdır);

//* Örnek 2 Parametreli Fonksiyon

function selamla(name, lastName = ''){
    console.log(`Merhaba ${name} ${lastName}`)
}

selamla('Erhan', 'Yılmaz');
selamla('Erol');
selamla('Mehmet');


//* Örnek 3 Parametreli Dönüş Değerli Fonksiyon

function yaşHesapla(year, name){
    // const mesaj = `${name}'in yaşı ${2022-year}'dir.`
    const date = new Date().getDate();
    console.log(date);
    const mesaj = `${name}'in yaşı ${new Date().getFullYear() - year}'dir.`
return mesaj
}

const mesaj1 = yaşHesapla(2001, 'Elif')
console.log(mesaj1)

//* Örnek 4 Parametreli Dönüş Değerli Fonksiyon


function tekCift(number){
    return number % 2 === 0 ? `${number} çifttir.` : `${number} tektir.`
}

console.log(tekCift(5));
console.log(tekCift(2));
