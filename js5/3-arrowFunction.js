console.log("********** ARROW FUNCTIONS ***********")

// Örnek 1

const topla = (x, y) => x + y

console.log('Sonuç = ', topla(5, 3))


const menu = (times) => {
    console.log("==========================")
    console.log("JAVASCRIPT ÇOK KOLAYMIŞ")
    console.log("==========================")
    return times * 2
};

console.log(menu(2));

// Örnek 2

const tekMi = (n) => (n % 2 ? 'Tektir.' : "Çifttir.");

console.log(tekMi(3))









