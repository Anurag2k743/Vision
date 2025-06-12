import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const projects = [
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg',
    name: 'Chakra Vision UI Version',
    budget: '$14,000',
    status: 'Working',
    completion: 60
  },
  {
    icon: 'https://cdn.iconscout.com/icon/free/png-256/jira-282219.png',
    name: 'Add Progress Track',
    budget: '$3,000',
    status: 'Done',
    completion: 100
  },
  {
    icon: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg',
    name: 'Fix Platform Errors',
    budget: 'Not set',
    status: 'Canceled',
    completion: 30
  },
  {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg',
    name: 'Launch our Mobile App',
    budget: '$32,000',
    status: 'Canceled',
    completion: 0
  },
  {
    icon: 'https://cdn.iconscout.com/icon/free/png-256/bitbucket-3521321-2945125.png',
    name: 'Add the New Pricing Page',
    budget: '$2,300',
    status: 'Done',
    completion: 100
  }
];

const ProjectTable = () => {
  return (
    <div className="w-full p-6 text-white " >
      <h2 className="text-xl font-semibold mb-4">Projects table</h2>
      <table className="min-w-max w-full text-sm">
        <thead>
          <tr className="text-left text-gray-400">
            <th className="pb-3">Project</th>
            <th className="pb-3">Budget</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Completion</th>
            <th className="pb-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {projects.map((project, index) => (
            <tr key={index} className="">
              <td className="flex items-center gap-3 py-4">
                <img src={project.icon} alt="icon" className="w-6 h-6" />
                <span className="font-medium">{project.name}</span>
              </td>
              <td className="py-4">{project.budget}</td>
              <td className="py-4">{project.status}</td>
              <td className="py-4">
                <div className="flex flex-col gap-1">
                  <span>{project.completion}%</span>
                  <div className="w-full bg-gray-700 h-1.5 rounded">
                    <div
                      className="bg-blue-500 h-1.5 rounded"
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </div>
              </td>
              <td className="py-4 text-right">
                <BsThreeDotsVertical className="text-lg cursor-pointer text-gray-400 " />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
