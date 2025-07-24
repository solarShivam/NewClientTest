import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { overviewData, recentSalesData, topProducts } from "../../Components/Constants/index";
import { Footer } from "../../Components/Sidebar/footer";
import { Star, Users, Layers,  Award , XCircle } from "lucide-react";
import Card from "../../Components/Card/CandidateData";
import React, { useState } from "react";

const DashboardPage = () => {

    const appeared = 3046;
    const conducted = 3456;
    const cleared = 1093;
    const uncleared = 2363;

    const clearedPercent = ((cleared / conducted) * 100).toFixed(2);
    const unclearedPercent = ((uncleared / conducted) * 100).toFixed(2);

     // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // ✅ Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = topProducts.slice(indexOfFirstItem, indexOfLastItem);

  // ✅ Total pages
  const totalPages = Math.ceil(topProducts.length / itemsPerPage);

  // ✅ Page change handler
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

    return (
        <div className="flex flex-col gap-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card title="Total Students Appeared" icon={Users} value="3046" percentage="100%" />
              <Card title="Total Test Conducted" icon={Layers} value="3456" percentage="100%"/>
              <Card title="Total Test Cleared" icon={ Award} value={cleared} percentage={`${clearedPercent}%`} />
              <Card title="Total UnCleared Test" icon={XCircle }  value={uncleared} percentage={`${unclearedPercent}%`} />
            </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
              {/* Overview Card */}
              <div className="flex flex-col gap-y-4 rounded-lg border border-slate-300 bg-white p-4 transition-colors dark:border-slate-700 dark:bg-slate-900 col-span-1 md:col-span-2 lg:col-span-4">
                <div className="flex items-center gap-x-2">
                  <p className="font-medium text-slate-900 transition-colors dark:text-slate-50">Overview</p>
                </div>
                <div className="flex flex-col gap-y-2 rounded-lg p-0">
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                      data={overviewData}
                      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Tooltip
                        cursor={false}
                        formatter={(value) => `$${value}`}
                      />
                      <XAxis
                        dataKey="name"
                        strokeWidth={0}
                        stroke="#94a3b8"
                        tickMargin={6}
                      />
                      <YAxis
                        dataKey="total"
                        strokeWidth={0}
                        stroke="#94a3b8"
                        tickFormatter={(value) => `$${value}`}
                        tickMargin={6}
                      />
                      <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#2563eb"
                        fillOpacity={1}
                        fill="url(#colorTotal)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

            {/* Recent company Card */}
            <div className="flex flex-col gap-y-4 rounded-lg border border-slate-300 bg-white p-4 transition-colors dark:border-slate-700 dark:bg-slate-900 col-span-1 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-x-2">
                <p className="font-medium text-slate-900 transition-colors dark:text-slate-50">Recent Company</p>
              </div>
              <div className="flex flex-col gap-y-2 rounded-lg p-0 h-[300px] overflow-auto">
                {recentSalesData.map((sale) => (
                  <div
                    key={sale.id}
                    className="flex items-center justify-between gap-x-4 py-2 pr-2"
                  >
                    <div className="flex items-center gap-x-4">
                      <img
                        src={sale.image}
                        alt={sale.name}
                        className="size-10 flex-shrink-0 rounded-full object-cover"
                      />
                      <div className="flex flex-col gap-y-2">
                        <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{sale.email}</p>
                      </div>
                    </div>
                  
                  </div>
                ))}
              </div>
            </div>
          </div>


            <div className="card">
                <div className="card-header">
                    <p className="card-title">All Students</p>
                </div>
                <div className="card-body p-0">
                    <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                        <table className="table">
                            <thead className="table-header">
                                <tr className="table-row">
                                    <th className="table-head"><input type="checkbox" /></th>
                                    <th className="table-head">Candidate Name</th>
                                    <th className="table-head">Phone No.</th>
                                    <th className="table-head">Test Name</th>
                                    <th className="table-head">Candidate Score</th>
                                    <th className="table-head">Complete Date</th>
                                </tr>
                            </thead>
                            <tbody className="table-body">
                                {topProducts.map((product) => (
                                    <tr
                                        key={product.number}
                                        className="table-row"
                                    >
                                       <td className="table-head"><input type="checkbox" /></td>
                                        <td className="table-cell">{product.name}</td>
                                        
                                        <td className="table-cell">{product.phone}</td>
                                        <td className="table-cell">{product.testName}</td>
                                         <td className="table-cell">{product.score}</td>
                                          <td className="table-cell">{product.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* <div className="card">
        <div className="card-header">
          <p className="card-title">All Students</p>
        </div>
        <div className="card-body p-0">
          <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="h-full w-full text-slate-900 dark:text-slate-50">
              <thead className="sticky top-0 bg-slate-200 transition-[background] dark:bg-slate-800">
                <tr className="border-b border-slate-300 dark:border-slate-700">
                  <th className="h-12 px-4 text-start"><input type="checkbox" /></th>
                  <th className="h-12 px-4 text-start">Candidate Name</th>
                  <th className="h-12 px-4 text-start">Phone No.</th>
                  <th className="h-12 px-4 text-start">Test Name</th>
                  <th className="h-12 px-4 text-start">Candidate Score</th>
                  <th className="h-12 px-4 text-start">Complete Date</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((product) => (
                  <tr key={product.number} className="border-b border-slate-300 dark:border-slate-700">
                    <td className="whitespace-nowrap px-4 py-2 font-medium"><input type="checkbox" /></td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">{product.name}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">{product.phone}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">{product.testName}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">{product.score}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium">{product.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

    
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <button
              className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 disabled:opacity-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`rounded px-3 py-1 ${
                  currentPage === index + 1
                    ? "bg-blue-700 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600 disabled:opacity-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div> */}

            <Footer />
        </div>
    );
};

export default DashboardPage;

