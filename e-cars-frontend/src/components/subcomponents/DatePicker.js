import React ,{ useState } from "react";
import "./DatePicker.css";
import Calendar from "react-calendar";
import "./Calendar.css";
function DatePicker ({ setDate, date,STANDAR}){
	const [isActive, setIsActive] = useState(false);
    
	

	return (
		<div className="datepicker">
			{date!=null ? (
				<div className="datepicker_btn" onClick={(e)=>setIsActive(!isActive)}>
					{date.toDateString()}
					<span className='V'> v</span>
				</div> ):
				(
					<div className="datepicker_btn" onClick={(e)=>setIsActive(!isActive)}>
						{STANDAR}
						<span className='V'> v</span>
					</div> )
			}
			{ isActive && (   <div className="datepicker_content">
            
				<div className="datepicker_item">
					<Calendar   onChange={setDate} value={date} />
				</div>
           
           
           
			</div>)}




		</div>
	);

}
export default DatePicker; 