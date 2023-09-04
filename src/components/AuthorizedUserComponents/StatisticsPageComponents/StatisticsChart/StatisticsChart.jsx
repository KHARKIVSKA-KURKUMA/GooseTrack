import { useEffect, useState } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContainer } from './StatisticsChart.styled';
import {
  calculatePercentages,
  calculateTaskStatusCount,
} from './statisticsHelpers';

const tasks = [
  {
    category: 'todo',
    amount: 1,
    data: [
      {
        _id: '64eb8bf4ec3cfd1d22c535f6',
        title: 'My task 1',
        start: '09:05',
        end: '09:15',
        priority: 'medium',
        date: '2023-09-01',
        category: 'to-do',
        owner: '64eb8bf4ec3cfd1d22c59fb1',
        createdAt: '2023-08-27T17:46:28.321Z',
        updatedAt: '2023-08-30T16:07:28.466Z',
      },
    ],
  },
  {
    category: 'in-progress',
    amount: 2,
    data: [
      {
        _id: '64eb8bf4ec3cfd1d22c535f6',
        title: 'My task 1',
        start: '09:05',
        end: '09:15',
        priority: 'medium',
        date: '2023-09-01',
        category: 'in-progress',
        owner: '64eb8bf4ec3cfd1d22c59fb1',
        createdAt: '2023-08-27T17:46:28.321Z',
        updatedAt: '2023-08-30T16:07:28.466Z',
      },
      {
        _id: '64eb8bf4ec3cfd1d22c535f6',
        title: 'My task 2',
        start: '09:05',
        end: '09:15',
        priority: 'medium',
        date: '2023-09-02',
        category: 'in-progress',
        owner: '64eb8bf4ec3cfd1d22c59fb1',
        createdAt: '2023-08-27T17:46:28.321Z',
        updatedAt: '2023-08-30T16:07:28.466Z',
      },
    ],
  },
  {
    category: 'done',
    amount: 3,
    data: [
      {
        _id: '64eb8bf4ec3cfd1d22c535f6',
        title: 'My task 1',
        start: '09:05',
        end: '09:15',
        priority: 'medium',
        date: '2023-09-01',
        category: 'done',
        owner: '64eb8bf4ec3cfd1d22c59fb1',
        createdAt: '2023-08-27T17:46:28.321Z',
        updatedAt: '2023-08-30T16:07:28.466Z',
      },
      {
        _id: '64eb8bf4ec3cfd1d22c535f6',
        title: 'My task 1',
        start: '09:05',
        end: '09:15',
        priority: 'medium',
        date: '2023-09-02',
        category: 'done',
        owner: '64eb8bf4ec3cfd1d22c59fb1',
        createdAt: '2023-08-27T17:46:28.321Z',
        updatedAt: '2023-08-30T16:07:28.466Z',
      },
      {
        _id: '64eb8bf4ec3cfd1d22c535f6',
        title: 'My task 1',
        start: '09:05',
        end: '09:15',
        priority: 'medium',
        date: '2023-09-03',
        category: 'done',
        owner: '64eb8bf4ec3cfd1d22c59fb1',
        createdAt: '2023-08-27T17:46:28.321Z',
        updatedAt: '2023-08-30T16:07:28.466Z',
      },
    ],
  },
];

const targetDate = '2023-09-02'; // Эту дату надо брать текущую или из запроса юзера!!!!! Это пока только для примера!!!

const tasksByDay = tasks.reduce((result, category) => {
  const filteredCategoryTasks = category.data.filter(
    task => task.date === targetDate
  );

  if (filteredCategoryTasks.length > 0) {
    result.push({
      category: category.category,
      amount: tasks.length,
      tasks: filteredCategoryTasks,
    });
  }

  return result;
}, []);

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y}
      fill="#343434"
      fontWeight="500"
      textAnchor="middle"
      dy={-5}
      style={{ fontSize: window.innerWidth >= 768 ? 16 : 12 }}
    >{`${value}%`}</text>
  );
};

const StatisticsChart = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const [chartBarSize, setChartBarSize] = useState(0);
  const [taskStatusCountDay] = calculateTaskStatusCount(tasksByDay);
  const [taskStatusCountMonth] = calculateTaskStatusCount(tasks);
  const ByDay = calculatePercentages(taskStatusCountDay);
  const ByMonth = calculatePercentages(taskStatusCountMonth);
  const data = [
    {
      name: 'To Do',
      ByDay: ByDay.todoPercentage,
      ByMonth: ByMonth.todoPercentage,
    },
    {
      name: 'In Progress',
      ByDay: ByDay.inprogressPercentage,
      ByMonth: ByMonth.inprogressPercentage,
    },
    {
      name: 'Done',
      ByDay: ByDay.donePercentage,
      ByMonth: ByMonth.donePercentage,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      let newSize = 279;
      let newHeight = 328;
      let newBarSize = 22;
      if (window.innerWidth >= 1440) {
        newSize = 780;
        newHeight = 351;
        newBarSize = 27;
      } else if (window.innerWidth >= 768) {
        newSize = 576;
        newHeight = 328;
        newBarSize = 22;
      }
      setChartWidth(newSize);
      setChartHeight(newHeight);
      setChartBarSize(newBarSize);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ChartContainer>
      <BarChart
        width={chartWidth}
        height={chartHeight}
        data={data}
        margin={{ top: 45, right: 0, bottom: 5, left: -15 }}
        barGap="7%"
      >
        <CartesianGrid stroke="rgba(227, 243, 255, 1)" vertical={false} />
        <Bar
          dataKey="ByDay"
          fill="url(#pinkGradientFill)"
          label={renderCustomBarLabel}
          barSize={chartBarSize}
          radius={7}
        />
        <Bar
          dataKey="ByMonth"
          fill="url(#blueGradientFill)"
          label={renderCustomBarLabel}
          barSize={chartBarSize}
          radius={7}
        />
        <defs>
          <linearGradient
            id="pinkGradientFill"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(255, 210, 221, 0)" />
            <stop offset="100%" stopColor="rgba(255, 210, 221, 1)" />
          </linearGradient>
          <linearGradient
            id="blueGradientFill"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="rgba(62, 133, 243, 0)" />
            <stop offset="100%" stopColor="rgba(62, 133, 243, 1)" />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="name"
          axisLine={{ stroke: 'transparent' }}
          tickMargin={20}
          tickSize={0}
          tick={{
            fontSize: window.innerWidth >= 768 ? 14 : 12,
            fontWeight: '500',
          }}
        />
        <YAxis
          label={{
            value: 'Tasks',
            position: 'top',
            dx: 4,
            dy: -30,
            style: {
              fontSize: '14px',
              fontWeight: '700',
              fill: '#343434',
            },
          }}
          domain={[0, 100]}
          ticks={[0, 20, 40, 60, 80, 100]}
          axisLine={{ stroke: 'transparent' }}
          tickMargin={20}
          tickSize={0}
          tick={{
            fontSize: 14,
            fontWeight: '500',
          }}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default StatisticsChart;
