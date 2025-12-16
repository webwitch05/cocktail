import { useState } from "react"
import { allCocktails } from "../../constants"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Menu= ()=>{

    const [currentIndex, setCurrentIndex]= useState(0)
    
    useGSAP(()=>{
        gsap.fromTo("#title",{
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1
        });
    
        gsap.fromTo(".cocktail img",{
            opacity: 0,
            xPercent: -100,
        }, {
            opacity: 1,
            xPercent: 0,
            duration: 1,
            ease: "power1.inOut"
        })

        gsap.fromTo(".details h2", {
            yPercent: 100, 
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 1,
            ease: "power1.inOut"
        })

        gsap.fromTo(".details p", {
            yPercent: 100, 
            opacity: 0
        }, {
            yPercent: 0,
            opacity: 1,
            ease: "power1.inOut"
        })        
    }, [currentIndex]) //re-run the animation when currentIndex changes

    const totalCocktails= allCocktails.length;

    const goToSlide= (index)=> {
        const newIndex= ( index + totalCocktails ) % totalCocktails;
        setCurrentIndex(newIndex)
    }

    const currentCocktail= allCocktails[currentIndex];
    const prevCocktail= allCocktails[(currentIndex-1 + totalCocktails) % totalCocktails];
    const nextCocktail= allCocktails[(currentIndex+1 + totalCocktails) % totalCocktails];

    return(
        <section id="menu">
            <img src= "images/slider-left-leaf.png" id="m-left-leaf"/>
            <img src= "images/slider-right-leaf.png" id="m-right-leaf"/>

            <h2 id="menu-heading" className="sr-only">
                Cocktail Menu
            </h2>

            <nav className="cocktail-tabs">
                {allCocktails.map((cocktail, index)=>{
                    const isActive= (index===currentIndex);

                    return(
                        <button 
                            key={ cocktail.id } 
                            className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`}
                            onClick={()=> goToSlide(index)}
                        >
                            { cocktail.name }
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={()=>goToSlide(currentIndex-1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="images/right-arrow.png"/>
                    </button>

                    <button className="text-left" onClick={()=>goToSlide(currentIndex+1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="images/left-arrow.png"/>
                    </button>
                </div>

                <div className="cocktail">
                    <img src= {currentCocktail.image}/>
                </div>

                <div className="recipe">
                    <div className="info">
                        <p>Recipe for:</p> 
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2> 
                        <p>{currentCocktail.description}</p>
                    </div>                          
                </div>           
            </div>
        </section>
    )
}

export default Menu