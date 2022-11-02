import React from 'react';
import aboutimg from "../images/about.JPG";
import tonyimage from "../images/Tony-Okely_opt.jpg";
import johnimage from "../images/John-Reilly_opt.jpg";
import markimage from "../images/Mark-Tremblay_opt.jpg";
import aleximage from "../images/Alex-Florindo_opt.jpg";
import asmaaimage from "../images/Asmaa_opt.png";
import bangimage from "../images/Bang-Nguyen_opt.jpg";
import catherineimage from "../images/Cathi-Draper_opt.jpg";
import guanimage from "../images/Guan-Hongyan_opt.jpg";
import himangiimage from "../images/Himangi-Lubree_opt.jpg";
import peterimage from "../images/Peter-Katzmarzyk_opt.jpg";
import thomasimage from "../images/Thomas-Suesse_opt.png";
import { Link } from 'react-router-dom';
import { CCard } from '@coreui/bootstrap-react'
import { CCardBody } from '@coreui/bootstrap-react'
import { CCardImage } from '@coreui/bootstrap-react'
import { CCardText } from '@coreui/bootstrap-react'
import '../App.css'
const About = () => {
  return (
    <div className="about" id="about">
      <img src={aboutimg} alt="aboutimg" />
      <h3>About SUNRISE?</h3>
      <div className="about-info">
      <ul>
          <li>To provide an opportunity to monitor the new <a href="https://apps.who.int/iris/handle/10665/311664" target='_blank' rel="noopener noreferrer">World Health Organization Guidelines on physical activity, sedentary behaviour and sleep for children under 5 years of age.</a></li>
          <li>To examine how physical activity (PA), sedentary behaviour (SB), and sleep are associated with child health and development and to examine potential correlates of PA, SB, and sleep.</li>
          <li>To provide an opportunity for capacity building, especially in low- and middle-income countries and build an international community of researchers interested in early childhood movement behaviours.</li>
      </ul>
      <iframe id='aboutsunrise'
          src="https://www.youtube.com/embed/KW9GRQJsw_s"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="The SUNRISE Study"
        />{" "}
        <div className="about-content">
          <h3><strong>Primary Research Questions:</strong></h3>
          <ol>
            <li>What proportion of 4-year-old children sampled in participating countries meet the WHO Global 24-hour movement guidelines for the early years?
            <ol>
              <li>How does this proportion vary by sex?</li>
              <li>How does this proportion vary by urban/rural location?</li>
              <li>How does this proportion vary by SES (high/low)?</li>
            </ol>
            </li>
            <li>Do these relationships vary between different country levels of human and economic development?</li>
          </ol>
          <h3>Aims</h3>
          <h4>Main Study</h4>
          <p>The primary aim of the <strong>main</strong> SUNRISE study (early 2020 onwards) is to determine the proportion of children sampled in participating countries who meet the WHO Global 24-hour Movement Guidelines for the Early Years. Secondary aims include the monitoring of prevalence of overweight and obesity in countries where no data currently exist, and the monitoring of developmental delay in gross and fine motor skills. These secondary aims have been chosen because there are a number of countries where there are no representative prevalence data for overweight/obesity. There is also emerging evidence from a number of countries that the prevalence of developmental delay in other important outcomes in the motor and physical development domains are high, around 15% for gross motor skills and up to 32% for fine motor skills.</p>
          <h4><strong>Pilot Study</strong></h4>
          <p>The primary aim of the <strong>pilot</strong> SUNRISE study (early 2018 to present) was to determine the feasibility of recruiting 100 children from urban and rural settings (50 from each), and to test the feasibility and acceptability of the data collection measures proposed for the main study. The pilot study spanned three phases (Phase 1: March 2018 to July 2019; Phase 2: October 2018 to present; Phase 3: September 2019 to present).</p>
          <h3><strong>Executive &amp; Leadership Group</strong></h3>
          <p>The project is guided by an international Leadership Group comprising a member from each major continent/region (Oceania, North America, South America, Europe, Asia, and Africa), including representation from each HDI level, along with the project statistician, WHO representative, and external advisor. This group is responsible for developing the protocols for the study, including but not limited to ethical considerations, sampling units and recruitment, governance, budget, data management, training of staff, quality assurance, communications, and publications.</p>
          <h3 id='execgroup'><strong>Executive</strong></h3>
          <ul id='exg'>
            <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={tonyimage} />
              <CCardBody><br/>
                <CCardText>
                  <strong>Tony Okely</strong> <br/>(Australia)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
            <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={johnimage} />
              <CCardBody><br/>
                <CCardText>
                <strong>John Reilly</strong> <br/>(Scotland)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
            <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={markimage} />
              <CCardBody><br/>
                <CCardText>
                <strong> Mark Tremblay</strong> <br/>(Canada)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
          </ul>
          <h3 id='execgroup'><strong>Leadership Group</strong></h3>
          <ul id='lsg'>
          <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={catherineimage} />
              <CCardBody><br/>
                <CCardText>
                <strong>Catherine Draper</strong> <br/>(South Africa)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
            <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={bangimage} />
              <CCardBody>
                <CCardText>
                <strong>Bang Nguyen Pham</strong> <br/>(Papua New Guinea)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
            <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={aleximage} />
              <CCardBody><br/>
                <CCardText>
                <strong>Alex Florindo</strong> <br/>(Brazil)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
            <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={guanimage} />
              <CCardBody><br/>
                <CCardText>
                <strong>Guan Hongyan</strong> <br/>(China)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
          </ul>
          <ul>
          <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={peterimage} />
              <CCardBody><br/>
                <CCardText>
                <strong>Peter Katzmarzyk</strong> <br/>(USA)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
            <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={thomasimage} />
              <CCardBody><br/>
                <CCardText>
                <strong>Thomas Suesse</strong> <br/>(Australia)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
            <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={asmaaimage} />
              <CCardBody>
                <CCardText>
                <strong>Asmaa El Hamdouchi</strong> <br/>(Morocco)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
            <li>
            <CCard style={{ width: '200px' }}>
              <CCardImage orientation="top" src={himangiimage} />
              <CCardBody><br/>
                <CCardText>
                <strong>Himangi Lubree</strong> <br/>(India)
                </CCardText>
              </CCardBody>
            </CCard>
            </li>
          </ul>
          <div className='aboutfooter'>
            <div>
              <h2>Observers</h2>
              <p>Juana Willumsen (WHO Representative, Geneva)</p>
              <p>Fiona Bull (WHO Representative, Geneva)</p>
              <p>Deepika Sharma (UNICEF, New York)</p>
            </div>
          <div >
            <p id='check'>Check Out --&gt;</p>
            <div className='chieflink'>
              <Link to="/chiefinvestigators" target='_blank' style={{color:'white', textDecoration: 'none'}}>
                List of all the Chief Investigators
              </Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
