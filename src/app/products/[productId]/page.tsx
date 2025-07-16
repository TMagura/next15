export default async function ProductDetails ({params,}:{params:Promise<{productId:string}>;}){
    const productId = (await params).productId;
    return <span>this is product {productId} it shows us the life</span>;
}