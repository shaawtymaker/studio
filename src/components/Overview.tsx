
import React, {useEffect, useState} from 'react';
import Chart from './Chart';
import { getOverviewData } from '@/lib/data';

const Overview: React.FC = () => {
  const [data, setData] = useState<{name: string, value: number}[]>([]);
  useEffect(()=>{
    setData(getOverviewData());
  }, []);
  return (
    <div>
      <h2>Overview</h2>
      <p>This is the overview page</p>
      <div style={{ width: '100%' }}>
        <Chart title="Overview Chart" data={data} />
      </div>
    </div>
  );
};

export default Overview;