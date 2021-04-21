
function calcolaPesoForma(){
    
    var bmi,altezza,hM,anni,choice,formula,peso,pS;

    altezza = document.getElementById("cm").value;
    anni = document.getElementById("eta").value;
    choice = document.getElementById("sesso").selectedIndex;
    peso=document.getElementById("peso").value;
    
    switch(choice){
        case 0:
            pesoForma=(altezza-100)-((altezza-150)/2);
            document.getElementById("pesoLorenz").innerHTML = "Secondo la formula di Lorenz il tuo peso forma è di " + pesoforma + "kg";
            pesoForma=altezza-104;
            document.getElementById("pesoBroca").innerHTML = "Secondo la formula di Broca il tuo peso forma è di " + pesoForma + "kg";
            pesoForma=(altezza-150)*0.75+50;
            document.getElementById("pesowandervael").innerHTML = "Secondo la formula di Wan Der Vael il tuo peso forma è di " + pesoForma + "kg";
            hM=altezza/100;
            bmi=peso/(hM*hM);
            document.getElementById("bmi").innerHTML = "Il tuo BMI è: " + bmi + "kg/m2";
        case 1:
            pesoForma=(altezza-100)-((altezza-150)/4);
            document.getElementById("pesoLorenz").innerHTML = "Secondo la formula di Lorenz il tuo peso forma è di " + pesoForma + "kg";
            pesoForma=altezza-100;
            document.getElementById("pesoBroca").innerHTML = "Secondo la formula di Broca il tuo peso forma è di " + pesoForma + "kg";
            pesoForma=(altezza-150)*0.6+50;
            document.getElementById("pesowandervael").innerHTML = "Secondo la formula di Wan Der Vael il tuo peso forma è di " + pesoForma + "kg";
            hM=altezza/100;
            bmi=peso/(hM*hM);
            document.getElementById("bmi").innerHTML = "Il tuo BMI è: " + bmi + " kg/m2";
    }
}