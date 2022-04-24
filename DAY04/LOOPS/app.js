
//loop tekrarlanan isler ucun istifade edirik,meselen 10 dene divin renklerini eyni anda deyismek;
//3 nov loop var:1-while, 2-ci do-while, d3-cu for


//meselen 1den 10na qeder olan reqemlerin ekranda gosterilmesi
let x=1;
while(x<=10){
    
    console.log(x)
    x++

};


let y=5;
while(y>20){
//whilede serti odenilmeyenn kod icra olunmur
    console.log(y);
     y++
}

//do while

let z=90;
do{
    console.log(x)
    x++
}
while(x<200);

//do whilenin, while loopdan ferqi sert odenmese en azi bir defe isleyir.Amma while sert odenmese umumiyetle islemir



//for loop;

for(let c=1;c<5;c++){
    console.log(c)
}

//break 

for(let eded=0;eded<10;eded++){
    if(eded==5){
        break; // eded==5 catanda 5-e qeder olan kodlari ekranda cap edecek, diger ededleri gostermeyecek
        // break kodun colune getirir ve icra elemir
    }
    console.log(eded)
}



//continue

for(reqem=0;reqem<10;reqem++){
    if(reqem==5){
        continue // eded==5 yalniz 5-i  ekranda cap elemiyecek, diger ozunden evvelki ve sonraki ededleri ise ekrana cap edecek,
        
    }
    console.log(reqem)
}

