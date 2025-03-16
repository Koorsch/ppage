import KooCard from "@/components/UI/cards/kooCard-normal";
import KooButton from "@/components/UI/kooButton";
import KooNav from "@/components/UI/kooNav";
import KooSection from "@/components/UI/kooSection";

export default function LandingPage() {

  return (
    <main className="min-h-screen w-auto">
      <KooSection id="hero" color="bg-slate-400" >
          <h2 className="text-5xl text-slate-800 font-bold pb-2">Hi, I{`'`}m Andreas</h2>
          <h3 className="text-xl pb-1 text-slate-800 text-wrap">Just finished my Multimediadesigner degree.</h3>
          <h4 className="italic text-lg self-end pt-2 text-right text-slate-800">I enjoy coding.</h4>
            <div className="flex flex-wrap justify-start w-full gap-4 pt-6 sm:p-8">
              <KooButton href="#cv">CV</KooButton>
              <KooButton href="#projects">Projects</KooButton>
              <KooButton href="#contact">Contact</KooButton>
            <div className="inline-flex gap-x-6 pl-4 pr-2 items-center">
                <a href="https://www.linkedin.com/in/andreas-ekvall-hofvander-216130151/" target="_blank" className="text-slate-800 hover:invert-25">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-linkedin " viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                </a>
                <a href="https://github.com/Koorsch" target="_blank" className="text-slate-800 hover:invert-25">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
              </div>
            </div>
      </KooSection>
      <KooNav />
      <KooSection id="cv" color="bg-slate-600">
          <KooButton moreStyling="w-fit" href="CV_ENG.pdf">View CV</KooButton>
        <div className="grid grid-flow-row md:grid-flow-col gap-x-12 gap-y-6 pb-4">
          <h2 className="text-3xl pt-4 pb-2 leading-none order-1 md:order-0">
            Andreas <strong>&quot;Koo&quot;</strong> Ekvall-Hofvander<br/>
            <span className="text-xl font-bold">Multimedia designer | Frontend developer</span><br/>
            <span className="text-lg leading-relaxed">Passionate and curious</span>
          </h2>
          <div className="flex justify-end sm:justify-start">
          </div>
        </div>
        <p className="text-sm">Avid coffeedrinker and Copenhagen-based Swede.</p><br/>
        <p className="text-sm">When I&apos;m not tinkering with code I spend my time gaming, enjoying food and traveling (when time permits!).</p>
        <h3 className="text-3xl font-bold pt-8 w-full border-b-2">Experience</h3>
        <div className="flex flex-col pl-2 pt-4 max-w-[90%]">
          <div className="flex flex-wrap justify-between items-center pb-4">
            <div className="flex flex-col flex-wrap align-middle">
              <h4 className="text-3xl">Frontend developer <span className="text-lg italic">Internship</span></h4>
              <h5 className="text-xl font-bold pb-4">Franklin Technologies Aps (fintech) <span className="text-lg font-normal italic">Aug 2024 - Nov 2024</span></h5>
            </div>
            <img src="franklin.png" className="p-1" alt="" />
          </div>
          <p className="pb-4">Starting my last semester I managed to snag an internship at the up-and-coming fintech company Franklin where I filled a role as a frontend intern.</p>
          <p className="">My day-to-day workflow would consist of checking or handling issues through Linear while keeping a dialogue with the rest of the team on Slack.</p>
        </div>
        <h3 className="text-3xl font-bold pt-8 w-full border-b-2">Education</h3>
        <div className="flex flex-col pl-2 pt-4 max-w-[90%]">
          <div className="flex flex-wrap justify-between items-center pb-4">
            <div className="flex flex-col flex-wrap align-middle">
              <h4 className="text-3xl">Multimediadesigner <span className="text-lg italic">Front-end development elective</span></h4>
              <h5 className="text-xl pb-4">Københavns Erhversakademi (KEA) <span className="text-lg italic">Jan 2023 - Mar 2025</span></h5>
            </div>
            <img src="kea.png" className="bg-amber-600 p-1" alt="" />
          </div>
          <p className="pb-4">This is where I learnt all the basic skills necessary for a future in tech, also what started my current journey!</p>
          <p className="">An all-round education where I was introduced to many concepts and techniques to springboard me into the world of tech.</p>
        </div>


      </KooSection>
      <KooSection id="projects" color="bg-slate-700" type="col">
        <KooCard />
        <KooCard />
        <KooCard />
        <KooCard />
        <KooCard />
      </KooSection>
      <KooSection id="contact" color="bg-slate-800">
      <h3 className="text-3xl font-bold pt-8 w-full border-b-2">Contact</h3>

      <form className="flex flex-col pointer-events-none cursor-not-allowed opacity-25">
        <label htmlFor="formName" className="pt-2">Your name:</label>
        <input id="formName" type="text" className="bg-white rounded capitalize text-black p-2" required></input>
        <label htmlFor="formEmail" className="pt-2">Email (for replies):</label>
        <input id="formEmail" type="text" className="bg-white rounded capitalize text-black p-2" required></input>
        <label htmlFor="formContactText" className="pt-2">Your message: </label>
        <textarea id="formContactText" className="bg-white rounded capitalize text-black p-2 resize-none" required rows={15} cols={33}/>
        <KooButton type="button" moreStyling="w-fit mt-2 cursor-not-allowed" disabled>Send</KooButton>
      </form>
      </KooSection>
      <footer className="flex bg-slate-950 justify-center items-center p-2 flex-wrap h-fit w-full">
        <h5 className="p-2">All rights reserved KooDev 2025</h5>
        <a href="https://github.com/Koorsch" target="_blank" className="cursor-pointer">
            <img className="size-8" src="KooSwedishChef.svg" alt="Chefhat"/>
        </a>
      </footer>
    </main>
  );
}
