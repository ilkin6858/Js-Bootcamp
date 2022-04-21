// deyiseni scopun daxilinde elan elemeden teyin etsek(yeni let, var ve const olmadan) hemin deyisen global olacaq,

// function topla(){
//    let eded=5; 
// }

// console.log(eded);

//burda error qaytaracaq cunki elan etdiyimiz deyisen function scope daxilindedi;

// bir funksiya globalda teyin olunan deyisene daxil ola biler; amma eksi ola bilmez
let ad="ilkin"; // ad local deyiskendi

function foo(){
    console.log(ad)
}
foo()

//funksiyalar icerinde daxil elediyimiz parametilerde local deyiskenler sayilir.ve yalniz funksiyalar daxilinde caqira bilirik
 function add(sum1,sum2){
     sum=sum1+sum2;
     console.log(sum)
 }
add(10,30)