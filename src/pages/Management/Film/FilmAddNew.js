import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { addFilm } from "../../../redux/slice/movieSlice";

export default function FilmAddNew() {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();

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
      // console.log("values: ", values);
      values.maNhom = "GP05";

      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      dispatch(addFilm(formData));
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    // console.log("ngayKhoiChieu: ", ngayKhoiChieu);

    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = (e) => {
    //lay file tu e
    let file = e.target.files[0];

    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/jpg"
    ) {
      // tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);
      };
      // lưu dữ liệu vào formik
      formik.setFieldValue("hinhAnh", file);
    }
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
          <Switch onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch onChange={handleChangeSwitch("hot")} />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min="1"
            max="10"
          />
        </Form.Item>
        <Form.Item label="Hình ảnh:">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png,image/jpeg,image/jpg"
          ></input>
          <br />
          <img width={100} height={100} src={imgSrc} />
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
