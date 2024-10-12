import { Helmet } from "react-helmet-async";
import Aboutbanner from "../aboutroutes/Aboutbanner";
import Exp_skill from "../aboutroutes/Exp_skill";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio || About</title>
            </Helmet>
            <div className="max-w-7xl mx-auto">
                <Aboutbanner></Aboutbanner>
            </div>
            <div className="max-w-7xl mx-auto">
                <Exp_skill></Exp_skill>
            </div>
        </div>
    );
};

export default About;