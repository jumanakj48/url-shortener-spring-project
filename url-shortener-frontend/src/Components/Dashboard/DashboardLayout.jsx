import React, { useState } from "react";
import Graph from "./Graph";
import { useStoreContext } from "../../contextApi/ContextApi.jsx";
import {
  useFetchTotalClicks,
  useFetchMyShortUrls,
} from "../../hooks/useQuery.js";
import ShortenPopUp from "./ShortenPopUp";
import ShortenUrlList from "./ShortenUrlList";
import { useNavigate } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { Hourglass } from "react-loader-spinner";

const DashboardLayout = () => {
  const { token } = useStoreContext();
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [showShortenPopUp, setShowShortenPopUp] = useState(false);

  const handleStartDateChange = (value) => {
    setStartDate(value);
    if (value > endDate) {
      setEndDate(value);
    }
  };

  const handleEndDateChange = (value) => {
    if (value < startDate) {
      setEndDate(startDate);
    } else {
      setEndDate(value);
    }
  };

  function onError() {
    navigate("/error");
  }

  const {
    isLoading: totalClicksLoading,
    data: totalClicks = [],
  } = useFetchTotalClicks(token, onError, startDate, endDate);

  const {
    isLoading: urlsLoading,
    data: myShortenUrls = [],
    refetch,
  } = useFetchMyShortUrls(token, onError);

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      <div className="lg:w-[90%] w-full mx-auto py-16">

        {/* Date Filters */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between mb-6">
          <div className="flex gap-4 items-center">
            <div>
              <label className="block text-sm font-medium text-gray-700">Start Date</label>
              <input
                type="date"
                className="border rounded px-2 py-1"
                value={startDate}
                onChange={(e) => handleStartDateChange(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">End Date</label>
              <input
                type="date"
                className="border rounded px-2 py-1"
                value={endDate}
                onChange={(e) => handleEndDateChange(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="h-96 relative">
          {totalClicksLoading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-1">
                <Hourglass
                  visible={true}
                  height="50"
                  width="50"
                  ariaLabel="hourglass-loading"
                  colors={["#306cce", "#72a1ed"]}
                />
                <p className="text-slate-700">Please Wait...</p>
              </div>
            </div>
          ) : totalClicks.length === 0 ? (
            <div className="absolute flex flex-col justify-center sm:items-center items-end w-full left-0 top-0 bottom-0 right-0 m-auto">
              <h1 className="text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                No Data For This Time Period
              </h1>
              <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600">
                Share your short link to view where your engagements are coming from
              </h3>
            </div>
          ) : (
            <Graph graphData={totalClicks} />
          )}
        </div>

        {/* Button to create new short URL */}
        <div className="py-5 sm:text-end text-center">
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-4 py-2 rounded-md"
            onClick={() => setShowShortenPopUp(true)}
          >
            Create a New short Url
          </button>
        </div>

        {/* Short URL List */}
        <div>
          {!urlsLoading && myShortenUrls.length === 0 ? (
            <div className="flex justify-center pt-16">
              <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-gray-50">
                <h1 className="text-slate-800 font-montserrat sm:text-[18px] text-[14px] font-semibold mb-1">
                  You haven't created any short link yet
                </h1>
                <FaLink className="text-blue-500 sm:text-xl text-sm" />
              </div>
            </div>
          ) : (
            <ShortenUrlList data={myShortenUrls} startDate={startDate} endDate={endDate} />
          )}
        </div>
      </div>

      {/* Popup for shortening URL */}
      <ShortenPopUp
        refetch={refetch}
        open={showShortenPopUp}
        setOpen={setShowShortenPopUp}
      />
    </div>
  );
};

export default DashboardLayout;
