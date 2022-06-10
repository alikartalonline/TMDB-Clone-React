import React from 'react'
import './Article.css'


function Article() {
    return (
        <div className='container mt-5'>

            <div className='row'>
                <div className='d-flex'>
                    <div className='col-md-12 col-lg'>
                        <h2 className='titlesection text-dark '>Liderler Sıralaması</h2>
                    </div>

                    <div className=' col-lg'>
                        <p className='dotp'>
                            Tüm Zaman Düzenlemeleri

                            <span className='dot dotgreen'>
                            </span>
                        </p>

                        <p className='dotp'>
                            Bu Hafta Yapılan Düzenlemeler

                            <span className='dot dotred'>
                            </span>
                        </p>
                    </div>


                    <div className='col-md'>
                    </div>
                    <div className='col-md'>
                    </div>
                    <div className='col-md'>
                    </div>
                </div>
            </div>



            <div className='row'>

                {/* Each leader on the sign (1) */}
                <div className='col-sm-6 mt-3 mb-4'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">fzlins</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "20%" }}>
                                    </div>
                                    <h4 className='volume '>33,553</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "90%" }}>
                                    </div>
                                    <h4 className='volume '>23,660</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Each leader on the sign (2) */}
                <div className='col-sm-6 mt-3'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">alikartalonline</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "100%" }}>
                                    </div>
                                    <h4 className='volume '>999,999</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "100%" }}>
                                    </div>
                                    <h4 className='volume '>999,999</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Each leader on the sign (3) */}
                <div className='col-sm-6'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">raze464</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "25%" }}>
                                    </div>
                                    <h4 className='volume '>337,185</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "40%" }}>
                                    </div>
                                    <h4 className='volume '>5,681</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Each leader on the sign (4) */}
                <div className='col-sm-6 mb-4'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">simonsmad</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "15%" }}>
                                    </div>
                                    <h4 className='volume '>26,438</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "50%" }}>
                                    </div>
                                    <h4 className='volume '>5,670</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Each leader on the sign (5) */}
                <div className='col-sm-6 mb-4'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">GenkiCocoa</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "10%" }}>
                                    </div>
                                    <h4 className='volume '>4,794</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "30%" }}>
                                    </div>
                                    <h4 className='volume '>4,788</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Each leader on the sign (6) */}
                <div className='col-sm-6 mb-4'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">Banana</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "80%" }}>
                                    </div>
                                    <h4 className='volume '>4,794</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "30%" }}>
                                    </div>
                                    <h4 className='volume '>4,788</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Each leader on the sign (7) */}
                <div className='col-sm-6 mb-4'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">qualitylover</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "10%" }}>
                                    </div>
                                    <h4 className='volume '>137,573</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "45%" }}>
                                    </div>
                                    <h4 className='volume '>4,010</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Each leader on the sign (8) */}
                <div className='col-sm-6 mb-4'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">Samara</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "90%" }}>
                                    </div>
                                    <h4 className='volume '>800,000</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "30%" }}>
                                    </div>
                                    <h4 className='volume '>3,950</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Each leader on the sign (9) */}
                <div className='col-sm-6 mb-4'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">heli5m</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "40%" }}>
                                    </div>
                                    <h4 className='volume '>371,320</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "45%" }}>
                                    </div>
                                    <h4 className='volume '>3,788</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Each leader on the sign (10) */}
                <div className='col-sm-6 mb-4'>
                    <div className='row'>
                        <div className='col-1'>
                            <img className='articlelogo' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg" width="50" height="50" alt="logo" />
                        </div>

                        <div className='col-11 '>
                            <h2 className='articletitle'>
                                <a href="/">BetaMagalhaes</a>
                            </h2>

                            {/* Leader Score Bars */}
                            <div className='meterall d-block '>

                                <div className='leaderscore gauge d-flex'>
                                    <div className='gauge' style={{ width: "10%" }}>
                                    </div>
                                    <h4 className='volume '>27,081</h4>
                                </div>

                                <div className='leaderscore gauge2 mt-2 d-flex'>

                                    <div className='gauge2' style={{ width: "55%" }}>
                                    </div>
                                    <h4 className='volume '>3,550</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Article