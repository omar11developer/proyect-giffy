import { Fragment } from 'react';
import '../styles/spinner.css'
const Spinner = () => {
    return (
        <Fragment>
        <div className='Spinner'>
        <div className='contenedor-spinner'>
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>

        </div>
        </Fragment>
    )
};

export default Spinner;
