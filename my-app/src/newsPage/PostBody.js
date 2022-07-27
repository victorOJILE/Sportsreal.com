import React from 'react';

function PostBody({ blogInfo }) {
    let paragraphs = blogInfo.newsBody.split(/\n/g);
    let ids = 0;
    return (
        <div className='post-body'>
                {
                    paragraphs.map(p => {
                        { if(p.length < 3) return }
                        {
                        return ( <p id={`paragraph-${ids}`} key={ids++}>{p}</p> )
                        }
                    })
                }
            </div>
    )
}

export default PostBody;