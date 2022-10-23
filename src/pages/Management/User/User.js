import React, { useEffect } from "react";
import { userService } from "../../../services/userService";
import UserAction from "./UserAction";
import UserTable from "./UserTable";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setUserList } from "../../../redux/slice/userSlice";

const { Search } = Input;

export default function User() {
  const { userListClone } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

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

          dispatch(setUserList(data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchUserList();
  }, []);

  const onSearch = (e) => {
    // console.log("e: ", e);

    dispatch(setSearch(e.target.value));
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
      <UserTable userList={userListClone} />
    </div>
  );
}
