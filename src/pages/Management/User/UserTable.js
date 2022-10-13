import { Table } from "antd";
import React from "react";
import { headColumns } from "./ulti.User";

export default function UserTable({ userList }) {
  return (
    <Table
      columns={headColumns}
      dataSource={userList}
      rowKey={(record) => record.taiKhoan}
    />
  );
}
