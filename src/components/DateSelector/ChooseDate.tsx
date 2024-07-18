import React, { ChangeEvent } from "react";

interface ChooseDateProps{
    fetchData: (date: string) => void;
}

const ChooseDate: React.FC<ChooseDateProps> = ({ fetchData }) => {

    const [date, setDate] = React.useState<string>('');

    const handleDateChange = (event:ChangeEvent<HTMLInputElement>) => {
        const selectedDate = event.target.value;
        setDate(selectedDate);
        fetchData(selectedDate);
    };
    
    return(
        <>
        <label htmlFor="datePicker">View a specific photo by date: </label>
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