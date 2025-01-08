export default function MetricCard({ title, value }) {
    return (
      <div className="bg-white border shadow-md border-slate-400 p-3 md:p-4 rounded-lg">
        <h3 className="text-sm text-gray-600 mb-2">{title}</h3>
        <p className="text-base md:text-xl lg:text-2xl font-semibold">{value}</p>
      </div>
    )
  }