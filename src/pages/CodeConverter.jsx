import {
  ArrowDownRightIcon,
  ArrowDownTrayIcon,
  ArrowPathIcon,
  ArrowPathRoundedSquareIcon,
  BookmarkIcon,
  DocumentArrowUpIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

function CodeConverter() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");

  const handleConvert = () => {
    // Add conversion logic here
    console.log("Converting code...");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-medium mb-4">Productivity Enhancers</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium">Code Converter</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-medium">Help & Security</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-9">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-medium mb-6 flex items-center gap-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Code Converter
            </h1>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h2 className="text-sm font-medium mb-2">
                  Input your legacy code (C/C++/Java/COBOL)
                </h2>
                <textarea
                  className="w-full h-64 p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none overflow-y-auto"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="Type or paste your code here..."
                />
                <div className="mt-4 grid grid-cols-4 gap-4 w-full">
                  <button className="w-full px-4 py-2 bg-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300">
                    <ArrowPathIcon className="h-4 w-4text-white" />
                    Reset
                  </button>
                  <button className="w-full px-4 py-2 bg-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300">
                    <ArrowDownRightIcon className="h-4 w-4text-white" /> Import
                  </button>
                  <button className="w-full px-4 py-2 bg-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-300">
                  <BookmarkIcon className="h-4 w-4text-white" /> Save
                  </button>
                  <button
                    className="w-full px-4 py-2 bg-primary text-white rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90"
                    onClick={handleConvert}
                  >
                    <ArrowPathRoundedSquareIcon className="h-4 w-4text-white" /> Convert
                  </button>
                </div>
              </div>
              <div>
                <h2 className="text-sm font-medium mb-2">
                  Microservices (SpringBoot/Python/JSS)
                </h2>
                <div className="w-full h-64 p-3 bg-gray-50 border rounded-lg overflow-y-auto custom-scrollbar">
                  <pre className="whitespace-pre-wrap break-words">
                    {outputCode || "Converted code will appear here..."}
                  </pre>
                </div>
                <div className="flex justify-between mt-5">
                  <button className="px-4 py-2 flex items-center justify-center gap-2 bg-white rounded-lg hover:bg-gray-300 w-[49%] border-2 border-secondary">
                    <DocumentArrowUpIcon className="h-4 w-4text-white" />
                    Export
                  </button>
                  <button className="px-4 py-2 flex items-center justify-center bg-secondary gap-2 text-white rounded-lg hover:bg-black/90 w-[49%]">
                    <ArrowDownTrayIcon className="h-4 w-4text-white" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeConverter;
