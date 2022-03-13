import { Link } from 'react-router-dom'
import { publicFile } from '../../shared/baseUrl'
import './post.css'



export default function Post({post}) {
    return (
        <div className="post card">
            <div className="postInfo card-body">
                <div className="postCats">
                    {post.categories.map((c,index)=>(
                        <span key={index} className="postCat card-title">{c.name}</span>
                    ))}
                </div>
                <div className="container">
                    <div className="row">
                        <div>
                        <Link to={`/post/${post._id}`} className="link">
                        <span className="postTitle"> {post.title} </span>
                    </Link>
                        </div>
                        <div>
                        <Link to={`/post/${post._id}`} className="link">
                        <div className="btn btn-outline-secondary profile-button"> View Profile </div>
                    </Link>
                        </div>
                    </div>
                </div>
                

                   
                <hr/>
                <span className="postDate"> {new Date(post.createdAt).toDateString()} </span>

                <p className="postDesc card-text">
                {post.desc}
                </p>
            </div>
        </div>
    )
}