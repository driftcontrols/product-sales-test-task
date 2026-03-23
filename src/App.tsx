import React from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';
import { ProductList } from './components/ProductList';
import { SalesChart } from './components/SalesChart';
import { AddProductForm } from './components/AddProductForm';

const { Header, Content } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header
        style={{
          background: '#fff',
          padding: '0 24px',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          📊 Sales Dashboard
        </Title>
      </Header>

      <Content style={{ padding: 24 }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Card title="Sales by Product">
              <SalesChart />
            </Card>
          </Col>

          <Col xs={24} lg={16}>
            <Card title="Product List">
              <ProductList />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card title="Add Product">
              <AddProductForm />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
