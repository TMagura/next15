import Link  from "next/link";
export default function Products() {
    const productId1 = 120;
    return (<>
    <h1>Product List</h1>
    <h5><Link href="/products/1">Product 1</Link></h5>
    <h5><Link href="/products/2">Product 2</Link></h5>
    <h5><Link href={`/products/${productId1}`}>Product {productId1}</Link></h5>
    <Link href="/">Go back home</Link>
    </>
);
}