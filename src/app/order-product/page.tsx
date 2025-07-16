"use client"
import { useRouter } from "next/navigation";


export default function OrderProduct() {
    const router = useRouter();
    const handleClick= ()=>{console.log("Placing orders");
      router.push("/");  
    }
    return (
     <>
     <h1>Order Products</h1>
      <button onClick={handleClick}>Place order</button>
     </>
    );

}