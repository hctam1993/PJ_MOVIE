import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserInfoEdit } from "../../../redux/slice/userSlice";
import { Button, Form, Input, message, Radio } from "antd";
import { useFormik } from "formik";
import { userService } from "../../../services/userService";

export default function EditUser() {
  const dispatch = useDispatch();
  const { userInfoEdit } = useSelector((state) => state.userSlice);
  // console.log("userInfoEdit: ", userInfoEdit);
  const { id } = useParams();
  // console.log("id: ", id);
  useEffect(() => {
    dispatch(getUserInfoEdit(id));
  }, []);

  const [form] = Form.useForm();
  // const onFinish = (values) => {
  //   console.log("values: ", values);
  // };

  const formikUser = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: userInfoEdit?.email,
      hoTen: userInfoEdit?.hoTen,
      maLoaiNguoiDung: userInfoEdit?.maLoaiNguoiDung,
      maNhom: "GP01",
      matKhau: userInfoEdit?.matKhau,
      taiKhoan: userInfoEdit?.taiKhoan,
      soDT: userInfoEdit?.soDT,
    },
    onSubmit: (values) => {
      console.log(values);
      userService
        .updateUserInfo(values)
        .then((res) => {
          console.log(res);
          message.success("Update thông tin thành công!");
        })
        .catch((err) => {
          console.log(err);
          message.error(err.response.data?.content);
        });
    },
  });

  return (
    <div>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 16,
        }}
        form={form}
        name="edit"
        onFinish={formikUser.handleSubmit}
        initialValues={{}}
        scrollToFirstError
      >
        <Form.Item
          label="Tài khoản"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tài khoản!",
            },
          ]}
        >
          <Input
            // disabled
            name="taiKhoan"
            onChange={formikUser.handleChange}
            value={formikUser.values.taiKhoan}
            disabled
          />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập mật khẩu!",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            name="matKhau"
            onChange={formikUser.handleChange}
            value={formikUser.values.matKhau}
          />
        </Form.Item>

        <Form.Item
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
          <Input
            name="email"
            onChange={formikUser.handleChange}
            value={formikUser.values.email}
          />
        </Form.Item>
        <Form.Item
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
          <Input
            name="soDt"
            onChange={formikUser.handleChange}
            value={formikUser.values.soDT}
          />
        </Form.Item>
        <Form.Item
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
          <Input
            name="hoTen"
            onChange={formikUser.handleChange}
            value={formikUser.values.hoTen}
          />
        </Form.Item>
        <Form.Item
          label="Loại người dùng:"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn loại người dùng!",
            },
          ]}
          name="maLoaiNguoiDung"
          onChange={(e) =>
            formikUser.setFieldValue("maLoaiNguoiDung", e.target.value)
          }
        >
          <Radio.Group>
            <Radio value="QuanTri">Quản trị</Radio>
            <Radio value="KhachHang">Khách hàng</Radio>
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
