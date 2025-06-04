import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const projects = [
  {
    company: "Chakra Vision UI Version",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    members: [
      { name: "John Doe", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png" },
      { name: "Jane Smith", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png" },
      { name: "Alex Johnson", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar3.4d26ce02.png" },
      { name: "Emily Davis", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png" },
    ],
    budget: "$14,000",
    completion: 60,
  },
  { 
    company: "Add Progress Track",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968335.png",
    members: [
      { name: "Jane Smith", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png" },
      { name: "Emily Davis", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png" },
    ],
    budget: "$3,000",
    completion: 10,
  },
  {
    company: "Fix Platform Errors",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968885.png",
    members: [
      { name: "Emily Davis", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png" },
      { name: "Alex Johnson", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar3.4d26ce02.png" },
    ],
    budget: "Not set",
    completion: 100,
  },
  {
    company: "Launch our Mobile App",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968704.png",
    members: [
      { name: "John Doe", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png" },
      { name: "Jane Smith", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png" },
      { name: "Alex Johnson", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar3.4d26ce02.png" },
      { name: "Emily Davis", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png" },
    ],
    budget: "$20,500",
    completion: 100,
  },
  {
    company: "Add the New Pricing Page",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968706.png",
    members: [
      { name: "Emily Davis", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar4.2a4ba26c.png" },
    ],
    budget: "$500",
    completion: 25,
  },
  {
    company: "Redesign New Online Shop",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968711.png",
    members: [
      { name: "John Doe", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar1.1d9e1978.png" },
      { name: "Jane Smith", image: "https://demos.creative-tim.com/vision-ui-dashboard-react/static/media/avatar2.b8132c3c.png" },
    ],
    budget: "$2,000",
    completion: 40,
  },
];

export default function Project() {
  return (
    <div className="text-white w-full">
      <h2 className="text-xl font-semibold mb-4">Project</h2>
      <p className="flex items-center gap-2">
        <IoCheckmarkCircleOutline fontSize={20} className="bg-green-700 rounded-full" />
        30 done this month
      </p>

      <table className="w-full table-auto mt-8">
        <thead>
          <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
            <th className="pb-2 uppercase">Companies</th>
            <th className="pb-2 uppercase">Members</th>
            <th className="pb-2 uppercase">Budget</th>
            <th className="pb-2 uppercase">Completion</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-b border-gray-700 text-sm">
              <td className="py-4 flex items-center gap-2">
                <img src={project.logo} alt="logo" className="w-6 h-6" />
                <p className="text-[14px]">{project.company}</p>
              </td>
              <td className="py-4">
                <div className="flex -space-x-3">
                  {project.members.map((member, i) => (
                    <div key={i} className="relative group h-6 w-6 z-10 hover:z-20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full w-full h-full object-cover  border-white shadow-md"
                      />
                      {/* Tooltip */}
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 hidden group-hover:block z-50">
                        <div className="relative bg-black text-white text-xs px-5 py-2 rounded shadow-lg whitespace-nowrap">
                          {member.name}
                          {/* Tooltip Arrow */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-black rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </td>
              <td className="py-4">{project.budget}</td>
              <td className="py-4">
                <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
                <div className="text-xs mt-1">{project.completion}%</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
