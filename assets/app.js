class SeasonStore {

    static url = "https://618e6a1850e24d0017ce1294.mockapi.io/api/v1/products"
    
    static async products() {
        
        const response = await fetch(this.url,{})
    
        const data = await response.json()

        console.log(data)
    }
}