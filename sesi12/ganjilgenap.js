console.log(cek(10));

function cek(a) {

    if (typeof a != "number") return "Bukan Angka";

    if (a % 2 == 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }

}