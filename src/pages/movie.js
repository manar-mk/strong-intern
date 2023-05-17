import { Button } from "../components/styledButtons";
import Aside from "../components/aside";
import imdb from '../assets/imdb.jpg';
import plus from '../assets/plus.svg';
import play from '../assets/play.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {Cast} from '../components/cast'
import { useEffect, useState, useCallback, useRef  } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../store/actions/movieActions";
import { getCastById, getCastSeriesById } from "../store/actions/castActions";
import YouTube from 'react-youtube';
import { Modal } from 'antd';
import { getVideoById, getVideoSeriesById } from "../store/actions/videoActions";
import { getSeriesById } from "../store/actions/seriesAction";



function Movie(props){
    const [data, setData] = useState([])
    const [castData, setCastData] = useState([])
    const [crewData, setCrewData] = useState([])
    const [videoData, setVideoData] = useState({})
    const { id, media } = useParams()
    const { movies, cast, video, series } = props;
    const playerRef = useRef(null); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const opts = {
        height: '70%',
        width: '70%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
   

    const showModal = useCallback(() => setIsModalOpen(true), []);
    const handleOk = useCallback(() => setIsModalOpen(false), []);
    const handleCancel = useCallback(() => {
        setIsModalOpen(false);
        if (playerRef.current) {
          playerRef.current.internalPlayer.stopVideo(); // Stop the video playback
        }
      }, []);

    
    useEffect(() => {
        if(media==="movie" || !media){
        Promise.all([
            props.getMovieByIdAction({ id }),
            props.getCastByIdAction({ id }),
            props.getVideoByIdAction({ id }),
        ])
        }else if(media==='tv'){
            Promise.all([
                props.getSeriesByIdAction({ id }),
                props.getCastSeriesByIdAction({ id }),
                props.getVideoSeriesByIdAction({ id })
            ])
        }
      }, [id, media, props.getMovieByIdAction, props.getCastByIdAction, props.getVideoByIdAction, props.getSeriesByIdAction, props.getCastSeriesByIdAction, props.getVideoByIdAction]);
    

    useEffect(() => {
        if(media==="movie" || !media){
            setData(movies);
            setCastData(cast.cast);
            setCrewData(cast.crew);
            if (video) {
                console.log(video)
                setVideoData(video.results);
            }
        }else if(media === 'tv'){
            setData(series)
            setCastData(cast.cast);
            setCrewData(cast.crew);
            if (video) {
                console.log(video)
                setVideoData(video.results);
            }
        }
    }, [movies, cast, video, series, media]);

    console.log(videoData)
      

    const mixGenres = useCallback(arr => {
        return arr.map(item => item.name).join(' ');
    }, []);
    return(
        <main className="movie main">
           <Aside></Aside>
           <section className="about random" style={data && { backgroundImage:`url(http://image.tmdb.org/t/p/w500/${data.backdrop_path})` }}>
                <div className="about-top random-top">
                    <h1>{data && data.title ? data.title : data.name}</h1>
                    <p>{data && data.overview}</p>
                    <p>
                        <span>Genres</span>
                        <br />
                        {
                            data && data.genres && mixGenres(data.genres)
                        }
                    </p>
                    <div className="buttons">
                        <Button $primary >WATCH <img src={play} alt="Play"/></Button>
                        <Button>MY LIST <img src={plus} alt="Plus"/></Button>
                    </div>
                    <div>
                        <img src={imdb} alt="Imdb"/>
                        <h3>{data && data.vote_average}</h3>
                        <p>U/A</p>
                        <p>4K</p>
                        <p>2015</p>
                    </div>
                </div>
                <div className="about-bottom random-bottom">
                    <div className="about-trailer" onClick={showModal}>
                            <h1>Trailer</h1>
                            <div className="trailer-poster" style={data && { backgroundImage: `url(http://image.tmdb.org/t/p/w500/${data.backdrop_path})` }}>
                                 <span><img src={play} alt="Play"/></span>
                            </div>
                    </div>
                    { videoData && 
                        <Modal title={data && data.title? data.title: data.name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <YouTube ref={playerRef} videoId={videoData && videoData.length && videoData[0].key} opts={opts} />
                        </Modal>
                    }
                    <div className="about-cast">
                        <h1>CAST AND CREW INFO</h1>
                        <Swiper
                        slidesPerView={6}
                        spaceBetween={20}
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
                            castData && 
                            castData.map((item, index) =>{
                                return(
                                    <SwiperSlide>
                                        <Cast name={item.name} character={item.character} img={item.profile_path} key={`cast-${index}`}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                        {
                            crewData && 
                            crewData.map((item, index) =>{
                                return(
                                    <SwiperSlide>
                                        <Cast name={item.name} job={item.job} img={item.profile_path} key={`crew-${index}`}/>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                        <div>
                            <Button $primary>Show More</Button>
                        </div>
                    </div>
                </div>
           </section>
        </main>
    )
}

const mapDispatchToProps = dispatch => ({
    getMovieByIdAction: bindActionCreators(getMovieById, dispatch),
    getCastByIdAction: bindActionCreators(getCastById, dispatch),
    getVideoByIdAction: bindActionCreators(getVideoById, dispatch),
    getSeriesByIdAction: bindActionCreators(getSeriesById, dispatch),
    getCastSeriesByIdAction: bindActionCreators(getCastSeriesById, dispatch),
    getVideoSeriesByIdAction: bindActionCreators(getVideoSeriesById, dispatch)
})

const mapStateToProps = state => ({
    movies: state.moviesReducers.details,
    cast: state.castReducers.cast,
    video: state.videoReducers.video,
    series: state.seriesReducers.series,
})

export default  connect(mapStateToProps, mapDispatchToProps)(Movie)