document.querySelector('.dropbtn').addEventListener('click', function() {
    const dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('show');
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1.0)';
        }, 200);
    });
});

const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        alert(`Searching for: ${query}`);
    }
});

let carouselIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function showNextItem() {
    carouselItems[carouselIndex].style.display = 'none';
    carouselIndex = (carouselIndex + 1) % carouselItems.length;
    carouselItems[carouselIndex].style.display = 'block';
}

if (carouselItems.length > 0) {
    setInterval(showNextItem, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 19.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 29.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 39.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            name: 'Product 4',
            price: 49.99,
            image: 'https://via.placeholder.com/150'
        }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.previousElementSibling.previousElementSibling.textContent;
            alert(`${productName} has been added to your cart!`);
        });
    });
});
