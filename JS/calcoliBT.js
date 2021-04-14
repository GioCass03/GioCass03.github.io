function calcola(form) {
    var nPersone, prezzo;
    var distanza = document.getElementById("km").value;

    if (form.r1.checked) {
        var val = 0.43;
    } else {
        var val = 0.23;
    }

    var scelta = document.getElementById("nPersone").selectedIndex;
    switch (scelta) {
        case 0:
            nPersone = 1;
            break;
        case 1:
            nPersone = 2;
            break;
        case 2:
            nPersone = 3;
            break;
        case 3:
            nPersone = 4;
            break;
        case 4:
            nPersone = 5;
            break;
        case 5:
            nPersone = 6;
            break;
    }
    prezzo = distanza * val * nPersone;
    document.getElementById("costo").innerHTML = "Costo:" + prezzo+"€";
}