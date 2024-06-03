'use client';
import React from 'react';
import { CircleDot } from 'lucide-react';

type TimelineItemProps = {
  title: string;
  description: string;
  status: string;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ title, description, status }) => {
  return (
    <div className="ml-10">
      <div className="flex justify-between items-center gap-3 ml-auto">
        <div className="flex gap-3 items-center">
          <div className="flex flex-col items-center">
            <div className="steps-circle">
              <CircleDot />
            </div>
            <div className="border-l border-dotted border-gray-500 h-8"></div>
          </div>
          <div className="flex flex-col justify-between mb-5">
            <span className="text-xs text-gray-400">{title}</span>
            <span className="text-base text-gray-600">{description}</span>
          </div>
        </div>
        <div>
          <span className="text-green-500">{status}</span>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
