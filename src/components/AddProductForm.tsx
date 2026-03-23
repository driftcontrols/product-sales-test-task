import React from 'react';
import { Form, Input, InputNumber, Select, Button, message } from 'antd';
import { useAppDispatch } from '../hooks/redux';
import { addProduct } from '../store/productsSlice';
import { Product } from '../types';

export const AddProductForm: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const newProduct: Product = {
          id: Date.now().toString(),
          ...values,
        };
        dispatch(addProduct(newProduct));
        form.resetFields();
        message.success('Product added!');
      })
      .catch(() => {
        message.error('Please fill in all required fields');
      });
  };

  return (
    <Form layout="vertical">
      <Form.Item
        name="name"
        label="Product Name"
        rules={[{ required: true, message: 'Name is required' }]}
      >
        <Input placeholder="e.g. Widget Epsilon" />
      </Form.Item>

      <Form.Item
        name="sales"
        label="Sales"
        rules={[{ required: true, message: 'Sales amount is required' }]}
      >
        <InputNumber min={0} style={{ width: '100%' }} placeholder="0" />
      </Form.Item>

      <Form.Item
        name="category"
        label="Category"
        rules={[{ required: true, message: 'Category is required' }]}
      >
        <Select placeholder="Select a category">
          <Select.Option value="Electronics">Electronics</Select.Option>
          <Select.Option value="Accessories">Accessories</Select.Option>
          <Select.Option value="Tools">Tools</Select.Option>
        </Select>
      </Form.Item>

      <Button type="primary" block onClick={handleSubmit}>
        Add Product
      </Button>
    </Form>
  );
};
