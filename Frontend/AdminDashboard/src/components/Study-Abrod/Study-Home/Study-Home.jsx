import { useState, useEffect } from "react";
import { StudyNavBar } from "../Study-Navbar/Study-Navbar";
import "./Study-Home.css";
import { StudyFooter } from "../study-footer/Study-footer";

const images = [
  "https://img.freepik.com/free-photo/low-angle-cheerful-team-students-passed-test-by-preparing-all-together_496169-2336.jpg?w=996&t=st=1721991949~exp=1721992549~hmac=0cab4588e83eb64fe528b624e02c74b11b33ee893a617c05f90de5769bab0016",
  "https://img.freepik.com/free-photo/outdoor-portrait-serious-curly-female-student-sitting-with-laptop-ground_197531-6965.jpg?w=996&t=st=1721999874~exp=1722000474~hmac=dfe6a60a6131a23d6011cb6345cd4ffad1577006538f601ebc5bbd6c32abd377",
  //   "https://img.freepik.com/premium-photo/graduation-graduation-hat-abroad-travel-cute-miniature-world_950002-273287.jpg?w=1060",
  "https://img.freepik.com/free-photo/front-view-female-worker-white-dress-holding-earth-globe-paper-plane-blue-wall_140725-149268.jpg?w=996&t=st=1721999999~exp=1722000599~hmac=da1206e11745e1482cd2caf2bfa2c63125c13336ef8fbdf54465a52a706296a7",
];

