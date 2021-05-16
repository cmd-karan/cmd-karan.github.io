import React from "react";

function About() {
  return (
    <div id="about" className="container">
      <div className="tumblr">
        <div className="heading-box">
          <h1 className="heading">About Me</h1>
        </div>

        <div className="row">
          <div className="col-md-5">
            <img src="./images/myPic.jpg" />
          </div>
          <div className="col-md-7">
            <h5 class="sub-heading">Get to know me!</h5>
            <p>
              I'm Karan, a Senior Undergraduate Student at the Electronics and
              Communiation Engineering Department, at Indian Institute of
              Information Technology Pune(
              <a className="left" href="#">
                IIITP
              </a>
              ), India.
            </p>
            <p>
              I love to write '<span>neat</span>' C++, JS & Python code. So, if
              you want to discuss anything, I will be happy, just drop an
              e-mail. But, don't ask my future plans in there.🤢
            </p>
            <p>
              Apart from this, I have spent my past three-years in polishing
              Programming skills and explored a lot in the field of
              Web-Designing and Machine Learning.
            </p>
            <p>
              Apart from these professional interests, I am so obsessed with
              talking and having never ending discussions in free time. 😉
            </p>
            <hr />
            <table className="bio">
            <tbody>
              <tr>
                <td>Name: Karan Khanna</td>
                <td>Email: khanna2karan@gmail.com</td>
              </tr>
              <tr>
                <td>From: Agra, India</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
