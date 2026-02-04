// create element


const para = document.createElement("p");

para.textContent = "This is a new paragraph added by JavaScript.";
console.log(para);

// append element
document.getElementById("content").
appendChild(para);


document.querySelector("#content").appendChild(para);



//  remove element
document.querySelector("#content p").remove();



const image =document.createElement("img")
image.setAttribute("src","https://sp.yimg.com/ib/th/id/OIP.cj6D2AUxR0niPuWGtKpPzAHaJ4?pid=Api&w=148&h=148&c=7&dpr=2&rs=1");

image.setAttribute("alt","gooogle image");


const gallery = document.getElementById("gallery");
gallery.appendChild(image);