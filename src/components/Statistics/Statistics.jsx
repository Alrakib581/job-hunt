
import './Statistics.css';
import StacChart from '../StacChart/StacChart';

const Statistics = () => {
    return (
        <div className=''>
            <div className='pb-5' style={{backgroundColor:'#f9f9ff'}} >
            <h4 className='text-center py-3 fw-bold text-primary'>Assignment 1 to 8 in Programming hero In chart.</h4>
          </div>
            <div className='container py-5'>
                <StacChart></StacChart>
            </div>
        </div>
    );
};

export default Statistics;