function JournalCards(props){
    return(
        <div className="travel--card_wrapper">
            <div className="travel--card_img_wrapper">
                <img src={props.fullobj.imageUrl} className="travel--card_img" />
            </div>
            <div className="travel--card_text_wrapper">
                <div className="travel--card_country_map">
                    <h3 className="travel--card_sub_heading">{props.fullobj.location.country}</h3>
                    <a href={props.fullobj.location.googleMaps} className="travel--card_map_link">View on Google Maps</a>
                </div>
                <h1 className="travel--card_heading">{props.fullobj.location.place}</h1>
                <p className="travel--card_text">{props.fullobj.startDate} - {props.fullobj.endDate}</p>
                <p className="travel--card_text">Population: {props.fullobj.location.population}</p>
                <p className="travel--card_desc">Description: {props.fullobj.description}</p>
                <div className="travel--card_votes_wrapper">
                    <a href="" id="travel--card_upvote" className="travel--card_vote">
                        <img src={props.fullobj.vote} className="travel--card_thumb"/>
                    </a>
                    <a href="" id="travel--card_downvote" className="travel--card_vote">
                        <img src={props.fullobj.vote} className="travel--card_thumb"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default JournalCards;