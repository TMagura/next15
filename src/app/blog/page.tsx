export default async function Blog() {
    await new Promise(resolve =>{
        setTimeout(()=>{resolve("intentional delay")},2000);
    })
    return <h1> This is my blog page page Mr Trymore</h1>;
}