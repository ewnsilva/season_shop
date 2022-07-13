import { SeasonStore } from "../index/app.js"
class Cart {

    static showProducts() {
        const products = SeasonStore.cartProducts
        
        products.forEach(({ image, name, price, id, quantity }) => {

            const cartProducts = document.querySelector(".cart__products")

            const boughtProduct = document.createElement("li")
            boughtProduct.classList.add("products__product")
            boughtProduct.id = id

            const productImage = document.createElement("img")
            productImage.src = image
            productImage.classList.add("product__img")
            
            const productName = document.createElement("strong")
            productName.innerText = name
            productName.classList.add("product__name")

            const extraInfos = document.createElement("div")
            extraInfos.classList.add("product__extraInfo")

            const QtdContainer = document.createElement("div")
            QtdContainer.classList.add("extraInfo__container")

            const QtdSpan = document.createElement("span")
            QtdSpan.innerText = "Quantidade"
            QtdSpan.classList.add("extraInfo__title")

            const QtdInput = document.createElement("input")
            QtdInput.type = "number"
            QtdInput.value = 1
            QtdInput.classList.add("extraInfo__input")

            products.quantity = QtdInput 

            const ReceiveContainer = document.createElement("div")
            ReceiveContainer.classList.add("extraInfo__container")

            const ReceiveTitle = document.createElement("span")
            ReceiveTitle.innerText = "Entrega"
            ReceiveTitle.classList.add("extraInfo__title")

            const ReceiveMessage = document.createElement("span")
            ReceiveMessage.innerText = "Receba ainda hoje"
            ReceiveMessage.classList.add("extraInfo__receive")

            const PriceContainer = document.createElement("div")
            PriceContainer.classList.add("extraInfo__container")

            const PriceTitle = document.createElement("span")
            PriceTitle.innerText = "Preço"
            PriceTitle.classList.add("extraInfo__title")

            const PriceMessage = document.createElement("span")
            PriceMessage.innerText = `R$ ${price}`
            PriceMessage.classList.add("extraInfo__price")

            const PriceRemoveButton = document.createElement("button")
            PriceRemoveButton.innerText = "Remover"
            PriceRemoveButton.classList.add("extraInfo__button")
            PriceRemoveButton.addEventListener("click", (e) => this.removeCartProducts(e.target))

            extraInfos.append(QtdContainer, ReceiveContainer, PriceContainer)

            QtdContainer.append(QtdSpan, QtdInput)
            ReceiveContainer.append(ReceiveTitle, ReceiveMessage)
            PriceContainer.append(PriceTitle, PriceMessage, PriceRemoveButton)

            boughtProduct.append(productImage, productName, extraInfos)

            cartProducts.appendChild(boughtProduct)

            QtdInput.addEventListener("change", (e) => {
                const actualPrice = Number(e.target.value) * Number(price)
                PriceMessage.innerText = `R$ ${actualPrice.toFixed(2)}`
            })

        })
        this.totalMoney(products)
    }

    static totalMoney(products) {

        let totalMoney = 0

        for(let i = 0; i < products.length; i++){
            totalMoney += Number(products[i].price)
        }

        const totalMoneyContainer = document.querySelector(".mainCart__price")

        const totalMoneySpan = document.createElement("span")
        totalMoneySpan.innerText = `R$ ${totalMoney}.00`
        totalMoneySpan.classList.add("price__money")
        
        totalMoneyContainer.appendChild(totalMoneySpan)
    }
}

Cart.showProducts()
