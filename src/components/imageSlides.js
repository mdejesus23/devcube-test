import productData from "../Data/productData";

let productElements = "";

productData.forEach((prod) => {
  productElements += `
        <li class="card">
            <img class="card__image" src=${prod.image} alt=${prod.alt}/>
            <div class="card__content">
                <h4>${prod.name}</h4>
                <p>${prod.description}</p>
            </div>
            <div class="card__content-controls">
                <div class="card__content-qty">
                    <div class="card__content-pack">
                        <p>Pack of 6</p>
                        <img src="/images/downarrow.png" alt="down arrow icon"/>
                    </div>
                    <div class="card__content-btns">
                        <img src="/images/minus.png" alt="minus icon"/>
                        <span>5</span>
                        <img src="/images/plus.png" alt="plus icon"/>
                    </div>
                </div>
                <div class="card__content-price">$${prod.price}</div>
            </div>
            <button class="card__content-addcart">
                <img src="/images/Star 1.png" alt="plus icon"/>
                <span>Add To Cart</span>
            </button>
         </li>
    `;
});

export default productElements;
