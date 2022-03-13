import './header.css'
import ImageHeader from '../../images/undraw_voice_control_ofo1.png'


export default function Header() {
    return (
        <>

        <div className="header container">
            <div className="row justify-content-between">
                    <div className="Title col-md-5">
                        Virtual <br />
                        Placement Cells <br/>
                    <a href='/login'><button className="btn btn-outline-danger">Login</button></a>
                    <a href='/register'><button className="btn btn-outline-danger">Register</button></a>
                    </div>
             <div  className="img col-md-7">
                    <img
                    className="headerImg pull-right" 
                    src={ImageHeader}
                    alt="" />
             </div>
            </div>
        </div>



        </>

    )
}