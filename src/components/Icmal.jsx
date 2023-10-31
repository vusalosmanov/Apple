import icmalStyles from "./icmal.module.css";
import playButton from "../assets/playbutton.png"

const Icmal = () => {
  return (
    <div className={icmalStyles.container}>
      <div className={icmalStyles.top}>
        <div className={icmalStyles.left}>
          <h1>Məhsul icmalı</h1>
          <h1 className={icmalStyles.helpertxt}>İrşad Youtube</h1>
        </div>
        <div className={icmalStyles.right}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0 0 48 48"
            >
              <path
                id={icmalStyles.svgmain}
                fill="#FFF"
                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
              ></path>
              <path
                id={icmalStyles.svgelement}
                fill="#f23620"
                d="M20 31L20 17 32 24z"
              ></path>
            </svg>
            Youtube hesabına keç
          </button>
        </div>
      </div>
      <div className={icmalStyles.middle}>
        <div className={icmalStyles.icmalcontainer}>
          <div className={icmalStyles.icmaltop}>
            <img src="https://img.youtube.com/vi/sitxNWXwmAQ/maxresdefault.jpg"/>
            <div className={icmalStyles.hoverbg}></div>
            <div className={icmalStyles.playbtn}>
              <img src={playButton}  />
              <p className={icmalStyles.hiddentxt} >Videonu izlə</p>
            </div>
          </div>
          <div className={icmalStyles.icmalbottom}>
            <a href="https://irshad.az/mehsul-icmali/iphone-15-i-yaxindan-taniyaq">iPhone 15-i yaxından tanıyaq.🙂</a>
            <p> - "iPhone 15" gəldi "OK", bəs icmalı harada qaldı? 🤔
              <br/> 
              - Narahat olmağa dəyməz, icmal da gəldi! 😇
              <br/>
              Model haqqında biz danışaq yoxsa Vüsal? Ən yaxşısı Vüsal danışsın, birlikdə izləyək. 😇 
            </p>
          </div>
        </div>
        <div className={icmalStyles.icmalcontainer}>
          <div className={icmalStyles.icmaltop}>
            <img src="https://img.youtube.com/vi/sitxNWXwmAQ/maxresdefault.jpg"/>
            <div className={icmalStyles.hoverbg}></div>
            <div className={icmalStyles.playbtn}>
              <img src={playButton}  />
              <p className={icmalStyles.hiddentxt} >Videonu izlə</p>
            </div>
          </div>
          <div className={icmalStyles.icmalbottom}>
            <a href="https://irshad.az/mehsul-icmali/iphone-15-i-yaxindan-taniyaq">iPhone 15-i yaxından tanıyaq.🙂</a>
            <p> - "iPhone 15" gəldi "OK", bəs icmalı harada qaldı? 🤔
              <br/> 
              - Narahat olmağa dəyməz, icmal da gəldi! 😇
              <br/>
              Model haqqında biz danışaq yoxsa Vüsal? Ən yaxşısı Vüsal danışsın, birlikdə izləyək. 😇 
            </p>
          </div>
        </div>
        <div className={icmalStyles.icmalcontainer}>
          <div className={icmalStyles.icmaltop}>
            <img src="https://img.youtube.com/vi/sitxNWXwmAQ/maxresdefault.jpg"/>
            <div className={icmalStyles.hoverbg}></div>
            <div className={icmalStyles.playbtn}>
              <img src={playButton}  />
              <p className={icmalStyles.hiddentxt} >Videonu izlə</p>
            </div>
          </div>
          <div className={icmalStyles.icmalbottom}>
            <a href="https://irshad.az/mehsul-icmali/iphone-15-i-yaxindan-taniyaq">iPhone 15-i yaxından tanıyaq.🙂</a>
            <p> - "iPhone 15" gəldi "OK", bəs icmalı harada qaldı? 🤔
              <br/> 
              - Narahat olmağa dəyməz, icmal da gəldi! 😇
              <br/>
              Model haqqında biz danışaq yoxsa Vüsal? Ən yaxşısı Vüsal danışsın, birlikdə izləyək. 😇 
            </p>
          </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Icmal;
