import React, { useMemo } from 'react';
import { Table, Tag } from 'antd';
import { useAppSelector } from '../hooks/redux';
import { Product } from '../types';

const categoryColors: Record<string, string> = {
  Electronics: 'blue',
  Accessories: 'green',
  Tools: 'orange',
};

export const ProductList: React.FC = () => {
  const allProducts = useAppSelector((state) => state.products.items);

  const products = useMemo(() => [...allProducts], []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Sales',
      dataIndex: 'sales',
      key: 'sales',
      sorter: (a: Product, b: Product) => a.sales - b.sales,
      render: (v: number) => v.toLocaleString(),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (cat: string) => (
        <Tag color={categoryColors[cat] ?? 'default'}>{cat}</Tag>
      ),
    },
  ];

  return (
    <Table
      dataSource={products}
      columns={columns}
      rowKey="id"
      size="small"
      pagination={false}
    />
  );
};
