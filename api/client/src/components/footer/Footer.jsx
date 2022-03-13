import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer">
            <div className="groupFooter">
                <div className="contactFooter">
                    <div className='contactItemHeading'>Our team</div>
                    <div className="contactItem">Tushar Gehlot</div>
                    <div className="contactItem">Ishan Mujumdar</div>
                    <div className="contactItem">Nandita Tomar</div>
                    <div className="contactItem">Reetesh Kumar</div>
                
                </div>

                <div className="linkFooter">
                    <div className='contactItemHeading'>Navigation Links</div>
                    <Link to="/" className="link itemLink">Home</Link>
                    <Link to="/posts" className="link itemLink">Posts</Link>
                    <Link to="/write" className="link itemLink">Write</Link>
                </div>

            </div>
            <div className="copyrightFooter">copyright @ Token Infinite 2022</div>
        </div>
    )
}

