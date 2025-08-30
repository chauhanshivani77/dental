import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "1", value: 4 },
  { day: "2", value: 7 },
  { day: "3", value: 15 },
  { day: "4", value: 10 },
  { day: "5", value: 12 },
  { day: "6", value: 7 },
  { day: "7", value: 14 },
  { day: "8", value: 9 },
  { day: "9", value: 15 },
  { day: "10", value: 11 },
  { day: "11", value: 5 },
  { day: "12", value: 8 },
  { day: "13", value: 9 },
  { day: "14", value: 6 },
];

export default function ProductionTrend({
  fill = "#4CBB17", // bar color
  title = "Production trend", // default heading
  titleClass = "text-center text-sm bg-teal-100 rounded-md py-2 mb-4 ms-auto",
  titleStyle = { width: "35%" },
}) {
  return (
    <div className="p-2 bg-white rounded-md">
      <p className={titleClass} style={titleStyle}>
        {title}
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <Tooltip />
          <Bar dataKey="value" fill={fill} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
