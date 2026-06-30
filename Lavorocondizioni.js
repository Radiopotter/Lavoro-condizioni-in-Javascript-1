let v = 29;

// IF ELSE
if (v < 18) {
    console.log("Insufficiente");
} else if (v < 21) {
    console.log("Sufficiente");
} else if (v < 24) {
    console.log("Buono");
} else if (v < 27) {
    console.log("Distinto");
} else if (v <= 29) {
    console.log("Ottimo");
} else if (v === 30) {
    console.log("Eccellente");
} else {
    console.log("Voto non valido");
}

// SWITCH
switch (v) {
    case 30:
        console.log("Eccellente");
        break;

    case 27:
    case 28:
    case 29:
        console.log("Ottimo");
        break;

    case 24:
    case 25:
    case 26:
        console.log("Distinto");
        break;

    case 21:
    case 22:
    case 23:
        console.log("Buono");
        break;

    case 18:
    case 19:
    case 20:
        console.log("Sufficiente");
        break;

    default:
        if (v < 18) {
            console.log("Insufficiente");
        } else {
            console.log("Voto non valido");
        }
}