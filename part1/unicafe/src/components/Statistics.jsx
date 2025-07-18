import StatisticsLine from "./StatisticsLine";

const statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total || 0;
  const positive = total ? (good / total) * 100 : 0;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Statistics</th>
        </tr>
      </thead>
      <tbody>
        <tr />
        <tr />
        <StatisticsLine text="good" value={good} />
        <StatisticsLine text="neutral" value={neutral} />
        <StatisticsLine text="bad" value={bad} />
        <StatisticsLine text="all" value={total} />
        <StatisticsLine text="average" value={average.toFixed(2)} />
        <StatisticsLine text="positive" value={`${positive.toFixed(2)} %`} />
      </tbody>
    </table>
  );
};

export default statistics;
