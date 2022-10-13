import React, { useEffect, useState } from "react";
import { userService } from "../../../services/userService";
import UserAction from "./UserAction";
import UserTable from "./UserTable";
import { Input } from "antd";
const { Search } = Input;

export default function User() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    let fetchUserList = () => {
      userService
        .getUserList()
        .then((res) => {
          console.log(res);
          let data = res.data.content.map((user) => {
            return {
              ...user,
              action: (
                <UserAction
                  onSuccess={fetchUserList}
                  taiKhoan={user.taiKhoan}
                />
              ),
            };
          });
          setUserList(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserList();
  }, []);

  const onSearch = (value) => console.log(value);
  return (
    <div className="container mx-auto">
      <Search
        placeholder="Nhập tài khoản muốn tìm"
        allowClear
        onSearch={onSearch}
        style={{
          width: 600,
        }}
        className="py-2"
      />
      <UserTable userList={userList} />
    </div>
  );
}
