import { SeasonStore } from "../index/app.js"
class Cart {

    static showProducts() {
        const products = SeasonStore.cartProducts
        
        products.forEach(({ image, name, price, id}) => {

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

            const qtdContainer = document.createElement("div")
            qtdContainer.classList.add("extraInfo__container")

            const qtdSpan = document.createElement("span")
            qtdSpan.innerText = "Quantidade"
            qtdSpan.classList.add("extraInfo__title")

            const qtdInput = document.createElement("input")
            qtdInput.type = "number"
            qtdInput.value = 1
            qtdInput.classList.add("extraInfo__input")

            const receiveContainer = document.createElement("div")
            receiveContainer.classList.add("extraInfo__container")

            const receiveTitle = document.createElement("span")
            receiveTitle.innerText = "Entrega"
            receiveTitle.classList.add("extraInfo__title")

            const receiveMessage = document.createElement("span")
            receiveMessage.innerText = "Receba ainda hoje"
            receiveMessage.classList.add("extraInfo__receive")

            const priceContainer = document.createElement("div")
            priceContainer.classList.add("extraInfo__container")

            const priceTitle = document.createElement("span")
            priceTitle.innerText = "PreÃ§o"
            priceTitle.classList.add("extraInfo__title")

            const valueContainer = document.createElement("div")
            valueContainer.classList.add("extraInfo__value")

            const coin = document.createElement("span")
            coin.innerText = "R$ "
            coin.classList.add("extraInfo__coin")

            const priceMessage = document.createElement("span")
            priceMessage.innerText = (price)
            priceMessage.classList.add("extraInfo__price")

            const priceRemoveButton = document.createElement("button")
            priceRemoveButton.innerText = "Remover"
            priceRemoveButton.classList.add("extraInfo__button")
            priceRemoveButton.addEventListener("click", (e) => {
                SeasonStore.removeCartProducts(e.target.parentElement.parentElement)
                this.updateTotalMoney()
            })

            extraInfos.append(qtdContainer, receiveContainer, priceContainer)

            qtdContainer.append(qtdSpan, qtdInput)
            receiveContainer.append(receiveTitle, receiveMessage)
            priceContainer.append(priceTitle,valueContainer,priceRemoveButton)
            valueContainer.append(coin, priceMessage)

            boughtProduct.append(productImage, productName, extraInfos)

            cartProducts.appendChild(boughtProduct)

            qtdInput.addEventListener("change", (e) => {
                const totalPrice = Number(e.target.value) * Number(price)
                priceMessage.innerText = totalPrice.toFixed(2)
                this.updateTotalMoney()
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
        totalMoneySpan.innerText = `R$ ${totalMoney.toFixed(2)}`
        totalMoneySpan.classList.add("price__money")
        
        totalMoneyContainer.appendChild(totalMoneySpan)
    }

    static buyItensAlert() {
        const button = document.createElement('button')
        button.classList.add("buy__itens")
        button.innerText = "Confirmar Compra"
        
        const buttonContainer = document.querySelector('.mainCart__price')
        buttonContainer.appendChild(button)

        const popup = document.querySelector(".popup__wrapper")
        const confirm = document.querySelector('.popup__confirm')

        button.addEventListener('click', () => {
            popup.style.display = 'block'
        } )

        confirm.addEventListener('click', () => {
            popup.style.display = 'none'
        } )
    }

}

Cart.showProducts()
Cart.buyItensAlert()
