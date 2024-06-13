import { Helmet } from "react-helmet-async";
import Aboutbanner from "../aboutroutes/Aboutbanner";
import Exp_skill from "../aboutroutes/Exp_skill";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Portfolio || About</title>
            </Helmet>
            <div>
                <Aboutbanner></Aboutbanner>
            </div>
            <div>
                <Exp_skill></Exp_skill>
            </div>
        </div>
    );
};

export default About;