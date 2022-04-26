console.log(document.URL);
console.log(document.title);
document.title="ilkin lezgin";
console.log(document.body);
console.log(document.head);


//document.getElementById metodu;

console.log(document.getElementById('box'));

//qisa olaraq deyisene menimsedib cap edede bilerik

let element=document.getElementById('box');

console.log(element);

//textContent metodu ile htmlde isdediyimiz melumatin icini deyisdire ve text yerlesdire  bilirik 

element.textContent='yeni dunya duzeni';

//innertext motodu ilede hemcinin text yerlesdire bilirik

element.innerText="Coding is my life"

//innerHTML metodu ile digerlerinden ferqli olaraq hem text, hemde tag yerlesdire bilirik

element.innerHTML="<h5>merhaba</h5>";

document.getElementById("box").style.backgroundColor='aqua';

//////////////////////

// getElementsByclassName()

//elementlere class adlari ile muraciet elemek ede bilirik,class adlari cox olduqu ucun elements kimi yazilir.
// class adlarina arraylerle muraciet elemeyimin sebebi ise class adlari cox olduqu ucundu

let classname=document.getElementsByClassName('row');
console.log(classname[0]);
classname[1].textContent='qasimov';

document.getElementsByClassName('row')[1].style.borderRight='10px solid green'




//document.getElementsByTagname.
// class adlarindan coxda ferqi yoxdu, sadece olaraq taq adlarina muraciet edirik

console.log(document.getElementsByTagName('h1'));
document.getElementsByTagName('h1')[4].textContent='yasasin azerbaycan';
document.getElementsByTagName('h1')[4].style.color='green';
document.getElementsByTagName('h1')[4].style.fontSize='3em';
document.getElementsByTagName('h1')[4].style.border='5px solid red';
document.getElementsByTagName('h1')[4].style.borderRadius='20px';
document.getElementsByTagName('h1')[4].style.textAlign='center';

let mytag=document.getElementsByTagName('h1')

//bu yazdiqim kodlarin butun teglere bir anda elave olunmasini isdeyirem looplardan istifade elemeliyem;

for(let i=0; i<mytag.length; i++){

    mytag[i].textContent='yasasin azerbaycan';
    mytag[i].style.backgroundColor="blue";
    mytag[i].style.textAlign='center';
    mytag[i].style.border='5px solid black'
    
}






//Query Selector 

document.querySelector('#menu').style.width='200px';
document.querySelector('#menu').style.height="200px";
document.querySelector('#menu').style.backgroundColor="orange";
console.log(document.querySelector('#menu'));


//query selector ile 1-den cox olan elementler olan zaman default olaraq birinci secir.


let ele=document.querySelector('.nav-item');


// eyer isdediyimiz elementi secmek isdesek css selector ile sece bilirik.

let el=document.querySelector('.nav-item:first-child');

let elemt=document.querySelector('.nav-item:nth-child(4)')

console.log(elemt);


//diger yolu ise developer tools hissesinden elementin selectorunu copy edib secer bilerik.

let elem=document.querySelector('#menu > ul > li:nth-child(3)');

console.log(elem);

elem.style.color="red";

elem.style.fontSize='20px';



//querySelectorAll() yontemi ile 1-den cox elementlerin eyni anda secilib deyisdirilmesini ede bilirik.

// let ilkin=document.querySelectorAll(".nav-item");
// ilkin.map((item)=>{
//     item.style.color="green"
// })

// console.log(map(item))





//dom ile yeni bir id ve class yaratma ve silme metodu.

let not=document.querySelector('#merkez');
console.log(not)

//id qaldirma metodu

not.removeAttribute('id');
console.log(not)

//id ekleme metodu, burda iki parametir goturur
not.setAttribute('id','ilkin');

//class ekleme moetodu
not.setAttribute('class','qasim')

//ve ya
not.classList.add('java');
console.log(not);

//classlari silme metodu

not.classList.remove('java');
not.classList.toggle('hiden')


window.onload=function(){
    let beforeButton=document.querySelector("#beforeButton")
    //addEventListener 2 dene parametr qebul edir.1-cisi Yeni uzerine gelen zaman ne olacaqini mueyyen edir,meselen tiklandiqi zaman funksiyamizi yerine yetir.2-ci yazilan parammetir ise funksiyadir.
    // yeni kiliklemek 1-ci parametri, clik olunn zaman bir is gorulmesi 2-ci parametir
    beforeButton.addEventListener('click',function(){
        let newNode=document.createElement('p');
        newNode.innerHTML="bu bir paragrap etiketidir";
        newNode.setAttribute('id','paragraph')


        let newarr=document.getElementsByClassName('col-lg-6');
        newarr[0].insertBefore(newNode,newarr[0].firstElementChild)

    });
}



































