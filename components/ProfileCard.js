export default function ProfileCard({ person }) {
  const { role = "Not specified" } = person;
  return (
    <div className="pt-7">
      <div className="container">
        <div className="flex flex-col">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/50 mb-2">
            <svg
              className="w-1/2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 21c0-1.4 0-2.1-.18-2.67 -.39-1.28-1.39-2.28-2.67-2.67 -.57-.18-1.27-.18-2.67-.18h-5c-1.4 0-2.1 0-2.67.17 -1.28.38-2.28 1.38-2.67 2.66 -.18.56-.18 1.26-.18 2.66m12.5-13.5c0 2.48-2.02 4.5-4.5 4.5 -2.49 0-4.5-2.02-4.5-4.5 0-2.49 2.01-4.5 4.5-4.5 2.48 0 4.5 2.01 4.5 4.5Z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold">{person.name}</h2>
          <h3 className="text-lg">{role}</h3>
          <div className="text-lg">{person.experince} years experience</div>
          <p> {person.isAvaliable ? "Available" : "Unavailable"} </p>
          {person.isAvaliable && <p>Available</p>}
        </div>
      </div>
    </div>
  );
}
