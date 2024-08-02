async function products_fun(){
    try{
        const data = await fetch('http://fakestoreapi.com/products')
        const jsonData= await data.json()
        console.log(jsonData)
    }
    catch(err){
        console.log(err);
    }
}  products_fun()
