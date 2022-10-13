import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserInfoEdit } from "../../../redux/slice/userSlice";
import { Button, Form, Input, message, Radio } from "antd";

export default function EditUser() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log("id: ", id);
  useEffect(() => {
    dispatch(getUserInfoEdit(id));
  }, []);

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("values: ", values);
  };
  return (
    <div>
      {" "}
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        form={form}
        name="edit"
        onFinish={onFinish}
        initialValues={{}}
        scrollToFirstError
      >
        <Form.Item
          label="Tài khoản"
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản!",
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          className="disabled"
          name="matKhau"
          label="Mật khẩu"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "Vui lòng nhập đúng định dạng E-mail!",
            },
            {
              required: true,
              message: "Vui lòng nhập Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="soDt"
          label="Số điện thoại:"
          rules={[
            {
              type: Number,
              message: "Vui lòng nhập đúng số điện thoại!",
            },
            {
              required: true,
              message: "Vui lòng nhập số điện thoại!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="hoTen"
          label="Họ tên:"
          tooltip="Tên của bạn là gì?"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập họ tên!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="QuanTri"> Quản trị </Radio>
            <Radio value="KhachHang"> Khách hàng </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 16,
          }}
          className=""
        >
          <Button type="primary" htmlType="submit" className="uppercase">
            Sửa
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
