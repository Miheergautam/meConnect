export default function CardStack() {
    const totalCards = 7;
    const baseScale = 0.9;
    const shiftAmount = 25;
  
    return (
      <div className="relative w-full max-w-xl mx-auto h-80 flex justify-center items-end">
        {/* Stacked cards behind the main card → smaller and higher */}
        {[...Array(totalCards - 1)].map((_, i) => {
          const scale = Math.pow(baseScale, i + 1);
          const translateY = -(i + 1) * shiftAmount;
          return (
            <div
              key={i}
              className="absolute bg-white rounded-2xl shadow-md px-6 py-4"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity: 1 - i * 0.3,
                zIndex: i,
                width: "100%",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                <div className="text-sm font-medium text-gray-900"></div>
                <div className="text-xs text-gray-500"></div>
              </div>
              <div className="text-gray-800 text-base leading-relaxed">
                <span className="bg-blue-100 text-blue-800 px-1 rounded"></span>
              </div>
              <div className="mt-3 bg-gray-50 rounded-xl p-2 flex items-center gap-2 text-gray-600 text-sm border border-gray-200">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium text-gray-900 ml-1"></span>
              </div>
            </div>
          );
        })}
  
        {/* Main Card → at the very bottom */}
        <div className="relative z-10 rounded-2xl bg-white shadow-xl border border-gray-300 w-full px-4 py-3">
          <div className="flex items-center gap-2 mb-2">
            <img
              src="/30875853_7748167.svg"
              alt="Nick Jonas"
              className="w-9 h-9 rounded-full object-cover"
            />
            <div className="text-sm font-medium text-gray-900">Captain Nick</div>
            <div className="text-xs text-gray-500">Dec 4, 4:12 PM</div>
          </div>
          <div className="text-gray-900 text-base leading-relaxed">
            Hey{" "}
            <span className="bg-blue-100 text-blue-800 px-1 rounded">@updating_me</span>{" "}
            Challenge issued: 1v1. Bring skill — or excuses.
          </div>
          <div className="mt-3 bg-gray-50 rounded-xl p-2 flex justify-center items-center gap-2 text-gray-700 text-sm border border-gray-200">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Thursday, Dec 5 2025 —{" "}
            <span className="font-medium text-gray-900 ml-1">09:00 AM</span>
          </div>
        </div>
      </div>
    );
  }
  