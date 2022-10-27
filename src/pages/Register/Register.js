import React from "react";
import { Button, Form, Input, message } from "antd";
import { userService } from "../../services/userService";
import { useNavigate } from "react-router-dom";

const backGroundStyle = {
  background: `url(http://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg)`,
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export default function Register() {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    let dataReg = { ...values, maNhom: "GP01" };
    console.log("Received values of form: ", dataReg);
    userService
      .register(dataReg)
      .then((res) => {
        console.log(res);
        message.success("Đăng ký thành công!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data.content);
      });
  };

  return (
    <div className="mx-auto login__page" style={backGroundStyle}>
      <div className="flex flex-col items-center justify-center h-screen ">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md p-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl uppercase text-center">
            Đăng ký
          </h1>
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            form={form}
            name="register"
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
              <Input />
            </Form.Item>
            <Form.Item
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
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
              className="button"
            >
              <Button htmlType="submit" className="uppercase">
                Đăng ký
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
