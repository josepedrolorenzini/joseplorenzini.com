 function ProfileCard() {
  return (
    <div className="flex justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white/5 backdrop-blur-lg shadow-xl rounded-tl-sm p-8 border border-white/10 text-gray-200">

        {/* Bio */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Hello, I'm <span className="font-semibold text-[#b4fb51] ">Jose Lorenzini</span>, 
          a digital nomad passionate about Web Development technologies and Crypto.  
          Viento del Sur was created in 2009 with the purpose of facilitating the use of the Internet.  
          I have maintained the policy of Open Source and Freedom since the beginning of this project.
          My intention is to continue delivering digital solutions with humility and accessibility for everyone.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          I studied Graphic Design in Chile and obtained my degree in Computer Science in Australia in 2023.  
          I am a freelancer, and it doesn't matter where I am — if there's an internet connection, I will solve your problem.
        </p>

        {/* Spanish section */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Siempre trabajamos en armonía y con plena participación del cliente, generando juntos la solución más efectiva para su negocio.  
          Te invito a ser parte de nuestra experiencia y conocimiento en las áreas de Software Engineering, Web Development y la libertad del Open Source en internet.
        </p>

        {/* Skills section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-[#b4fb51] mb-4">Technical Skills</h3>
          
          <div className="flex flex-wrap gap-2">
            {[
              "JavaScript",
              "PHP",
              "TypeScript",
              "Python",
              "Java" ,
              "Laravel",
              "React",
              "React Router",
              "InertiaJS",
              "Next.js",
              "Bash",
              "MySQL",
              "PostgreSQL",
              "Cpanel",
              "AWS",
              "SSH",
              "Git" , 
              "Google Adword",
              "Facebook ads" , 
              "Google Merchant Center",
              "Google Tag Manager"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-1 bg-white/10 rounded-full text-sm border border-white/20 hover:bg-white/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
         {/* Motto section */}
        {/* <h4 className="text-1xl font-bold text-center mt-6 text-[#b4fb51]">
          “Implementamos y administramos soluciones innovadoras que ayudan al crecimiento humano y al uso de la internet…”
        </h4> */}
         <p className="text-gray-400 text-sm m-7">
              Open to opportunities • Full Stack Development • DevOps • Cloud Solutions
            </p>
      </div>
      
    </div>
  );
}


export default function About() {
  return <>
     {/* <div>Based in Australia and Chile</div> */}
     <ProfileCard />
   {/* <div style={{color:"#b4fb51"}}>
    Specialized in PHP , Typescript , Laravel, React , React Router, InertiaJS, MySQL, PostgreSQl L, AWS , SSH , Git. 
    </div> */}
  </>;
}
