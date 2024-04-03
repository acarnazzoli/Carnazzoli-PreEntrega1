
//Variables
let lineaPanel = parseInt(prompt("Ingrese la linea del panel deseado\n" +
    "1 Línea Espacios Comunes - $2500\n" +
    "2 Línea Dormitorios - $3000\n" +
    "3 Línea Infantil - $4000\n" +
    "4 Línea Oficinas - $3500\n" +
    "0 Finalizar la compra"));

let importeTotal = 0;
//Ciclos / Condicionales 
while (lineaPanel != 0) {
    switch (lineaPanel) {
        case 1:
            importeTotal += 2500;
            alert("Agregaste un panel de Línea Espacios Comunes a tu carrito, importe total de tu compra: $" + importeTotal);
            break;
        case 2:
            importeTotal += 3000;
            alert("Agregaste un panel de Línea Dormitorios a tu carrito, importe total de tu compra: $" + importeTotal);
            break;
        case 3:
            importeTotal += 4000;
            alert("Agregaste un panel de Línea Infantil a tu carrito, importe total de tu compra: $" + importeTotal);
            break;
        case 4:
            importeTotal += 3500;
            alert("Agregaste un panel de Línea Oficina a tu carrito, importe total de tu compra: $" + importeTotal);
            break;
        default:
            alert("Error en la selección. Ingrese un número de línea de paneles válido, por ejemplo: 1, 2, 3, 4 o 0 para finalizar la compra");
            break;
    }
    lineaPanel = parseInt(prompt("Ingrese la linea del panel deseado\n" +
    "1 Línea Espacios Comunes - $2500\n" +
    "2 Línea Dormitorios - $3000\n" +
    "3 Línea Infantil - $4000\n" +
    "4 Línea Oficinas - $3500\n" +
    "0 Finalizar la compra"));
}
if (importeTotal >= 30000) {
// Función Flecha    
    const aplicarDescuento = (total) => total * 0.85 ;
    alert ("El importe total de tu compra es de: $"+ importeTotal + " " + "y con el descuento aplicado del 15% te queda en: $" + aplicarDescuento(importeTotal));
} else if (importeTotal < 30000) {
    alert("El importe total de tu compra es de: $"+ importeTotal);
}   
