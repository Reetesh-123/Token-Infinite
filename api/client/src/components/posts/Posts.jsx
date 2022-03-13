import React from 'react'
import Post from '../post/Post'
import './posts.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Posts({ posts }) {

    const [currFilter, setCurrFilter] = React.useState(0)

    function handleClick(event) {
        setCurrFilter(event.target.id)
    }

    function buttonStyles(id) {
        if(id == currFilter)
            return "bttn btn btn-danger"
        else
            return "bttn btn btn-outline-danger"
    }


    return (

        <div className='outer-box'>
            <div className="posts card">

                <div className="container my-3" style={{"width":"50rem"}}>
                    <div className="row justify-content-between ">
                        <div className="col-md-3">
                            <button className={buttonStyles(0)} id={0} onClick={handleClick}>All</button>

                        </div>
                        <div className="col-md-3">
                            <button className={buttonStyles(1)} id={1} onClick={handleClick}>TPO</button>

                        </div>
                        <div className="col-md-3">
                            <button className={buttonStyles(2)} id={2} onClick={handleClick}>Companies</button>

                        </div>
                    </div>
                </div>

                {
                    posts.map((p, index) => {
                        if (currFilter == 0)
                            return <Post key={index} post={p} />
                        else if (currFilter == 1) {
                            if (p.rolepost == "TPO")
                                return <Post key={index} post={p} />
                        }
                        else {
                            if (p.rolepost == "Company")
                                return <Post key={index} post={p} />
                        }
                    })
                }
            </div>
        </div>


    )
}
