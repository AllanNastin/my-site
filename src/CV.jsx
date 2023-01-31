import * as React from "react";
import "./Text.css";
import "./CV.css";
import "./Grid.css";

export const CV = () => {
  return (
    <div className="text-centre cv-body margin-bottom">
      <overview>
        <h1 className="text-background padding-top-bottom margin-bottom-small">
          Allan Manuel Nastin
        </h1>
        <div className="parent-div margin-left margin-right margin-bottom-small grid-left-main-right text-left">
          <div className="grid-left grid-first">
            <li className="custom-marker">Skills:</li>
          </div>
          <div className="grid-left grid-second">
            <li className="custom-marker">Education:</li>
          </div>
          <div className="grid-left grid-third">
            <li className="custom-marker">Activities:</li>
          </div>
          <div className="grid-fourth">
            <li className="custom-marker">Occupation:</li>
          </div>
          <div className="grid-fifth">
            <li className="custom-marker">Interests:</li>
          </div>
          <div className="grid-right grid-first">
            <p>
              Java, Python, React JS, HTML, CSS, Arm Assembly, Processing, C,
              Scratch, Russian
            </p>
          </div>
          <div className="grid-right grid-second">
            <p>2nd year Computer Science Student in Trinity College Dublin</p>
          </div>
          <div className="grid-right grid-third">
            <p>Website Development, Audio, Visuals, Youth Leading</p>
          </div>
          <div className="grid-right grid-fourth">
            <p>
              Russian Interperter at{" "}
              <a href="https://www.translation.ie" className="default-link">
                Translation.ie
              </a>
            </p>
          </div>
          <div className="grid-right grid-fifth">
            <p>Coding, IT</p>
          </div>
        </div>
      </overview>
      <summary className="margin-left margin-right auto-width margin-bottom-small">
        <div className="text-background">
          <h4 className="">
            <li className="custom-marker-double text-left">Summary</li>
          </h4>
        </div>
        <div className="margin-left-two margin-right-two">
          <p className="text-left">
            I am Allan - a Computer Science student at Trinity College Dublin. I
            have been interested in programming for a long time. I have a
            passion for creating things and I am always looking to learn more. I
            am a creative person who likes to think outside the box and I am
            always looking to improve my skills and qualifications.
            <br />I have recently finished my two month position as a Student IT
            Advisor at Trinity College Dublin as this was a part time position.
            <br />
            When I am not stuyding I interpret Russian at Translation.ie all
            over Ireland. I often work with people who have just moved to
            Ireland, have a language barrier and need assistance in getting
            started.
          </p>
        </div>
      </summary>
      <br />

      <experience>
        <tcdit>
          <div className="text-background margin-left margin-right auto-width margin-bottom-small">
            <h4 className="">
              <li className="custom-marker-double text-left">Experience</li>
            </h4>
          </div>
          <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two">
            <div className="grid-left">
              <p className="text-left">09/22 - 11/22</p>
            </div>
            <div className="grid-middle">
              <p className="text-left bold">Student IT Advisor</p>
            </div>
            <div className="grid-right">
              <p className="text-right fade">
                <a
                  href="https://www.tcd.ie/itservices/"
                  className="default-link"
                >
                  Trinity IT Services
                </a>
              </p>
            </div>
          </div>
          <hr className="margin-left-two  margin-right-two" />
          <div className="grid-left-main-right margin-right-two margin-left-two">
            <div className="grid-right">
              <li className="text-left custom-marker">
                Duties included: Understanding and resolving IT issues,
                providing IT support to students. Working with the IT team to
                improve the IT services provided to students.
              </li>
              <li className="text-left custom-marker">
                Skills used: Communication • Problem Solving • Organisation •
                Teamwork • IT Skills • Customer Service • Time Management •
                Adaptability • Attention to Detail • Patience • Troubleshooting
                • Troubleshooting
              </li>
            </div>
          </div>
        </tcdit>

        <translation>
          <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two margin-top-half">
            <div className="grid-left">
              <p className="text-left">05/22 - Now</p>
            </div>
            <div className="grid-middle">
              <p className="text-left bold">Interperter</p>
            </div>
            <div className="grid-right">
              <p className="text-right fade">
                <a href="https://www.translation.ie" className="default-link">
                  Translation
                </a>
              </p>
            </div>
          </div>
          <hr className="margin-left-two  margin-right-two" />
          <div className="grid-left-main-right margin-right-two margin-left-two">
            <div className="grid-right">
              <li className="text-left custom-marker">
                Duties include: Interpretation between Russian and English,
                Being sure that the client understands the information.
              </li>
              <li className="text-left custom-marker">
                Clients include: Addiction Services, Courts, Department Of
                Social Protection, Garda Stations, Hospitals, Immigration
                Services, Solocitors
              </li>
              <li className="text-left custom-marker">
                Skills: Interpreting • Simultaneous Interpretation • Consecutive
                Interpretation • Russian • English • Confidentiality
              </li>
            </div>
          </div>
        </translation>

        <ccs>
          <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two margin-top-half">
            <div className="grid-left">
              <p className="text-left">02/19 - 08/22</p>
            </div>
            <div className="grid-middle">
              <p className="text-left bold">Cleaner & Supervisor</p>
            </div>
            <div className="grid-right">
              <p className="text-right fade">
                <a href="https://www.ccscleaning.com" className="default-link">
                  CCS
                </a>
              </p>
            </div>
          </div>
          <hr className="margin-left-two margin-right-two" />
          <div className="grid-left-main-right margin-right-two margin-left-two">
            <div className="grid-right">
              <li className="text-left custom-marker">
                Duties included: Supervising, Time sheet submission, Deligating
                daily tasks, Sweeping floors, Washing floors with machines,
                Sanitising surfaces, Cleaning cash registers, Toilets, canteens,
                Sanitising post Covid case suspicion.
              </li>
              <li className="text-left custom-marker">
                Skills: Team Management • Time Management • Cleaning Validation
                • Timesheet • Timekeeping • Teaching • Training • Technical
                Support
              </li>
            </div>
          </div>
        </ccs>

        <br />
      </experience>

      <education>
        <cs>
          <div className="text-background margin-left margin-right auto-width margin-bottom-small">
            <h4 className="">
              <li className="custom-marker-double text-left">Education</li>
            </h4>
          </div>
          <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two">
            <div className="grid-left">
              <p className="text-left">2021 - 2025</p>
            </div>
            <div className="grid-middle">
              <p className="text-left bold">
                Computer Science Honours Bachelor Degree
              </p>
            </div>
            <div className="grid-right">
              <p className="text-right fade">
                <a
                  href="https://www.tcd.ie/courses/undergraduate/courses/computer-science/"
                  className="default-link"
                >
                  Trinity College Dublin
                </a>
              </p>
            </div>
          </div>
          <hr className="margin-left-two  margin-right-two" />
          <div className="grid-left-main-right margin-right-two margin-left-two">
            <div className="grid-right">
              <li className="text-left custom-marker">
                Languages Learnt: Java, Arm Assembly, Processing, C, Verilog,
                VHDL
              </li>
              <li className="text-left custom-marker">
                Skills Learnt: Managing Time, Problem Solving, Teamwork,
                Communication, Creativity, Leadership
              </li>
            </div>
          </div>
        </cs>

        <lc>
          <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two margin-top-half">
            <div className="grid-left">
              <p className="text-left">2015 - 2021</p>
            </div>
            <div className="grid-middle">
              <p className="text-left bold">Leaving Certificate</p>
            </div>
            <div className="grid-right">
              <p className="text-right fade">
                <a href="https://www.lucancc.ie" className="default-link">
                  Lucan Community College
                </a>
              </p>
            </div>
          </div>
          <hr className="margin-left-two margin-right-two" />
          <div className="grid-left-main-right margin-right-two margin-left-two">
            <div className="grid-right">
              <li className="text-left custom-marker">
                Subjects: Business, Music, Applied Maths, Physics, Russian,
                English, Maths, Irish, French
              </li>
              <li className="text-left custom-marker">
                Activities: Coder Dojo, Badminton, Enterprise, Student Council
              </li>
              <li className="text-left custom-marker">
                Achievement: 499 CAO points
              </li>
            </div>
          </div>
        </lc>

        <riam>
          <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two margin-top-half">
            <div className="grid-left">
              <p className="text-left">2014 - 2017</p>
            </div>
            <div className="grid-middle">
              <p className="text-left bold">
                Grade 1 - 6 Honours Pianoforte Certificate (RIAM)
              </p>
            </div>
            <div className="grid-right">
              <p className="text-right fade">
                <a
                  href="https://www.riam.ie/riam-exams/about-our-exams"
                  className="default-link"
                >
                  Royal Irish Academy of Music
                </a>
              </p>
            </div>
          </div>
          <hr className="margin-left-two  margin-right-two" />
          <div className="grid-left-main-right margin-right-two margin-left-two">
            <div className="grid-right">
              <li className="text-left custom-marker">
                Summary: I have been playing piano from the age of 4. These
                certifications required daily practice and weekly lessons. I
                have also participated in a number of concerts and competitions
                in school.
              </li>
            </div>
          </div>
        </riam>

        <br />
      </education>

      <activities>
        <div className="text-background margin-left margin-right auto-width margin-bottom-small">
          <h4 className="">
            <li className="custom-marker-triple text-left">
              Activities and Projects
            </li>
          </h4>
        </div>

        <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two">
          <div className="grid-left">
            <p className="text-left">2022 - Now</p>
          </div>
          <div className="grid-middle">
            <p className="text-left bold">Web Development</p>
          </div>
        </div>
        <hr className="margin-left-two margin-right-two" />
        <div className="grid-left-main-right margin-right-two margin-left-two">
          <div className="grid-right">
            <li className="text-left custom-marker">FrameWork: React JS</li>
            <li className="text-left custom-marker">
              Project: Couple personal projects that are currently in
              development and too small to be listed here.
            </li>
          </div>
        </div>

        <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two margin-top-half">
          <div className="grid-left">
            <p className="text-left">2022</p>
          </div>
          <div className="grid-middle">
            <p className="text-left bold">CoderDojo Mentor</p>
          </div>
          <div className="grid-right">
            <p className="text-right fade">Trinity CoderDojo</p>
          </div>
        </div>
        <hr className="margin-left-two margin-right-two" />
        <div className="grid-left-main-right margin-right-two margin-left-two">
          <div className="grid-right">
            <li className="text-left custom-marker">
              Mentoring students in their journey with Scratch in the Trinity
              CoderDojo
            </li>
            <li className="text-left custom-marker">
              Activities: Guiding students to bringing their creative ideas to
              life with Scratch code
            </li>
          </div>
        </div>

        <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two margin-top-half">
          <div className="grid-left">
            <p className="text-left">2019 - Now</p>
          </div>
          <div className="grid-middle">
            <p className="text-left bold">Youth Leader</p>
          </div>
          <div className="grid-right">
            <p className="text-right fade">
              <a
                href="https://www.grace.ie/courses/#:~:text=1.,background."
                className="default-link"
              >
                Grace Bible Fellowship
              </a>
            </p>
          </div>
        </div>
        <hr className="margin-left-two  margin-right-two" />
        <div className="grid-left-main-right margin-right-two margin-left-two">
          <div className="grid-right">
            <li className="text-left custom-marker">
              Youth leader for local Youth Club.
            </li>
            <li className="text-left custom-marker">
              Activities: Leading games, activities and group discussions,
              Organising Events, Working with other youth leaders to make the
              club a fun and safe place for the youth.
            </li>
          </div>
        </div>
        <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two margin-top-half">
          <div className="grid-left">
            <p className="text-left">2016 - Now</p>
          </div>
          <div className="grid-middle">
            <p className="text-left bold">Audio & Visual Technician</p>
          </div>
          <div className="grid-right">
            <p className="text-right fade">
              <a href="https://www.grace.ie/" className="default-link">
                Grace Bible Fellowship
              </a>
            </p>
          </div>
        </div>
        <hr className="margin-left-two  margin-right-two" />
        <div className="grid-left-main-right margin-right-two margin-left-two">
          <div className="grid-right">
            <li className="text-left custom-marker">
              Audio & Visual Technician for local church and Youth Club on a
              weekly basis.
            </li>
            <li className="text-left custom-marker">
              Audio: Mixing, Recording, Microphone placement, Audio routing, EQ
            </li>
            <li className="text-left custom-marker">
              Visuals: Displaying content on a tv screen, Video Recording, Video
              Editing
            </li>
          </div>
        </div>
        <div className="grid-left-minor-middle-right-minor margin-left-two margin-right-two margin-top-half">
          <div className="grid-left">
            <p className="text-left">2016 - 2021</p>
          </div>
          <div className="grid-middle">
            <p className="text-left bold">YouTube Content Creator</p>
          </div>
          <div className="grid-right">
            <p className="text-right fade">YouTube</p>
          </div>
        </div>
        <hr className="margin-left-two  margin-right-two" />
        <div className="grid-left-main-right margin-right-two margin-left-two">
          <div className="grid-right">
            <li className="text-left custom-marker">
              Skills Learnt: Video Production, Video Editing, Script Writing
            </li>
          </div>
        </div>
      </activities>
    </div>
  );
};
