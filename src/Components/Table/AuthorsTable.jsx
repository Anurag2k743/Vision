import React from 'react';

const authorsData = [
  {
    avatar: 'https://i.pravatar.cc/40?u=esthera', // Replace with actual image
    name: 'Esthera Jackson',
    email: 'esthera@simmpple.com',
    function: 'Manager',
    department: 'Organization',
    status: 'Online',
    employed: '23/04/18'
  },
  {
    avatar: 'https://i.pravatar.cc/40?u=alexa',
    name: 'Alexa Liras',
    email: 'alexa@simmpple.com',
    function: 'Programator',
    department: 'Developer',
    status: 'Offline',
    employed: '11/01/19'
  },
  {
    avatar: 'https://i.pravatar.cc/40?u=laurent',
    name: 'Laurent Michael',
    email: 'laurent@simmpple.com',
    function: 'Executive',
    department: 'Projects',
    status: 'Online',
    employed: '19/09/17'
  },
  {
    avatar: 'https://i.pravatar.cc/40?u=freduardo',
    name: 'Freduardo Hill',
    email: 'freduardo@simmpple.com',
    function: 'Programator',
    department: 'Developer',
    status: 'Online',
    employed: '24/12/08'
  },
  {
    avatar: 'https://i.pravatar.cc/40?u=daniel',
    name: 'Daniel Thomas',
    email: 'daniel@simmpple.com',
    function: 'Manager',
    department: 'Executive',
    status: 'Offline',
    employed: '04/10/21'
  },
  {
    avatar: 'https://i.pravatar.cc/40?u=mark',
    name: 'Mark Wilson',
    email: 'mark@simmpple.com',
    function: 'Programator',
    department: 'Developer',
    status: 'Offline',
    employed: '14/09/20'
  }
];

const AuthorsTable = () => {
  return (
    <div className="w-full p-6 text-white" >
      <h2 className="text-xl font-semibold mb-4">Authors table</h2>
      <table className="min-w-max w-full text-sm">
        <thead>
          <tr className="text-left text-gray-400">
            <th className="pb-3">Author</th>
            <th className="pb-3">Function</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Employed</th>
            <th className="pb-3">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {authorsData.map((author, index) => (
            <tr key={index}>
              <td className="flex items-center gap-3 py-4">
                <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full" />
                <div>
                  <div className="font-semibold">{author.name}</div>
                  <div className="text-gray-400 text-xs">{author.email}</div>
                </div>
              </td>
              <td className="py-4">
                <div className="font-semibold">{author.function}</div>
                <div className="text-gray-400 text-xs">{author.department}</div>
              </td>
              <td className="py-4">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    author.status === 'Online'
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-700 text-white border border-white'
                  }`}>
                  {author.status}
                </span>
              </td>
              <td className="py-4 font-medium">{author.employed}</td>
              <td className="py-4 text-blue-400 hover:underline cursor-pointer">Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorsTable;
