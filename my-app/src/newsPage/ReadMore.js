import { useState, useLayoutEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import Sponsored from './Sponsored.js';
import LoadingSmall from '../components/loadingSmall.js';
// import onScrollLoad from '../onScrollLoad.js';
function ReadMore({ previousNews, previousSponsored }) {
    // let scrollLoad = onScrollLoad();
    // function handleScrollLoad(elem) {
    //     scrollLoad(elem);
    // }
    let readM = useRef(0);
    let [imgDiv, setImgDiv] = useState({height: "4rem", width: "6rem", border: "1px solid lightgrey", backgroundColor: "lightgrey"})
    let handleSetImgDiv = () => {
        setImgDiv({});
    }
    // useLayoutEffect(() => {
    //     if(readM.current >= document.documentElement.scrollTop) {
            
    //     }
    // }, [readM])
    let key = 0;
    // function() { handleScrollLoad(this) }
    return (
    <section id="combine">
        <section id="related-p">
            <div className="related-post">Read more</div>
            <div className="" id="read-more" ref={readM}>
                {
                    !previousNews.length ? (
                        <LoadingSmall />
                    ) : (
                        previousNews.map(news => {
                        return (
                            <div className="inline-link-div" key={key++}>
                                <div>
                                    <img className="inline-link-img" style={imgDiv} data-src={news.imgsrc} data-checked="false" onLoad={handleSetImgDiv} />
                                </div>
                                <div className='align-bottom'>
                                    <Link to={news.asrc}>{news.ainnerText}</Link>
                                    <div className="date" style={{paddingTop: "0px"}}>
                                        <span style={{marginRight: "2px"}}><i className="fa fa-clock-o"></i></span>
                                        <span id="datePosted">{news.date}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    )
                }
            </div>
        </section>
        <Sponsored readmore={previousSponsored} />
    </section>
  )
}

export default ReadMore;