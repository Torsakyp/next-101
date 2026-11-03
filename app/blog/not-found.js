import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <h1>404 - Post Not Found</h1>
      <p>Sorry, this blog post does not exist.</p>

      <Link href="/blog">Back to Blog</Link>
    </div>
  );
}
