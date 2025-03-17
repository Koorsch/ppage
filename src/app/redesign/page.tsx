"use client";
import KooCard from "@/components/UI/cards/kooCard-normal";
import KooButton from "@/components/UI/kooButton";
import KooNav from "@/components/UI/kooNav";
import KooSection from "@/components/UI/kooSection";
import { useState } from "react"

export default function NewLanding() {
  const [burger, setBurger] = useState(false)
  const burgerIt = () => {
    setBurger(!burger)
  }
  return (
    <main className="">
      <header className="flex items-center justify-center pt-8 pb-4">
        <nav id="navigation" className="w-full hidden md:flex">
            <img src="koodev.png" alt="KooDev logo" title="KooDev"></img>
            <a href="#" about="Some of my stuff">CV</a>
            <a href="#" about="Some of my stuff">Projects</a>
            <a href="#" about="Some of my stuff">About</a>
        </nav>

        <nav id="mobile_navigation" className={`w-full relative ${burger ? "h-full" : "h-0"} md:hidden`}>
          <div>
            <img src="koodev.png" alt="KooDev logo" title="KooDev"></img>
          </div>
            <button onClick={burgerIt}>Burger {burger ? "Open" : "Closed"}</button>
            <h2>Menu</h2>
            {/* <div className="mobile_nav" className="absolute w-full z-50 top-0 left-0 items-center">
              <a href="#" about="Some of my stuff">CV</a>
              <a href="#" about="Some of my stuff">Projects</a>
              <a href="#" about="Some of my stuff">About</a>
            </div> */}
        </nav>
      </header>
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
    </main>
  )
}