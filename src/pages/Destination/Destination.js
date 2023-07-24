import './Destination.css';
import Title from '../../components/Title/Title';
import Tabs from '../../components/Tabs/Tabs';
import Hero from '../../components/Hero/Hero';
import Info from '../../components/Info/Info';
import PicMoon from '../../assets/destination/image-moon.png';
import PicMars from '../../assets/destination/image-mars.png';
import PicEuropa from '../../assets/destination/image-europa.png';
import PicTitan from '../../assets/destination/image-titan.png';

const Destination = ( {data, location, pageIndex, setPageIndex, index, setIndex} ) => {
  
  return (
    <div className='destination-wrapper'>    
      <div className="title">
        <Title 
          location={location}
        />
      </div>
      <img src={
        index === 0 ? PicMoon : 
        index === 1 ? PicMars : 
        index === 2 ? PicEuropa : 
        index === 3 ? PicTitan : 
        null
        }
        alt="Stellar body" className='picture'/>
      <div className="destination-content">
        <Tabs
          data={data}
          index={index}
          setIndex={setIndex}
        />
        <Hero 
          data={data}
          location={location}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
          index={index}
          setIndex={setIndex} />
        <Info 
          data={data}
          index={index} />
      </div>    
    </div>
  )
};

export default Destination

