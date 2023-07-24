import './Technology.css';
import Title from '../../components/Title/Title';
import Circles from '../../components/Circles/Circles';
import Hero from '../../components/Hero/Hero';
import PictureLandscapeLaunch from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import PicturePortraitLaunch from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import PictureLandscapeCapsule from '../../assets/technology/image-space-capsule-landscape.jpg';
import PicturePortraitCapsule from '../../assets/technology/image-space-capsule-portrait.jpg';
import PictureLandscapeSpaceport from '../../assets/technology/image-spaceport-landscape.jpg';
import PicturePortraitSpaceport from '../../assets/technology/image-spaceport-portrait.jpg';


const Technology = ( {data, location, index, setIndex} ) => {
  return (
    <div className='technology-wrapper'>    
      <div className="title">
        <Title 
          location={location}
        />
      </div>
      <img src={
        index === 0 ? PictureLandscapeLaunch : 
        index === 1 ? PictureLandscapeCapsule : 
        index === 2 ? PictureLandscapeSpaceport : 
        null
        }     
        alt="space technology" 
        className='technology-picture-landscape'
      />
      <img src={
        index === 0 ? PicturePortraitLaunch : 
        index === 1 ? PicturePortraitCapsule : 
        index === 2 ? PicturePortraitSpaceport : 
        null
        }      
        alt="space technology" 
        className='technology-picture-portrait'
      />
      <Circles
        index={index}
        setIndex={setIndex} 
      />
      <div className="technology-content">
        <Hero 
          data={data}
          location={location}
          index={index}
          setIndex={setIndex} 
        /> 
      </div>     
    </div>
  )
};

export default Technology
