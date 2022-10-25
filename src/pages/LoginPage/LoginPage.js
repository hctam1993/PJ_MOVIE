import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userService } from "../../services/userService";
import { localService } from "../../services/localService";
import { setUserInfo } from "../../redux/slice/userSlice";
import "../../assets/css/LoginForm.css";

const backGroundStyle = {
  padding: "32px",
  background: `url(http://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg)`,
  minHeight: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

export default function LoginPage() {
  window.scrollTo(0, 0);
  let navigate = useNavigate();

  let dispatch = useDispatch();

  const { isDetail } = useSelector((state) => state.movieSlice);
  console.log("isDetail: ", isDetail);
  const onFinish = (values) => {
    // console.log("Success:", values);

    userService
      .postLogin(values)
      .then((res) => {
        // console.log(res);
        localService.user.set(res.data.content); // lưu vào localStore
        dispatch(setUserInfo(res.data.content));
        message.success("Đăng nhập thành công!");
        if (res.data.content.maLoaiNguoiDung === "KhachHang") {
          setTimeout(() => {
            if (isDetail === true) {
              navigate(-1);
            } else navigate("/");
          }, 2000);
        } else {
          navigate("/management");
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại!");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-screen mx-auto login__page" style={backGroundStyle}>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl uppercase text-center">
            Đăng nhập
          </h1>
          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
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
              label="Mật khẩu"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
              className="button"
            >
              <Button htmlType="submit" className="uppercase">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
