function App() {
  return (
    <div className="flex items-center justify-between bg-[#111828] min-h-screen px-10">
      <div className="w-1/2 text-left space-y-4">
        <h1 className="text-xl font-semibold text-yellow-400">
          Hello, Welcome
        </h1>
        <p className="text-4xl font-bold text-blue-300">Name: Ashish Chikane</p>
        <p className="text-xl text-green-300">Job role: Software Engineer</p>

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-pink-400">Description:</h2>
          <p className="text-white">
            A Software Engineer is responsible for designing, developing, and
            maintaining software applications. They work closely with teams to
            create solutions, write efficient code, and ensure software runs
            smoothly and meets user requirements.
          </p>
          <p className="text-gray-300">
            Key skills include problem-solving, coding in various programming
            languages, and collaborating with teams to deliver robust software
            products.
          </p>
        </div>
      </div>

      <div className="w-1/2 flex justify-center">
        <img
          src="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg"
          alt="Profile"
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}

export default App;
