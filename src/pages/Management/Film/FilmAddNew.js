import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";

export default function FilmAddNew() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div>
      <h1 className="text-2xl">Thêm phim mới</h1>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input name="tenPhim" />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Ngày khởi chiếu">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Hình ảnh:">
          <input type="file"></input>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
