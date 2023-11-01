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
import {TbHandClick} from 'react-icons/tb'

function SubHeader() {
    var myCarousel = document.getElementById('myCarousel');
    var myBtns = document.getElementById('myBtns');

    var interval = setInterval(function() {
        var activeItem = document.querySelector('.carousel-item.active');
        var activeBtn = document.querySelector('.carousel_btn.active');

        activeItem.classList.remove('active');
        activeBtn.classList.remove('active');

        var nextItem = activeItem.nextElementSibling;
        var nextBtn = activeBtn.nextElementSibling;

        if (!nextItem) {
            nextItem = myCarousel.querySelector('.carousel-item.first-item')
        }
        if (!nextBtn) {
            nextBtn = myBtns.querySelector('.carousel_btn.first-child')
        }

    // Sonraki öğeye "active" sınıfını ekle
    nextItem.classList.add('active');
    nextBtn.classList.add('active');
    }, 5000)
  return (
    <>
    <div className='container'>
        <div className="subheader">
            <div className="subheader__dinamic">
                <div className="subheader__carousel">
                    <div id="carouselExampleCaptions"  class="carousel slide carousel-fade carousel-dark">
                    <div class="carousel-indicators" id='myBtns'>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class=" carousel_btn first-child"  aria-current="true" ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class='active carousel_btn'></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class='carousel_btn'></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class='carousel_btn'  ></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" class='carousel_btn'></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" class='carousel_btn'></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6"   class='carousel_btn'></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" class='carousel_btn'></button>
                        
                    </div>
                    <div class="carousel-inner" id='myCarousel'>
                        <div class="carousel-item first-item ">
                            <img src="images/sayt-cover-2-1-1.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item active">
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
                                    <div style={{color:'#1910B5',border:'1px solid #1910B5',borderRadius:'5px'}} class="subheader__offer--info__content__label"> Ucuz tapsan, endirimlə al </div>
                                </div>
                            </a>
                            <div className="subheader__offer--info__bottom">
                                <div className="subheader__offer--info__bottom__price">
                                    <div className="old-price">
                                        1199.99 AZN
                                    </div>
                                    <div className="new-price">
                                        999.99 AZN
                                    </div>
                                </div>
                                <div className="subheader__offer--info__bottom__buttons">
                                    <a href="" className="button button-orange button--with__icon">
                                        <TbHandClick/> Bir kliklə al
                                    </a>
                                    <a href="" className="button button-green">
                                        <SlBasket/> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="subheader__static">
                    <div className="subheader__static--item">
                        <div className="subheader__static--item__info">
                            <FaStore/>
                            <p>40-dan çox mağaza</p>
                        </div>
                    </div>
                    <div className="subheader__static--item">
                    <div className="subheader__static--item__info">
                        <BsPhone/>
                        <p>30 mindən çox seçim</p>
                    </div>
                    </div>
                    <div className="subheader__static--item">
                    <div className="subheader__static--item__info">
                        <BsTruck/>
                        <p>Sürətli çatdırılma</p>
                    </div>
                    </div>
                    <div className="subheader__static--item">
                    <div className="subheader__static--item__info">
                        <GoVerified/>
                        <p>Rəsmi zəmanət</p>
                    </div>
                    </div>
                    <div className="subheader__static--item">
                    <div className="subheader__static--item__info">
                        <AiOutlineGift/>
                        <p>Bonus proqramı</p>
                    </div>
                    </div>
                    <div className="subheader__static--item">
                    <div className="subheader__static--item__info no-border">
                        <SlBasket/>
                        <p>Sürətli alış-veriş</p>
                    </div>
                    </div>
                </div>
        </div>
    </div>
    <script src='../../node_modules/bootstrap/dist/js/bootstrap.bundle.js'></script>
    <script >
   
    </script>
    </>
  )
}

export default SubHeader