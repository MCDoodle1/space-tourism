import '../Info/Info.css';

const Info = ( {data, index} ) => {

  return (
    <div>
        <hr />
        <div className="info-wrapper">
            <div className="distance-container">
                <div className="distance-title">avg. distance</div>
                <div className="distance">{data.destinations[index].distance}</div>
            </div>
            <div className="travel-container">
                <div className="travel-title">avg. travel time</div>
                <div className="travel">{data.destinations[index].travel}</div>
            </div>
        </div>
    </div>
  )
};

export default Info