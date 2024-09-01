import { useNavigate } from "react-router-dom";
import "./PortalType.css";

const PortalType = () => {
    const navigate = useNavigate();

    const handleJoinJobSeeker = () => {
        navigate("/user/Register");
    };

    const handleLoginJobSeeker = () => {
        navigate('/user/portalLogin');
    };

    const handleJoinEmployer = () => {
        navigate("/Employer/Login");
    };

    const handleRegisterEmployer = () => {
        navigate('/Employer/Register');
    };

    return (
        <div className="portalmain">
            <div className="PortalSection">
                <h2>Employer</h2>
                <div className="pItem">
                    <div className="pImg">
                        <img
                            src="https://img.freepik.com/free-photo/hispanic-female-executive-gesturing-copy-space-while-making-eye-contact-studio_662251-979.jpg?w=740&t=st=1719989460~exp=1719990060~hmac=f39eb291eac2aa83b09fbd01bce8a54b95634d9792d9c57e4f8c17446aefbaa9"
                            alt="Employer"
                        />
                    </div>
                    <div className="pText">
                        <p>
                            Industrys standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting.
                        </p>
                    </div>
                </div>
                <div className="portalTypeBtn">
                    <button onClick={handleRegisterEmployer} className="PBtn">Join Now</button>
                    <button onClick={handleJoinEmployer} className="PBt">Login</button>
                </div>
            </div>
            <div className="PortalSection">
                <h2>Job Seeker</h2>
                <div className="pItem">
                    <div className="pImg">
                        <img
                            src="https://img.freepik.com/free-photo/group-people-sitting-waiting-room_273609-10953.jpg?w=826&t=st=1719991570~exp=1719992170~hmac=eeef871080e3624be9bc8d384100563d969bf822008930a372228b2069ad1dae"
                            alt="Job Seeker"
                        />
                    </div>
                    <div className="pText">
                        <p>
                            Industrys standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting.
                        </p>
                    </div>
                </div>
                <div className="portalTypeBtn">
                    <button onClick={handleJoinJobSeeker} className="PBtn">Join Now</button>
                    <button onClick={handleLoginJobSeeker} className="PBt">Login</button>
                </div>
            </div>
        </div>
    );
};

export { PortalType };
