import React from 'react';
const IndivGame = ({ state }) => {
    let key = 1000;
    return (
    <>{state.map(g => {
        {return (
            <li key={key++}>
                <div className='clubs'>
                    <table>
                        <tbody>
                            <tr>
                                <td className='td' aria-label="Home team name"><a href=''>{g.home}</a></td>
                                <td className='center'>
                                    <div className='center' style={{fontFamily: "'Roboto', sans-serif"}}>
                                        <span style={{fontWeight: "600"}} aria-label="Home score">{g.scores[0]}</span>:<span style={{fontWeight: "600"}} aria-label="Away score">{g.scores[1]}</span>
                                    </div>
                                    <div aria-label='Match time'className='matchTime'>
                                        {g.time}
                                    </div>
                                </td>
                                <td className='td' aria-label="Away team name"><a href=''>{g.away}</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </li>
        )}
    })}</>
    )
}

export default IndivGame;
