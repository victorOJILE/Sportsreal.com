const TopDiv = ({ show, time }) => {
  return (
    <div style={{backgroundColor: "whitesmoke", width: "100%", margin: "0px"}}>
		<div id="topId">
			<div>Football scores for today<span id="realDate"></span></div>
			<div className="server-time">Server Time: <span id="dst-time">{time}</span></div>
		</div>
		<div title="Check Calendar" style={{display: "inline-block"}}>
			<i className="fa fa-calendar" onClick={show}></i>
		</div>
	</div>
  )
}

export default TopDiv;