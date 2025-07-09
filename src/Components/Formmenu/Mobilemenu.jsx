import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Mobilemenu = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <NavLink to="/Dashboard" className="flex items-center gap-2 text-sm">Dashboard</NavLink>
                <IoMenu fontSize={25} />
            </div>
        </div>
    )
}

export default Mobilemenu
