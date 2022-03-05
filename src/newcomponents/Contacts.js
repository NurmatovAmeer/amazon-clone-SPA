import React from 'react';

const Contacts = () => {
    return (
        <>
            <header className="header">

                <div className="left-side">
                    <img src="assets/images/line-progres2.png" alt="Error"/>
                        <h1 className="font-baum">BOG'LANISH</h1>
                        <div className="line"></div>
                </div>

                <div className="base-content d-flex flex-wrap">
                    <img src="assets/images/boglanish.png" alt="Error"/>
                        <div className="d-flex flex-wrap">

                            <div className="first-60 d-flex flex-wrap">
                                <label htmlFor="input1" id="label1">Sizning ismingiz *</label>
                                <input type="text" id="input1" className="form-control"/>
                                    <div className="d-flex">
                                        <div>
                                            <label htmlFor="input2" id="label2">Telefon raqamingiz*</label>
                                            <input type="number" className="form-control" id="input2"/>
                                        </div>
                                        <div>
                                            <label htmlFor="input3" id="label3">E-mail manzilingiz</label>
                                            <input type="email" className="form-control" id="input3"/>
                                        </div>
                                    </div>
                                    <label htmlFor="input4" id="label4">Izoh</label>
                                    <textarea className="form-control" id="input4" cols="30" rows="10"></textarea>
                                    <button type="button" className="btn btn-success">Yuborish</button>
                            </div>
                            <div className="second-40">
                                <div className="big-card d-flex flex-wrap">
                                    <div className="malumot ml-4">
                                        <p>telefon raqam
                                            <span>+998 (71) 299-86-88</span>
                                        </p>
                                    </div>
                                    <div className="malumot ml-4">
                                        <p>E-mail manzil
                                            <span>info@technocorp.uz</span>
                                        </p>
                                    </div>
                                    <div className="malumot ml-4">
                                        <p>Bizning manzil
                                            <span>Toshkent shahar, Mirobod tumani, Tolimarjon ko’chasi, 6-uy. 100105</span>
                                        </p>
                                    </div>
                                    <div className="malumot ml-4">
                                        <p>Pochta indeksi:
                                            <span>100105</span>
                                        </p>
                                    </div>
                                    <div className="images">
                                        <img src="assets/images/facebook.png" alt="Error" className="facebook"/>
                                            <div className="instagram">
                                                <img src="assets/images/instagram%20base.png" alt="Error"
                                                     className="instagram-base"/>
                                                    <img src="assets/images/instagram%20inner.png" alt="Error"
                                                         className="instagram-inner"/>
                                                        <img src="assets/images/instagram%20cam.png" alt="Error"
                                                             className="instagram-cam"/>
                                            </div>
                                            <img src="assets/images/telgram.png" alt="Error" className="telegram"/>
                                    </div>
                                    <div className="ish-vaqti d-flex justify-content-between align-items-center">
                                        <p className="green" style="margin-top: 19px;">DU</p>
                                        <p className="green">SE</p>
                                        <p className="green">CH</p>
                                        <p className="green">PA</p>
                                        <p className="green">JU</p>
                                        <p className="gray">SH</p>
                                        <p className="gray">YA</p>
                                    </div>
                                </div>
                                <iframe
                                    src="https://www.google.com/maps/place/8+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A2%D0%B0%D0%BB%D0%B8%D0%BC%D0%B0%D1%80%D0%B6%D0%BE%D0%BD,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2778041,69.3030725,18.5z/data=!4m5!3m4!1s0x38aef55bd7964ec7:0x91239ddf114027ff!8m2!3d41.2777171!4d69.3032584"
                                />
                            </div>
                        </div>
                </div>
            </header>
        </>
    );
};

export default Contacts;