import {useState, useEffect} from 'react';
import 'animate.css';

const Carrousel = ({width='w-screen', timer='3000', json}:any) => {
    
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedObject, setSelectedObject] = useState(json[0])
    const [loaded, setLoaded] = useState(false)
    const [text, setText] = useState(true)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setText(false)
            next()
            setTimeout(() => {
                setText(true)
            },1000)
        }, timer)
        return () => clearInterval(interval)
    })

    const next = () => {
        setLoaded(false)
        setTimeout(() => {
            const nextIndex = selectedIndex < json.length - 1 ? selectedIndex + 1 : 0;
            setSelectedObject(json[nextIndex]);
            setSelectedIndex(nextIndex)
        },250);
    }

    const animateCSS = (element:any , animation:any , prefix = 'animate__')=>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);

            node.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event:any) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, {once: true});
        });
    animateCSS('.title', 'backInLeft');
    animateCSS('.description', 'fadeInUp');

    return (
        <div className={`flex bg-black ${width} h-auto relative`}>
            <img src={selectedObject.image} alt="" className={`w-full duration-[1000ms] ${loaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setLoaded(true)} />
            <div className={`flex flex-col justify-center w-full h-full z-50 absolute text-white transition-all duration-500 pl-7 md:pl-20 gap-3 ${text ? 'opacity-100' : 'opacity-0'}`}>
                <div className='title'>
                    <span className={`text-3xl md:text-5xl font-bold`}>{selectedObject.title}</span>
                </div>
                <div className='description w-[300px] md:w-[500px]'>
                    <span className={`text-sm md:text-xl`}>{selectedObject.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Carrousel