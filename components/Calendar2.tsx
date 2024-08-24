import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";
import Cookies from "js-cookie";
import React, { useEffect, FC, useState } from "react";

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

  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth()
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [editorContent, setEditorContent] = useState<string>("");

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

  const handleSave = (content?: string, time?: string, date?: string) => {
    setIsScheduling(true); // Set the mode to scheduling
  
    const finalContent = content || editorContent;
    
    if (!finalContent) {
      console.log("No content to post");
      return;
    }
  
    addEditorContent(date || "", time || "", finalContent);
  
    // Close the modal immediately after saving
    onSave();
    onCloseModal();
  
    // Set progress to 25% and start updating progress
    setProgress(25);
    setTimeout(() => {
      setProgress(100); // Update progress to 100%
    }, 1000);
  };
  
  const handleScheduleClick = (index: number | null) => {
    if (index === null) {
      console.error("No card selected to post.");
      return;
    }
  
    // Get the selected response
    const selectedResponse = generatedResponses[index]?.response || "";
  
    // Capture the current date and time dynamically
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  
    // Pass the selected response, current time, and current date to handleSave
    handleSave(selectedResponse, currentTime, currentDate); 
  };
  
  
  const handleScheduleSave = (index: number) => {
    handleScheduleClick(index);
  };
  



  return (
    <>
      <div className="flex justify-center items-center pr-24 md:pr-6 lg:pr-6">
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
          <div className="flex justify-center gap-8 items-center">
          <button
  onClick={() => handleScheduleSave(index)} // Assuming 'index' is defined in your scope
  className="bg-white flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary text-black transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs"
>
  Save
</button>


            <button className="bg-[#292929] flex justify-center gap-1 items-center ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 font-normal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-800 hover:scale-95 dark:text-secondary transition ease-in-out delay-150 duration-300 h-[40px] md:h-[33px] lg:h-[33px] w-[125px] md:w-[95px] lg:w-[95px] rounded-[200px] hover:bg-[#0B0F16] text-xs text-white">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar2;
