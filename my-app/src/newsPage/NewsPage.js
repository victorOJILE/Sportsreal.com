import React, { useLayoutEffect } from "react";
// import {Helmet} from "react-helmet"
import { useParams, Link } from "react-router-dom";
import "./newsPage.css";
import NewsHead from "./NewsHead.js";
import PostBody from "./PostBody.js";
import NotFound from "../components/NotFound";
import AddAdvert from "./AddAdvert";
import ShareWithF from "./ShareWithF";
import ReadMore from "./ReadMore";
import CommentSection from "./CommentSection";
let monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let weekNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
function NewsPage({ posts }) {
  const { url } = useParams();
  const blogInfo = posts.blogs.find(post => post.url.includes(url));
  
  let dayOfWeek = weekNames[new Date(blogInfo?.dateCreated).getDay()];
  let month = monthName[new Date(blogInfo?.dateCreated).getMonth()];
  let todaysDate = new Date(blogInfo?.dateCreated).getDate();
  let year = new Date(blogInfo?.dateCreated).getFullYear();
  let datePosted = `${dayOfWeek}, ${todaysDate} ${month} ${year}`;
  useLayoutEffect(() => {
    try {
      
    function generateImages() {
      let i=0;
      while(i<Object.keys(this).length) {
        let section = document.createElement('section');
        let div1 = document.createElement('div');
        div1.className = 'other-images';
        for(let key of Object.keys(this[i])) {
          if(key == 'insertAt') break;
          let imageCred = this[i][key].credit;
          let imageSrc = this[i][key].src;
          let alt = this[i][key].alt;
          let div2 = document.createElement('div');
          div2.innerHTML = `<img data-src="${imageSrc}" alt="${alt}">`;
          let iTag = document.createElement('i');
          iTag.innerHTML = imageCred;
          if(!imageCred.trim() == '' || imageCred.trim().length > 15) div2.appendChild(iTag);
          div1.appendChild(div2);
        }
        section.appendChild(div1);
        let insert = `paragraph-${this[i]["insertAt"]}`;
        try {
          document.getElementById(insert).insertAdjacentElement('afterend', section);
        } catch (error) { }
        i++;
      }
    }
    generateImages.call(blogInfo.otherImages);
    } catch (error) {
      
    }
      // let root = document.getElementById('paragraph-4') || document.getElementById('paragraph-3');
      // root.insertAdjacentHTML("afterend", `<div class="read-also" id="read-also">
      // <b>READ ALSO: </b>
      // <a href="#">${blogInfo.readalso.innerText}</a>
      // </div>`);
      // let elem = document.getElementById('read-more');
      // let elem2 = document.getElementById('also-like');
      // let otherImages = document.getElementsByClassName('other-images');
      
      // function isVisble(elem) {
      //   let coords = elem.getBoundingClientRect();
      //   let windowHeight = document.documentElement.clientHeight;
      //   let topVisible = coords.top > 0 && coords.top < windowHeight;
      //   let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
      //   return topVisible || bottomVisible;
      // }
      // function showVisible(element) {
      //   if(isVisble(element)){ 
      //     for(let img of element.querySelectorAll('img')) {
      //         let realSrc = img.dataset.src;
      //         if(!realSrc || img.dataset.checked == 'true') continue;
      //             img.src = realSrc; 
      //             img.dataset.checked = 'true';
      //             img.onload = () => {
      //                 img.style.height = 'auto', 
      //                 img.dataset.src = ''
      //             }
      //         }
      //     }
      // }
      // for(let other of otherImages) {
      // window.addEventListener('scroll', () => showVisible(other));
      // }
      // window.addEventListener("scroll", () => showVisible(elem));
      // window.addEventListener("scroll", () => showVisible(elem2));
  })
  
  return (
    <>
    {
      blogInfo && 
        <div id="insert">
          <NewsHead blogInfo={blogInfo} datePosted={datePosted} />
          <PostBody blogInfo={blogInfo} />
          <AddAdvert />
          <ShareWithF />
          <ReadMore previousNews={posts.previousNews} previousSponsored={posts.previousSponsored} />
          <CommentSection />
        </div>
    }
    {
      !blogInfo && <NotFound />
    }
    </>
  );
}
export default NewsPage;
