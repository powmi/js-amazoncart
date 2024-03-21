// let tbl=document.createElement('tbl');
// let row1=document.createElement('tr');
// let th1=document.createElement('th');
// let th2=document.createElement('th');
// let th3=document.createElement('th');

// th1.innerText=" NAME";
// th2.innerText="AGE";
// th3.innerText="MAIL ID";
// row1.appendChild(th1);
// row1.appendChild(th2);
// row1.appendChild(th3);

// let row2=document.createElement('tr');
// let td1=document.createElement('td');
// let td2=document.createElement('td');
// let td3=document.createElement('td');

// td1.innerText="saran";
// td2.innerText="15";
// td3.innerText="sparan@.com"
// row2.appendChild(td1);
// row2.appendChild(td2);
// row2.appendChild(td3);

// tbl.append(row1);
// tbl.append(row2);

// document.body.append(tbl);
// 
let details;
const data=fetch('https://jsonplaceholder.typicode.com/todos');
data.then(response=>response.json())
.then(details=>createTable(details))

function createTable(details){

let table = document.querySelector('#table');
let thead = document.createElement('thead');

let tr = document.createElement('tr');
for(let e in details[0])
{
	let td=document.createElement('td');
	td.innerText=[e];
	tr.appendChild(td)
	console.log('td')
}
thead.append(tr);
table.append(thead);
for(i=0;i<details.length;i++){
	const tr=document.createElement('tr')
	for(let key in details[i]){
	const td=document.createElement('td')
	td.innerText=details[i][key]
	tr.appendChild(td)

	}
	let table = document.querySelector('#table');
let tbody = document.createElement('tbody');
tbody.append(tr);
table.append(tbody);
}

}

const bio=[
	{name:'Sam' ,age:25,gender:'M'},
    {name:'Ram' ,age:20,gender:'M'},
    {name:'Femi',age:28,gender:'F'}]


const table1=document.querySelector('table');
let thead=document.createElement('thead');
let tr=document.createElement('tr');


for( let key1 in bio[0]){
	let th=document.createElement('th');
	th.innerText=[key1];
	tr.appendChild(th);
}
thead.append(tr);
table1.append(thead);
for(i=0;i<bio.length;i++){
	const tr=document.createElement('tr')
	for(let key2 in bio[i]){
	const td=document.createElement('td')
	td.innerText=bio[i][key2]
	tr.appendChild(td)

	}
	let table = document.querySelector('#table');
let tbody = document.createElement('tbody');
tbody.append(tr);
table.append(tbody);
}






// for(i=0;i<details.length;i++){
// 	const tr=document.createElement('tr')
// 	for(let key in details[i]){
// 	const td=document.createElement('td')
// 	td.innerText=details[i][key]
// 	tr.appendChild(td)

// 	}
// 	let table = document.querySelector('#table');
// let tbody = document.createElement('tbody');
// tbody.append(tr);
// table.append(tbody);
// }


// 	let td = document.createElement('td');

// 	tr.appendChild(td);
// }

// for (let user of bio) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.innerText = user.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.innerText = user.age;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.innerText = user.gender;
// 	tr.appendChild(td3);
	
// 	table.append(tr)
// }
