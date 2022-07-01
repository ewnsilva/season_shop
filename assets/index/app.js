export class SeasonStore {

    static url = "https://618e6a1850e24d0017ce1294.mockapi.io/api/v1/products"

    static listProducts = []
    static cartProducts = JSON.parse(localStorage.getItem("cartItens")) || []

    static async products() {

        const response = await fetch(this.url, {})

        const data = await response.json()

        this.listProducts = data

        return data
    }

    static async createHomePage() {
        const products = await this.products()

        this.showProducts(products)

        if (this.cartProducts) {
            this.createCartProducts(this.cartProducts)
        }
    }

    static showProducts(products) {

        products.forEach(({ name, image, price, description, department, product, id }) => {
            const listDiv = document.querySelector(".list__product")

            const nameProduct = document.createElement("span")
            nameProduct.innerText = name
            nameProduct.classList.add("container__name")

            const imageProduct = document.createElement("img")
            imageProduct.src = image
            imageProduct.classList.add("container__image")

            const priceProduct = document.createElement("span")
            priceProduct.innerText = `R$ ${price}`
            priceProduct.classList.add("container__price")

            const descriptionProduct = document.createElement("span")
            descriptionProduct.innerText = description
            descriptionProduct.classList.add("container__description")

            const departmentProduct = document.createElement("span")
            departmentProduct.innerText = `Departamento: ${department}`
            descriptionProduct.classList.add("container__department")

            const productProduct = document.createElement("span")
            productProduct.innerText = `Tipo de Produto: ${product}`
            productProduct.classList.add("container__product")

            const productDiv = document.createElement("div")
            productDiv.classList.add("product__container")

            const buyButton = document.createElement("button")
            buyButton.innerText = "Adicionar ao Carrinho"
            buyButton.classList.add("container__button")
            buyButton.id = id

            productDiv.append(nameProduct, imageProduct, priceProduct, descriptionProduct, departmentProduct, productProduct, buyButton)

            listDiv.appendChild(productDiv)

        })

        const buyButtons = document.querySelectorAll(".container__button")
        buyButtons.forEach((button) => {
            button.addEventListener("click", (e) => this.addProductToCart(e.target.id))
        })
    }

    static addProductToCart(id) {

        const product = this.listProducts.find((product) => product.id === id)
        console.log(this.cartProducts)

        if (!this.cartProducts.includes(product)) {
            this.cartProducts.push(product)

            localStorage.setItem("cartItens", JSON.stringify(this.cartProducts))
            this.createCartProducts([product])
        }



    }

    static createCartProducts(product) {

        product.forEach(({ name, id }) => {

            const cartProducts = document.querySelector(".upperBox__cart")

            const boughtProducts = document.createElement("li")
            boughtProducts.classList.add("cart__Product")
            boughtProducts.id = id

            const productName = document.createElement("span")
            productName.innerText = name
            productName.classList.add("product__name")

            const removeButton = document.createElement("button")
            removeButton.innerText = "X"
            removeButton.classList.add("remove__button")
            removeButton.addEventListener("click", (e) => this.removeCartProducts(e.target))

            boughtProducts.appendChild(productName)
            boughtProducts.appendChild(removeButton)

            cartProducts.appendChild(boughtProducts)
        })

    }

    static removeCartProducts(product) {
        const parent = product.parentElement
        const id = parent.id

        parent.remove()

        const allCartProducts = this.cartProducts.filter((product) => product.id !== id)

        this.cartProducts = allCartProducts
        localStorage.setItem("cartItens", JSON.stringify(this.cartProducts))
    }

}

SeasonStore.createHomePage()
