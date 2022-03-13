import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import "./singlePost.css";

import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const { user } = useContext(Context);

    // FOR EDIT
    const [info, setinfo] = useState([]);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            await axios
                .get("/posts/" + path)
                .then((res) => {
                    setPost(res.data);
                    setTitle(res.data.title);
                    setDesc(res.data.desc);
                    setinfo(res.data.info);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        await axios
            .delete("/posts/" + post._id, { data: { username: user.username } })
            .then((res) => {
                window.location.replace("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleUpdate = async () => {
        await axios
            .put("/posts/" + post._id, {
                username: user.username,
                title: title,
                desc: desc,
                info: info,
            })
            .then((res) => {
                // window.location.reload()       // ou bien
                setUpdateMode(false);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {/* Lorsqu'on click sur le boutton edit */}
                {updateMode ? (
                    <input
                        type="text"
                        value={title}
                        className="singlePostTitleInput"
                        autoFocus={true}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                ) : (
                    <h1 className="singlePostTitle">
                        {user?.username}
                        {/* Affichage des icons delete et edit : si l'utilistaeur == l'auteur
                        et s'il est deja un utilisateur (user?.username) */}
                        {(post.username === user?.username)?(
                            <div className="singlePostEdit">
                                <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                                <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                            </div>
                        ):(null)}
                    
                    </h1>
                )}
                <div className="container card my-2" style={{ width: "55rem" }}>
                    <div className="card-body container">
                         <div className="row justify-content-between">
                            <div className="singlePostInfo card-title col-md-2 singlePostAuthor">
                               {/* Author : {post.username} */}
                                <Link to={`/?user=${post.username}`} className="link">
                                    <b>{post.username}</b>
                                </Link>
                            </div>
                            <div className="singlePostInfo singlePostDate card-text col-md-3">
                                {new Date(post.createdAt).toDateString()}
                            </div>
                        </div>

                        <hr />
                        <div className="card-text my-5">{post.info}</div>
                        <hr />

                        {updateMode ? (
                            <>
                                <textarea
                                    className="singlePostDescInput"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                />
                                <textarea
                                    className="singlePostDescInput"
                                    value={info}
                                    onChange={(e) => setinfo(e.target.value)}
                                />
                                <button className="singlePostButton" onClick={handleUpdate}>
                                    Update
                                </button>
                            </>
                        ) : (
                             <p className="singlePostDesc card-text my-5">
                     {(post.username === user?.username)?(
                             <b> {desc}</b>
                        ):(null)}
                      
                    </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
