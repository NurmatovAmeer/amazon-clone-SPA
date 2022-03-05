import React, {useEffect, useState} from 'react';
import axios from "axios";

const Technology = () => {

    const [comments,setComments] = useState([]);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setComments(res.data)
            })
    },[]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>TECHNOLOGY</h1>
                    </div>
                    {comments.map((item,index) => {
                        return(
                            <div className="col-4 mt-3">
                                <div className="card">
                                <div className="card-header">
                                    <h2>{item.name}</h2>
                                </div>
                                <div className="card-body">
                                    <h4>{item.email}</h4>
                                    <p>{item.body}</p>
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

export default Technology;