import React from "react";
import { Divider, Badge, List, Empty, Space, Typography, Button } from "antd";
export default (props) => {
  const { cart, setCart } = props.cartState;

  const deleteFromCartHandler = (product) => {
    if (cart.includes(product)) {
      const arr = cart.slice();
      arr.splice(cart.indexOf(product), 1);
      setCart(arr);
    }
  };

  return (
    <React.Fragment>
      <Divider orientation="left">
        <Space>
          Корзина
          {cart.length > 0 && <Badge count={cart.length} style={styles.Badge} />}
        </Space>
      </Divider>
      <List
        style={{ backgroundColor: "#fff" }}
        bordered
        locale={{
          emptyText: (
            <Empty
              image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
              imageStyle={{
                height: 85,
              }}
              description="Корзина пуста."
            />
          ),
        }}
        dataSource={cart}
        renderItem={(item) => (
          <List.Item>
            <Space>
              <Badge color="blue" />
              <Typography.Text>{item.name}</Typography.Text>
            </Space>
            <Space size="large">
              <Typography.Text strong>${item.price}</Typography.Text>
              <Button ghost danger onClick={() => deleteFromCartHandler(item)}>
                Удалить из корзины
              </Button>
            </Space>
          </List.Item>
        )}
      />
      <Typography.Text style={styles.Total}>
        Всего: {cart.reduce((sum, item) => sum + item.price * props.exchangeRate, 0).toFixed(2)} ₽ ($
        {cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)})
      </Typography.Text>
    </React.Fragment>
  );
};

const styles = {
  Badge: {
    backgroundColor: "#52c41a",
  },
  Total: {
    marginTop: "20px",
    fontSize: "21px",
    textAlign: "right",
  },
};
