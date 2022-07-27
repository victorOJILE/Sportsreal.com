import { useState } from 'react';

function NextPageNav() {
    const [nextPage, setNextPage] = useState(["#",
    "file:///C:/Users/ojile/Documents/Sportsreal/fixtures.html",
    "#","#","#","#"
    ]);
    // let num = 1;
    // let Parent = React.createElement('div', {className: 'see-more-page'});
    let handleLinks = () => {
        if(nextPage.length < 8) {
            // for(let i =0; i< 8; i++) {
            // }
        }
    }
    // handleLinks();
    return (
        handleLinks()
    )
}
export default NextPageNav;