import React from 'react';
import { CgSpinnerTwo } from "react-icons/cg";


const Spinner = () => {
    return (
        <span className='py-3 animate-spin text-center flex items-center justify-center'><CgSpinnerTwo /></span>
    )
}

export default Spinner