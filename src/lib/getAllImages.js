export default async function getAllImages () {
    const result = await fetch("https://jsonplaceholder.typicode.com/photos")
    return result.json()
}