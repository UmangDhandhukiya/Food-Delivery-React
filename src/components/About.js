import AboutCardClass from "./AboutCardClass";
import AboutCard from "./AboutCard";

const About = () => {
    return(
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-lg">Our Team</h1>
            <AboutCardClass name={"umangclass"} location={"Mumabai"}/>
        </div>
    )
}

export default About;