"use client";
export default function ErrorBoundary({error}: {error:Error}){
    return <div>
        <p>Error :{error.message} </p>
    </div>;
} 

//wwe can use the error parameter which will give use the error.message