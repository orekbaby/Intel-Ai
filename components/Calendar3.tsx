import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Cookies from "js-cookie";
import React, { useEffect, FC, useState } from "react";
import moment from 'moment-timezone';
import { toast, useToast } from "@/components/ui/use-toast"
import { FiLoader } from "react-icons/fi";

interface Thread {
  content: string;
  count: number;
  countNum: string;
}

interface CalendarProps {
  className?: string;
  showOutsideDays?: boolean;
  threadsText: string; // The content from the textarea
  setProgress: (progress: number) => void;
  onSave: () => void;
  onCloseModal: () => void;
  threadsContent: Thread[];
}

const Calendar3: FC<CalendarProps> = ({
  className,
  showOutsideDays = true,
  threadsText,
  threadsContent,
  onSave,
  setProgress,
  onCloseModal,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>('UTC');
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [isLoading, setIsLoading] = useState(false);
  const timeZones = moment.tz.names();

  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
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

  
  const addThreadContent = (date: string, time: string, content: string) => {
    let currentContent = Cookies.get("tweetContents");
    let contentArray = currentContent ? JSON.parse(currentContent) : [];

    contentArray.push({
      content: content,
      time: time,
      date: date,
    });

    let updatedContent = JSON.stringify(contentArray);
    Cookies.set("tweetContents", updatedContent, {
      expires: 7,
      path: "/",
      secure: true,
    });
  };

  const handleSave = () => {
    // Get current time in selected time zone
    const now = moment().tz(selectedTimeZone);
  
    // Create a moment object for the selected date and time
    const selectedDateTime = moment(selectedDate).set({
      year: currentYear, // Use currentYear from state
      month: currentMonth, // Use currentMonth from state
      date: selectedDate.getDate(), // Day of the month
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
  
    // Ensure threadsContent is not empty
    if (threadsContent.length === 0) {
      console.log("No threads to save");
      return;
    }
  
    // Show loading image before proceeding with save
    setIsLoading(true);
  
    // Combine the contents of all threads into a single string
    const combinedContent = threadsContent.map(thread => thread.content).join('\n'); // Join with new line or any other separator
  
    // Proceed with saving the content
    addThreadContent(formattedDate, formattedTime, combinedContent);
  
    // Handle post-save actions
    onSave();
  
    // Delay modal closing to show loading state
    setTimeout(() => {
      onCloseModal();
      setIsLoading(false);  // Stop loading after modal closes
    }, 3000); // Adjust this delay as needed for smoother UX
  };
  
  
  
  


  return (
    <div className="flex justify-center items-center px-24 md:px-6 lg:px-6">
       {isLoading ? (
 <div className="absolute top-20 left-[5%] md:left-[20%] lg:left-[20%] flex justify-center items-center w-[100%]">
 <div className="px-8 border-none rounded-[20px] flex justify-center items-center max-w-auto w-[262px] h-[252px] bg-[#181818] py-10">
   <div className="mx-auto">
     <FiLoader
       className="w-[80px] h-[80px] text-gray-600 mx-auto mb-5"
     />
     <h3 className="font-medium text-[20px] mx-auto text-center text-[#C1C1C1] leading-[24px] mb-3">
       Please wait.....
     </h3>
     <p className="font-medium text-center text-sm leading-[14.56px] mx-auto">
       Now scheduling your tweet.
     </p>
   </div>
 </div>
</div>

    ) : (
      <div className="bg-[#181818] w-fit mt-5 rounded-[20px] pb-5">
        <div className={`py-3 ${className}`}>
          <div className="flex justify-center items-center mb-2 space-x-2">
            <button
              onClick={handlePreviousMonth}
              className="h-7 w-7 text-xs font-normal bg-[transparent] p-0 opacity-50 hover:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <select
              value={currentMonth}
              onChange={handleMonthChange}
              className="text-white bg-transparent text-sm font-normal"
            >
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
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
              <ChevronRight className="h-4 w-4" />
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
        <div className="flex justify-start px-4 gap-8 items-center pt-4">
          <button
            onClick={handleSave}
            className="bg-white flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-black transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
          >
            Save
          </button>

          <button
            onClick={onCloseModal}
            className="bg-[#292929] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    )}
    </div>
  );
};

export default Calendar3;