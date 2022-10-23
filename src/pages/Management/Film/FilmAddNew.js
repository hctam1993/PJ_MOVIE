import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";

export default function FilmAddNew() {
  const [componentSize, setComponentSize] = useState("default");

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values) => {
      console.log("values: ", values);
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    // console.log("ngayKhoiChieu: ", ngayKhoiChieu);

    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

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
        onSubmitCapture={formik.handleSubmit}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} />
        </Form.Item>
        <Form.Item label="Trailer" onChange={formik.handleChange}>
          <Input name="trailer" />
        </Form.Item>
        <Form.Item label="Mô tả" onChange={formik.handleChange}>
          <Input name="moTa" />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            format={"DD/MM/YYYY"}
            onChange={(value) => {
              handleChangeDatePicker(value);
            }}
          />
        </Form.Item>

        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch name="dangChieu" />
          {/* lamf toiws dddaay */}
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch name="sapChieu" />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch name="hot" />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Hình ảnh:">
          <input type="file"></input>
        </Form.Item>
        <Form.Item label="Tác vụ">
          <Button type="primary" htmlType="submit" className="uppercase">
            Thêm phim
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
