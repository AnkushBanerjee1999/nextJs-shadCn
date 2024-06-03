import React from "react";

interface TimelineHeaderProps {
  title: string;
  description: string;
  date: string;
}

const TimelineHeader: React.FC<TimelineHeaderProps> = ({ title, description, date }) => {
  return (
    <div className="flex justify-between mb-4">
      <div className="flex flex-row">
        <div className="h-full w-[45px] bg-[#5f7de8] rounded-[5px] flex items-center justify-center min-h-4">
          &nbsp;
        </div>
        <div className="flex flex-col justify-between ml-4">
          <span className="text-xs text-[#a1a5b7]">{title}</span>
          <span className="text-lg font-bold">{description}</span>
        </div>
      </div>
      <div>
        <span className="p-2 bg-[#e8fff3] text-[#50cd89]">{date}</span>
      </div>
    </div>
  );
};

export default TimelineHeader;

