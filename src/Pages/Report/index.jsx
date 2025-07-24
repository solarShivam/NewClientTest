

import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from "react-helmet-async";

const formatDate = (date) => {
  return date.toISOString().split('T')[0]; // Converts to "YYYY-MM-DD"
};

const Report = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(formatDate(today));
  const [endDate, setEndDate] = useState(formatDate(today));

  const handleDownloadClick = async () => {
    const formatDateForFilename = (dateStr) => {
      const date = new Date(dateStr);
      const day = date.getDate().toString().padStart(2, '0');
      const month = date.toLocaleString('default', { month: 'short' }); // Apr
      const year = date.getFullYear();
      return `${day}-${month}-${year}`;
    };

    const formattedStart = formatDateForFilename(startDate);
    const formattedEnd = formatDateForFilename(endDate);
    const filename = `${formattedStart} to ${formattedEnd} Test-Portal Report.xlsx`;

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_ADDRESS}/admin/download-testReport`,
        {
          params: { startDate, endDate },
          responseType: 'blob',
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert('Something went wrong while downloading the report.');
    }
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Test Report | Admin Panel</title>
      </Helmet>

      {/* Header */}
      <div className="mb-6 bg-yellow-500 text-center border border-white rounded-md py-1 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">
        <h1 className="text-2xl font-semibold  drop-shadow-[2px_2px_2px_rgba(0,0,0,0.6)]">Test Report</h1>
      </div>

      {/* Date Range Picker */}
      <div className="flex flex-col md:flex-row items-center md:justify-start gap-4">
        <div className="flex flex-col w-full max-w-xs">
          <label className="text-sm text-gray-500 mb-1">Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 text-black focus:outline-none"
          />
        </div>

        <div className="text-xl font-bold text-gray-400 hidden md:block mt-5">to</div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="text-sm text-gray-500 mb-1">End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-400 rounded-md px-4 py-2 text-black focus:outline-none"
          />
        </div>
      </div>

      {/* Download Button */}
      <div className="mt-6">
        <button
          onClick={handleDownloadClick}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
        >
          Download Report
        </button>
      </div>
    </div>
  );
};

export default Report;
