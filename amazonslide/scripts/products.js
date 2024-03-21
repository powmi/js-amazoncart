const ProContainer=document.getElementById("ProContainer");
//leftpanel
let panel=document.createElement("div");
panel.setAttribute("class","panel");


let leftpanel=document.createElement("div");
leftpanel.setAttribute("class","leftimg");


// //center

let centerpanel=document.createElement("div");
centerpanel.setAttribute("class","bigimg");
let centerImage=document.createElement("img");





// let rightpanel=document.createElement("div");
// rightpanel.setAttribute("class","rightimg");
alert("hi")
 async function productFetch(){
    const carts=await fetch("https://dummyjson.com/products/1")
    const data=await carts.json()
     const id=data.id;
     const title=data.title
     const desp=data.description
     const price=data.price
     const rating=data.rating
     const stock=data.stock
     const brand=data.brand
     const category=data.category
     const thumbnail=data.thumbnail
     const images=data.images


     display(title,brand,id,desp,price,rating,thumbnail,images,stock,category)

}
productFetch();


function display(title,brand,id,desp,price,rating,thumbnail,images,stock,category){

    for(let i=0;i<images.length;i++)
    {
let imgdiv=document.createElement("div")

console.log(images[i])
let img=document.createElement("img");
 img.setAttribute("src",images[i]);
 imgdiv.appendChild(img);
 leftpanel.appendChild(imgdiv);
 panel.appendChild(leftpanel);

    }
    let h1=document.createElement("h1")
    h1.innerText="i am center image"
    centerpanel.appendChild(h1)
centerImage.setAttribute("src",thumbnail)
centerpanel.appendChild(centerImage);
panel.appendChild(centerpanel)
    ProContainer.appendChild(panel)
}