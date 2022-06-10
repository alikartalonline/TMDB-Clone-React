import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Section.css'

function Section3th() {

    const [movies, setMovies] = useState([]);

    

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => setMovies(res.data.results))
            .catch(e => console.log("error:", e))
    }, [])

  return (
    <div>
    <div className='container mt-5'>


        <div className='row'>
            <div className='d-flex'>
                <div className='col-md-12 col-lg'>
                    <h2 className='titlesection text-dark '>Trend</h2>
                </div>

                <div className='selector3th col-lg'>
                    <div className='anchor selected'>
                        <h3 className='selectortitle'>
                            <a href="#" className='selectora'>
                                Bugün
                            </a>
                            <div
                                className='background'
                            ></div>
                        </h3>
                    </div>

                    <div className='anchor'>
                        <h3 className='selectortitle'>
                            <a href="#" className='selectora'>
                                Bu Hafta
                            </a>
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
            <div className='scroller section3thbackground '>

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
                        >
                            <div
                                className={
                                item.vote_average > 0 && item.vote_average < 2.5 ? "progress-bar bg-secondary.bg-gradient"
                                : item.vote_average > 2.5 && item.vote_average < 5.0 ? "progress-bar bg-danger bg-gradient"
                                : item.vote_average > 5.0 && item.vote_average < 6.0 ? "progress-bar bg-danger"
                                : item.vote_average > 6.0 && item.vote_average < 7.0 ? "progress-bar bg-warning bg-gradient"
                                : item.vote_average > 7.0 && item.vote_average < 8.0 ? "progress-bar bg-info bg-gradient"
                                : item.vote_average > 8.0 && item.vote_average < 9.0 ? "progress-bar bg-primary bg-gradient"
                                : item.vote_average > 9.0 && item.vote_average < 10.0 ? "progress-bar bg-success bg-gradient"
                                : ""}

                                role="progressbar"

                                style={{
                                    width: `${item.vote_average > 0 && item.vote_average < 2.5 ? "25%"
                                        : item.vote_average > 2.5 && item.vote_average < 5.0 ? "50%"
                                        : item.vote_average > 5.0 && item.vote_average < 6.0 ? "60%"
                                        : item.vote_average > 6.0 && item.vote_average < 7.0 ? "70%"
                                        : item.vote_average > 7.0 && item.vote_average < 8.0 ? "80%"
                                        : item.vote_average > 8.0 && item.vote_average < 9.0 ? "90%"
                                        : item.vote_average > 9.0 && item.vote_average < 10.0 ? "100%"
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
                                            <span className='icon' >
                                                {item.vote_average * 10}
                                            </span>
                                            <div className='canvas' >%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* card title and date */}
                        <h3 className="card-title cardbody"><strong>{item.title || item.name}</strong></h3>
                        <p className="card-text cardbody fw-light">{item.release_date || item.first_air_date}</p>

                    </div>
                ))
            }
            </div>
        </section>
    </div>
</div>
  )
}

export default Section3th