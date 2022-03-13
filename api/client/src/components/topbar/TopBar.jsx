import './topbar.css'

import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { publicFile } from '../../shared/baseUrl';
import ImageHeader from '../../images/undraw_profile_pic_ic5t.png'

export default function TopBar() {
    const {user, dispatch} = useContext(Context);

    const handleLogout = () =>{
        dispatch({type:"LOGOUT"});
    }

    return (
        <div className="top">
          
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" className="link"> HOME </Link>
                    </li>
                    <li className="topListItem">
                        <Link to="/posts" className="link"> POSTS </Link>
                    </li>

                    <li className="topListItem">
                        <Link to="/write" className="link"> WRITE </Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <Link to="/settings" className="link">
                            <img 
                            className="topImg"
                            src={ImageHeader} 
                            alt="" 
                            />
                        </Link>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem"><Link to="/login" className="link"> Virtual Platform </Link></li>
                            
                        </ul>
                    )
                }
            </div>
        </div>
    )
}
