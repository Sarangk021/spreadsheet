import React, { useState } from 'react';

const columns = [
  { label: 'Job Request', icon: 'fas fa-tasks' },
  { label: 'Submitted', icon: 'fas fa-calendar-check' },
  { label: 'Status', icon: 'fas fa-flag' },
  { label: 'Submitter', icon: 'fas fa-user' },
  { label: 'URL', icon: 'fas fa-link' },
  { label: 'Assigned', icon: 'fas fa-user-tag' },
  { label: 'Priority', icon: '' },
  { label: 'Due Date', icon: '' },
  { label: 'Est. Value', icon: '' },
  { label: '', icon: '' },
];

const initialFilledData = [
  [
    'Launch social media campaign for product',
    '05-12-2024',
    'In-process',
    'Aisha Patel',
    'www.aishapatel.com',
    'Sophie Choudhury',
    'Medium',
    '20-11-2024',
    '6,200,000 ₹',
    '',
  ],
  [
    'Update press kit for company redesign',
    '05-12-2024',
    'Need to start',
    'Irfan Khan',
    'www.irfankhanportfolio.com',
    'Tejas Pandey',
    'High',
    '30-10-2024',
    '3,500,000 ₹',
    '',
  ],
  [
    'Finalize user testing feedback for app',
    '05-12-2024',
    'In-process',
    'Mark Johnson',
    'www.markjohnson.dev',
    'Rachel Lee',
    'Medium',
    '10-12-2024',
    '4,750,000 ₹',
    '',
  ],
  [
    'Design new features for the website',
    '10-01-2025',
    'Complete',
    'Emily Green',
    'www.emilygreen.io',
    'Tom Wright',
    'Low',
    '15-01-2025',
    '5,900,000 ₹',
    '',
  ],
  [
    'Prepare financial report for Q4',
    '25-01-2025',
    'Blocked',
    'Jessica Brown',
    'www.jessicabrown.org',
    'Kevin Smith',
    'Low',
    '30-01-2025',
    '2,800,000 ₹',
    '',
  ],
];

const totalRows = 20;
const emptyRow = new Array(columns.length).fill('');
const initialData = [
  ...initialFilledData,
  ...Array.from({ length: totalRows - initialFilledData.length }, () => [...emptyRow]),
];

const Spreadsheet: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleChange = (rowIdx: number, colIdx: number, value: string) => {
    const newData = [...data];
    newData[rowIdx][colIdx] = value;
    setData(newData);
  };

  return (
    <div className="overflow-auto border border-gray-300 rounded" style={{ maxHeight: '500px' }}>
      <table className="min-w-full table-fixed border-collapse">
        <thead>
          {/* Spreadsheet's tool bar row*/}
          <tr className="sticky top-0 bg-white z-20 text-sm font-medium text-gray-700">
            <th className="bg-white w-10"></th>
            <th colSpan={4} className="bg-gray-100 px-3 py-2">
              <div className="flex items-center gap-2">
                <i className="fas fa-file-alt text-blue-600 text-base"></i>
                <span>Q3 Financial Overview</span>
                <i className="fas fa-sync-alt text-gray-400 text-sm cursor-pointer"></i>
                <i className="fas fa-chevron-down text-gray-400 text-sm cursor-pointer"></i>
              </div>
            </th>
            <th className="bg-white"></th>
            <th className="bg-gray-100 px-3 py-2">
              <div className="flex items-center gap-2 justify-center">
                <div className="flex flex-col text-xs text-gray-400 leading-none">
                  <i className="fas fa-caret-up -mb-1"></i>
                  <i className="fas fa-caret-down -mt-1"></i>
                </div>
                <span>ABC</span>
                <i className="fas fa-ellipsis-h text-gray-400 text-sm ml-1"></i>
              </div>
            </th>
            <th colSpan={2} className="bg-purple-100 text-purple-800 px-3 py-2">
              <div className="flex items-center gap-2 justify-center">
                <i className="fas fa-sort text-purple-500 text-sm"></i>
                <span>Answer a question</span>
                <i className="fas fa-ellipsis-h text-purple-500 text-sm ml-1"></i>
              </div>
            </th>
            <th className="bg-orange-100 text-orange-800 px-3 py-2">
              <div className="flex items-center gap-2 justify-center">
                <i className="fas fa-sort text-orange-500 text-sm"></i>
                <span>Extract</span>
                <i className="fas fa-ellipsis-h text-orange-500 text-sm ml-1"></i>
              </div>
            </th>
            <th className="bg-white text-center">
              <i className="fas fa-plus text-gray-500 text-base"></i>
            </th>
          </tr>

          {/* Column's Header Row */}
          <tr className="bg-gray-100 text-sm font-medium text-gray-700 sticky top-[42px] z-10">
            <th className="border px-2 py-1 text-center">#</th>
            {columns.map((col, i) => (
              <th key={i} className="border px-2 py-1 text-left">
                <div className="flex items-center gap-2">
                  {col.icon && <i className={`${col.icon} text-gray-600 text-xs`}></i>}
                  <span>{col.label}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="bg-white">
              <td className="border text-center text-gray-500">{rowIdx + 1}</td>
              {row.map((cell, colIdx) => (
                <td key={colIdx} className="border px-2 py-1 text-center">

                  {colIdx === 2 ? (
                    <span
                      className={`
                        inline-block text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap
                        ${cell === 'In-process' ? 'bg-[#FFF3D6] text-[#85640B]' : ''}
                        ${cell === 'Need to start' ? 'bg-[#E2E8F0] text-[#475569]' : ''}
                        ${cell === 'Complete' ? 'bg-[#D3F2E3] text-[#0A6E3D]' : ''}
                        ${cell === 'Blocked' ? 'bg-[#FFE1DE] text-[#C22219]' : ''}
                     `}
                    >
                    {cell}
                    </span>
                    ) : (
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => handleChange(rowIdx, colIdx, e.target.value)}
                      className={`w-full outline-none border border-transparent focus:border-blue-400 focus:ring-1 focus:ring-blue-300 rounded-sm px-1 text-sm
                        ${colIdx === 4 ? 'underline text-black' : ''}
                        ${colIdx === 6 && cell === 'Medium' ? 'text-[#C29210]' : ''}
                        ${colIdx === 6 && cell === 'High' ? 'text-[#EF4D44]' : ''}
                        ${colIdx === 6 && cell === 'Low' ? 'text-[#1A8CFF]' : ''}

                        ${[0, 3, 4, 5].includes(colIdx) ? 'text-left' : ''}
                        ${[1, 7, 8].includes(colIdx) ? 'text-right' : ''}
                        ${[2, 6, 9].includes(colIdx) ? 'text-center' : ''}
                      `}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
