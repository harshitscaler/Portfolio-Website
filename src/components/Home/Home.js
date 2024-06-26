import React from 'react';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import './Home.css';
import profile from '../../public/images/profile-pic.png';
import Type from '../Typing/Type';
import { AiFillGithub} from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
import { SiLeetcode } from 'react-icons/si';
import { SiCodeforces } from 'react-icons/si';
import { SiCodechef } from 'react-icons/si';
function Home() {
  return (
    <div className="home-container">
    <ParticleBackground />
    <div className="content">
        <div className="r2">
          <div className="home-image">
           <img className="profile-image" src={profile} alt="profile" />
          </div>
          <div className="home-down">
            <div className="home-text">
              <h1>
                Hi , my name is
              </h1>
            </div>
            <div>
            <h1 className="heading-name">
              I'M <strong className="main-name">Harshit Sachan</strong>
            </h1>
            </div>
            <div className="type-container">
            <h1>
              I am a <strong className="type"> <Type /></strong>
            </h1>
           </div>
          </div>
          <div className="home-about-social">
           
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a id="github"
                  href="https://github.com/sachan13harshit"
                  target="_blank"
                  style={{ color: "black" ,  }}
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a id="linkedin"
                  href="https://www.linkedin.com/in/sachanharshit/"
                  target="_blank"
                  style={{ color: "#0762C8" }}
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a id="leetcode"
                  href="https://leetcode.com/sachanharshit/"
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a id="codeforces"
                  href="https://codeforces.com/profile/harshitsachan"
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodeforces />
                </a>
              </li>
              <li className="social-icons">
                <a id="codechef"
                style={{ color: "black" }}
                  href="https://www.codechef.com/users/harshitsachan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodechef />
                </a>
              </li>

            </ul>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Home;