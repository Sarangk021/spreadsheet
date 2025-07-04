import React from 'react';

const headerItems = [
  { label: "Tool bar", iconClass: "fas fa-wrench" },
  { label: "Hide fields", iconClass: "fas fa-eye-slash" },
  { label: "Sort", iconClass: "fas fa-sort" },
  { label: "Filter", iconClass: "fas fa-filter" },
  { label: "Cell view", iconClass: "fas fa-table-cells" },
];

const HeaderMenu: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b text-sm">
      
      <div className="flex gap-4 items-center">
        {headerItems.map(({ label, iconClass }) => (
          <button
            key={label}
            onClick={() => console.log(`${label} clicked`)}
            className="hover:underline flex items-center gap-1"
          >
            <i className={`${iconClass} text-gray-600`}></i>
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-2 items-center">
        <button
          onClick={() => console.log("Import clicked")}
          className="flex items-center gap-1 px-2 py-1 bg-white border rounded hover:bg-gray-100"
        >
          <i className="fas fa-download text-sm"></i>
          <span>Import</span>
        </button>

        <button
          onClick={() => console.log("Export clicked")}
          className="flex items-center gap-1 px-2 py-1 bg-white border rounded hover:bg-gray-100"
        >
          <i className="fas fa-upload text-sm"></i>
          <span>Export</span>
        </button>

        <button
          onClick={() => console.log("Share clicked")}
          className="flex items-center gap-1 px-2 py-1 bg-white border rounded hover:bg-gray-100"
        >
          <i className="fas fa-share-alt text-sm"></i>
          <span>Share</span>
        </button>

        <button
          onClick={() => console.log("New Action clicked")}
          className="flex items-center gap-1 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <i className="fas fa-plus text-sm"></i>
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderMenu;
