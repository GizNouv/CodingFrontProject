import {seriesList} from '../data'
export default function SeriesList(props){
    return props.data.map(function(series){
        return(
            <li>
                <img src={series.image}/>
            </li>
        )
    })
}