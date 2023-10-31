import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import svg1 from '../svg/subheadersvg1.svg'
import {LiaWarehouseSolid} from 'react-icons/lia'
import {FaStore} from 'react-icons/fa'
import {BsPhone} from 'react-icons/bs'
import {BsTruck} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import {AiOutlineGift} from 'react-icons/ai'
import {SlBasket} from 'react-icons/sl'

function SubHeader() {
  return (
    <>
    <div className='container'>
        <div className="subheader">
            <div className="subheader__dinamic">
                <div className="subheader__carousel">
                    <div id="carouselExampleCaptions" class="carousel slide carousel-fade carousel-dark">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"   ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"   ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" ></button>
                        
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="images/sayt-cover-2-1-1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="images/sayt-cover-2-2-0.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="images/sayt-cover-2-3-0.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="images/sayt-cover-2-5.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="images/sayt-cover-3-1-1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="images/sayt-cover-3-3.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="images/sayt-cover-12-1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img src="images/sayt-cover-15-0.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="subheader__offer">
                        <div className="subheader__offer--head">
                            <span>Həftənin təklifi</span>
                            <p>05 Gün 13:14:08</p>
                        </div>
                        <div className="subheader__offer--info">
                            <div className="subheader__offer--info__brand">
                                <a href="">
                                    <h3 className='subheader__offer--info__brand__title'> Xiaomi Redmi Smart Band 2 (BHR6921AP) Black</h3>
                                </a>
                                <img src="https://irshad.az/storage/product-attributes/8/xiaomi-logo-2021-svg.png" alt="" width="76" height="12"/>
                            </div>
                            <a href="" className="subheader__offer--info__content">
                                <img src="https://irshad.az/cdn-cgi/image/width=315/storage/products/85215/xiaomi-redmi-smart-band-2-bhr6921ap-black.jpg" alt="Xiaomi Redmi Smart Band 2 (BHR6921AP) Black" className='subheader__offer--info__content__image'/>
                                <div className="subheader__offer--info__content__labels">
                                    <div className="subheader__offer--info__content__label subheader__offer--info__content__label--purple">
                                        {LiaWarehouseSolid} Stokda var
                                    </div>
                                    <div className="subheader__offer--info__content__label subheader__offer--info__content__label--orange">
                                        -200 AZN nağd alışda endirim
                                    </div>
                                    <div className="subheader__offer--info__content__label subheader__offer--info__content__label--purple">
                                        Faizsiz Təklif
                                    </div>
                                    <div style={{color:'#1910B5 !important'}} class="subheader__offer--info__content__label"> Ucuz tapsan, endirimlə al </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="subheader__static">
                    <div className="subheader__static--item">
                        <FaStore/>
                        <p>40-dan çox mağaza</p>
                    </div>
                    <div className="subheader__static--item">
                        <BsPhone/>
                        <p>30 mindən çox seçim</p>
                    </div>
                    <div className="subheader__static--item">
                        <BsTruck/>
                        <p>Sürətli çatdırılma</p>
                    </div>
                    <div className="subheader__static--item">
                        <GoVerified/>
                        <p>Rəsmi zəmanət</p>
                    </div>
                    <div className="subheader__static--item">
                        <AiOutlineGift/>
                        <p>Bonus proqramı</p>
                    </div>
                    <div className="subheader__static--item">
                        <SlBasket/>
                        <p>Sürətli alış-veriş</p>
                    </div>
                </div>
        </div>
    </div>
    <script src='../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'></script>
    </>
  )
}

export default SubHeader