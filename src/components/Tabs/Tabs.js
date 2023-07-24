import '../Tabs/Tabs.css';

const Tabs = ( {data, index, setIndex} ) => {
  
  return (
    <ul className="tabs-menu">      
            <li 
              className={index === 0 ? 'active' : ''}
              onClick={() => {setIndex(0)}}>{data.destinations[0].name} 
            </li>                    
            <li 
              className={index === 1 ? 'active' : ''}
              onClick={() => {setIndex(1)}}>{data.destinations[1].name}
            </li>
            <li 
              className={index === 2 ? 'active' : ''}
              onClick={() => {setIndex(2)}}>{data.destinations[2].name}
            </li>
            <li 
              className={index === 3 ? 'active' : ''}
              onClick={() => {setIndex(3)}}>{data.destinations[3].name}
            </li>       
        </ul>  
  )
};

export default Tabs
