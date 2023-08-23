const productList=document.getElementById('productList')

fetch('https://fakestoreapi.com/products')

.then((Response)=>{
    return Response.json()
})

.then(data=>{
    
    // const product1=data[0]
    // console.log(product1)

    for(let i=0;i<data.length;i++){

          // create div

    const div=document.createElement('div')
    div.classList.add("card")
    
    
    // create  img

    const img=document.createElement('img')
    img.src=data[i].image
    img.classList.add("card-img-top")
    console.log(img)

    div.appendChild(img)

    // create h3

    const h3=document.createElement('h3')
    h3.classList.add("card-title")
    h3.innerHTML=data[i].title
    console.log(h3)

    div.appendChild(h3)

    // create para

    const p=document.createElement('p')
    p.classList.add("card-text")
    p.innerHTML=data[i].description
    console.log(p)

    div.appendChild(p)

    // create span

    const span=document.createElement('span')
    span.innerHTML="₹" + data[i].price

    div.appendChild(span)

    console.log(div)

    productList.append(div)


    }

    

  

})


.catch(error=>{
    console.log(error)
})