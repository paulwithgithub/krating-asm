// import HeroSlider, {Slider} from "hero-slider/dist/HeroSlider";
import HeroSlider, {Slide, Nav} from "hero-slider";
import './index.css'

const bogliasco = 'https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682675907/senior-man-sitting-wheelchair-doctor_ltaxze.jpg'
const countryClare = 'https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682675907/joyce-huis-66QEF_ZmzKY-unsplash_s0zf2t.jpg'
const craterRock = "https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682873788/pexels-tristan-le-1642883_jx98pv.jpg";
const giauPass = "https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682588050/health-g24dffb646_1280_uxjnap.jpg";


const CarouselComp = () => {
    return (
        <div className="fitness-container">
        <HeroSlider className="hero"
            slidingAnimation= "left_to_right"
            orientation= "horizontal"
            initialSlide= {1}
            onBeforeChange= {(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
            onChange={nextSlide => console.log("onChange", nextSlide)}
            onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
            style= {{
                backgroundColor: "rgba(0, 0, 0, 0.33)"
            }}
            
            settings= {{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                sholudDisplayButtons: true,
                autoplayDuration: 5000,
                height: '50vh'
            }}
        >
            <Slide className="img"
                background={{
                    backgroundImageSrc: bogliasco,
                    backgroundAttachment: 'fixed'
                }}
            />
            <Slide 
                background={{
                    backgroundImageSrc: countryClare,
                    backgroundAttachment: 'fixed'
                }}
            />
             <Slide 
                background={{
                    backgroundImageSrc: craterRock,
                    backgroundAttachment: 'fixed'
                }}
            />
            <Slide 
                background={{
                    backgroundImageSrc: giauPass,
                    backgroundAttachment: 'fixed'
                }}
            />

            <Nav />
        </HeroSlider>
        </div>
    )
}

export default CarouselComp