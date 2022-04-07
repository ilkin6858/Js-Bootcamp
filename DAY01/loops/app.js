// 1-100 arasindaki ededleri ekranda goster.
for(let i=1;i<100;i++){
   document.write(i,"<br>")
}


// 1-100 arasindaki tek ededleri goster.
for(let i=1;i<100;i++){
    if(i%2==1){
        document.write(i,"<br>")
    
        // eded 2-ye bolunen zaman 1 qaytarirsa bu tek ededdir.
    }
}


// 1-100 arasindaki cut ededleri goster.
for(i=1;i<=100;i++){
    if(i%2==0){
        document.write(i,"<br>")

         // eded 2-ye bolunen zaman 0 qaytarirsa bu tek ededdir.
    }
}


// 1-500 edelerin cemini goster.
let sum=0;
for(i=1;i<100;i++){
    sum=sum+i
}

document.write(sum,"<br>")