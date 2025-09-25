const apiEndPoint = 'http://localhost:3000/item';
let itemList ;

let saveItemList ;
const loading = document.querySelector("#loading");

async function apiCalled(){
    const promise = await fetch(apiEndPoint);
    const result = await promise.json();
    itemList = result;
    saveItemList = result;

    if(result){
        loading.style.display = "none";
        render();
    }
}

apiCalled();

function render(){
    const cardContainer = document.getElementById('card-container-id');
    cardContainer.innerHTML = "";
    for(let i = 0; i<itemList.length; i++){
        const cardTag = document.createElement('div');
        const divTag = document.createElement("div");
        const imageTag = document.createElement("img");
        const spanTag = document.createElement('span');
        const logoTag = document.createElement("img");
        const titleTag = document.createElement("h4");
        const detailTag = document.createElement("p");
        const priceTag = document.createElement('p');
        imageTag.src= itemList[i].itemImage;
        imageTag.alt= itemList[i].itemImage;
        imageTag.classList.add('card-image');
        cardTag.classList.add('card');
        spanTag.classList.add("add-to-cart-button");
        spanTag.addEventListener("click", ()=> {
            AddToCart(itemList[i])
        })
        logoTag.src = itemList[i].logo;
        logoTag.alt = itemList[i].logo;
        logoTag.classList.add('add-to-cart-logo');
        spanTag.appendChild(logoTag);
        titleTag.innerText = itemList[i].itemName;
        detailTag.innerText = itemList[i].itemDetail;
        priceTag.innerText = itemList[i].itemPrice;
        priceTag.classList.add('price-text');
        divTag.appendChild(titleTag);
        divTag.appendChild(detailTag);
        divTag.appendChild(priceTag);
        cardTag.appendChild(imageTag);
        cardTag.appendChild(spanTag);
        cardTag.appendChild(divTag);
        cardContainer.appendChild(cardTag);
    }
}

let cartList = [];
let duplicate = false; // check for duplicate item 

function AddToCart (item) {
    duplicate = false;
    const addedItem = {
        count: 1,
        price : item.itemPrice,
        name: item.itemName,
        img: item.itemImage,
    }
    const modified = cartList.map((cartItem) => {
        if(cartItem.name === item.itemName){
            duplicate = true;
            const modifiedItem = {
                ...cartItem,
                count : cartItem.count + 1
            }
            return modifiedItem
        }
        return cartItem
    })
    if(duplicate){
        cartList = modified;
    }else{
        cartList.push(addedItem)
    }
    cartRender();
}
const itemCount = document.getElementById("item-count");
function cartRender() {
    const total = document.getElementById('total');
    total.innerHTML = "Total : 0";
    const cart = document.getElementById("cart");
    cart.innerHTML = "";
    let totalPrice = 0;
    for(let i = 0; i < cartList.length; i++){
        totalPrice = totalPrice + (cartList[i].price * cartList[i].count)
        const mainDiv = document.createElement("div");
        const imgTag = document.createElement("img");
        const itemNameTag = document.createElement('p');
        const minusTag = document.createElement("span");
        const cartCountDiv = document.createElement('div');
        const cartControl = document.createElement("div");
        const plusTag = document.createElement("span");
        const numberTag = document.createElement("span");
        const priceTag = document.createElement("p");
        imgTag.src=cartList[i].img;
        imgTag.alt=cartList[i].img;
        imgTag.classList.add('cart-image');
        priceTag.classList.add('cart-price');
        priceTag.innerText = `Price : ${cartList[i].price * cartList[i].count}`;
        itemNameTag.innerText = cartList[i].name;
        itemNameTag.classList.add('cart-item-name');
        minusTag.innerText = "-";
        minusTag.addEventListener("click", () => {
            minusCount(i);
        })
        minusTag.classList.add('cart-btn');
        plusTag.innerText = "+";
        plusTag.addEventListener("click", () => {
            addCount(i);
        })
        plusTag.classList.add('cart-btn');
        numberTag.innerText = cartList[i].count;
        numberTag.classList.add('cart-btn');
        numberTag.classList.add('cart-count-number');
        cartControl.classList.add('cart-control');
        cartControl.appendChild(minusTag);
        cartControl.appendChild(numberTag);
        cartControl.appendChild(plusTag);
        cartCountDiv.classList.add('cart-count');
        cartCountDiv.appendChild(itemNameTag);
        cartCountDiv.appendChild(cartControl);
        mainDiv.classList.add('cart-item');
        mainDiv.appendChild(imgTag);
        mainDiv.appendChild(cartCountDiv);
        mainDiv.appendChild(priceTag);
        // final render
        cart.appendChild(mainDiv);
    }
    total.innerText = `Total : ${totalPrice}`
    itemCount.innerText = `Cart : ${cartList.length}`

}

function addCount(index) {
    cartList[index].count = cartList[index].count + 1;
    cartRender();
}

function minusCount(index){
    if(cartList[index].count > 1){
        cartList[index].count = cartList[index].count - 1;
        cartRender();
        return;
    }else{
        cartList.splice(index , 1);
        cartRender();
        return;
    }
}
let searchText = ""; // value got
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

searchInput.addEventListener("change", (e) => {
    console.log(e.target.value);
    searchText = e.target.value;
});

searchBtn.addEventListener("click", () =>{
    itemList = saveItemList;
    if(searchText === ""){
        render();
    }else{
        const filtered = itemList.filter((item) => item.itemName.toLowerCase().includes(searchText));
        itemList = filtered;
    }
    render();
});
