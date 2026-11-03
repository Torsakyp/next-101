export default function ProductPage({ params }) {
  const { slug } = awaitparams;

  return (
    <div>
      <h1>Products</h1>
      <p> Slug: {slug.join(" | ")}</p>
    </div>
  );
}
