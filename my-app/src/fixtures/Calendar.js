import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
function Calendar({
    show, 
    showCalendar,
    date
 }) {
    let monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let todaysDate = date.getDate();
    const [month, setMonth] = useState(date.getMonth());
    const [currentYear, setCurrentYear] = useState(date.getFullYear());
    let firstDate = `${monthName[month]} ${todaysDate}, ${currentYear}`;
    let secondDate = `${monthName[month]} ${currentYear}`;
    const [inputValue, setInputValue] = useState(firstDate);
    
    let endOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let firstDay = undefined;
    let theDay = [];
    let i = 0;
    while(i<32) {
        theDay.push({title: "", classN: "", innerT: ""});
        i++
    }
    let [day, setDay] = useState(theDay);
    const [last_table_row, setLast_table_row] = useState(<tr></tr>);

    const [currentDate, setCurrentDate] = useState(secondDate);
    // function createTable() {
    //     let tr =  document.createElement('tr');
    //     for(let h = 0; h<7; h++) {
    //         let td =  document.createElement('th');
    //         td.innerText = weekDays[h];
    //         tr.appendChild(td);
    //     }
    //     table.appendChild(tr);
    //     for (let i = 0; i < 6; i++) {
    //         let tr =  document.createElement('tr');
    //         for (let j = 0; j < 7; j++) {
    //             let td =  document.createElement('td');
    //             td.innerText = 0;
    //             tr.appendChild(td);
    //         }
    //         table.appendChild(tr);
    //     }
    //     table_div.appendChild(table);
    // }
    // let day = table.getElementsByTagName('td');
    let todayMo = '';
    // let last_table_row = table.lastElementChild;
    const [errStyle, setErrStyle] = useState({});
    const [errText, setErrText] = useState("");
    function showErr() {
        setErrStyle({display: 'block'});
    }
    function hideErr() {
        setErrStyle({});
    }
    function handleInputBlur(abc, splitVal, findM, num, n, m) {
        abc = inputValue;
        splitVal = abc.split(' ');
        n = splitVal[0];
        m = n.slice(1, n.length);
        findM = n[0].toUpperCase();
        findM = findM + m;
        findM = monthName.findIndex((a) => a == findM);
        num = splitVal[1].slice(0, splitVal[1].length-1);
        if(findM == -1) {
            showErr();
            setErrText(`${splitVal[0]} is not a valid month of the year`);
            setTimeout(hideErr, 10000);
        }else if(num < 1 || num > 31 || isNaN(num)) {
            showErr();
            setErrText(`${num} is not a valid day of the month`);
            setTimeout(hideErr, 10000);
        }else if(num > endOfMonth[findM]) {
            showErr();
            setErrText(`${num} is not a valid day of ${splitVal[0]}`);
            setTimeout(hideErr, 10000);
        }else if(splitVal[2] < 1970 || isNaN(splitVal[2])) {
            showErr();
            setErrText(`${splitVal[2]} is not a valid year`);
            setTimeout(hideErr, 10000);
        }else {
            setCurrentYear(+splitVal[2]);
            setMonth(findM);
            // rand();
            // fillTableData();
            setCurrentDate(`${monthName[month]} ${currentYear}`);
        }
    }
    function changeYearLeftF() {
        setCurrentYear(currentYear-1);
        setInputValue(`${monthName[month]} ${todaysDate}, ${currentYear}`);
        setCurrentDate(`${monthName[month]} ${currentYear}`);
        // rand();	fillTableData();
    }
    function changeYearRightF() {
        setCurrentYear(currentYear+1);
        setInputValue(`${monthName[month]} ${todaysDate}, ${currentYear}`);
        setCurrentDate(`${monthName[month]} ${currentYear}`);
        // rand();	fillTableData();
    }
    function changeMonthLeftF() {
        if(month == 0) {
            setMonth(11);
            setCurrentYear(currentYear-1);
        }else {
            setMonth(month-1);
        }
        // rand();
        setInputValue(`${monthName[month]} ${todaysDate}, ${currentYear}`);
        setCurrentDate(`${monthName[month]} ${currentYear}`);
        // fillTableData();
    }
    function changeMonthRightF() {
        if(month == 11) {
            setMonth(0);
            setCurrentYear(currentYear+1);
        }else {
            setMonth(1);
        }
        // rand();
        setInputValue(`${monthName[month]} ${todaysDate}, ${currentYear}`);
        setCurrentDate(`${monthName[month]} ${currentYear}`);
        // fillTableData();
    }

    // function fillTableData() {
    //     firstDay = new Date(currentYear, month, 1).getDay();
    //     let mth = month;
    //     if (mth == 0) { mth = 12; }
    //     let num = 1, num2 = (endOfMonth[mth - 1] + 1) - firstDay;
    //     let num3 = endOfMonth[month] + firstDay;
    //     if (firstDay < 6) {
    //         setLast_table_row(<><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></>);
    //     } else {
    //         setLast_table_row("");
    //     }
    //     let d = [], ja;
    //     // Last month to this month dates
    //     for(let i = 0; i < firstDay; i++) {
    //         d.push({title: "", classN: "", innerT: num2++});
    //         ja++;
    //     }
    //     let e = d.concat(day.slice(i));
    //     setDay(e);
    //     // This month dates
    //     for(let i = firstDay; i < day.length; i++) {
    //         if(num > endOfMonth[month]) { num = 1; break; }
    //         let full = `${monthName[month]} ${num++} , ${currentYear}`;
    //         d.push({title: full, classN: "monthDay", innerT: num});
    //         ja++;
    //     }
    //     e = d.concat(day.slice(i));
    //     setDay(e);
    //     // This month to next month dates
    //     for(let i = num3; i < day.length; i++) {
    //         d.push({title: "", classN: "", innerT: num++});
    //         ja++;
    //     }
    //     e = d.concat(day.slice(i));
    //     setDay(e);
    // }
    // fillTableData();
    // let d = day;
    // function addTodayClass() {
    //     for(let i = 0; i< day.length; i++) {
    //         if (day[i].innerT == todaysDate) {
    //             d[i].classN = 'today';
    //             todayMo = i;
    //         }
    //     }
    //     // setDay(d);
    // }
    // addTodayClass();
    // function rand() {
    //     let a = day;
    //     for(let i = 0; i< day.length; i++) {
    //         a[i].classN = '';
    //     }
    //     if(date.getMonth() != month || date.getFullYear() != currentYear) {
    //         a[todayMo].classN = '';
    //     }else if(date.getMonth() == month && date.getFullYear() == currentYear) {
    //         a[todayMo].classN = 'today';
    //     }
    //     setDay(a);
    // }
  return (
    <section style={{position: "absolute", zIndex: 1}} className={showCalendar} id="calend">
      <div className="first-div">
        <div style={{textAlign: "end", color: "rgb(226, 2, 2)", borderBottom: "1px solid rgb(218, 218, 218)"}}>
          <i className="fa fa-times" onClick={show} title="Close calendar"></i>
        </div>
        <div className="sec-div">
          <div className="error-mes" style={errStyle}>{errText}</div>
          <div className="date-div">
            Date: <input type="text" id="input-field" value={inputValue} onChange={setInputValue} onBlur={handleInputBlur} placeholder="January 1, 2020" />
          </div>
          <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <button id="change-year-left" onClick={changeYearLeftF} title="Check previous year">
              «
            </button>
            <button id="change-month-left" onClick={changeMonthLeftF} title="Check previous month">
              ‹
            </button>
            <div id="current-date">{currentDate}</div>
            <button id="change-month-right" onClick={changeMonthRightF} title="Check next month">
              ›
            </button>
            <button id="change-year-right" onClick={changeYearRightF} title="Check next year">
              »
            </button>
          </div>
          <div className="table-div">
            <table>
              <thead>
                <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thur</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td title={day[0].title} className={day[0].classN}>{day[0].innerT}</td>
                <td title={day[1].title} className={day[1].classN}>{day[1].innerT}</td>
                <td title={day[2].title} className={day[2].classN}>{day[2].innerT}</td>
                <td title={day[3].title} className={day[3].classN}>{day[3].innerT}</td>
                <td title={day[4].title} className={day[4].classN}>{day[4].innerT}</td>
                <td className={day[5].classN} title={day[5].title}>{day[5].innerT}</td>
                <td className={day[6].classN} title={day[6].title}>{day[6].innerT}</td>
              </tr>
              <tr>
                <td className="monthDay" title="">
                  3
                </td>
                <td className="monthDay" title="">
                  4
                </td>
                <td className="monthDay" title="July 5 , 2022">
                  5
                </td>
                <td className="monthDay" title="July 6 , 2022">
                  6
                </td>
                <td className="monthDay" title="July 7 , 2022">
                  7
                </td>
                <td className="monthDay" title="July 8 , 2022">
                  8
                </td>
                <td className="monthDay" title="July 9 , 2022">
                  9
                </td>
              </tr>
              <tr>
                <td className="monthDay" title="July 10 , 2022">
                  10
                </td>
                <td className="monthDay" title="July 11 , 2022">
                  11
                </td>
                <td className="today monthDay" title="July 12 , 2022">
                  12
                </td>
                <td className="monthDay" title="July 13 , 2022">
                  13
                </td>
                <td className="monthDay" title="July 14 , 2022">
                  14
                </td>
                <td className="monthDay" title="July 15 , 2022">
                  15
                </td>
                <td className="monthDay" title="July 16 , 2022">
                  16
                </td>
              </tr>
              <tr>
                <td className="monthDay" title="July 17 , 2022">
                  17
                </td>
                <td className="monthDay" title="July 18 , 2022">
                  18
                </td>
                <td className="monthDay" title="July 19 , 2022">
                  19
                </td>
                <td className="monthDay" title="July 20 , 2022">
                  20
                </td>
                <td className="monthDay" title="July 21 , 2022">
                  21
                </td>
                <td className="monthDay" title="July 22 , 2022">
                  22
                </td>
                <td className="monthDay" title="July 23 , 2022">
                  23
                </td>
              </tr>
              <tr>
                <td className="monthDay" title="July 24 , 2022">
                  24
                </td>
                <td className="monthDay" title="July 25 , 2022">
                  25
                </td>
                <td className="monthDay" title="July 26 , 2022">
                  26
                </td>
                <td className="monthDay" title="July 27 , 2022">
                  27
                </td>
                <td className="monthDay" title="July 28 , 2022">
                  28
                </td>
                <td className="monthDay" title="July 29 , 2022">
                  29
                </td>
                <td className="monthDay" title="July 30 , 2022">
                  30
                </td>
              </tr>
              </tbody>
              <tfoot>
              {last_table_row}
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
