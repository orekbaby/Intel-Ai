
import { DateTime } from 'luxon';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Cookies from "js-cookie";
import React, { useEffect, FC, useState } from "react";
import moment from 'moment-timezone';
import { toast, useToast } from "@/components/ui/use-toast"
import { ToastAction } from '@radix-ui/react-toast';

interface CalendarProps {
  className?: string;
  showOutsideDays?: boolean;
  index: number;  
  editorContent: string;
  setProgress: (progress: number) => void; // Adjusted to accept a number parameter
  generatedResponses: { [key: number]: { response: string } }; 
  onSave: () => void;
  onCloseModal: () => void;
  addEditorContent: (date: string, time: string, content: string) => void;
}

const Calendar2: FC<CalendarProps> = ({
  className,
  showOutsideDays = true,
  editorContent,
  onSave,
  setProgress,
  onCloseModal,
  generatedResponses,
  addEditorContent,
  index,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [customContents, setCustomContents] = useState<object[]>([]);
  const [isScheduling, setIsScheduling] = useState<boolean>(true); // Default to scheduling
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>('UTC');
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [selectedResponse, setSelectedResponse] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedDay, setSelectedDay] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());

  const timeZones = moment.tz.names();
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  
  useEffect(() => {
    // Sync selected date with current month and year
    const newDate = new Date(currentYear, currentMonth, selectedDate.getDate());
    setSelectedDate(newDate);
  }, [currentMonth, currentYear]);


  
  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(event.target.value, 10);
    setCurrentMonth(newMonth);
  };

  const handlePreviousMonth = () => {
    let newYear = currentYear;
    let newMonth = currentMonth - 1;
    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    let newYear = currentYear;
    let newMonth = currentMonth + 1;
    if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleSelect: SelectSingleEventHandler = (day) => {
    if (day) {
      setSelectedDate(day);
      setCurrentMonth(day.getMonth());
      setCurrentYear(day.getFullYear());
    }
  };

  const handleMonthUpdate = (month: Date) => {
    setCurrentMonth(month.getMonth());
    setCurrentYear(month.getFullYear());
  };
  
  const handleSave = (content: string, time: string, date: string) => {
    console.log('Saving with', { content, time, date });
  
    setIsScheduling(true); // Set the mode to scheduling
  
    const finalContent = content || editorContent;
  
    if (!finalContent) {
      console.log('No content to post');
      return;
    }
  
    addEditorContent(date || '', time || '', finalContent);
  
    // Close the modal immediately after saving
    onSave();
    onCloseModal();
  
    // Set progress to 25% and start updating progress
    setProgress(25);
    setTimeout(() => {
      setProgress(100); // Update progress to 100%
  
      // Show success message
      setShowSuccessMessage(true);
  
      // Timer to hide the success message and reset progress after 3 seconds
      const timer = setTimeout(() => {
        setShowSuccessMessage(false); // Hide success message
        setProgress(0); // Reset progress
      }, 3000);
  
      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }, 1000);
  };
  
  

  const handleScheduleClick = (index: number | null) => {
    if (index === null) {
      console.error('No card selected to post.');
      return;
    }
  
    // Get the selected response
    const selectedResponse = generatedResponses[index]?.response || '';
  
    // Get current time in selected time zone
    const now = moment().tz(selectedTimeZone);
  
    // Create a moment object for the selected date and time
    const selectedDateTime = moment(selectedDate).set({
      hour: hours,
      minute: minutes,
      second: seconds,
      millisecond: 0
    }).tz(selectedTimeZone);
  
    // Check if the selected date and time are in the past
    if (selectedDateTime.isBefore(now)) {
      toast({
        title: "Invalid Date",
        description: "Please select a date and time in the future.",
        variant: "destructive",
      });
      return;
    }
  
    // Format selected time and date for saving
    const formattedTime = selectedDateTime.format('hh:mm A'); // Format time
    const formattedDate = selectedDateTime.format('YYYY-MM-DD'); // Format date
  
    // Pass the selected response, formatted time, and formatted date to handleSave
    handleSave(selectedResponse, formattedTime, formattedDate);
  };

const handleScheduleSave = (index: number) => {
    handleScheduleClick(index);
};


  return (
    <>
      <div className="flex justify-center items-center px-24 md:px-6 lg:px-6">
        <div className="bg-[#181818] w-fit mt-5 rounded-[20px] pb-5">
          <div className={`py-3 ${className}`}>
            <div className="flex justify-center items-center mb-2 space-x-2">
              <button
                onClick={handlePreviousMonth}
                className="h-7 w-7 text-xs font-normal bg-[transparent] p-0 opacity-50 hover:opacity-100"
              >
                {/* <ChevronLeft className="h-4 w-4" /> */}
              </button>
              <select
                value={currentMonth}
                onChange={handleMonthChange}
                className="text-white bg-transparent text-sm font-normal"
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option className="" key={i} value={i}>
                    {new Date(0, i).toLocaleString("default", {
                      month: "long",
                    })}
                  </option>
                ))}
              </select>
              <button
                onClick={handleNextMonth}
                className="h-7 w-7 text-xs font-normal bg-[transparent] p-0 opacity-50 hover:opacity-100"
              >
                {/* <ChevronRight className="h-4 w-4" /> */}
              </button>
            </div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={handleSelect}
              onMonthChange={handleMonthUpdate}
              showOutsideDays={showOutsideDays}
              className="custom-calendar"
              month={new Date(currentYear, currentMonth)}
              {...props}
            />
          </div>


          {/* Time zone selection */}
         
          <div className="flex flex-col justify-center px-4 items-center mt-2 w-full">
          {/* Time Zone * */}
           <div className="flex items-center mr-7 w-[250px] overflow-hidden">
  <label className="text-white mr-1 whitespace-nowrap">Time Zone:</label>
  <select
    value={selectedTimeZone}
    onChange={(e) => setSelectedTimeZone(e.target.value)}
    className="text-white bg-transparent h-8 w-full overflow-hidden outline-none border border-gray-400 rounded px-2"
  >
    {timeZones.map((tz, idx) => (
      <option className="bg-gray-800 text-white py-1" key={idx} value={tz}>
        {tz}
      </option>
    ))}
  </select>
</div>


          {/* Time Selection */}
          <div className="flex items-center w-full">
            <label className="text-white mr-2">Time:</label>
            <select
              value={hours}
              onChange={(e) => setHours(parseInt(e.target.value))}
              className="text-white bg-transparent border-none rounded-md p-2 h-10 overflow-auto scrollbar-hide"
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
            <span className="text-white mx-2">:</span>
            <select
              value={minutes}
              onChange={(e) => setMinutes(parseInt(e.target.value))}
              className="text-white bg-transparent border-none rounded-md p-2 h-10 overflow-auto scrollbar-hide"
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
            <span className="text-white mx-2">:</span>
            <select
              value={seconds}
              onChange={(e) => setSeconds(parseInt(e.target.value))}
              className="text-white bg-transparent border-none rounded-md p-2 h-10 overflow-auto scrollbar-hide"
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i}>
                  {i.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
            </div>
            </div>
   

          {/* Save and Cancel buttons */}
          <div className="flex justify-start px-4 gap-8 items-center mt-4">
          <button
 onClick={() => handleScheduleSave(index)}
  className="bg-white flex justify-center gap-1 items-center text-black transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
>
  Save
</button>

            <button
              onClick={onCloseModal}
              className="bg-[#292929] flex justify-center gap-1 items-center text-white transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar2;
