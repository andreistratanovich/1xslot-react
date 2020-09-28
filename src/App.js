import React, { useState } from "react";
import { Layout, Space, Typography, Tag } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Products from "./components/Products";
import Cart from "./components/Cart";
import data from "./data/mergedData";

const exchangeRate = 76.82;

export default () => {
  const [cart, setCart] = useState([]);

  return (
    <Layout style={styles.Layout}>
      <Space size="middle">
        <Typography.Title>
          <LikeOutlined /> 1XSLOT
        </Typography.Title>
        <Tag color="gold">Тестовое задание</Tag>
      </Space>
      <Products data={data} cartState={{ cart, setCart }} exchangeRate={exchangeRate} />
      <Cart cartState={{ cart, setCart }} exchangeRate={exchangeRate} />
    </Layout>
  );
};

const styles = {
  Layout: {
    minHeight: "100vh",
    padding: "35px 30px",
  },
};
