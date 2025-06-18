import React from 'react'
import { IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const mobilemenu = () => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <NavLink to="/Dashboard" className="flex items-center gap-2 text-sm">Dashboard</NavLink>
                <IoMenu fontSize={25} />
            </div>

            <div>
                {/* <NavLink to="/Dashboard" className="flex items-center gap-2 text-sm">Dashboard</NavLink> */}
                {/* <NavLink to="/Profile" className="flex items-center gap-2 text-sm"> <FaUserAlt fontSize={16} />Profile</NavLink>
                <NavLink to="/Signup" className="flex items-center gap-2 text-sm"> <FaUserCircle fontSize={16} />Sign Up</NavLink>
                <NavLink to="/Signin" className="flex items-center gap-2 text-sm"> <MdKey fontSize={16} />Sign In</NavLink> */}
            </div>
        </div>
    )
}

export default mobilemenu
