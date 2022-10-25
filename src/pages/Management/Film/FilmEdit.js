import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { editFilm, getFilmDetailEdit } from "../../../redux/slice/movieSlice";
import { useNavigate, useParams } from "react-router-dom";

export default function FilmEdit() {
  const [componentSize, setComponentSize] = useState("default");
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const { filmDetailEdit } = useSelector((state) => state.movieSlice);
  const { id } = useParams();
  const navigate = useNavigate();

  // console.log("filmDetailEdit", filmDetailEdit);

  useEffect(() => {
    dispatch(getFilmDetailEdit(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      maPhim: filmDetailEdit?.maPhim,
      tenPhim: filmDetailEdit?.tenPhim,
      trailer: filmDetailEdit?.trailer,
      moTa: filmDetailEdit?.moTa,
      ngayKhoiChieu: moment(filmDetailEdit?.ngayKhoiChieu).format("DD/MM/YYYY"),
      dangChieu: filmDetailEdit?.dangChieu,
      sapChieu: filmDetailEdit?.sapChieu,
      hot: filmDetailEdit?.hot,
      danhGia: filmDetailEdit?.danhGia,
      hinhAnh: null,
    },
    onSubmit: (values) => {
      console.log("values: ", values);
      values.maNhom = "GP05";

      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh != null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      // console.log("formData: ", formData);
      dispatch(editFilm(formData));
      setTimeout(() => {
        navigate("/management/film");
      }, 3000);
    },
  });

  const handleChangeDatePicker = (value) => {
    let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
    // console.log("ngayKhoiChieu: ", ngayKhoiChieu);

    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
    // console.log("formik.ngayKhoiChieu", formik.values.ngayKhoiChieu);
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

  const handleChangeFile = async (e) => {
    //lay file tu e
    let file = e.target.files[0];

    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/jpg"
    ) {
      // lưu dữ liệu vào formik
      await formik.setFieldValue("hinhAnh", file);
      // tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        setImgSrc(e.target.result);
      };
    }
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div>
      <h1 className="text-2xl">Sửa phim</h1>
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
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            value={formik.values.tenPhim}
          />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            value={formik.values.trailer}
          />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input
            name="moTa"
            onChange={formik.handleChange}
            value={formik.values.moTa}
          />
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            onChange={handleChangeDatePicker}
            format="DD/MM/YYYY"
            value={moment(formik.values.ngayKhoiChieu, "DD/MM/YYYY")}
          />
        </Form.Item>

        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("dangChieu")}
            checked={formik.values.dangChieu}
          />
        </Form.Item>
        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("sapChieu")}
            checked={formik.values.sapChieu}
          />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch
            onChange={handleChangeSwitch("hot")}
            checked={formik.values.hot}
          />
        </Form.Item>
        <Form.Item label="Số sao">
          <InputNumber
            onChange={handleChangeInputNumber("danhGia")}
            min={1}
            max={10}
            value={formik.values.danhGia}
          />
        </Form.Item>
        <Form.Item label="Hình ảnh:">
          <input
            type="file"
            onChange={handleChangeFile}
            accept="image/png,image/jpeg,image/jpg"
          ></input>
          <br />
          <img
            width={100}
            height={100}
            src={imgSrc === "" ? filmDetailEdit.hinhAnh : imgSrc}
          />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <Button type="primary" htmlType="submit" className="uppercase">
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
