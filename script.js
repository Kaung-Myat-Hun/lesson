
const itemList = [
    {
        itemName: "Apple",
        itemPrice: "5",
        id: 1,
        itemDetail: "This is fesh juicy apple",
        itemImage: "images/apple.jpg",
        logo: "./icons/cart.svg"
    },
    {
        itemName: "Orange",
        itemPrice: "6",
        id: 1,
        itemDetail: "This is fesh juicy orange",
        itemImage: "images/orange.jpg",
        logo: "./icons/cart.svg"
    },
    {
        itemName: "Grape",
        itemPrice: "10",
        id: 1,
        itemDetail: "This is fesh juicy grape",
        itemImage: "images/grape.png",
        logo: "./icons/cart.svg"
    },
    {
        itemName: "Banana",
        itemPrice: "3.5",
        id: 1,
        itemDetail: "This is fesh juicy banana",
        itemImage: "images/banana.webp",
        logo: "./icons/cart.svg"
    }
]

function render(){
    const cardContainer = document.getElementById('card-container-id');
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
render();