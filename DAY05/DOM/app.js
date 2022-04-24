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