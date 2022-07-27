import "./homepage/homepage.css";
import TopComponent from "./homepage/TopComponent";
import TrendingComp from "./homepage/TrendingComp.js";
import RecentPost from "./homepage/RecentPost.js";
import AddAdvert from "./newsPage/AddAdvert";
import NextPageNav from "./homepage/NextPageNav.js";
import React from "react";
function BlogBody({ blogInfo }) {
    let divStyle = {
        height: "60vh",
        fontSize: "3em",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        justifyContent: "center"
    };
    return (
        <>
            {
                blogInfo.blogs ? (
                    <section style={{maxWidth: "1200px", margin: "0 auto"}}>
                        <TopComponent topComponent={blogInfo} />
                        <TrendingComp trendingComp={blogInfo} topic={"Trending"} />
                        <RecentPost recentPost={blogInfo} />
                        <TrendingComp trendingComp={blogInfo} topic={"More on Sportsreal"}/>
                        <AddAdvert />
                        <NextPageNav />
                    </section>
                ): (
                    <div style={divStyle}>
                        <div className="loading">
                            <i className="fa fa-circle-o-notch fa-spin"></i>
                        </div>
                        <small>Please wait ...</small>
                    </div>
                )
            }
        </>
    );
  }
  
  export default BlogBody;
  