function ejerciciou(){
    var  segundoNumero=0;
    var primerNumero=0;
    primerNumero=parseInt(prompt("Ingrese el primero valor a calcular: "));
    segundoNumero= parseInt(prompt("Ingrese el segundo valor a calcular: "));
    alert("valor de la suma: "+(primerNumero+segundoNumero)+"\nvalor de la resta: "+(primerNumero-segundoNumero)+"\nvalor de la multiplicaion: "+(primerNumero*segundoNumero)+"\nvalor de la Divicion: "+(primerNumero/segundoNumero));
}
function ejerciciod(){
var primerNumero =0;
var segundoNumero=0;
primerNumero=parseInt(prompt("Ingrese el primer valor: "));
b=parseInt(prompt("Ingrese le segundo valor: "));
if(primerNumero>b){
alert(primerNumero+" es el numero mayor ")
}else{
    alert(b+" es el numero mayor")
}
}
function ejerciciot(){
    var a;
    var b;
    var c;
    a=parseInt(prompt("Ingrese el primer numero: "));
    b=parseInt(prompt("Ingrese el segundo numero: "));
    c=parseInt(prompt("Ingrese el tercer numero: "));
    if(a==b && b==c){
        alert("Los numero digitados son iguales");
    }else if(a<b && a<c){
        alert("El numero menor es: "+a);
    }else if(b<a && b<c){
        alert("El numero menor es: "+b);
    }else{
        alert("El numero menor es: "+c);
    }
}
function ejercicio4(){
    var a ;
    a = parseInt(prompt("Ingrese el primer numero: "));
    if(a%2==0){
        alert("El numero"+a+" es un numero par")
    }else{
        alert("El numero "+a+" es impar ")
    }
}
function ejercicio5(){
    var a ;
    var b ;
    a=parseInt(prompt("Ingrese el valor a calcular: "));
    b = a*a;
    alert("El cuadrado del numero "+a+" es: "+b);
}
function ejercicio6(){
 var base ;
 var altura ;
 base =parseFloat(prompt("Ingrese la base del trinagulo"));
 altura=parseFloat(prompt("Ingrese la altura del trinagulo"));   
}
function ejercicio7(){
    var a ;
    var b ;
    a=parseFloat(prompt("Ingrese el valor en centimetros: "));
    b=a*100;
    alert("El valor de "+a+"cm en metros es"+b+"Metros");
}
function ejercicio8(){
    var a ;
    var b ;
    a=parseInt(prompt("Ingrese su edad: "));
    b=2022 -a ;
    alert("Usted nacio en el año: "+b)
}
function ejercicio9(){
 var cap;
 var años;
 var op;
 var int;
 cap=parseInt(prompt("Ingrese el valor del capital a invertir"));
 años=parseInt(prompt("Ingrese el numero de años que desea dejar el capital"));
 años *=12
 op= (años(cap*0.02))+cap;
 int=(años(cap*0.02));
 alert("El valor de su capital final sera: "+op+"\nEl valor de interes que gano es: "+int);
 alert();     
}
function ejercicio10(){
    var ca1;
    var ca2;
    var ca3;
    var ca4;
    var ca5;
    var op;
    ca1=parseInt(prompt("Ingrese la primera calificacion: "));
    ca2=parseInt(prompt("Ingrese la segunda calificacion: "));
    ca3=parseInt(prompt("Ingrese la tercera calificacion: "));
    ca4=parseInt(prompt("Ingrese la cuarta calificacion: "));
    ca5=parseInt(prompt("Ingrese la quinta calificacion: "));
    op= (ca1+ca2+ca3+ca4+ca5)/5;
    if(op<=2.9)
    {alert("El alumno reprovo con: "+op);
    }else if (op>=3){
        alert("El alumno aprovo con: "+op);
    }else{
        alert("los valores digitados fueron Erroneos")
    }
}
function ejercicio11(){
    var kilos;
    var sum ;
    var op;
    kilos=parseFloat(prompt("Ingrese el numero de kilos comprados"));
    sum=kilos*4500;
    if(kilos<=2){
        alert("El valor a pagar es: "+sum);
    }else if(kilos>=3 && kilos <=5){
        op=(sum*0.1)+sum;
        alert("El valor total con el descuento es: "+op);
    }else if (kilos>=6 && kilos<=10){
        op=(sum*0.15)+sum;
        alert("El valor total con el descuento es: "+op);
    }else if (kilos>=10){
        op=(sum*0.2)+sum;
        alert("El valor total con el descuento es: "+op);
    }
}
