export default function AlertCard({ user, message, time }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md border border-slate-300 mb-4 ">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img 
              src={user.avatar} 
              alt={user.name} 
              className="w-8 h-8 rounded-full"
            />
            <span className=" text-sm md:text-base font-medium">{user.name}</span>
          </div>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-xs md:text-sm text-gray-600 mb-3">{message}</p>
        <div className="flex justify-center">
        <button className="px-2 py-1 md:px-4 md:py-2 text-center border rounded-md bg-[#2886FF] hover:bg-[#2885ffce] text-white transition-colors text-sm md:text-base">
          Take Action
        </button>
        </div>
      </div>
    )
  }