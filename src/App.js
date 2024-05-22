import { useState } from 'react';
import './App.css';
import Cell from "./components/Cell/Cell";

function App() {
  const [clickflag, clickflagState]=useState(false)
  let date = new Date();
  date.setMonth(date.getMonth() + 1)

  let year = date.getFullYear();
  let month = date.getMonth();
  let dayof = date.getDay();
  date.setMonth(date.getMonth() + 1, 0)

  let lastday = date.getDate()
  const days = ["日", "月", "火", "水", "木", "金", "土"]
  const dates = [...Array(Math.ceil((lastday + dayof) / 7))].map((_, i) => {
    return [...Array(7)].map((_, j) => {
      if (i * 7 + j - dayof + 1 <= 0) {
        return 0
      }
      else if (i * 7 + j - dayof + 1 > lastday) {
        return ""
      }
      else {
        return i * 7 + j - dayof + 1
      }
    })
  })
  const monthdays={}
  const clicked=(day)=>{
    clickflagState(true)
  }


  return (
    <>

      <div className='month'>
        {year}年
        {month + 1}
        月シフト</div>
      <table>
        <tbody>
          <tr>
            {days.map(day => {

              return <Cell num={day} key={day + "day"}></Cell>

            })}
          </tr>
          {dates.map((date, index) => (

            !date.every((e) => e == "") && <tr>
              {date.map(d => (

                d !== "" && <Cell clickday={()=>clicked(d)} num={d} />

              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {clickflag ? <div>test</div> : <></>}


    </>
  );
}

export default App;
