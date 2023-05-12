var rootElement = document.getElementById("root")
var seriesList = [
    {
        image : "https://static.cdn.asset.filimo.com/flmt/mov_134080_57057.jpg?width=165&quality=85&secret=3AnPFFn7kCoo2PgTDmydTQ",
    },
    {
        image : "https://static.cdn.asset.filimo.com/flmt/mov_134078_57040.jpg?width=165&quality=85&secret=QVtRINpAmxZSVEeds1_BvQ",
    },
    {
        image : "https://static.cdn.asset.filimo.com/flmt/mov_133828_56868.jpg?width=165&quality=85&secret=KEmN_3d8Rk_CkPO2ElTrSA",
    },
    {
        image : "https://static.cdn.asset.filimo.com/flmt/mov_134077_56979.jpg?width=165&quality=85&secret=rBQ-O24KigzVwn_LO_oEHw",
    },
    {
        image : "https://static.cdn.asset.filimo.com/flmt/mov_134076_56936.jpg?width=165&quality=85&secret=_CVtuKI6uRCAaUFSMZIXFw",
    },
    {
        image : "https://static.cdn.asset.filimo.com/flmt/mov_134075_56938.jpg?width=165&quality=85&secret=VdkUb5B6WwWfb9qJm4gtBA",
    },
]
function SeriesList(props){
    return props.data.map(function(series){
        return(
            <li>
                <img src={series.image}/>
            </li>
        )
    })
}
var seriesInfo = [
    {
        link : "https://www.filimo.com/m/131383",
        title : "رهایم کن",
        enName : "Set Me Free S01E13",
        director : "کارگردان: شهرام شاه حسینی",
        rate : "98%",
        genre : {
            g1 : "عاشقانه",
            g2 : "خانوادگی",
        },
        brief : "هاتف مارال را از اتفاقاتی در گذشته ی مارال آگاه می کند. این اتفاق مارال را وارد ملاقاتی می کند که باعث فاجعه ای غیر قابل بازگشت در رابطه با حاتم می شود...",
        episodes : [
            {
                video : "https://static.cdn.asset.filimo.com/flmt/mov_131384_53364-s.jpg",
                title : "فصل 1 قسمت 1",
                link : "https://www.filimo.com/w/wtif4",
            },
            {
                video : "https://static.cdn.asset.filimo.com/flmt/mov_131384_53364-s.jpg",
                title : "فصل 1 قسمت 2",
                link : "https://www.filimo.com/m/131383",
            },
            {
                video : "https://static.cdn.asset.filimo.com/flmt/mov_131384_53364-s.jpg",
                title : "فصل 1 قسمت 3",
                link : "https://www.filimo.com/m/131383",
            },
        ]
    },
]
function SeriesInfo(props){
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
var element = (<div className="container">
    <div className="popular-section">
        <div className="heading">
            <div className="title">محبوب‌ترین‌های فیلیمو</div>
            <div className="switch-button">
                <button id="seriesButton">سریال</button>
                <button id="moiveButton">فیلم</button>
            </div>
        </div>
        <div className="items-list">
            <ul>
                <SeriesList data={seriesList}></SeriesList>
            </ul>
        </div>
        <div className="information">
            <ul>
                <SeriesInfo data={seriesInfo}></SeriesInfo>
            </ul>
        </div>
    </div>
</div>)
ReactDOM.render(element , rootElement)