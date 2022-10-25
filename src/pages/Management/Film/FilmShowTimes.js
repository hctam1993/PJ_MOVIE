import React, { useEffect, useState } from "react";
import { Button, Form, DatePicker, InputNumber, Select, message } from "antd";
import { theaterService } from "../../../services/theaterService";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import moment from "moment";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function FilmShowTimes() {
  const [form] = Form.useForm();
  const [state, setState] = useState({ heThongRapChieu: [], cumRapChieu: [] });

  // console.log("heThongRapChieu", state.heThongRapChieu);
  // console.log("cumRapChieu", state.cumRapChieu);
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await theaterService.getListTheater();

        setState({ ...state, heThongRapChieu: res.data.content });
      } catch (error) {
        console.log("err", error);
      }
    }
    fetchData();
  }, []);
  const { id } = useParams();
  const formik = useFormik({
    initialValues: {
      maPhim: id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: "",
    },
    onSubmit: async (value) => {
      console.log("Value", value);
      try {
        let res = theaterService.addLichChieu(value);
        message.success("Thêm lịch chiếu thành công");
      } catch (error) {
        message.error("Thêm lịch chiếu thất bại");
        console.log("err", error.response?.data);
      }
    },
  });

  const onOk = (value) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
  };
  const onChangeDate = (value) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(value).format("DD/MM/YYYY hh:mm:ss")
    );
    // console.log("moment", moment(value).format("DD/MM/YYYY hh:mm:ss"));
  };
  const handleOnChangeHeThongRap = async (value) => {
    try {
      let res = await theaterService.getInfoTheaterByID(value);
      setState({ ...state, cumRapChieu: res.data.content });
    } catch (error) {
      console.log("err", error);
    }
  };
  const handleOnChangeCumRap = (value) => {
    formik.setFieldValue("maRap", value);
  };
  const onChangeInputNumber = (value) => {
    // console.log("value", value);
    formik.setFieldValue("giaVe", value);
  };

  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }
  return (
    <div>
      <h1 className="text-2xl">Tạo lịch chiếu - {film.tenPhim}</h1>
      <img src={film.hinhAnh} alt="..." width={200} height={300} />
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onSubmitCapture={formik.handleSubmit}
      >
        <Form.Item label="Hệ thống rạp">
          <Select
            options={state.heThongRapChieu?.map((htr) => ({
              label: htr.tenHeThongRap,
              value: htr.maHeThongRap,
            }))}
            onChange={handleOnChangeHeThongRap}
            placeholder="Chọn hệ thống rạp"
          />
        </Form.Item>
        <Form.Item label="Cụm rạp">
          <Select
            options={state.cumRapChieu?.map((cumRap) => ({
              label: cumRap.tenCumRap,
              value: cumRap.maCumRap,
            }))}
            onChange={handleOnChangeCumRap}
            placeholder="Chọn cụm rạp"
          />
        </Form.Item>
        <Form.Item label="Ngày chiếu giờ chiếu">
          <DatePicker
            format="DD/MM/YYYY hh:mm:ss"
            showTime
            onOk={onOk}
            onChange={onChangeDate}
          />
        </Form.Item>
        <Form.Item label="Giá vé">
          <InputNumber
            min={75000}
            max={150000}
            onChange={onChangeInputNumber}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Tạo lịch chiếu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
