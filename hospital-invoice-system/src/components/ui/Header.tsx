import React from 'react';

interface HeaderProps {
  showUserInfo?: boolean;
  showExportButtons?: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  showUserInfo = false, 
  showExportButtons = false 
}) => {
  const handleExportPDF = () => {
    window.print();
  };

  const handleExportCSV = () => {
    // CSV export functionality can be implemented here
    console.log('Exporting to CSV...');
  };

  return (
    <header className="w-full bg-[#4B928F] border-b border-gray-200 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-white">A1 Hospital</h1>
          <p className="text-sm text-white">123 Main Street, Cityville, State, 123456</p>
          <p className="text-sm text-white">
            Contact: +1 (555) 123-4567 | Website:{' '}
            <a href="http://www.A1hospital.com" className="text-blue-600 hover:underline">
              www.A1hospital.com
            </a>
          </p>
          <p className="text-sm text-white">Appointment Line: +1 (555) 000-1234</p>
        </div>
        
        <div className="flex items-center gap-4">
          {showUserInfo && (
            <div className="bg-gray-800 text-white px-4 py-2 rounded">
              <span className="text-sm">User Name: Bill Desk</span>
            </div>
          )}
          
          {showExportButtons && (
            <div className="flex gap-2">
              <button
                onClick={handleExportPDF}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Export as PDF
              </button>
              <button
                onClick={handleExportCSV}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              >
                Export as CSV
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;