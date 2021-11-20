import Frame from '@/component/frame';
import { RootState } from '@/redux/store';
import { Button, Card, Cell, Col, Form, Row } from 'annar';
import { useEffect } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';

const Index = () => {
  const appUser = useSelector((state: RootState) => state?.login?.appUser);

  const initValue = {
    appUserId: appUser?.id,
    phone: appUser?.phone,
    amount: process.env.REMAX_APP_ORDER_AMOUNT,
  };

  const [form] = Form.useForm() as [AnnarFormInstance];

  useEffect(() => {
    form.setFieldsValue(initValue);
  }, [appUser]);
  const handleFinish = () => {};

  const handleReset = () => {
    form.resetFields(initValue);
  };
  return (
    <Frame padding grayBg>
      <Card contentStyle={{ padding: '20px 0 20px' }}>
        <Form onFinish={handleFinish} form={form} initialValues={initValue}>
          <Form.Item noStyle name="appUserId" rules={[{ required: true }]}>
            <Cell.Input
              icon="people"
              label="账号"
              placeholder="Please enter"
              border={false}
              required
              disabled
              align="right"
            />
          </Form.Item>
          <Form.Item noStyle name="phone" rules={[{ required: true }]}>
            <Cell.Input
              icon="phone"
              label="手机号"
              placeholder="Please enter"
              border={false}
              required
              disabled
              align="right"
            />
          </Form.Item>
          <Form.Item noStyle name="amount" rules={[{ required: true }]}>
            <Cell.Input
              icon="refund"
              label="充值金额"
              placeholder="Please enter"
              border={false}
              required
              suffix="元"
              type="number"
              align="right"
            />
          </Form.Item>
          <Row gutter={8} style={{ padding: '0 20px' }}>
            <Col span={7}>
              <Button
                size="large"
                shape="square"
                plain
                hairline
                color="#ff4f00"
                block
                onTap={handleReset}
              >
                重置
              </Button>
            </Col>

            <Col span={10} offset={7}>
              <Button
                size="large"
                shape="square"
                block
                nativeType="submit"
                type="primary"
              >
                提交
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Frame>
  );
};

export default Index;
