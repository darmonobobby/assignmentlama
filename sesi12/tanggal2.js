console.log(get_tanggal());

function get_tanggal() {

    const bln = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date();
    let dte = d.getDate();
    let n_bln = bln[d.getMonth()];
    let year = d.getFullYear();

    return dte+"/"+n_bln+"/"+year;
}
