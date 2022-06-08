import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Section.css'



function Section() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios("https://api.themoviedb.org/3/movie/popular?api_key=ebac3bbaf26b83349c6f0cda7ed8642c&language=en-US&page=1#")
            .then(res => setMovies(res.data.results))
            .catch(e => console.log("error:", e))
    }, [])




    return (
        <div>
            <div className='container mt-4'>


                <div className='row'>
                    <div className='d-flex'>
                        <div className='col-md'>
                            <h2 className='titlesection text-dark '>Popüler Olanlar</h2>
                        </div>

                        <div className='selector col-md'>
                            <div className='anchor selected'>
                                <h3 className='selectortitle'>
                                    <a href="#" className='selectora'>
                                        Yayın Akışı
                                    </a>
                                    <div
                                        className='background'
                                    ></div>
                                </h3>
                            </div>

                            <div className='anchor'>
                                <h3 className='selectortitle'>
                                    <a href="#" className='selectora'>
                                        Televizyonda
                                    </a>
                                    <div
                                        className='background hide'
                                    ></div>
                                </h3>
                            </div>

                            <div className='anchor'>
                                <h3 className='selectortitle'>
                                    <a href="#" className='selectora'>
                                        Kiralık
                                    </a>
                                    <div
                                        className='background hide'
                                    ></div>
                                </h3>
                            </div>


                            <div className='anchor'>
                                <h3 className='selectortitle'>
                                    <a href="#" className='selectora'>
                                        Sinemalarda                                    </a>
                                    <div
                                        className='background hide'
                                    ></div>
                                </h3>
                            </div>

                        </div>


                        <div className='col-md'>
                        </div>
                        <div className='col-md'>
                        </div>
                        <div className='col-md'>
                        </div>
                    </div>
                </div>

                <section className='row ' >
                    <div className='scroller '>

                    {
                        movies.map((item, key) => (
                            <div className="card mt-3 col-sm-2 border-0  sectioncard" key={item.id}>

                                {/* card img  */}
                                <img
                                    src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${item.poster_path}`}
                                    className="card-img-top sectionimg"
                                    alt="card img"
                                />

                                {/* score bar */}
                                <div className="progress"
                                // style={{ width: "100%" }}
                                >
                                    <div
                                        className={
                                        item.vote_average > 0 && item.vote_average < 2.5 ? "progress-bar bg-danger"
                                        : item.vote_average > 2.5 && item.vote_average < 5.0 ? "progress-bar bg-warning"
                                        : item.vote_average > 5.0 && item.vote_average < 7.5 ? "progress-bar bg-info"
                                        : item.vote_average > 7.5 && item.vote_average < 10.0 ? "progress-bar bg-success"
                                        : ""}

                                        role="progressbar"

                                        style={{
                                            width: `${item.vote_average > 0 && item.vote_average < 2.5 ? "25%"
                                                : item.vote_average > 2.5 && item.vote_average < 5.0 ? "50%"
                                                : item.vote_average > 5.0 && item.vote_average < 7.5 ? "75%"
                                                : item.vote_average > 7.5 && item.vote_average < 10.0 ? "100%"
                                                : ""}`
                                        }}
                                    >
                                    </div>
                                </div>

                                {/* score %  */}
                                <div className='contenticon '>
                                    <div className='consensus tight '>
                                        <div className='outer_ring'>
                                            <div className='user_score_chart '>
                                                <div className='percent'>
                                                    <span className='icon'>
                                                        {Math.round(item.vote_average)}0
                                                    </span>
                                                    <div className='canvas' >%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* card title and date */}
                                <h3 className="card-title cardbody"><strong>{item.title}</strong></h3>
                                <p className="card-text cardbody fw-light">{item.release_date}</p>

                            </div>
                        ))
                    }
                    </div>

                </section>






            </div>
        </div>
    )
}

export default Section