import '../Title/Title.css';

const Title = ( { location }) => {
  return (
    <div>
      {location === 'Destination' && 
        <h5><span>01</span>pick your destination</h5>}
      {location === 'Crew' &&
        <h5><span>03</span>meet your crew</h5>}    
      {location === 'Technology' &&
        <h5><span>03</span>Space launch 101</h5>}
    </div>
  )
};

export default Title
