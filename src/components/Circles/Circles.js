import './Circles.css';

const Circles = ( {index, setIndex} ) => {
  return (
     <ul className='circles-menu'>
        <li 
          className={index === 0 ? 'active' : ''}
          onClick={() => {setIndex(0)}}>1 
        </li>                    
        <li 
          className={index === 1 ? 'active' : ''}
          onClick={() => {setIndex(1)}}>2
        </li>
        <li 
          className={index === 2 ? 'active' : ''}
          onClick={() => {setIndex(2)}}>3
        </li>
      </ul>  
  )
};

export default Circles;