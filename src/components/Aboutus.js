import React, {useEffect, useState} from 'react';
import axios from "axios";

const Aboutus = () => {

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=100")
            .then((res) => {
                setPhotos(res.data)
            })
    },[]);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>About us</h1>
                    </div>
                    {photos.map((item , index) => {
                        return(
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <img src={item.url} alt="Error" className="w-100"/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Aboutus;