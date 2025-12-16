import { cocktailLists, mockTailLists } from "../../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Cocktails= ()=>{

    useGSAP(()=> {
        const parallexTimeLine= gsap.timeline({
            scrollTrigger:{
                trigger: "#cocktails",
                start: "top 30%",
                bottom: "bottom 80%",
                scrub: true
            }
        })

        parallexTimeLine
        .from("#c-left-leaf", {
            x: -100, y: 100
        })
        .from("#c-right-leaf", {
            x: 100, y: 100
        })
    })

    return(
        <section id= "cocktails" className= "noisy">
            <img src= "images/cocktail-left-leaf.png" id= "c-left-leaf" alt= "left-leaf"/>
            <img src= "images/cocktail-right-leaf.png" id= "c-right-leaf" alt= "right-leaf"/>

            <div className= "list">
                <div className= "popular">
                    <h2>Most popular cocktails:</h2>
                    <ul>
                        {cocktailLists.map((cocktail)=> (
                            <li>
                                <div className="md:me-28">
                                    <h3>{ cocktail.name }</h3>
                                    <p>{ cocktail.country } | { cocktail.detail }</p>
                                </div>
                                <span>- {cocktail.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className= "loved">
                    <h2>Most loved mocktails:</h2>
                    <ul>
                        {mockTailLists.map((mocktail)=> (
                            <li>
                                <div className="md:me-28">
                                    <h3>{ mocktail.name }</h3>
                                    <p>{ mocktail.country } | { mocktail.detail }</p>
                                </div>
                                <span>- {mocktail.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>                
            </div>
        </section>
    )
}

export default Cocktails