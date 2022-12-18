import React from 'react'

function Footer(props) {
    return (
        <>
            <div className={`my-5 mx-2 text-black`}>
                <footer className={`bg-${props.mode}`}>
                    <div className="container p-4 pb-0">
                        <div className={`text-center p-3 bg-${props.mode} `}>
                            <section className="mb-4">
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#3b5998" }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-facebook-f"></i></a>

                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#55acee" }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-twitter"></i></a>

                                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="#!" role="button"
                                ><i className="fab fa-google"></i></a>

                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#ac2bac" }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-instagram"></i></a>
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#0082ca" }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-linkedin-in"></i></a>
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: "#333333" }}
                                    href="#!"
                                    role="button"
                                ><i className="fab fa-github"></i></a>
                                <p>© 2020 Copyright:
                                    Text Editor By Mujtaba</p>
                            </section>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer