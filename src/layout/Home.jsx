import Banner from "../homeroutes/Banner";
import Contact from "../homeroutes/Contact";
import Resume from "../homeroutes/Resume";
import Skills from "../homeroutes/Skills";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Resume></Resume>
            </div>
            <div>
                <Skills></Skills>
            </div>
            <div>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;