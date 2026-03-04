import { BriefcaseBusiness, Code, UserRoundSearch, ExternalLink, MonitorSmartphone, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const SECTIONS = [
  {
    href : "/#experience",
    name : "Experiencia",
    id : "experience"
  },
  {
    href : "/#proyects",
    name : "Proyectos",
    id : "proyects"
  },
  {
    href : "/#aboutme",
    name : "Sobre mi",
    id : "aboutme"
  },
  {
    href : "",
    name : "Contacto",
    id : "contact"
  }
];

const STACK = [
  {
    tech: "React",
    img: "React.svg",
    color: "#61DAFB"
  },
  {
    tech: "Node.js",
    img: "Node.js.svg",
    color: "#66A52A"
  },
  {
    tech: "Tailwind CSS",
    img: "Tailwind CSS.svg",
    color: "#38BDF8"
  },
  {
    tech: "MySQL",
    img: "MySQL.svg",
    color: "#00618A"
  },
  {
    tech: "MongoDB",
    img: "MongoDB.svg",
    color: "#45A538"
  },
  {
    tech: "Git",
    img: "Git.svg",
    color: "#F34F29"
  },
  {
    tech: "Figma",
    img: "Figma.svg",
    color: "#F24E1E"
  },
  {
    tech: "Css",
    img: "CSS3.svg",
    color: "#33A9DC"
  },
  {
    tech: "Html",
    img: "HTML5.svg",
    color: "#F16529"
  },
  {
    tech: "Javascript",
    img: "JavaScript.svg",
    color: "#F0DB4F"
  },
  {
    tech: "Kotlin",
    img: "Kotlin.svg",
    color: "#C711E1"
  },
  {
    tech: "Php",
    img: "PHP.svg",
    color: "#777BB3"
  },
  {
    tech: "Docker",
    img: "Docker.svg",
    color: "#019BC6"
  },
  {
    tech: "Blender",
    img : "Blender.svg",
    color: "#E87500"
  }

]

function App() {

    const [activeSection, setActiveSection] = useState('experience');

    useEffect(() => {
      const sectionElements = SECTIONS.map((section) => document.getElementById(section.id));

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("entry target id: ", entry.target.id)
            setActiveSection(entry.target.id);
          }
        });
        }, {
        threshold: 1,
      });

      sectionElements.forEach((section) => {
        if(section) observer.observe(section);
      });

      return () => {
        sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
        setActiveSection('experience');
      });
      };

    }, [])

    console.log("active section: ", activeSection)

    return (
    <>
    <div className="absolute md:-top-150 -top-120 inset-0 grayscale w-full z-[-1] flex justify-center animate-scalein">
      <img className="grayscale
      mask-[radial-gradient(circle_at_center,transparent_0%,black_10%,transparent_100%)]
      [-webkit-mask-image:radial-gradient(circle_at_center,transparent_0%,black_50%,transparent_70%)]
      mask-cover
      mask-no-repeat opacity-20 md:w-400 md:h-400 w-300 h-300 object-cover" srcSet="https://framerusercontent.com/images/lyeMp4g3kXbh4joTBITbB07M5o.jpg?width=2000&height=2000&scale-down-to=512 512w, https://  framerusercontent.com/images/lyeMp4g3kXbh4joTBITbB07M5o.jpg?width=2000&height=2000&scale-down-to=1024 1024w, https://framerusercontent.com/images/lyeMp4g3kXbh4joTBITbB07M5o.jpg?width=2000&height=2000 2000w" decoding="auto" width="2000" height="2000" src="https://framerusercontent.com/images/lyeMp4g3kXbh4joTBITbB07M5o.jpg?width=1000&height=1000" alt="" />
    </div>
    
      <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-black
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="font-base-neue py-3 mx-auto md:mt-32 mt-20 md:text-9xl text-8xl relative flex justify-center items-center">
        <h1 >PORTFOLIO</h1>
        <span className="bg-primary w-56 h-56 rounded-full -top-10 blur-2xl -z-1 absolute"></span>
      </div>

      <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
        <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
          <div className="h-10 flex items-center gap-10 font-gabarito bg-nav-bg py-3 px-8 rounded-full border border-zinc-700/50 md:text-sm self-center backdrop-blur-3xl text-xs">
            {
              SECTIONS.map((section, index) => (
                <a style={{
                  color: activeSection === section.id && 'white'
                }} href={section.href} aria-label={section.name} key={index} className="text-zinc-400 hover:text-white">{section.name}</a>
              ))
            }
          </div>
        </nav>
      </header>

      <div className="px-4 min-h-screen overflow-hidden flex flex-col relative">

        <section aria-description="welcome" className="py-10 md:py-36 scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-2xl">
          <div className="max-w-xl">
            <div className="mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-gabarito border border-green-400 text-white mb-2">Open to work</span>
              <div className="font-gabarito flex gap-5 mt-10">
                <h1 className="font-gabarito text-5xl font-extrabold tracking-tight">Hola, soy Nacho</h1>
                <div className="flex gap-2 mt-3">
                  <button className="flex gap-1 px-3 py-1 border border-zinc-700 rounded-3xl items-center bg-black text-sm h-8">
                    <Linkedin size={15}/>
                    LinkedIn
                  </button>
                  <button className="flex gap-1 px-3 py-1 border border-zinc-700 rounded-3xl items-center bg-black text-sm h-8">
                    <Mail size={15}/>
                    Let's work
                  </button>
                </div>
              </div>
            </div>
            <p className="text-xl mt-6">Tengo +3 años de experiencia desarrollando sistemas integrales, me preocupo por crear <strong>sistemas web de calidad</strong> y garantizar al usuario una <strong>experiencia unica</strong>.</p>
          </div>

            <ol className="flex gap-2 flex-wrap mt-10 font-gabarito">
              {
                STACK.map((tech, index) => (
                    <li key={index} className="flex">
                      <span style={{
                        color: tech.color,
                        "--brand-color" : tech.color
                      }} className={`flex gap-1 text-sm bg-(--brand-color)/20 backdrop-blur-[2px] rounded-full px-3 py-1 border border-(--brand-color)/10`}>
                        <img className="w-4" src={tech.img} alt={tech.tech} />
                        {tech.tech}
                      </span>
                    </li>
                ))
              }
            </ol>
        </section>

        <div className="mt-15">

          <section id="experience" aria-description="experience" data-section="experience" className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl min-h-44 ">
            <div className="flex gap-3 items-center">
              <BriefcaseBusiness size={30}/>
              <p className="font-gabarito text-3xl">Experiencia</p>
            </div>
            <div className="w-full h-full mt-5">
              <ol className="relative w-full h-full">

                <li className="h-full w-full font-gabarito">
                  <div className="grid md:grid-cols-5 md:gap-10 md:space-x-4] grid-rows-1 before:content-[''] before:absolute before:w-0.5 before:h-full before:bg-zinc-500 before:top-0 before:bottom-0 before:left-0 h-full relative px-10 gap-10">
                    <div className="md:col-span-2 h-full w-full">
                      <span className="text-white/70">2023-2026</span>
                      <span className="text-white -left-2 -top-2 absolute rounded-full text-5xl w-1 h-1">•</span>
                      <h1 className="text-2xl font-bold">Programador FullStack</h1>
                      <h3 className="font-semibold">Grupo Yuhmak</h3>
                    </div>
                    <div className="md:col-span-3 h-full w-full text-lg pb-10">Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos. </div>
                  </div>
                </li>
                
                
              </ol>
            </div>
          </section>
          <section id="proyects" aria-description="proyects" data-section="proyects"  className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mt-32">
            <div className="flex gap-3 items-center">
              <Code size={30}/>
              <p className="font-gabarito text-3xl">Proyectos & Trabajos</p>
            </div>

            <article className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 font-gabarito mt-5">
              <div className="w-full rounded-2xl p-1 border border-zinc-700/50">
                <img className="rounded-xl bg-cover content-stretch w-full h-full object-cover" src="857_1x_shots_so.png" alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">QRegister - User register shifts with geolocation.</h1>
                <span className="flex items-center gap-2"><MonitorSmartphone size={16} /> Mobile and Desktop</span>
                <p>Es una aplicacion web desarrollada en React y Node.js que permite registrar turnos de usuarios con geolocalización. Reduciendo el gasto en hardware y mejorando la eficiencia del proceso de registro.</p>
                  <ol className="flex gap-1 flex-wrap">
                    <li>
                      <span className="flex gap-1 text-[#61DAFB] text-sm bg-[#61DAFB]/20 rounded-full px-3 py-1">
                        <img className="w-4" src="React.svg" alt="React Logo" />
                        React
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-1 text-[#66A52A] text-sm bg-[#66A52A]/20 rounded-full px-3 py-1">
                        <img className="w-4" src="Node.js.svg" alt="Node.js Logo" />
                        Nodejs
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-1 text-[#38BDF8] text-sm bg-[#38BDF8]/20 rounded-full px-3 py-1">
                        <img className="w-4" src="Tailwind CSS.svg" alt="Tailwind CSS Logo" />
                        Tailwind css
                      </span>
                    </li>
                    <li>
                      <span className="flex gap-1 text-[#00618A] text-sm bg-[#00618A]/30 rounded-full px-3 py-1">
                        <img className="w-4" src="MySQL.svg" alt="MySQL Logo" />
                        MySQL
                      </span>
                    </li>
                  </ol>
                <footer className="mt-auto ml-auto gap-3 flex">
                  <a className="border border-zinc-700/50  rounded-2xl p-3 flex items-center gap-2" href="https://svgl.vercel.app/"><ExternalLink size={16} />Visitar sitio</a>
                </footer>
              </div>
            </article>

          </section>
          <section id="aboutme" aria-description="aboutme" data-section="aboutme" className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mt-32">
            <div className="flex gap-3 items-center">
              <UserRoundSearch size={30}/>
              <p className="font-gabarito text-3xl">Sobre mi</p>
            </div>
            <article className="flex flex-col-reverse mt-10 justify-center items-center md:flex-row gap-5">
              <div className="max-w-xl font-gabarito">
                <p className="mt-5">Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. Mi enfoque se centra en el desarrollo de aplicaciones web modernas, utilizando tecnologías como React, Node.js y Tailwind CSS. Mi objetivo es entregar productos de alta calidad que ofrezcan una experiencia única al usuario.</p>
                <p className="mt-5">Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. Mi enfoque se centra en el desarrollo de aplicaciones web modernas, utilizando tecnologías como React, Node.js y Tailwind CSS. Mi objetivo es entregar productos de alta calidad que ofrezcan una experiencia única al usuario.</p>
              </div>
              <div className="p-1 rounded-2xl border border-zinc-700 w-64 rotate-3">
                <img className="h-64 rounded-xl" src="profilePicture.JPG" alt="" />
              </div>
            </article>
          </section>
        </div>
      </div>
      <footer>
        <p className="text-center text-sm text-zinc-400 py-10">© 2024 Ignacio Cuba Timo. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
