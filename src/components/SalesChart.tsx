import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useAppSelector } from '../hooks/redux';

export const SalesChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const products = useAppSelector((state) => state.products.items);

  useEffect(() => {
    if (!chartRef.current) return;

    const chart = echarts.init(chartRef.current);

    chart.setOption({
      tooltip: { trigger: 'axis' },
      grid: { left: 40, right: 20, top: 20, bottom: 60 },
      xAxis: {
        type: 'category',
        data: products.map((p) => p.name),
        axisLabel: { rotate: 20 },
      },
      yAxis: {
        type: 'value',
        name: 'Sales',
      },
      series: [
        {
          type: 'bar',
          data: products.map((p) => p.sales),
          itemStyle: { color: '#1677ff', borderRadius: [4, 4, 0, 0] },
        },
      ],
    });

    const handleResize = () => chart.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, [products]);

  return <div ref={chartRef} style={{ width: '100%' }} />;
};
