import {useState, useEffect} from 'react';
import image1 from '../../../img/image1.jpeg'
import image2 from '../../../img/image2.jpeg'
import image3 from '../../../img/image3.jpeg'

const Carrousel = ({width='w-screen'}:any) => {
    const json = [
        {
            image: image1,
            title: 'Titulo1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, expedita architecto repellendus neque ex consectetur tempora quas ratione vel odio.'
        },
        {
            image: image2,
            title: 'Titulo2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, expedita architecto repellendus neque ex consectetur tempora quas ratione vel odio.'
        },
        {
            image: image3,
            title: 'Titulo3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, expedita architecto repellendus neque ex consectetur tempora quas ratione vel odio.'
        }
    ]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedObject, setSelectedImage] = useState(json[0])
    const [loaded, setLoaded] = useState(false)
    const [text, setText] = useState(true)
    
    useEffect(() => {
        const interval = setInterval(() => {
            setText(false)
            next()
            setTimeout(() => {
                setText(true)
            },1000)
        }, 3000)
        return () => clearInterval(interval)
    })

    const next = () => {
        setLoaded(false)
        setTimeout(() => {
            const condition = selectedIndex < json.length - 1;
            const nextIndex = condition ? selectedIndex + 1 : 0;
            setSelectedImage(json[nextIndex]);
            setSelectedIndex(nextIndex)
        },300);
    }

    return (
        <div>
            <div className={`bg-black ${width} h-auto relative`}>
                <img src={selectedObject.image} alt="" className={`w-full h-auto duration-[1000ms] ${loaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setLoaded(true)} />
                <span className={`text-white text-5xl font-bold z-50 absolute top-[200px] left-[50px] duration-500 ${text ? 'opacity-100' : 'opacity-0'}`}>{selectedObject.title}</span>
                <span className={`text-white text-xl w-[500px] z-50 absolute top-[260px] left-[50px] duration-500 ${text ? 'opacity-100' : 'opacity-0'}`}>{selectedObject.description}</span>
            </div>
        </div>
    )
}

export default Carrousel