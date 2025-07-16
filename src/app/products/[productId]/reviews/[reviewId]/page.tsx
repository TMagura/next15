import { redirect } from "next/navigation";
export default async function ProductReviews({params}:{
    params:Promise<{productId:string; reviewId: string}>;}) {
    function getRandomInt(count:number){
        return Math.floor(Math.random()*count)
    }
    const random = getRandomInt(2);
    if (random===1) {
        throw new Error("Error loading review");
    }
    const {productId, reviewId}= await params;
   if (parseInt(reviewId)>500) {
    // notFound();
    redirect("/products");
   }
    return <h1>Review {reviewId} of product {productId}</h1>;
}