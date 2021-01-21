let jualRumah = {
    judul: "Rumah mewah spek terbaik di sayap kota bandung bebas banjir lokasi strategis, Kopo Cibaduyut, Bandung, Leuwi Panjang, Bandung",
    harga: "Rp. 280.000.000",
    lokasi: "komplek PERUMAHAN ALMAAS RECIDENT",
    fasilitas: [
        "mesjid", "temapt bermain/olahraga", "lapangan futsal"
    ],
    spekBangunan: [
        "beton bertulang besi 8-10-12",
        "bata merah press, pasir cimalaka",
        "atap baja ringan genteng beton gelombang",
        "plafon rangka besi hollo gypsum",
        "lantai granit 60x60",
        "kusen kayu manglid atau almunium",
        "pintu kayu manglid",
        "listrik 1300 watt",
        "closet jongkok/duduk",
        "dak kompor",
        "dak toren",
        "air semi jet pam 35 mtr",
    ],
    hubungi: {
        telepon: "0878-2538-5543",
        WA: "0812-1480-3320"
    }

};

console.log(jualRumah.judul);
console.log(jualRumah.harga);
console.log(jualRumah.hubungi["telepon"])

// array dalam object
jualRumah.spekBangunan.forEach(function (item) {
    console.log(`${item} adalah spesifikasi dari bangunan yang dijual`)
})