const StudyHome = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  

  return (
    <>
      <div className="studyHomeMain">
        <StudyNavBar />

        <div className="studyHomIteam">
          <div className="StudyImg">
            <img src={images[currentImageIndex]} alt="img" />
          </div>
          <div className="studyText">
            <div className="imgFlag">
              <div className="imgIteam">
                <img
                  src="https://www.worldometers.info/img/flags/as-flag.gif"
                  alt=""
                />
              </div>
              <div className="imgIteam">
                <img
                  src="https://www.worldometers.info/img/flags/ch-flag.gif"
                  alt=""
                />
              </div>
              <div className="imgIteam">
                <img
                  src="https://www.worldometers.info/img/flags/br-flag.gif"
                  alt=""
                />
              </div>
              <div className="imgIteam">
                <img
                  src="https://www.worldometers.info/img/flags/us-flag.gif"
                  alt=""
                />
              </div>
              <div className="imgIteam">
                <img
                  src="https://www.worldometers.info/img/flags/it-flag.gif"
                  alt=""
                />
              </div>
              <div className="imgIteam">
                <img
                  src="https://www.worldometers.info/img/flags/ca-flag.gif"
                  alt=""
                />
              </div>
            </div>
            <div className="text-p">
              <p>CRAFTING GLOBAL CAREERS SINCE 2002</p>
            </div>

            <div className="vertical-line">
              <div className="vertical"></div>
              <div className="textNote">
                <h1>Study Abroad Anything</h1>
                <h3>anywhere with the experts</h3>
                <h5>600 + Top-notch Universities / Colleges</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="studySection">

          <div className="studySectiomIteam">
            <label htmlFor="">Study Abroad</label>

            <div className="setionImg">
              <img
                src="https://santamonicaedu.in/wp-content/uploads/2021/05/01.jpg"
                alt=""
              />
            </div>
            <div className="line"></div>
            <div className="sectionText">
              <p>
                Open your mind to a whole new world, experience world-class
                education, and develop a global perspective.
              </p>
            </div>
            <div className="line"></div>
            <div className="sectionFooter">
              <div className="LearnMore">Learn More</div>
              <div className="linesmall"></div>
              <div className="enquireNow">Enquire Now</div>
            </div>
          </div>
          <div className="studySectiomIteam">
            <label htmlFor=""> Test Preparation</label>

            <div className="setionImg">
              <img
                src="https://santamonicaedu.in/wp-content/uploads/2021/05/11.jpg"
                alt=""
              />
            </div>
            <div className="line"></div>

            <div className="sectionText">
              <p>
                IELTS, PTE, TOEFL training to get admission in top-notch
                universities overseas
              </p>
            </div>
            <div className="line"></div>
            <div className="sectionFooter">
              <div className="LearnMore">Learn More</div>
              <div className="linesmall"></div>
              <div className="enquireNow">Enquire Now</div>
            </div>
          </div>
          <div className="studySectiomIteam">
            <label htmlFor="">Visa & Flight Ticket Booking</label>
            <div className="setionImg">
              <img
                src="https://santamonicaedu.in/wp-content/uploads/2021/05/03.jpg"
                alt=""
              />
            </div>
            <div className="line"></div>
            <div className="sectionText">
              <p>
                You can directly contact us by filling up the form. Our team
                will get back to you with your visa inquiry.
              </p>
            </div>
            <div className="line"></div>
            <div className="sectionFooter">
              <div className="LearnMore">Learn More</div>
              <div className="linesmall"></div>
              <div className="enquireNow">Enquire Now</div>
            </div>
          </div>
        </div>
        <div className="bg"></div>

        <div className="destination">
          <div className="chooseDestination">
            <label htmlFor="">COUNTRIES</label>
            <h2>Choose Your Favourite</h2>
            <h3>Destination!</h3>
          </div>
          <div className="countries">
            <div className="countrieslist">
              <div className="countriesImg">
                <img
                  src="https://santamonicaedu.in/wp-content/uploads/2021/09/South_korea_place.jpg"
                  alt="img
                    "
                />
              </div>
              <div className="contriesLogo">
                <img
                  src="https://santamonicaedu.in/wp-content/uploads/2021/05/flag4-1.jpg"
                  alt=""
                />
              </div>
              <label htmlFor="">AUSTRALIA</label>
              <div className="countriesLine"></div>
              <div className="countriesP">
                <p>
                  outstanding academics and a life with liveliness and endless
                  opportunities for career growth Australia is the place to be.
                  Quick Facts
                </p>
              </div>
              <div className="countriesLine"></div>

              <div className="LearnMorecountrie">
                <label htmlFor="">LearnMore</label>
              </div>
            </div>
            <div className="countrieslist">
              <div className="countriesImg">
                <img
                  src="https://santamonicaedu.in/wp-content/uploads/2021/05/country-03.jpg"
                  alt="img
                    "
                />
              </div>
              <div className="contriesLogo">
                <img
                  src="https://santamonicaedu.in/wp-content/uploads/2021/05/flag3.jpg"
                  alt=""
                />
              </div>
              <label htmlFor="">CANADA</label>
              <div className="countriesLine"></div>
              <div className="countriesP">
                <p>
                  outstanding academics and a life with liveliness and endless
                  opportunities for career growth Australia is the place to be.
                  Quick Facts
                </p>
              </div>
              <div className="countriesLine"></div>

              <div className="LearnMorecountrie">
                <label htmlFor="">LearnMore</label>
              </div>
            </div>
            <div className="countrieslist">
              <div className="countriesImg">
                <img
                  src="https://santamonicaedu.in/wp-content/uploads/2021/05/country-04.jpg"
                  alt="img
                    "
                />
              </div>
              <div className="contriesLogo">
                <img
                  src="https://santamonicaedu.in/wp-content/uploads/2021/06/flag2.jpg"
                  alt=""
                />
              </div>
              <label htmlFor="">U.K</label>
              <div className="countriesLine"></div>
              <div className="countriesP">
                <p>
                  outstanding academics and a life with liveliness and endless
                  opportunities for career growth Australia is the place to be.
                  Quick Facts
                </p>
              </div>
              <div className="countriesLine"></div>

              <div className="LearnMorecountrie">
                <label htmlFor="">LearnMore</label>
              </div>
            </div>
            <div className="countrieslist">
              <div className="countriesImg">
                <img
                  src="https://santamonicaedu.in/wp-content/uploads/2021/09/Germany-1.jpg"
                  alt="img
                    "
                />
              </div>
              <div className="contriesLogo">
                <img
                  src="https://santamonicaedu.in/wp-content/uploads/2021/09/Germany.jpg"
                  alt=""
                />
              </div>
              <label htmlFor="">GERMANY</label>
              <div className="countriesLine"></div>
              <div className="countriesP">
                <p>
                  outstanding academics and a life with liveliness and endless
                  opportunities for career growth Australia is the place to be.
                  Quick Facts
                </p>
              </div>
              <div className="countriesLine"></div>

              <div className="LearnMorecountrie">
                <label htmlFor="">LearnMore</label>
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5"  d="M0,288L14.1,282.7C28.2,277,56,267,85,234.7C112.9,203,141,149,169,154.7C197.6,160,226,224,254,245.3C282.4,267,311,245,339,229.3C367.1,213,395,203,424,218.7C451.8,235,480,277,508,250.7C536.5,224,565,128,593,85.3C621.2,43,649,53,678,58.7C705.9,64,734,64,762,85.3C790.6,107,819,149,847,165.3C875.3,181,904,171,932,181.3C960,192,988,224,1016,240C1044.7,256,1073,256,1101,234.7C1129.4,213,1158,171,1186,165.3C1214.1,160,1242,192,1271,181.3C1298.8,171,1327,117,1355,101.3C1383.5,85,1412,107,1426,117.3L1440,128L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path></svg>
          <div className="studyservice">
            <div className="chooseDestination">
              <h2>EXPLORE HOW WE WORK FOR YOU</h2>
              <h3>Our Services</h3>
            </div>
            <div className="serviceIteam">
              <div className="serviceList">
                <div className="serviceImg">
                  <img
                    src="https://santamonicaedu.in/wp-content/uploads/2021/05/study-abrd-counselling-1.jpg"
                    alt="img"
                  />
                </div>
                <div className="serviceline"></div>
                <div className="servicetext">
                  <h4>Study Abroad Counselling </h4>
                </div>
                <div className="serviceline"></div>
                <div className="serviceP">
                  <p>
                    {" "}
                    Our experience counsellors helps students identify a program
                    that perfectly mathches both their educational and finacial
                    background
                  </p>
                </div>
                <div className="serviceline"></div>
                <div className="serviceLearnMore">
                  <h5>Leran More</h5>
                </div>
              </div>

              <div className="serviceList">
              <div className="serviceImg">
                  <img
                    src="https://santamonicaedu.in/wp-content/uploads/2021/05/09.jpg"
                    alt="img"
                  />
                </div>
                <div className="serviceline"></div>
                <div className="servicetext">
                  <h4>Course Advice </h4>
                </div>
                <div className="serviceline"></div>
                <div className="serviceP">
                  <p>
                    {" "}
                    Our experience counsellors helps students identify a program
                    that perfectly mathches both their educational and finacial
                    background
                  </p>
                </div>
                <div className="serviceline"></div>
                <div className="serviceLearnMore">
                  <h5>Leran More</h5>
                </div>
              </div>
              <div className="serviceList">
              <div className="serviceImg">
                  <img
                    src="https://santamonicaedu.in/wp-content/uploads/2021/05/04-2.jpg"
                    alt="img"
                  />
                </div>
                <div className="serviceline"></div>
                <div className="servicetext">
                  <h4>application processing </h4>
                </div>
                <div className="serviceline"></div>
                <div className="serviceP">
                  <p>
                    {" "}
                    Our experience counsellors helps students identify a program
                    that perfectly mathches both their educational and finacial
                    background
                  </p>
                </div>
                <div className="serviceline"></div>
                <div className="serviceLearnMore">
                  <h5>Leran More</h5>
                </div>
              </div>
            </div>
            <div className="serviceIteam">
              <div className="serviceList">
              <div className="serviceImg">
                  <img
                    src="https://santamonicaedu.in/wp-content/uploads/2021/05/TOEF.jpg"
                    alt="img"
                  />
                </div>
                <div className="serviceline"></div>
                <div className="servicetext">
                  <h4>Visa Application Assistance </h4>
                </div>
                <div className="serviceline"></div>
                <div className="serviceP">
                  <p>
                    {" "}
                    Our experience counsellors helps students identify a program
                    that perfectly mathches both their educational and finacial
                    background
                  </p>
                </div>
                <div className="serviceline"></div>
                <div className="serviceLearnMore">
                  <h5>Leran More</h5>
                </div>
              </div>
              <div className="serviceList">
              <div className="serviceImg">
                  <img
                    src="https://santamonicaedu.in/wp-content/uploads/2021/05/Scholarship-assist.jpg"
                    alt="img"
                  />
                </div>
                <div className="serviceline"></div>
                <div className="servicetext">
                  <h4>Pre Departure Guidence </h4>
                </div>
                <div className="serviceline"></div>
                <div className="serviceP">
                  <p>
                    {" "}
                    Our experience counsellors helps students identify a program
                    that perfectly mathches both their educational and finacial
                    background
                  </p>
                </div>
                <div className="serviceline"></div>
                <div className="serviceLearnMore">
                  <h5>Leran More</h5>
                </div>
              </div>
              <div className="serviceList">
              <div className="serviceImg">
                  <img
                    src="https://santamonicaedu.in/wp-content/uploads/2021/05/08-2.jpg"
                    alt="img"
                  />
                </div>
                <div className="serviceline"></div>
                <div className="servicetext">
                  <h4>Scholarship Assistance </h4>
                </div>
                <div className="serviceline"></div>
                <div className="serviceP">
                  <p>
                    {" "}
                    Our experience counsellors helps students identify a program
                    that perfectly mathches both their educational and finacial
                    background
                  </p>
                </div>
                <div className="serviceline"></div>
                <div className="serviceLearnMore">
                  <h5>Leran More</h5>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,256L14.1,245.3C28.2,235,56,213,85,176C112.9,139,141,85,169,80C197.6,75,226,117,254,160C282.4,203,311,245,339,245.3C367.1,245,395,203,424,170.7C451.8,139,480,117,508,144C536.5,171,565,245,593,245.3C621.2,245,649,171,678,144C705.9,117,734,139,762,160C790.6,181,819,203,847,213.3C875.3,224,904,224,932,192C960,160,988,96,1016,64C1044.7,32,1073,32,1101,48C1129.4,64,1158,96,1186,128C1214.1,160,1242,192,1271,202.7C1298.8,213,1327,203,1355,197.3C1383.5,192,1412,192,1426,192L1440,192L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg>

          </div>
        </div>
        <StudyFooter/>
      </div>
    </>
  );
};

export { StudyHome };
