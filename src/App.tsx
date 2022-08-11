import Carrousel from "./components/funcional/carrousel"
import image1 from './img/image1.jpeg'
import image2 from './img/image2.jpeg'
import image3 from './img/image3.jpeg'

function App() {
  const json = [
    {
        image: image1,
        title: 'Titulo 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, expedita architecto repellendus neque ex consectetur tempora quas ratione vel odio.'
    },
    {
        image: image2,
        title: 'Titulo 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, expedita architecto repellendus neque ex consectetur tempora quas ratione vel odio.'
    },
    {
        image: image3,
        title: 'Titulo 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, expedita architecto repellendus neque ex consectetur tempora quas ratione vel odio.'
    }
]
  return (
    <div className="App">
      <Carrousel width='w-screen' timer='3000' json={json} />
    </div>
  )
}

export default App
