import Link from "next/link"

export default function Home() {
  return (
  <>
  <h1> Good work man! </h1>
  <Link href="/blog"> Blog</Link> 
  <span></span>
  <Link href= "/products">Products </Link>
  {/* a link to use params and search params */}
  <Link href="/articles/breaking-news-123?lang=en">Read in english</Link>
  <Link href="/articles/breaking-news-123?lang=es">Read in Spanish</Link>
  <Link href="/articles/breaking-news-123?lang=fr">Read in french</Link>
  </>
  );
}