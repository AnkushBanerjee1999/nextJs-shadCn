import React from 'react';

interface CompProps {
  projectName: string;
  projectDesc: string;
  total: number;
  used: number;
  icon: React.ReactNode;
}


const ProjectSummaryCde: React.FC<CompProps> = ({ projectName, projectDesc, total, used, icon }) => {
  const percentage = Math.floor((used / total) * 100);

  // Determine the background color based on the percentage value
  const percentageBgColor = percentage > 80 ? 'bg-green-500' : 'bg-yellow-500';

  return (
    <div className='border border-dashed rounded m-5 h-[70px] flex justify-between'>
      <div className='flex'>
        <div className='border w-[50px] m-2 rounded bg-slate-50'>{icon}</div>
        <div className='font-semibold mt-1 text-md'>
          {projectName}
          <br />
          <span className='text-muted-foreground text-xs'>
            {projectDesc}
          </span>
        </div>
      </div>
      <div className='flex mt-2'>
        <div className=''>
          <span className='font-semibold text-xl'>{used}</span>/{total}
        </div>
        <div className={`border h-[18px] m-2 rounded text-white text-center text-xs font-normal ${percentageBgColor}`}>
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default ProjectSummaryCde;
