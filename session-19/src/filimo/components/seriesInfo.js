import {seriesInfo} from '../data'
export default function SeriesInfo(props){
    return props.data.map(function(info){
        return(
            <li>
                <div className="background-wrapper"></div>
                <div className="textContent">
                    <div className="title"><a href={info.link}>{info.title}</a></div>
                    <div className="enName">{info.enName}</div>
                    <div className="director">{info.director}</div>
                    <div className="extraInfo">
                        <div className="rate">{info.rate}</div>
                        <div className="genre-1">{info.genre.g1}</div>
                        <div className="genre-2">{info.genre.g2}</div>
                    </div>
                    <div className="brief"><p>{info.brief}</p></div>
                </div>
                <div className="episodes">
                    <ul>
                        <Episodes data={info.episodes}></Episodes>
                    </ul>
                </div>
            </li>
        )
    })
    function Episodes(props){
        return props.data.map(function(episode){
            return (
                <li>
                    <a href={episode.link}>
                        <img src={episode.video}/>
                        <div>{episode.title}</div>
                    </a>
                </li>
            )
        })
    }
}