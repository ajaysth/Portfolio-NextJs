export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h1>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/3">
            <p className="text-lg text-gray-700 mb-6">
              Hello! I'm a passionate frontend developer with experience in building
              modern web applications using React and Next.js. I enjoy creating user-friendly 
              interfaces and solving complex problems with clean, efficient code.
            </p>
            
            <p className="text-lg text-gray-700 mb-8">
              With a strong foundation in computer science and a keen eye for design,
              I strive to create applications that are both functional and beautiful.
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or hiking in the mountains.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'Node.js'].map((skill) => (
                <div key={skill} className="bg-white p-3 rounded-lg shadow-sm text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              Your Photo
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}