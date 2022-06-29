class SeasonStore {

    static url = "https://618e6a1850e24d0017ce1294.mockapi.io/api/v1/products"
    
    static listProducts = {}
    
    static async products() {
        
        const response = await fetch(this.url,{})
    
        const data = await response.json()
    
        this.listProducts = data
    
        for(let i = 0; i < this.listProducts.length; i++){
            this.showProducts(this.listProducts[i])
            
        }
    } 
    
    static showProducts(productItem){
        const listDiv = document.querySelector(".list__product")
       
        const name = document.createElement("span")
        name.innerText = productItem.name
        name.classList.add("container__name")
    
        const image = document.createElement("img")
        image.src = productItem.image
        image.classList.add("container__image")
    
        const price = document.createElement("span")
        price.innerText = productItem.price
        price.classList.add("container__price")
    
        const description = document.createElement("span")
        description.innerText = productItem.description
        description.classList.add("container__description")
    
        const departament = document.createElement("span")
        departament.innerText = `Departamento: ${productItem.department}`

        const product = document.createElement("span")
        product.innerText = `Tipo de produto: ${productItem.product}`
        product.classList.add("container__product")
    
        const productDiv = document.createElement("div")
        productDiv.classList.add("product__container")
    
        const buyButton = document.createElement("button")
        buyButton.innerText = "Adicionar ao Carrinho"
        buyButton.classList.add("container__button")

        productDiv.append(name, image, price, description, departament, product, buyButton)
        listDiv.appendChild(productDiv)
    }
    
    }
    
    SeasonStore.products()
        