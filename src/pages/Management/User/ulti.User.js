import { Tag } from "antd";

export const headColumns = [
  {
    title: "Tên khách hàng",
    dataIndex: "hoTen",
    key: "hoTen",
  },
  {
    title: "Tài khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Loại tài khoản",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (text) => {
      if (text === "QuanTri") {
        return <Tag color="red">Quản trị</Tag>;
      } else {
        return <Tag color="green">Khách hàng</Tag>;
      }
    },
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
  },
];
