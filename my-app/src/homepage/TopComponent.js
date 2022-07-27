import { Link } from "react-router-dom";
import { useState } from "react";
function TopComponent({ topComponent }) {
    let [img, setimg] = useState({});
    let handleSetImg = () => {
        let imgDivStyle = {
            height: "auto",
            backgroundColor: "inherit"
        };
        setimg(imgDivStyle);
    };
    let i = 1;

    return (
        <div className="flex flex-cst m-auto trending-section">
            { topComponent?.landingPage?.TopComponentHomepage.map((news) => {
                return (
                    <div className="flex align-tp flex-box-md main-news block-md" key={i++}>
                        <div className="flex">
                        <img src={news.imgSrc} alt={news.imgAlt} 
                            onLoad={handleSetImg} style={img} loading="lazy" />
                            <noscript>
                                {news.imgSrc}\n\n{news.imgAlt}
                            </noscript>
                        </div>
                        <div className="pl-1 pmd-0">
                            <Link to={`/${news.aHref}`}>{news.aInnerText}</Link>
                            <p className="fs-2">{`${news.category} | ${news.time}`}</p>
                        </div>
                    </div>
                );
             }) 
            }
        </div>
    );
}
export default TopComponent;