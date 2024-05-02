import React, { useRef, useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState({});
  const skills = [
    { name: 'HTML5', percentage: 82, image: 'https://i.ibb.co/8bdp74t/images-removebg-preview.png' },
    { name: 'CSS3', percentage: 75, image: 'https://i.ibb.co/0DMtnzJ/download-removebg-preview.png' },
    { name: 'JAVASCRIPT', percentage: 62, image: 'https://i.ibb.co/S336S14/download-removebg-preview-2.png' },
    { name: 'REACT JS', percentage: 85, image: 'https://i.ibb.co/pPzy45b/download-removebg-preview-1.png' },
    { name: 'NODE JS', percentage: 60, image: 'https://i.ibb.co/2FB9PXg/unnamed-removebg-preview.png' },
    { name: 'MONGODB', percentage: 70, image: 'https://i.ibb.co/CByrD24/68747470733a2f2f7777772e7475746f7269616c73746561636865722e636f6d2f436f6e74656e742f696d616765732f686f.png' },
    { name: 'EXPRESS JS', percentage: 62, image: 'https://i.ibb.co/2tKnbbD/bg-f8f8f8-flat-750x-075-f-pad-750x1000-f8f8f8-u2-removebg-preview.png' },
    { name: 'TAILWIND CSS', percentage: 90, image: 'https://i.ibb.co/CQkXK4s/tailwind-css-icon-1024x615-fdeis5r1-removebg-preview.png' },
    { name: 'FIREBASE', percentage: 78, image: 'https://i.ibb.co/BV5Qh2N/channels4-profile-removebg-preview.png' },
  ];
  const descriptions = [
    "Hyper text markup language",
    "Cascading Style Sheets for styling web pages",
    "Powerful Programming language",
    "JavaScript library for building user interfaces",
    "JavaScript runtime environment code",
    "NoSQL database program-JSON",
    "Web application framework for Node.js",
    "Utility-first CSS framework",
    "Cloud based service platform"
  ];
  const progressRefs = useRef(Array(skills.length).fill(null));

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observers = progressRefs.current.map((ref, index) => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prevState) => ({ ...prevState, [index]: true }));
            observers[index].unobserve(entry.target);
          }
        });
      }, options);
    });

    progressRefs.current.forEach((ref, index) => {
      if (ref) {
        observers[index].observe(ref);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="pt-20 pb-20">
      <div>
        <h1 className="text-4xl text-emerald-600 font-semibold">SKILLS</h1>
        <p className="pt-3 text-lg text-black">The skills are the tools, and the mark of my work what can I do with my knowledge. <br /> The right set of tools (skills) will help you to be more creative and strong.</p>
        <div className='flex justify-center pt-16'>
          <div className='grid grid-cols-3 gap-6'>
            {skills.map((skill, index) => (
              <div key={index} ref={(ref) => (progressRefs.current[index] = ref)}>
                <div className='flex items-center gap-3 bg-gradient-to-br from-white to-emerald-100 rounded-lg shadow-md p-4 lg:h-36'>
                  <img className='w-20' src={skill.image} alt={skill.name} />
                  <div>
                    <h1 className='text-xl font-semibold text-emerald-600'>{skill.name}</h1>
                    <p className='text-base font-medium'>{descriptions[index]}</p>
                  </div>
                  <div className='w-40'>
                    <CircularProgressbar
                      value={isVisible[index] ? skill.percentage : 0}
                      text={`${isVisible[index] ? skill.percentage : 0}%`}
                      styles={buildStyles({
                        pathTransitionDuration: isVisible[index] ? 1.5 : 0,
                        textColor: isVisible[index] ? '#059669' : '#000',
                        pathColor: isVisible[index] ? '#059669' : '#ccc',
                        trailColor: '#f3f3f3',
                        textSize: '24px',
                      })}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
