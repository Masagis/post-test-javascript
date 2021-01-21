function hitungluas() {
    alas = document.getElementById("alas").value;
    tinggi = document.getElementById("tinggi").value;
    luas = (alas * tinggi) * 0.5;
    document.getElementById("luas").value = luas;
}

function luaslingkaran() {
    var jari2 = parseFloat(document.luasForm.jariJari.value);

    if (isNaN(jari2)) {
        jari2 = 0.0;
    }
    var result = 3.14 * jari2 * jari2;
    alert("Jadi, luas lingkaran adalah : " + result);
}