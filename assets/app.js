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
        departament.innerText = productItem.departament
        departament.classList.add("container__departament")
        
        const product = document.createElement("span")
        product.innerText = productItem.product
        product.classList.add("container__product")
    
        const productDiv = document.createElement("div")
        productDiv.classList.add("product__container")
    
        productDiv.append(name, image, price, description, departament, product)
        listDiv.appendChild(productDiv)
    }
    
    }
    
    SeasonStore.products()
        