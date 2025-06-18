export default async function getAllProduct () {
    const result = await fetch("https://dummyjson.com/products")
    return result.json()
}