import React from 'react';

const Menu = () => {
    return (
        <>
            <div className="all d-flex ">
                <div className="left-side">
                    <button className="uk-button uk-button-default" type="button" uk-toggle="target: #offcanvas-push"><p
                        className="font-baum">Thechnocorp <span>click to know</span></p></button>

                    <div id="offcanvas-push" uk-offcanvas="mode:push">
                        <div className="uk-offcanvas-bar">
                            <div className="d-flex">
                                <button className="uk-offcanvas-close close-button" type="button"
                                        style="margin-top: 15px;margin-left: 40px;" uk-close></button>
                                <div className="navbar-brand"><img src="assets/images/logo.png" alt="Error"/></div>
                            </div>

                            <div className="uk-nav-header d-flex" className="font-exobold">
                                <div className="markaz-hujjat">
                                    <h2 className="font-exobold">MARKAZ</h2>
                                    <ul className="markaz">
                                        <li><a href="#" className="font-exobold">Markaz haqida</a></li>
                                        <li><a href="#" className="font-exobold">Rahbariyat</a></li>
                                        <li><a href="#" className="font-exobold">Markaz bo’limlari</a></li>
                                        <li><a href="#" className="font-exobold">Markaz tuzilishi</a></li>
                                    </ul>
                                    <h2 className="font-exobold">HUJJATLAR</h2>
                                    <ul className="hujjatlar">
                                        <li><a href="#" className="font-exobold">O‘zbekiston Respublikasining qonuni</a>
                                        </li>
                                        <li><a href="#" className="font-exobold">O‘zbekiston Respublikasi Prezidentining
                                            qarori</a></li>
                                        <li><a href="#" className="font-exobold">O’zbekiston Respublikasi Vazirlar
                                            Mahkamasining Qarori</a></li>
                                        <li><a href="#" className="font-exobold">O‘zbekiston Respublikasi Davlat
                                            standartlari</a></li>
                                    </ul>
                                </div>
                                <div className="yangilik-boglanish">
                                    <h2 className="yangilik font-exobold">YANGILIKLAR</h2>
                                    <h2 className="boglanish font-exobold">BOG’LANISH</h2>
                                </div>
                            </div>
                            <div className="language">
                                <h3>til:<a className="disabled font-exobold">O'zbekcha</a> <a
                                    className="font-exobold">Русский</a>,<a className="font-exobold">English</a></h3>
                            </div>
                            <div className="uk-nav-footer d-flex">
                                <div className="korinish">
                                    <h3 className="font-exobold">Sayt korinishi</h3>
                                    <button type="button" className="btn btn-success">A</button>
                                    <button type="button" className="btn btn-gray">A</button>
                                    <button type="button" className="btn btn-darkgray">A</button>
                                </div>
                                <div className="ml-5 shrift">
                                    <h3 className="font-exobold">shrift olchami</h3>
                                    <p className="font-exobold">kattalashtirish 15%</p>
                                    <img src="assets/images/progress-bar.png" alt="Error" className="progress-bar-img"/>
                                        <img src="assets/images/progress-switcher.png" alt="Error"
                                             className="progress-switcher-img"/>
                                </div>
                                <div className="volume">
                                    <img src="assets/images/volume-off.png" alt="Error"/>
                                        <img src="assets/images/volumed.png" alt="Error"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="center">
                    <h2>Xizmatlar</h2>
                    <div className="line"></div>
                    <div className="d-flex container">
                        <div>
                            <div className="d-flex mt-2">
                                <img src="assets/images/correct-base.png" alt="Error" className="correct-base"/>
                                    <img src="assets/images/correct-inner.png" alt="Error" className="correct-inner"/>
                                        <p>Veb Dasturlash xizmati</p>
                            </div>
                            <div className="d-flex mt-2">
                                <img src="assets/images/correct-base.png" alt="Error" className="correct-base"/>
                                    <img src="assets/images/correct-inner.png" alt="Error" className="correct-inner"/>
                                        <p style="color: green;width: 230px">Mobil ilovalarni ishlab chiqish xizmati</p>
                            </div>
                            <div className="d-flex mt-2">
                                <img src="assets/images/correct-base.png" alt="Error" className="correct-base"/>
                                    <img src="assets/images/correct-inner.png" alt="Error" className="correct-inner"/>
                                        <p>Dizayn xizmati</p>
                            </div>
                            <div className="d-flex mt-2">
                                <img src="assets/images/correct-base.png" alt="Error" className="correct-base"/>
                                    <img src="assets/images/correct-inner.png" alt="Error" className="correct-inner"/>
                                        <p>Audit xizmati</p>
                            </div>
                        </div>
                        <div style="margin-left: 150px;">
                            <div className="d-flex mt-2">
                                <img src="assets/images/correct-base.png" alt="Error" className="correct-base"/>
                                    <img src="assets/images/correct-inner.png" alt="Error" className="correct-inner"/>
                                        <p>BPR xizmati</p>
                            </div>
                            <div className="d-flex mt-2">
                                <img src="assets/images/correct-base.png" alt="Error" className="correct-base"/>
                                    <img src="assets/images/correct-inner.png" alt="Error" className="correct-inner"/>
                                        <p>Texnik hujjat ishlab chiqish xizmati</p>
                            </div>
                            <div className="d-flex mt-2">
                                <img src="assets/images/correct-base.png" alt="Error" className="correct-base"/>
                                    <img src="assets/images/correct-inner.png" alt="Error" className="correct-inner"/>
                                        <p>Infograrika tayyorlash xizmati</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <img src="assets/images/right-bottom.jpg" alt="Error"/>
                        <img src="assets/images/right-top.jpg" alt="Error"/>
                </div>
            </div>
        </>
    );
};

export default Menu;