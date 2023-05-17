import Aside from "../components/aside";
import name from '../assets/image.png';
import plus from '../assets/plus.svg';
import play from '../assets/play.svg';
import imdb from '../assets/imdb.jpg';
import { Button } from "../components/styledButtons";
import React, { useEffect, useRef, useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../components/card";
import { getPopularMovies } from "../store/actions/movieActions";


function Main(props){
    const [data, setData] = useState([])
    useEffect(() => {
        props.getPopularMoviesAction();
      }, [props.getPopularMoviesAction]);
    
      useEffect(() => {
        setData(props.movies.results);
      }, [props.movies]);
      console.log(data)
    return(
        <main className="main">
           <Aside></Aside>
           <section className="random">
                <div className="random-top">
                    <img src={name} alt="Name"/>
                    <p>Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover his true self.</p>
                    <p>
                        <span>Genres</span>
                        <br />
                        Romance, Drama
                    </p>
                    <div className="buttons">
                        <Button $primary >WATCH <img src={play} alt="Play"/></Button>
                        <Button>MY LIST <img src={plus} alt="Plus"/></Button>
                    </div>
                    <div>
                        <img src={imdb} alt="Imdb"/>
                        <h3>7.3</h3>
                        <p>U/A</p>
                        <p>4K</p>
                        <p>2015</p>
                    </div>
                </div>
                <div className="random-bottom">
                    <div className="random-bottom--header">
                        <h1>MOVIES YOU MUST WATCH</h1>
                        <select>
                            <option>FILTERS</option>
                        </select>
                    </div>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },

                            880: {
                              slidesPerView: 5,
                            },

                            400:{
                                width:400,
                                slidesPerView:2
                            }
                           
                          }}
                        className="mySwiper"
                        
                    >
                        {
                            data && 
                            data.map((item, index) =>{
                                return(
                                    <SwiperSlide>
                                        <Card title={item.title} rating={item.vote_average} path={item.poster_path} id={item.id} key={`cinema-${index}`}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
           </section>
           <section className="recommend">
                <div>
                    <h1>RECOMMENDED FOR YOU</h1>
                    <div className="recommended-items">
                        <div className="category">
                            <a>Drama</a>
                            <a>Drama</a>
                            <a>Drama</a>
                            <a>Drama</a>
                            <a>Drama</a>
                            <a>Drama</a>
                            <a>Drama</a>
                            <a>Drama</a>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            // when window width is >= 640px
                            880: {
                              slidesPerView: 5,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                            400:{
                                width:400,
                                slidesPerView:2
                            }
                        }}
                        className="mySwiper"
                    >
                        {
                            data && 
                            data.map((item, index) =>{
                                return(
                                    <SwiperSlide>
                                        <Card title={item.title} rating={item.vote_average} path={item.poster_path} id={item.id} key={`movie-${index}`}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

                <div>
                    <h1>BOLLYWOOD CLASSICS</h1>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            // when window width is >= 640px
                            880: {
                              slidesPerView: 5,
                            },
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                            400:{
                                width:400,
                                slidesPerView:2
                            }

                        }}
                        className="mySwiper"
                    >
                        {
                            data && 
                            data.map((item, index) =>{
                                return(
                                    <SwiperSlide>
                                        <Card title={item.title} rating={item.vote_average} path={item.poster_path} id={item.id} key={`film-${index}`}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
                <div className="rec-btn">
                    <Button $primary>Show More</Button>
                </div>
           </section>
        </main>
    )
}

const mapDispatchToProps = dispatch => ({
    getPopularMoviesAction: bindActionCreators(getPopularMovies, dispatch),
})

const mapStateToProps = state => ({
    movies: state.moviesReducers.movies
})

export default  connect(mapStateToProps, mapDispatchToProps)(Main)
