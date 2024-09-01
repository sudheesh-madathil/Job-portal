import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {

const navigate = useNavigate()
const portalLogin = ()=>{
  navigate("/user/portalType")
}

const studypage =()=>{
navigate('/study/Home')
}

  return (
    <div className="LandinMain">
      <div className="loginDiv">
        <button onClick={portalLogin}  className="LoginBtn">Login</button>
      </div>

      <div className="welcomText">
        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              welcome 
            </text>
          </svg>
        </div>

        <div className="LandingIteam">
          <div className="Iteam1">
          <div className="image-placeholder">Dating App</div>
          <p> ndustrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the</p>
          </div>
          <div className="Iteam1"><div className="image-placeholder">Matrimony App</div>
          <p> ndustrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the</p>
          </div>
          <div className="Iteam1"> <div className="image-placeholder">Job Portal</div>
          <p> ndustrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the</p>
          
          </div>
          <div className="Iteam1">  <div className="image-placeholder">E-commerce</div>
          <p> ndustrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the</p>
          
          </div>
          <div className="Iteam1">   <div className="image-placeholder">
            <button onClick={studypage} className="study-Btn">Study Abroad</button></div>
          <p> ndustrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the</p>
          </div>
        </div>
        <div className="paraghraph">
          <p>
            ndustrys standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal
          </p>
        </div>
      </div>
    </div>
  );
}

export { LandingPage };
