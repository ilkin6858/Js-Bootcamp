function find(x,y){
    let z=x*y;
    return z
}


let netice=find(5,10);
document.write(netice,"<br>");
let sum=find(500,90);
document.write(sum, "<br>");

//function asingment
//funksiyalar eyni zamanda (value)deyer hesab olunur;
//yeni her hansisa bir funskiyani deyisene menimsede bilerik;

let topla=function(x,y){
    let z=x*y;
    return z

}

let yol=topla(20,30);
document.write(yol,"<br>");


function ilkin(v,t,fn){
    let x=v*t;
    return fn(x);
}

function sum10(param1){
    return param1+10;
}

let hash=ilkin(90,10,sum10);
document.write(hash);


//task1:cevrenin sahesini tapmaq



function cevresahesi(yaricap){
   let cevre=parseInt(2 * Math.PI * yaricap);
   document.write(" cevrenin sahesi"+cevre);
}

cevresahesi(89);


//task2:telebe imtahandan aldiqi qiymete gore onun imtahandan kecdiyi ve kesildiyini bize gostersin

function exam(viza,final){
    // viza=prompt("qiymeti yaz");
    //  final=prompt("qiymeti yaz")
    let netice=Number(viza*0.4+final*0.4);

    if(netice >= 51){
        document.write("imtahandan kecmisiniz:"+netice,"<br>")
    }
    else{
        document.write("imtahandan kesildiniz:"+netice,"<br>")
    }
}

exam(90,90);
exam(20,40);
