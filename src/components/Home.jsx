import React from "react";


function Home() {
    return (
        <div id="home" className="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <h5 className="welcome-greet">HEY THERE ! 👋 </h5>
                        <h1 className="fName">{`I'm Karan ` }</h1>
                        <h1 className="lName">Khanna.</h1>
                        <p id="typewriter"></p>
                        <p class="intro">I'm a Senior Undergraduate Student at Electronics & Communication Engineer department, at Indian Institute of Information Technology, Pune. <br />I would love to work at the union of Web Dev & Machine Learning.</p>
                        <a class="btn btn-outline-primary btn-lg contact1" href="to" role="button">Get in Touch!</a>
                        <div className="social-icons-group">
                            <a href="#"><i className="social-icon fab fa-linkedin"></i></a>
                            <a href="#"><i className="social-icon fab fa-github-square"></i></a>
                            <a href="#"><i className="social-icon fab fa-instagram"></i></a>
                            <a href="#"><i className="social-icon fab fa-twitter-square"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;