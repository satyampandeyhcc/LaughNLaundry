import "rsuite/dist/rsuite.min.css";
import React from "react";
import { DatePicker } from "rsuite";

function DatePick({ setstartdate, setenddate }) {
 const format = (date)=>{
	const inputDate = new Date(date);
    const day = inputDate.getDate().toString().padStart(2, "0");
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0");
    const year = inputDate.getFullYear();
	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate
 }

  const handleDatechange1 = (date) => {
    setstartdate(format(date));
  };
  const handleDatechange2 = (date) => {
	setenddate(format(date));

  };
  const datepickerStyle = {
    marginBottom: "25px",
    marginTop: "10px",
    borderRadius: "10px",
    border: "1px solid #BABABA",
    background: "#EEF1F0",
    color: "#7E7E7E",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "-0.12px",
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "flex-end",
        marginRight: "3vw",
      }}
    >
      <DatePicker
        id="date1"
        onChange={handleDatechange1}
        style={datepickerStyle}
        placeholder="from"
        size="md"
      />
      <DatePicker
        id="date1"
        onChange={handleDatechange2}
        style={datepickerStyle}
        placeholder="to"
        size="md"
      />
    </div>
  );
}

export default DatePick;
