import React, { useRef, useState } from "react";
import "./post.css";
import Comment from "../Comment/Comment";
import comments from "../../data/comments.json";

const Post = ({ post }) => {
    const [isOpen, setOpen] = useState(false);
    const bodyRef = useRef();

    const postComments = comments.filter((comment) => comment.post_id == post.id);
    const bodyStyle = {};

    if (isOpen) {
        bodyStyle.height = bodyRef.current.scrollHeight + "px";
    }

    return (
        <div className="post">
            <h2 className="post__title">{post.title}</h2>
            <img className="post__img" src={post.img} alt={post.title} />

            <div ref={bodyRef} style={bodyStyle} className="post__body">
                <p className="post__desc">{post.desc}</p>

                <div className="post__comments">
                    <span className="post__comments-title">
                        {postComments.length !== 0 ? "Комментарий:" : "Комментарий пока нету"}
                    </span>
                    {postComments.map((comments) => (
                        <Comment key={post.id} comment={comments} />
                    ))}
                </div>
            </div>

            <button className="post__btn" onClick={() => setOpen(!isOpen)}>
                {isOpen ? "Свернуть" : "Развернуть"}
            </button>
        </div>
    );
};

export default Post;
