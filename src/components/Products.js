import React from "react";
import { Divider, Collapse, List, Space, Typography, Badge, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";

export default (props) => {
  const data = props.data;
  const { cart, setCart } = props.cartState;

  const addToCartHandler = (product) => {
    setCart([...cart, product]);
  };

  return (
    <React.Fragment>
      <Divider orientation="left">Каталог</Divider>
      <Collapse accordion>
        {Object.values(data).map((group, index) => (
          <Collapse.Panel header={group.groupName} key={index}>
            <List
              bordered
              dataSource={group.items}
              renderItem={(item) => (
                <List.Item>
                  <Space>
                    <Typography.Text>{item.name}</Typography.Text>
                    {item.balance && <Badge count={item.balance} style={styles.Badge} />}
                  </Space>
                  <Space>
                    {!cart.includes(item) ? (
                      <Button type="primary" disabled={!item.balance} onClick={() => addToCartHandler(item)}>
                        {item.price ? `Купить за ${(item.price * props.exchangeRate).toFixed(2)} ₽ ($${item.price.toFixed(2)})` : "Нет в наличии"}
                      </Button>
                    ) : (
                      <Space>
                        <CheckOutlined style={styles.Icon} />
                        <Typography.Text>Добавлено</Typography.Text>
                      </Space>
                    )}
                  </Space>
                </List.Item>
              )}
            />
          </Collapse.Panel>
        ))}
      </Collapse>
    </React.Fragment>
  );
};

const styles = {
  Badge: {
    backgroundColor: "#52c41a",
  },
  Icon: {
    fontSize: "20px",
    color: "#52c41a",
  },
};
