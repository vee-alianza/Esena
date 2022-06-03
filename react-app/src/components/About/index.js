import "./index.css";

const About = () => {
    return (
        <>
            <div className="developers-container">
                <h1>For devs, by devs</h1>
                <p>
                    Esena is a project management app where users can create, view, update and delete a project and tasks
                </p>
                <div className="inner-dev-container">
                    <div className="dev-profile">
                        <img className="dev-img" src="/images/ethan.png" />
                        <h3 className="dev-name">Ethan Chen</h3>
                        {/* <p className="dev-area">Los Angeles, California</p> */}
                        <div className="logo-container">
                            <a href="https://github.com/ethanchen7"><i class="fa-brands fa-github-square fa-2x" ></i></a>
                            <a href="https://www.linkedin.com/in/ethan-chen-3b7070127/"><i class="fa-brands fa-linkedin fa-2x" ></i></a>
                        </div>
                    </div>
                    <div className="dev-profile">
                        <img className="dev-img" src="https://user-images.githubusercontent.com/92604480/171740072-78640cb3-f7e2-4539-bc85-7a813440d9be.png" />
                        <h3 className="dev-name">Lana Komar</h3>
                        {/* <p className="dev-area">East Bay, California</p> */}
                        <div className="logo-container">
                            <a href="https://github.com/lanakomar"><i class="fa-brands fa-github-square fa-2x" ></i></a>
                            <a href="https://www.linkedin.com/in/lana-komar/"><i class="fa-brands fa-linkedin fa-2x" ></i></a>
                        </div>
                    </div>
                    <div className="dev-profile">
                        <img className="dev-img" src="/images/vee.png" />
                        <h3 className="dev-name">Vee Alianza</h3>
                        {/* <p className="dev-area">Eagle Mountain, Utah</p> */}
                        <div className="logo-container">
                            <a href="https://github.com/vee-alianza"><i class="fa-brands fa-github-square fa-2x" ></i></a>
                            <a href="https://www.linkedin.com/in/vee-alianza/"><i class="fa-brands fa-linkedin fa-2x" ></i></a>
                        </div>
                    </div>
                    <div className="dev-profile">
                        <img className="dev-img" src="/images/xiaowen.png" />
                        <h3 className="dev-name">Xiaowen Nie</h3>
                        {/* <p className="dev-area">Sunnyvale, California</p> */}
                        <div className="logo-container">
                            <a href="https://github.com/xwnnie"><i class="fa-brands fa-github-square fa-2x" ></i></a>
                            <a href="https://www.linkedin.com/in/xiaowennie/"><i class="fa-brands fa-linkedin fa-2x" ></i></a>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default About;
