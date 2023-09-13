while(true){
    
    var precioVenta = parseFloat(prompt("Ingrese el precio del producto"));
    
    if(!isNaN(precioVenta) && precioVenta != null && precioVenta != ""){
    break;
    }else{
        alert('no es numero');
    continue;
    }
}

precioVentaV = precioVenta.toFixed(2);
alert("El precio de venta del producto a calcular es: "+precioVentaV);
console.log("El precio de venta producto a calcular es: "+precioVentaV);
document.write("<h3> El precio de venta del producto a calcular es: "+precioVentaV+"</h3>");

function CalcularIva (precioVenta){
    return (precioVenta * 0.21)
}

var iva = CalcularIva(precioVenta);
ivaV= iva.toFixed(2);


alert("El IVA del producto ingresado es: "+ivaV);
console.log("El IVA del producto ingresado es: "+ivaV);
document.write("<h3> El IVA del producto ingresado es: "+ivaV+"</h3>");

function SumarIva(precioVenta){
    return (precioVenta + (precioVenta * 0.21));
}

var precioConIva = SumarIva(precioVenta);
precioConIvaV= precioConIva.toFixed(2);

alert("El precio del producto con IVA incluido es: "+precioConIvaV);
console.log("El precio del producto con IVA incluido es: "+precioConIvaV);
document.write("<h3> El precio del producto con IVA incluido es: "+precioConIvaV+"</h3>")

function CalcularPrecioVenta(precioConIva){
    return (precioConIva * 1.25);
}

var precioVenta = CalcularPrecioVenta (precioConIva);
precioVentaV= precioVenta.toFixed(2);

alert("El precio Sugerido de venta del producto es: "+precioVentaV);
console.log("El precio Sugerido de venta del producto es: "+previoVentaV);
document.write("<h3> El precio Sugerido de venta del producto es: "+previoVentaV+"</h3>");