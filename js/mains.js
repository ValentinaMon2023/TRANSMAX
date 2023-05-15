function suma(){
    let A = 0;
    let B = 0;
    let S = 0;

    
    alert("Por favor ingrese el primer valor: "); // alert: para escribir el msj 
    A=parseInt(prompt("")); // prompt: guarda la información 
    
    
    alert("Por favor ingrese el segundo valor: ");
    B=parseInt(prompt(""));  // parseInt: para convertir de str a int
   
    S=A+B;

    alert(A + "+" + B + " = " + S);
}

function opBasicas(){
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;

    A=parseInt(prompt("Ingrese el primer valor"));
    B=parseInt(prompt("Ingrese el segundo valor"));

    S=A+B;
    R=A-B;
    M=A*B;
    D=A/B;

    alert(A + "+" + B + " = " + S + "\n" + A + "-" + B + " = " + R + 
    "\n" + A + "*" + B + " = " + M + "\n" + A + "/" + B + " = " + D);
}

function mayorQ(){
    let A=0;
    let B=0;
    
    A=parseInt(prompt("Digite primer número"));
    B=parseInt(prompt("Digite segundo número"));

    if (A == B){
        alert("LOS NUMEROS SON IGUALES :" );
    }
    else if (A > B){
        alert(A + " > " + B);  
    }
    else {
        alert(B + ">" + A)
    }
}

function menorQ(){
    let A=0;
    let B=0;
    let C=0;

    A=parseInt(prompt("Digite el primer número"));
    B=parseInt(prompt("Digite el segundo número"));
    C=parseInt(prompt("Digite el tercer número"));

    if (A==B && A==C &&  B==C){
        alert(A + ", " +  B + ", " + C + " Los números ingresados son iguales");
    }
    else if (A<B && A<C){
        alert(A + ", " +  B + ", " + C + " El menor de los tres números ingresados es: " + A);
    }
    else if (B<A && B<C){
        alert(A + ", " +  B + ", " + C + " El menor de los tres números ingresados es: " + B);
    }
    else {
        alert(A + ", " +  B + ", " + C + " El menor de los tres números ingresados es: " + C);
    }
}

function parOimpar(){
    
    let A=0;

    A=parseInt(prompt("Digite un número"));

    if (A % 2==0){
        alert("El número " + A + " es par");
    }
    else {
        alert("El número " + A + " es impar");
    }
}

function cuadrado(){
    let X=0;
    let Y=0;

    X=parseInt(prompt("Digite un número"));
    Y = X**2;

    alert("El cuadrado de " + X + " es: " + Y)
}

function areaTriangulo(){
    let b=0;
    let h=0;
    let a=0;
    
    alert("Para hallar el área del triángulo la unidad de medida utilizada será dada en metros")
    b=parseInt(prompt("Digite la base del triángulo"));
    h=parseInt(prompt("Digite la altura del triángulo"));

    A=(b*h)/2;

    alert("El área del triángulo es: " + A + "m^2");
}

function conversion() {
    let m=0;
    let cm=0;
    let pul=0;

    m=parseInt(prompt("Digite el valor a convertir de m a cm y in"));

    cm = 100*m;
    pul= 39.3701*m;

    alert(m + "m equivale a " + cm + "cm" + 
    "\n" + m + "m equivale a " + pul + "in");
    
}
function fechaNacido() {
    let edad = 0;
    let fechaActual = 0;
    let fechaNacido = 0;

    fechaActual=parseInt(prompt("Ingrese el año actual: "));
    edad=parseInt(prompt("Ingrese la edad del usuario: "));
    
    fechaNacido = fechaActual-edad;
    
    alert("El año de nacimiento es: " + fechaNacido);
}  
function cdt() {
    let capital = 0;
    let tiempo = 0;
    let intereses =0;
    let total = 0;

    capital=parseFloat(prompt("Ingrese el capital: "));
    tiempo=parseInt(prompt("Ingrese los años de apertura del CDT: "));

    intereses = tiempo*((capital*0.017)*12);
    total = capital+intereses;

    alert("-Capital invertido: $" + capital +
    "\n"+"-Intereses del CDT: $"+ intereses.toFixed(5) + 
    "\n"+"-Total del CDT $: "+ total.toFixed(5));
}
function boletin() {
    let nombre = "";
    let materia = "";
    let notas = 0;
    let suma = 0.0;
    let promedio = 0;
    let estado = ""
    

    nombre  = prompt("Ingrese el nombre del estudiante: ");
    materia  = prompt("Ingrese la asignatura: ");

    for (let i = 1; i <=7; i++) {
        notas=parseFloat(prompt("Digite la nota "+i+":"));
        suma += notas;
      }
    
    promedio= suma/7;  

    if (promedio >=1 && promedio <=6.1)
    estado = "reprueba";

    else if (promedio >6.1 && promedio<=10)
    estado = "aprueba";
     
    alert("Nombre del estudiante: "+ nombre +
    "\n" + "Asignatura: " + materia + 
    "\n"+ "Estado: " + estado + " con promedio "+ promedio.toFixed(1));
}

function fruteria(){
    let peso = 0;
    const precio = 4500;
    let dto = 0;
    let subtotal = 0;
    let descuento = 0;
    let total = 0;

    peso=parseFloat(prompt("Digite el peso de las manzanas: "));

    if(peso >0 && peso <=2)
    dto = 0.0;

    else if(peso >=3 && peso <=5)
    dto = 0.1;

    else if(peso >=6 && peso <=10)
    dto = 0.15;

    else if(peso >=11)
    dto = 0.2;

    subtotal = peso*precio;
    descuento = peso*precio*dto;
    total = peso*precio*(1-dto);

  
    alert("Manzanas........ 1Kg: $4500  "+ 
    "\n" + "Manzanas..... " + peso + "Kg: $" + subtotal + "\n" + "Descuento(" + "-" + dto + ")... $-" + 
    + descuento + "\n" + "Total a pagar........ $: " + total);
}

function salario()
{
    let horas = 0;
    const salario = 10000;
    const extras = 20000;

    horas = parseInt(prompt("Digie las horas laboradas: "));
    
    let pago = ""
    let horas1 = 0; 
    let horasExtras = 0;
    let pagoExtras = 0;
    let total = 0;

    if (horas <=40){
        pago = horas*salario;
        horas1 = horas;
        total = pago*1;
    }
    else if (horas >40){
        pago = 40*salario 
        pagoExtras = (horas-40 )*extras;
        total = (pago + pagoExtras);
        horasExtras = horas-40;
        horas1 = 40;
    }
    else{
        alert("Valor inválido. Ingrese ún número sin comas ni puntos")
    }

    alert("-Horas legales laboradas: "+ horas1 + "\n" + "-Horas extras: " + horasExtras + 
    "\n" + "-Salario: $"+ pago + "\n" + "-Pago extras: $" + pagoExtras + "\n" + "-Total: $" + total);
}
