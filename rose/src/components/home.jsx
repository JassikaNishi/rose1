import React from "react";
import "./home.css";

function Home() {
    const userName = localStorage.getItem("userName");

    return (
        <>
            <div className="home">
                <h2>Welcome, {userName}!</h2>
            </div>

            <video src='./background.mp4' loop autoPlay muted />
            
            <div className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo1"></span>
                        ROSE
                    </div>
                </div>

                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a>
                        <div className="dropdown">
                            <a href="#aboutus">About Us</a>
                            <a href="#product">About Our Product</a>
                        </div>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                        <div className="dropdown">
                            <a href="#nayan">Nayan</a>
                            <a href="#pookie">Pookie</a>
                            <a href="#lipi">Lipi</a>
                            <a href="#mudrayan">Mudrayan</a>
                        </div>
                    </li>
                    <li>
                        <a href="#team">Our Team</a>
                        <div className="dropdown">
                            <a href="#member1">Ketan Chouhan</a>
                            <a href="#member2">Vrisha Prikh</a>
                            <a href="#member3">Ishaan Sharma</a>
                            <a href="#member4">Jassika</a>
                            <a href="#member5">Kiran Dudi</a>
                            <a href="#member6">Priyomedha Ghosh</a>
                        </div>
                    </li>
                    <li>
                        <a href="#account">Account</a>
                        <div className="dropdown">
                            <a href="#login">Login</a>
                            <a href="#signup">Sign Up</a>
                        </div>
                    </li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

            <div id="home" className="content-section">
                <div className="centered-text">
                    ROSE
                </div>
            </div>
            <div className="separator section-content"></div>

            <div className="welcome-section">
                <div className="content-overlay">
                    <div className="section-title">Welcome to ROSE</div>
                    <div className="section-content">
                        We are a dynamic team of tech enthusiasts dedicated to bringing innovative solutions to the market. Our
                        passion for technology drives us to create products that not only meet the needs of today but also
                        anticipate the demands of tomorrow. Explore our site to learn more about our services, our team, and how
                        we can help you achieve your goals.
                    </div>
                </div>
            </div>

            <div id="product" className="content-section solid-background alternate-align">
                <div className="section-title">About Our Product</div>
                <div className="section-content">
                    Our flagship product is a cutting-edge platform designed to streamline business processes and enhance
                    productivity. With user-friendly features and robust functionality, our platform is tailored to meet the
                    needs of entrepreneurs and small businesses. Whether you're looking to manage projects, track progress, or
                    collaborate with your team, our product has you covered.
                </div>
            </div>

            <div id="nayan" className="content-section solid-background">
                <div className="section-title">Nayan</div>
                <div className="section-content">
                    Nayan is an innovative AI-powered eye device integrated into your glasses. It serves as a smart assistant,
                    offering real-time information and hands-free navigation, making it an essential tool for tech-savvy
                    individuals on the go.
                </div>
            </div>

            <div id="pookie" className="content-section solid-background alternate-align">
                <div className="section-title">Pookie</div>
                <div className="section-content">
                    Pookie is a compact robotic device that surpasses the capabilities of a traditional phone. It features
                    advanced AI for seamless communication, smart home control, and personal assistance, bringing futuristic
                    convenience to your daily life.
                </div>
            </div>

            <div id="lipi" className="content-section solid-background">
                <div className="section-title">Lipi</div>
                <div className="section-content">
                    Lipi is a user-friendly platform designed for readers in small areas and those looking to learn English or
                    sign language. With a wealth of resources and interactive lessons, Lipi makes learning accessible and
                    enjoyable for everyone.
                </div>
            </div>

            <div id="mudrayan" className="content-section solid-background alternate-align">
                <div className="section-title">Mudrayan</div>
                <div className="section-content">
                    Mudrayan is a state-of-the-art device designed to teach sign language. It offers interactive tutorials and
                    real-time feedback, making it an invaluable tool for those looking to communicate effectively using sign
                    language.
                </div>
            </div>

            <div id="team" className="content-section diamond-align">
                <div className="section-title">Meet Our Team</div>
                <div className="section-content">
                    <div className="team-member lefty">
                        <img src="./vite.svg" alt="Ketan Chouhan" />
                        <p><strong>Ketan Chouhan:</strong> Our visionary leader with a passion for innovation and
                            entrepreneurship.</p>
                    </div>
                    <div className="team-member alt righty">
                        <img src="./vite.svg" alt="Vrisha Prikh" />
                        <p><strong>Vrisha Prikh:</strong> A business strategist with a knack for identifying opportunities and
                            driving growth.</p>
                    </div>
                    <div className="team-member lefty">
                        <img src="./vite.svg" alt="Ishaan Sharma" />
                        <p><strong>Ishaan Sharma:</strong> A tech guru with expertise in software development and system
                            architecture.</p>
                    </div>
                    <div className="team-member alt righty">
                        <img src="./vite.svg" alt="Jassika" />
                        <p><strong>Jassika:</strong> A creative designer with a talent for crafting beautiful and intuitive user
                            experiences.</p>
                    </div>
                    <div className="team-member lefty">
                        <img src="./vite.svg" alt="Kiran Dudi" />
                        <p><strong>Kiran Dudi:</strong> Our marketing expert, skilled in promoting products and building brand
                            awareness.</p>
                    </div>
                    <div className="team-member alt righty">
                        <img src="./vite.svg" alt="Priyomedha Ghosh" />
                        <p><strong>Priyomedha Ghosh:</strong> A project manager who ensures everything runs smoothly and on
                            schedule.</p>
                    </div>
                </div>
            </div>

            <div id="contact" className="content-section solid-background">
                <div className="section-title">Contact Us</div>
                <div className="section-content">
                    Have any questions or want to get in touch? Contact us at <a href="mailto:email@example.com">email@example.com</a> or call us at <a href="tel:+1234567890">123-456-7890</a>. We look forward to hearing from you!
                </div>
            </div>

            <footer className="copyright">
                &copy; 2024 ROSE. All rights reserved.
            </footer>
           

        </>
    );
}

export default Home;
