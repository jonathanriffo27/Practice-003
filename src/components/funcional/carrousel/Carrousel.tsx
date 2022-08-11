import {useState, useEffect} from 'react';

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

    return (
        <div className={`flex bg-black ${width} h-auto relative`}>
            <img src={selectedObject.image} alt="" className={`w-full duration-[1000ms] ${loaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setLoaded(true)} />
            <div className={`flex flex-col justify-center w-full h-full z-50 absolute text-white duration-500 pl-7 md:pl-20 gap-3 ${text ? 'opacity-100' : 'opacity-0'}`}>
                <span className={`text-3xl md:text-5xl font-bold`}>{selectedObject.title}</span>
                <span className={`text-sm md:text-xl w-[300px] md:w-[500px]`}>{selectedObject.description}</span>
            </div>
        </div>
    )
}

export default Carrousel