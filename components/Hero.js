export default function Hero({ name, position, experience }) {
  return (
    <div className="my-7">
      <div className="container">
        <h1 className="font-bold text-2xl mb-3">{name}</h1>
        <h2 className="font-medium text-xl mb-6">{position}</h2>
        <p className="text-lg">Experience: {experience} Year</p>
        <a
          href="#!"
          className="text-black bg-white flex items-center gap-2 rounded w-fit px-4 py-2"
        >
          View My Work →
        </a>
      </div>
    </div>
  );
}
