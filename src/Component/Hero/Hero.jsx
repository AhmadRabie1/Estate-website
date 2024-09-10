import './Hero.css'

const Hero =  () => {
    
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                <div className="hero-left">
                    Left section
                </div>

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero