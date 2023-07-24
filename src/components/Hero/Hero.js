import '../Hero/Hero.css';

const Hero = ( { data, location, index } ) => {
  return (
    <div>
        {location === 'Crew' && 
          <h5 className='role'>{data.crew[index].role}</h5>} {/* only show on Crew page*/}
        {location === 'Technology' && index !==3 &&
          <div className='technology-subtitle'>the terminology...</div>} {/* only show on Technology page*/}
        
        {location === 'Destination' && 
          <h3 className='destination-name'>{data.destinations[index].name}</h3>}
        {location === 'Crew' &&
          <h3 className='name'>{data.crew[index].name}</h3>}
        {location === 'Technology' && index !==3 &&
          <h3 className='name'>{data.technology[index].name}</h3>}
        
        {location === 'Destination' && 
          <p className='hero-text'>{data.destinations[index].description}</p>}
        {location === 'Crew' &&
          <p className='hero-text'>{data.crew[index].bio}</p>}
        {location === 'Technology' && index !==3 &&
          <p className='hero-text'>{data.technology[index].description}</p>}
        
        
        
    </div>
  )
};

export default Hero