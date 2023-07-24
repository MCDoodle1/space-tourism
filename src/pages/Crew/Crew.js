import './Crew.css';
import Title from '../../components/Title/Title';
import Bullets from '../../components/Bullets/Bullets';
import Hero from '../../components/Hero/Hero';
import PicDouglas from '../../assets/crew/image-douglas-hurley.webp';
import PicMark from '../../assets/crew/image-mark-shuttleworth.webp';
import PicVictor from '../../assets/crew/image-victor-glover.webp';
import PicAnousheh from '../../assets/crew/image-anousheh-ansari.webp';

const Crew = ( {data, location, index, setIndex} ) => {
  return (
    <div className='crew-wrapper'>    
      <div className="title">
        <Title 
          location={location}
        />
      </div>
      <img src={
        index === 0 ? PicDouglas : 
        index === 1 ? PicMark : 
        index === 2 ? PicVictor : 
        index === 3 ? PicAnousheh : 
        null
        } alt="crew member" className='crew-picture'/>
      <hr className='crew-line'/>
      <Bullets
        setIndex={setIndex}
        index={index}
        />
      <div className="crew-content">
        <Hero 
          data={data}
          location={location}
          index={index}
          
         /> 
      </div>     
    </div>
  )
};

export default Crew

