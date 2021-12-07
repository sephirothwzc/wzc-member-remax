import Frame from '@/component/frame';
import { RootState } from '@/redux/store';
import { Button, Card, Cell, Col, Form, Row } from 'annar';
import { useEffect } from 'react';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { debounce, multiply } from 'lodash';
import {
  useAppOrderMutation,
  useAppUserAllQuery,
} from '@/generator/foundation.operation';
import { AppOrderSaveIn } from '@/generator/foundation';
import { navigateBack } from 'remax/wechat';

const Index = () => {
  const appUser = useSelector((state: RootState) => state?.login?.appUser);
  const { refetch: appUserQuery } = useAppUserAllQuery({
    skip: true,
  });
  const [appOrderSave] = useAppOrderMutation();

  const initValue = {
    orderAmount: process.env.REMAX_APP_ORDER_AMOUNT,
  };

  const [form] = Form.useForm() as [AnnarFormInstance];

  useEffect(() => {
    form.setFieldsValue(initValue);
  }, [appUser]);

  const handleFinish = async (value: AppOrderSaveIn) => {
    // 金额处理
    const saveResult = await appOrderSave({
      variables: {
        param: {
          ...value,
          orderAmount: multiply(value.orderAmount as number, 100),
        },
      },
    });
    if (saveResult.data?.appOrder?.id) {
      navigateBack();
    } else {
    }
  };

  const handleReset = () => {
    form.resetFields(initValue);
  };

  const handlePhoneChange = async (e: { target: { value: string } }) => {
    if (!e.target.value) {
      form.setFieldsValue({
        appUserId: '',
        memberName: '',
      });
    } else if ([4, 6, 8, 10, 12].includes(e.target.value.length)) {
      // 根据手机号获取用户
      const list = await appUserQuery({
        param: {
          where: {
            phone: {
              _like: `%${e.target.value}%`,
            },
          },
        },
      });
      if (list.data.appUserAll.length === 1) {
        // 只有一个手机号匹配到了
        form.setFieldsValue({
          appUserId: list.data.appUserAll[0].id,
          memberName:
            list.data.appUserAll[0].realName ||
            list.data.appUserAll[0].nickname,
          phone: list.data.appUserAll[0].phone,
        });
      }
    }
  };

  return (
    <Frame padding grayBg>
      <Card contentStyle={{ padding: '20px 0 20px' }}>
        <Form onFinish={handleFinish} form={form} initialValues={initValue}>
          <Form.Item noStyle name="appUserId" rules={[{ required: true }]}>
            <Cell.Input
              icon="people"
              label="账号"
              placeholder="根据手机号带入"
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
              placeholder="请输入"
              border={false}
              required
              align="right"
              maxLength={11}
              onChange={debounce(
                handlePhoneChange,
                process.env.REMAX_APP_DEBOUNCE as any
              )}
            />
          </Form.Item>
          <Form.Item noStyle name="memberName" rules={[{ required: true }]}>
            <Cell.Input
              icon="profile"
              label="姓名"
              placeholder="Please enter"
              border={false}
              align="right"
            />
          </Form.Item>
          <Form.Item noStyle name="orderAmount" rules={[{ required: true }]}>
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
          <Form.Item noStyle name="remark">
            <Cell.Input
              label="备注"
              placeholder="Please enter"
              border={false}
              align="top"
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
