



function listing(title,brand,id,desp,price,rating,thumbnail){
    //div-number1
    const container=document.getElementById("Container");

    let number=document.createElement("div");
   number.setAttribute("class","number1")
   number.setAttribute("id",id)

let img=document.createElement("img");
img.setAttribute("src",thumbnail);
// img.setAttribute("id",id)
number.appendChild(img);
    const number1Content=document.createElement("div");
    number1Content.setAttribute("class","number-content");
    const h2=document.createElement("h2");
    h2.innerText=title;
    number1Content.appendChild(h2);
    number.appendChild(number1Content);
    const h3=document.createElement("h3");
    h3.innerText=brand;
    number1Content.appendChild(h3);
    number.appendChild(number1Content);
    const rate=document.createElement("h2");
    rate.innerText=price;
    number1Content.appendChild(h2);
    number.appendChild(number1Content);
    const p=document.createElement("p");
    p.innerText=desp;
    number1Content.appendChild(p);
    number.appendChild(number1Content);
    const ratings=document.createElement("p");
    ratings.innerText=rating;
    number1Content.appendChild(ratings);
    number.appendChild(number1Content);

   let checked=Math.floor(rating)
   let nonChecked=5-checked;
for(let j=0;j<checked;j++){
    const span=document.createElement("span");
    span.setAttribute("class","fa fa-star checked")
    number1Content.appendChild(span);
   number.appendChild(number1Content)
}
for(let j=0;j<nonChecked;j++){
    const span=document.createElement("span");
    span.setAttribute("class","fa fa-star ")
    number1Content.appendChild(span);
    number.appendChild(number1Content)
}


    container.appendChild(number);
}



   
 


async function data(){
        try{
        
  const details= await fetch("https://dummyjson.com/products")
  const res= await details.json();
  
  const cart=res.products;
  console.log(cart);
  for(let i=0;i<cart.length;i++)
  {

    const title =cart[i].title
    const brand=cart[i].brand
    const id=cart[i].id
    const desp=cart[i].description
    const price=cart[i].price
     const rating=cart[i].rating
     const thumbnail=cart[i].thumbnail
     
     listing(title,brand,id,desp,price,rating,thumbnail);
    


  }
  const iddiv=document.querySelectorAll("#Container > *")
let len =iddiv.length;
console.log(iddiv.length);
for(let j=0;j<len;j++){
    iddiv[j].addEventListener("click",function(){
        window.location.href="products.html"
    })
}

}

    

catch (err){
 return err;
   }
}
data();
