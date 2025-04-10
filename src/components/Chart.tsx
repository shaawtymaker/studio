
import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface ChartProps {
  title: string
  data: { name: string; value: number }[]
}

const Chart: React.FC<ChartProps> = ({ title, data }) => {
  return (
    <div className="bg-[#27272a] rounded-lg p-4 text-white">
      <h3 className="mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#6b7280" />
          <XAxis dataKey="name" stroke="#f3f4f6" />
          <YAxis stroke="#f3f4f6" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart