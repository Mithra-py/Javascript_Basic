console.log('OYUN')

let devam;
do {
    let hak = 5

    const rasgeleSayı = Math.floor(Math.random() * 100 + 1)
    console.log(rasgeleSayı);

    do {
        const tahmin = Number(prompt("Lütfen 0-100 arasında bir sayı giriniz:"));
        hak -= 1;
        if (tahmin === rasgeleSayı) {
            console.log(`Tebrikler ${5 - hak} denemede bildiniz.🥳`)
            break
        } else {
            console.log(`Dikkat ${hak} hakkınız kaldı.`)
            if (tahmin < rasgeleSayı) {
                console.log("Sayıyı Arttır🔼");
            } else {
                console.log("Sayıyı Azalt🔽");
            }
        }
    } while (hak > 0);

    if (hak === 0) {
        console.log('Üzgünüz oyunu kaybettiniz.');
    }

    devam = prompt("Yeniden oynamak ister misiniz? e/h");
} while (devam == 'e' || devam == 'E');

console.log('Yine bekleriz.')