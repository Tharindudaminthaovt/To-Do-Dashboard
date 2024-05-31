import React, { useCallback, useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Fetch from '../components/Fetch'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'

const Home = () => {

	// --------chart---------

	const [data, setData] = useState([]);

	const handleFetchedData = useCallback((fetchedData) => {
		const priorityCount = fetchedData.reduce((acc, task) => {
			acc[task.priority] = (acc[task.priority] || 0) + 1;
			return acc;
		}, {});
		//----converting data into a format suitable for the chart
		const chartData = [
			{ name: 'High', value: priorityCount.HIGH || 0 },
			{ name: 'Medium', value: priorityCount.MEDIUM || 0 },
			{ name: 'Low', value: priorityCount.LOW || 0 },
		];
		setData(chartData);
	}, []);

	const COLORS = ['#FF0000', '#F2C94C', '#0000FF'];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
		const radius = outerRadius + 10;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);
		return (
			<text x={x} y={y} fill={COLORS[index % COLORS.length]} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
				{data[index].name}
			</text>
		);
	};
	// ------------end chart---------------
	return (
		<main className="main-container">

			<div className="top-welcome-card">
				<h3>Welcome back,John Doe</h3>

				<h5>The end of the year is coming. Are you planning your performance interviews?You can do this super efficiently with Acmy. </h5>
				<a href="https://www.betalaunch.io/" target="_blank">
					<h4>Look here for more information</h4>
				</a>
			</div>
			<div className="container">
				<div className="task-list">
					<h4 className="task-list-header">Tasks</h4>
					<div className="task-list-content">
						<Fetch onDataFetched={handleFetchedData} />
					</div>
				</div>
				<div className="activity-feed">
					<h4>Activity Feed</h4>
					<ul>
						<li>
							<div className="activity-item">
								<div className="profile-icon">
									<img src={profile1} alt="profile image" />
								</div>
								<div className="activity-details">
									<p>Kushantha Charuka created Contract #00124 need John Beige’s signature</p>
									<div className="activity-date">Sep 16, 2022 at 11:30 AM</div>
								</div>
							</div>
						</li>

						<li>
							<div className="activity-item">
								<div className="profile-icon">
									<img src={profile2} alt="profile image" />
								</div>
								<div className="activity-details">
									<p>Kushantha Charuka created Contract #00124 need John Beige’s signature</p>
									<div className="activity-date">Sep 16, 2022 at 11:30 AM</div>
								</div>
							</div>
						</li>

						<li>
							<div className="activity-item">
								<div className="profile-icon">
									<img src={profile2} alt="profile image" />
								</div>
								<div className="activity-details">
									<p>Kushantha Charuka created Contract #00124 need John Beige’s signature</p>
									<div className="activity-date">Sep 16, 2022 at 11:30 AM</div>
								</div>
							</div>
						</li>

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