import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap"

const About= ()=>{

    useGSAP(()=>{
        const titleSplit= new SplitText("#title", { type: "words" })

        const scrollTimeLine= gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            }
        })

        scrollTimeLine
        .from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.02
        })

        .from(".top-grid div, .bottom-grid div", {
            opacity: 0,
            duration: 1,
            ease: "power1.inOut",
            stagger: 0.04,
        }, "-=0.5")
    })

    return(
        <section id= "about">
            <div className= "mb-16 md:px-0 px-5">
                <div className= "content mb-16">
                    <div className= "md:col-span-8">
                        <p className= "badge">Best Cocktails</p>
                        <h2 id="title">
                            Where every details matters - from muddle to garnish
                        </h2>
                    </div>

                    <div className= "sub-content">
                        <p>Every cocktail we serve is a reflection of our obsession with detail- from the first muddle to the final garnish. 
                            That care is what turns a simple drink into something truly memorable.
                        </p>

                        <div>
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                </div>

                <div className= "top-grid">
                    <div className= "md:col-span-3">
                        <div className= "noisy">
                            <img src= "images/abt1.png"/>
                        </div>
                    </div>
                    <div className= "md:col-span-6">
                        <div className= "noisy">
                            <img src= "images/abt2.png"/>
                        </div>
                    </div>
                    <div className= "md:col-span-3">
                        <div className= "noisy">
                            <img src= "images/abt5.png"/>
                        </div>
                    </div>                                                
                </div>  

                <div className= "bottom-grid">
                    <div className= "md:col-span-8">
                        <div className= "noisy">
                            <img src= "images/abt3.png"/>
                        </div>
                    </div>
                    <div className= "md:col-span-4">
                        <div className= "noisy">
                            <img src= "images/abt4.png"/>
                        </div>
                    </div>                                         
                </div>              
            </div>
        </section>
    )
}

export default About