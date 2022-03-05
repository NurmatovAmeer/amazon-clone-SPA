import React, {useEffect, useState} from 'react';
import axios from "axios";

const News = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPosts(res.data)
            })
    },[]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>FIRST PAGE</h1>
                    </div>
                    {posts.map((item , index) => {
                        return(
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.title}</h5>
                                    </div>
                                    <div className="card-body">
                                        {item.body}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default News;