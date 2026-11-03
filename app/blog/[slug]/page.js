import { notFound } from "next/navigation";

// export default async function BlogDetail({ params }) {
//   const { slug } = await params;

//   return (
//     <div className="container">
//       <h1>Blog Detail</h1>
//       <p>Slug: {slug}</p>
//     </div>
//   );
// }

const post = [
  { id: 1, slug: "hello-world", title: "Hello World", author: "Tor" },
  { id: 2, slug: "nextjs-101", title: "Learning Next.js 101", author: "Jane" },
  { id: 3, slug: "react-basics", title: "React Basics", author: "Alex" },
];

export default async function BlogDetail({ params }) {
  const { slug } = await params;

  const result = post.find((item) => item.slug === slug);

  if (!result) {
    notFound();
  }

  return (
    <div className="container">
      <h1>{result.title}</h1>
      <p>Author: {result.author}</p>
    </div>
  );
}
