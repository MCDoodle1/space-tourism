import './Bullets.css';

const Bullets = ( {index, setIndex }) => {
  return (
     <ul className='bullets-menu'>
        <li 
          className={index === 0 ? 'active' : ''}
          onClick={() => {setIndex(0)}}> 
        </li>                    
        <li 
          className={index === 1 ? 'active' : ''}
          onClick={() => {setIndex(1)}}>
        </li>
        <li 
          className={index === 2 ? 'active' : ''}
          onClick={() => {setIndex(2)}}>
        </li>
        <li 
          className={index === 3 ? 'active' : ''}
          onClick={() => {setIndex(3)}}>
        </li>
      </ul>  
  )
};

export default Bullets;