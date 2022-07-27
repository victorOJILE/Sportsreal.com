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
                                <td className='td' aria-label="Home team name">{g.home}</td>
                                <td className='center'>
                                    <div className='center'>
                                        <span style={{fontWeight: "600"}}>-</span>:<span style={{fontWeight: "600"}}>-</span>
                                    </div>
                                    <div aria-label='Match time'className='matchTime'>
                                        {g.time}
                                    </div>
                                </td>
                                <td className='td' aria-label="Away team name">{g.away}</td>
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