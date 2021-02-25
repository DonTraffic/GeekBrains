const products = [
    {id: 1, title: 'Notebook', price: 20000},
    {id: 2, title: 'Mouse', price: 1500},
    {id: 3, title: 'Keyboard', price: 5000},
    {id: 4, title: 'Gamepad', price: 4500},
    {id: 5, title: 'Notebook', price: 20000},
    {id: 6, title: 'Mouse', price: 1500},
    {id: 7, title: 'Keyboard', price: 5000},
    {id: 8, title: 'Gamepad', price: 4500},
    {id: 9, title: 'Notebook', price: 20000},
    {id: 10, title: 'Mouse', price: 1500},
    {id: 11, title: 'Keyboard', price: 5000},
    {id: 12, title: 'Gamepad', price: 4500},
    {id: 13, title: 'Notebook', price: 20000},
    {id: 14, title: 'Mouse', price: 1500},
    {id: 15, title: 'Keyboard', price: 5000},
    {id: 16, title: 'Gamepad', price: 4500},
    {id: 17, title: 'Notebook', price: 20000},
    {id: 18, title: 'Mouse', price: 1500},
    {id: 19, title: 'Keyboard', price: 5000},
    {id: 20, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
}

// Вариант вывода через map без запятых

const renderProducts = (list) => {
    const productList = list.map((item) => {
        return renderProduct(item.title, item.price);
    });

    console.log(productList);
    document.querySelector('.products').innerHTML = productList.join('');
}

renderProducts(products);


// Мой вариант через forEach, не работает*
// Выводиться без запятых, в одну строчку и код короче чем через map.
// Как нужны было это сделать?
// const renderProducts = (list) => {
//     var content = [];
//     list.forEach(el => {
//         content.push(`${el.title} \n ${el.price}`);
//     });
//     document.querySelector('.products').innerHTML = content.join('');
// }
