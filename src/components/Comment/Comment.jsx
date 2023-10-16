import React from "react";
import "./comment.css";

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment__user-info">
                <img className="comment__user-img" src={comment.img} alt={comment.name} />
                <h3 className="comment__user-name">{comment.name}</h3>
            </div>
            <p className="comment__text">{comment.text}</p>
        </div>
    );
};

export default Comment;
