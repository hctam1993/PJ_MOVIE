import React, { useEffect, useState } from "react";
import { userService } from "../../../services/userService";
import UserAction from "./UserAction";
import UserTable from "./UserTable";
import { Input } from "antd";
const { Search } = Input;

export default function User() {
  const [userList, setUserList] = useState([]);
  const [userListClone, setUserListClone] = useState([]);

  useEffect(() => {
    let fetchUserList = () => {
      userService
        .getUserList()
        .then((res) => {
          // console.log(res);
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
          setUserListClone(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserList();
  }, []);

  const onSearch = (e) => {
    const searchArr = userList.filter((item) => {
      return item.taiKhoan.includes(e.target.value);
    });
    setUserList(searchArr);
  };
  return (
    <div className="container mx-auto">
      <Search
        placeholder="Nhập tài khoản muốn tìm"
        allowClear
        onChange={onSearch}
        style={{
          width: 600,
        }}
        className="py-2"
      />
      <UserTable userList={userList} />
    </div>
  );
}
