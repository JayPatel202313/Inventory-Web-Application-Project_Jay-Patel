
const title = document.getElementById("title");
const author = document.getElementById("author");
const imageUrl = document.getElementById("imageUrl");
const inStock = document.getElementById("inStock");
const price = document.getElementById("price");

const btn1 = document.getElementById("btn1");

const out1 = document.getElementById("sectionOne");
const form = document.getElementById("form");

const list = document.sectionOne;
const message = document.getElementById("mess");

var count = 0;



function bookAdd() {


    if (count == 0) {
        title.value = 'Animal Farm';
        author.value = "George Orwell";
        imageUrl.value = "https://media.newyorker.com/photos/59ee325f1685003c9c28c4ad/4:3/w_4992,h_3744,c_limit/Heller-Kirkus-Reviews.jpg";
        inStock.value = "In Stock";
        price.value = '30';
        eleAdd();
        count++;

    } else if (count == 1) {
        title.value = 'Dracula';
        author.value = "Bram Stoker";
        imageUrl.value = "https://media.newyorker.com/photos/59ee325f1685003c9c28c4ad/4:3/w_4992,h_3744,c_limit/Heller-Kirkus-Reviews.jpg";
        inStock.value = "Out Of Stock";
        price.value = '100';
        eleAdd();
        count++;

    }
    else if (count == 2) {
        title.value = 'Hamlet';
        author.value = "William Shakesspeare";
        imageUrl.value = "https://media.newyorker.com/photos/59ee325f1685003c9c28c4ad/4:3/w_4992,h_3744,c_limit/Heller-Kirkus-Reviews.jpg";
        inStock.value = "Out Of Stock";
        price.value = '45';
        eleAdd();
        count++;
        title.value = '';
        author.value = '';
        price.value = '';
        imageUrl = '';

    } else if (count > 2) {

        if (title.value.length == 0 || author.value.length == 0 || price.value.length == 0 || imageUrl.value.length == 0) {
            const m2 = document.createElement("p");
            m2.classList.add("redMsg");

            m2.innerHTML = `Missing Value`;
            message.append(m2);
            setTimeout(() => {
                m2.textContent = "";
            }, 3000);
            return;
        } else {
            eleAdd();
            title.value = '';
            author.value = '';
            price.value = '';
            imageUrl = '';
        }
    }


}

function eleAdd() {
    const div = document.createElement("div");
    div.classList.add("sectionOne");

    div.innerHTML = `<img
    src="${imageUrl.value}"
    width="80" height="120"
    >`;
    out1.append(div);

    const smallp = document.createElement("p");
    smallp.classList.add("firstRow");
    smallp.innerHTML = title.value;
    div.appendChild(smallp);

    const smallpTwo = document.createElement("p");
    smallpTwo.classList.add("secondRow");
    smallpTwo.innerHTML = author.value;
    div.appendChild(smallpTwo);


    const stock = document.createElement("i");
    stock.classList.add("thirdRow");
    if (inStock.value == 'In Stock')
        stock.innerHTML = `<img
    src="/images/InStock.png"
    width="40" height="16"
    >`;
    else
        stock.innerHTML = `<img
    src="/images/OutOfStock.png"
    width="40" height="16"
    >`;
    div.appendChild(stock);



    const priceVal = document.createElement("p");
    priceVal.classList.add("fourRow");
    priceVal.innerHTML = "$" + price.value;
    div.appendChild(priceVal);



    let del = document.createElement("button");
    del.classList.add("Icon");

    del.innerHTML = `"<i class="fa-solid fa-trash-can"></i>"`;
    div.appendChild(del);

    del.addEventListener('click', (event) => {
        out1.removeChild(div);
    });




    const m1 = document.createElement("p");
    m1.innerHTML = `Book Added SucessFully`;
    message.append(m1);
    setTimeout(() => {
        m1.textContent = "";
    }, 3000);


    out1.append(div);

}



btn1.addEventListener('click', bookAdd);



window.onload = function () {

    imageUrl.setAttribute("value", "https://media.newyorker.com/photos/59ee325f1685003c9c28c4ad/4:3/w_4992,h_3744,c_limit/Heller-Kirkus-Reviews.jpg")
    bookAdd();
    bookAdd();
    bookAdd();
};


