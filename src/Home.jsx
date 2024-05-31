import React from 'react'
import { PieChart, Pie, Cell,ResponsiveContainer} from 'recharts';
import Fetch from './components/Fetch'

const Home = () => {

  // --------chart---------

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    
  };
// ------------end chart---------------
  return (
    <main className="main-container">

      <div className="top-welcome-card">
        <h3>Welcome back,John Doe</h3>

        <h5>The end of the year is coming. Are you planning your performance interviews?You can do this super efficiently with Acmy. </h5>
        <a href="#">
          <h4>Look here for more information</h4>
        </a>
      </div>
      <div className="container">
        <div className="task-list">
          <h4 className="task-list-header">Tasks</h4>
          <div className="task-list-content">
            <Fetch />
          </div>
        </div>
        <div className="activity-feed">
          <h4>Activity Feed</h4>
          <ul>
            <li>Kushantha Charuka created Contract #00124 need John Beige’s signature</li>
            <li>Kushantha Charuka created Contract #00124 need John Beige’s signature</li>
            <li>Kushantha Charuka created Contract #00124 need John Beige’s signature</li>
          </ul>
        </div>
        <div className="chart">
          <h4>Tasks Priorities</h4>

          <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
        </div>
      </div>

    </main>
  )
}

export default Home