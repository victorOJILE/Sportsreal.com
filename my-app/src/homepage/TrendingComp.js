import { useState } from 'react';
import { Link } from "react-router-dom";

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
function TrendingComp( { trendingComp, topic } ) {
    const [imgDiv, setImgDiv] = useState("imgDiv");
    let handleLoad = () => {
        setImgDiv("");
    }
    return (
        <div id="trending">
            <div className="latest">{topic}</div>
            <div className="smaller-links flex flex-cst">
                {
                    trendingComp?.landingPage?.TrendingNewsHomepage.map((news) => {
                        let date = new Date(news.date_posted);
                        let processDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
                        return (
                            <div key={news.id} className="flex-box-lg">
                            <div  className={imgDiv}>
                                <img src={news.imgSrc} alt={news.imgAlt} onLoad={handleLoad} />
                            </div>
                            <div>
                                <Link to={`/${news.aHref}`}>{news.aInnerText}</Link>
                                <div className="date-main-blog flex">
                                    <span><i className="fa fa-clock-o"></i></span>
                                    <span>{processDate}</span>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
        </div>
    </div>
    );
}
export default TrendingComp;