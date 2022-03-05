import React from 'react';

const Home = () => {
    return (
        <>
            <div className="top">
                <nav className="navbar navbar-expand-md d-flex ">
                    <div className="container-fluid">
                        <div className="row">
                            <button type="button" data-toggle="collapse" className="toggler">
                                <img src="assets/icons/burger.svg" alt="Error" className="toggler-image"/>
                            </button>
                            <a href="#" className="navbar-brand"><img src="assets/images/logo.png" alt="Error"/></a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse"
                                    data-target="#navbar">
                                <img src="assets/icons/burger.svg" alt="Error"/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbar">
                                <div className="col-60 d-flex justify-content-md-end align-items-center">
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><a href="#"
                                                                    className="nav-link text-dark">xizmatlar</a></li>
                                        <li className="nav-item"><a href="#" className="nav-link"><p
                                            style="color: #0A7F2E">loyihalar</p>
                                            <img src="assets/images/square-center.png" alt="Error" className="square1"/>

                                                <img src="assets/images/square-center.png" alt="Error"
                                                     className="square2"/></a></li>

                                        <li className="nav-item"><a href="#"
                                                                    className="nav-link text-dark"> biz-haqimizda <img
                                            src="assets/images/play.png"
                                            alt="Error" className="play"/></a></li>
                                    </ul>
                                </div>
                                <div className="col-40 d-flex justify-content-between align-items-center">
                                    <div className="phone d-flex align-items-center">
                                        <a href="tel:+998712005400" className="phone-number text-decoration-none ml-3">
                                            <span className="font-exobold ">+998(71)200-54-00</span>
                                        </a>
                                    </div>
                                    <div className="line"></div>
                                </div>
                            </div>
                            <img src="assets/images/search.png" alt="Error" className="search"/>
                                <button type="button" className="btn btn-outline"><p
                                    className="font-exobold text-white">savol berish</p></button>
                        </div>
                    </div>
                </nav>
            </div>

            <header className="header">
                <div className="first60 d-flex">
                    <div className="text-md-left ">
                        <img src="assets/images/line-progres.png" alt="Error"/>
                            <h1 className="font-baum">BOSH SAHIFA</h1>
                            <div className="line"></div>
                    </div>
                    <div className="first-content">
                        <h2 className="font-exobold">Biz biznesingizni internet orqali rivojlantirishga yordam
                            beramiz</h2>
                        <p className="font-exobold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquid
                            debitis vitae</p>
                        <input type="number" className="form-control" placeholder="+998 (_)_-_-_"/>
                            <button type="button" className="btn btn-green">Menga qong'iroq qiling</button>
                    </div>
                </div>
                <p className="font-exobold under">Elektron tijoratning samarali yechimlari</p>
                <div className=" second40">
                    <div className="carousel">
                        <div id="demo" className="carousel slide" data-ride="carousel">
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" className="active indicator-item"></li>
                                <li data-target="#demo" data-slide-to="1" className="indicator-item"></li>
                                <li data-target="#demo" data-slide-to="2" className="indicator-item"></li>
                                <li data-target="#demo" data-slide-to="3" className="indicator-item"></li>
                                <li data-target="#demo" data-slide-to="4" className="indicator-item"></li>
                            </ul>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="assets/images/courses.png" alt="Error" className="carousel-image"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/courses.png" alt="Error" className="carousel-image"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/courses.png" alt="Error" className="carousel-image"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/courses.png" alt="Error" className="carousel-image"/>
                                </div>
                                <div className="carousel-item">
                                    <img src="assets/images/courses.png" alt="Error" className="carousel-image"/>
                                </div>
                            </div>
                            <div className="carousel-content">
                                <h2 className="font-exobold">Veb dasturlash</h2>
                                <div className="line"></div>
                                <p className="font-exobold">xizmati</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Home;