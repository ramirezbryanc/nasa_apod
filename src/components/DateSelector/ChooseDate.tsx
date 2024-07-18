import React, { ChangeEvent } from "react";

interface ChooseDateProps{
    fetchData: (date: string) => void;
}

const ChooseDate: React.FC<ChooseDateProps> = ({ fetchData }) => {

    const [date, setDate] = React.useState<string>('');

    const handleDateChange = (event:ChangeEvent<HTMLInputElement>) => {
        setDate(event.target.value);
        fetchData(date);
    };
    
    return(
        <>
        <label htmlFor="datePicker">Select a date:</label>
        <input 
            type="date" 
            id="datePicker" 
            name="datePicker"
            value={date}
            onChange={handleDateChange}
        />
        </>
    )
}

export default ChooseDate;