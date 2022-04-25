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

//getElementsByclassName()

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

















