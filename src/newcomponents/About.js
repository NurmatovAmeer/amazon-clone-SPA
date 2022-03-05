import React from 'react';

const About = () => {
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
                                <button type="button" className="btn btn-outline"><p className="font-exobold mt-2">savol
                                    berish</p></button>
                        </div>
                    </div>
                </nav>
            </div>


            <header className="header">

                <div className="left-side">
                    <img src="assets/images/line-progres2.png" alt="Error"/>
                        <h1 className="font-baum">BOSH SAHIFA</h1>
                        <div className="line"></div>
                </div>

                <div className="base-content">
                    <img src="assets/images/about.png" alt="Error" className="loyihalar"/>

                        <div className="content d-flex flex-wrap">
                            <div className="back-text">
                                <h1 className="font-exobold">Technocorp</h1>
                            </div>

                            <div className="group">
                                <img src="assets/images/group.png" alt="Error"/>
                                    <div className="group-background"></div>
                                    <div className="group-text card">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Pariatur sed vitae
                                            aspernatur iusto, reiciendis dolor quidem at corporieligendi doloribus
                                            exercitationem illo nemo
                                            cumque quas beatae nam distinctio delectus incidunt adipisci accusantium
                                            voluptas natus
                                            asperiores mollitia. Libero officia dolore quibusdam iusto recusandae illo
                                            aliquid, ducimus aut
                                            labore tempora, deleniti </p>
                                        <button type="button" className="btn btn-success"><p
                                            className="font-exobold">batafsil</p></button>
                                    </div>
                            </div>
                            <div className="under-group">
                                <img src="assets/images/ishchi.png" alt="Error"/>
                                    <img src="assets/images/muvaffaqaiyat.png" alt="Error"/>
                                        <img src="assets/images/hursand.png" alt="Error"/>
                                            <img src="assets/images/ish%20tajriba.png" alt="Error"/>
                            </div>
                        </div>
                </div>

            </header>
        </>
    );
};

export default About;