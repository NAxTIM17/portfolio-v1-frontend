import { BriefcaseBusiness, Code, UserRoundSearch, ExternalLink, MonitorSmartphone } from "lucide-react"

function App() {
  return (
    <>
    <div className="absolute -top-150 inset-0 grayscale w-full z-[-1] flex justify-center animate-scalein">
      <img className="grayscale
      mask-[radial-gradient(circle_at_center,transparent_0%,black_10%,transparent_100%)]
      [-webkit-mask-image:radial-gradient(circle_at_center,transparent_0%,black_50%,transparent_70%)]
      mask-cover
      mask-no-repeat opacity-20 w-400 h-400" srcSet="https://framerusercontent.com/images/lyeMp4g3kXbh4joTBITbB07M5o.jpg?width=2000&height=2000&scale-down-to=512 512w, https://  framerusercontent.com/images/lyeMp4g3kXbh4joTBITbB07M5o.jpg?width=2000&height=2000&scale-down-to=1024 1024w, https://framerusercontent.com/images/lyeMp4g3kXbh4joTBITbB07M5o.jpg?width=2000&height=2000 2000w" decoding="auto" width="2000" height="2000" src="https://framerusercontent.com/images/lyeMp4g3kXbh4joTBITbB07M5o.jpg?width=1000&height=1000" alt="" />
    </div>
    
      <div className="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-black
      bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
      dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.3),rgba(255,255,255,0))]"></div>
      <h1 className="font-base-neue text-5xl pl-96 py-3">PORTFOLIO</h1>
      <nav className="flex fixed top-0 z-10 px-96 py-3 w-full justify-center">
        <div className="h-10 flex items-center gap-10 font-gabarito bg-nav-bg py-3 px-8 rounded-full border border-zinc-700/50 text-sm self-center backdrop-blur-3xl">
          <a href="" className="text-white">Experiencia</a>
          <a href="" className="text-zinc-400">Proyectos</a>
          <a href="" className="text-zinc-400">Sobre mi</a>
          <a href="" className="text-zinc-400">Contacto</a>
        </div>
      </nav>
      <div className="px-4 min-h-screen overflow-auto flex flex-col py-24 relative ">
        <section aria-description="welcome" className="py-10 md:py-36 scroll-m-20 w-full mx-auto lg:max-w-4xl md:max-w-2xl">
          <div className="max-w-xl">
            <div className="mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-gabarito border border-green-400 text-white mb-2">Open to work</span>
              <h1 className="font-gabarito text-5xl font-extrabold tracking-tight mt-5">Hola, soy Nacho <strong className="ml-5 text-3xl">🇦🇷</strong></h1>
            </div>
            <p className="text-xl mt-6">Tengo +3 años de experiencia desarrollando sistemas integrales, me preocupo por crear <strong>sistemas web de calidad</strong> y garantizar al usuario una <strong>experiencia unica</strong>.</p>
          </div>
        </section>
        <div className="mt-2">
          <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl max-h-100 h-44">
            <div className="flex gap-3 items-center">
              <BriefcaseBusiness size={30}/>
              <p className="font-gabarito text-3xl">Experiencia</p>
            </div>
            <div className="w-full h-full mt-5">
              <ol className="relative w-full h-full">
                <li className="h-full w-full font-gabarito">
                  <div className="grid grid-cols-5 grid-rows-1 before:content-[''] before:absolute before:w-0.5 before:h-full before:bg-zinc-500 before:top-0 before:bottom-0 before:left-0 h-full relative px-10 gap-10">
                    <div className="col-span-2 h-full w-full">
                      <span className="text-white/70">2023-2026</span>
                      <span className="text-white -left-2 -top-2 absolute rounded-full text-5xl w-1 h-1">•</span>
                      <h1 className="text-2xl font-bold">Programador FullStack</h1>
                      <h3 className="font-semibold">Grupo Yuhmak</h3>
                    </div>
                    <div className="col-span-3 h-full w-full text-lg pb-10">Responsable de la plataforma, componentes y utilidades para la creación y desarrollo de aplicaciones web. Mejora de un 30% en la entrega de software. Implantación de medidas de integración continua y despliegue con A/B testing en más de 15 equipos. </div>
                  </div>
                </li>
                
              </ol>
            </div>
          </section>
          <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mt-48">
            <div className="flex gap-3 items-center">
              <Code size={30}/>
              <p className="font-gabarito text-3xl">Proyectos</p>
            </div>
            <article className="grid grid-cols-2 gap-10 font-gabarito mt-5">
              <div className="w-full rounded-2xl p-1 border border-zinc-700/50">
                <img className="rounded-xl bg-cover content-stretch w-full h-full object-cover" src="857_1x_shots_so.png" alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">QRegister - User register shifts with geolocation.</h1>
                <span className="flex items-center gap-2"><MonitorSmartphone size={16} /> Mobile and Desktop</span>
                <p>Es una aplicacion web desarrollada en React y Node.js que permite registrar turnos de usuarios con geolocalización. Reduciendo el gasto en hardware y mejorando la eficiencia del proceso de registro.</p>
                  <ol className="flex gap-1">
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
          <section className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl mt-30">
            <div className="flex gap-3 items-center">
              <UserRoundSearch size={30}/>
              <p className="font-gabarito text-3xl">Sobre mi</p>
            </div>
            <article className="flex">
              <div className="max-w-xl font-gabarito">
                <p className="mt-5">Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. Mi enfoque se centra en el desarrollo de aplicaciones web modernas, utilizando tecnologías como React, Node.js y Tailwind CSS. Mi objetivo es entregar productos de alta calidad que ofrezcan una experiencia única al usuario.</p>
                <p className="mt-5">Soy un desarrollador web apasionado por crear soluciones digitales innovadoras. Mi enfoque se centra en el desarrollo de aplicaciones web modernas, utilizando tecnologías como React, Node.js y Tailwind CSS. Mi objetivo es entregar productos de alta calidad que ofrezcan una experiencia única al usuario.</p>
              </div>
              <div className="p-1 rounded-2xl border border-zinc-700/50 ml-auto rotate-3">
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
