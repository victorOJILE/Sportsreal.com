import { Link } from 'react-router-dom';

function RecentPost( { recentPost }){
    return(
        <div id="latest-news">
            <div className="latest">Recent posts</div>
                {
                    recentPost?.landingPage?.RecentPostHomepage.map((recent) => {
                        return (
                            <Link to={`/${recent.aHref}`} key={recent.id}>{recent.aInnerText}</Link>
                        )
                    })
                }
            </div>
    );
}
export default RecentPost;