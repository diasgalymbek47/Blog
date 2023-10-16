import React, { useEffect, useState } from "react";
import "./blog.css";
import _posts from "../../data/posts.json";
import Post from "../Post/Post";

const Blog = () => {
    const [posts, setPosts] = useState(_posts);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const result = _posts.filter((post) =>
            post.title.toLowerCase().includes(search.toLowerCase())
        );

        setPosts(result);
    }, [search]);

    return (
        <div className="blog container">
            <form className="blog__form">
                <input
                    className="blog__form-input"
                    type="search"
                    placeholder="Ищите тут..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>

            <div style={{ marginTop: "20px" }}>
                {posts.length !== 0
                    ? posts.map((post) => {
                          return <Post key={post.id} post={post} />;
                      })
                    : "Такой пост не найден"}
            </div>
        </div>
    );
};

export default Blog;
