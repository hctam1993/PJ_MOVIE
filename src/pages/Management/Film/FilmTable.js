import React, { Fragment, useState } from "react";
import { Table } from "antd";
import { NavLink } from "react-router-dom";

export default function FilmTable({ filmList }) {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    // console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };
  const clearFilters = () => {
    setFilteredInfo({});
  };
  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const setAgeSort = () => {
    setSortedInfo({
      order: "descend",
      columnKey: "age",
    });
  };
  const handleDeleteFilm = () => {};
  const columns = [
    {
      title: "Mã phim",
      dataIndex: "maPhim",
      key: "maPhim",

      sorter: (a, b) => a.maPhim - b.maPhim,
      sortOrder: sortedInfo.columnKey === "maPhim" ? sortedInfo.order : null,
      ellipsis: true,
      width: "15%",
    },
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      width: "25%",
      sorter: (a, b) => {
        let tenPhimA = a.tenPhim.toLowerCase().trim();
        let tenPhimB = b.tenPhim.toLowerCase().trim();
        if (tenPhimA > tenPhimB) {
          return 1;
        }
        return -1;
      },
      sortOrder: sortedInfo.columnKey === "tenPhim" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Hình ảnh",
      dataIndex: "hinhAnh",
      key: "hinhAnh",
      width: "10%",
      render: (text, film, index) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              width="50px"
              height={50}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://picsum.photos/id/${index}/50/50`;
              }}
            />
          </Fragment>
        );
      },
    },
    {
      title: "Mô tả",
      dataIndex: "moTa",
      key: "moTa",
      width: "30%",
      render: (text, film) => {
        return (
          <Fragment>
            {film.moTa.length > 50
              ? film.moTa.substr(0, 50) + "..."
              : film.moTa}
          </Fragment>
        );
      },
      ellipsis: true,
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",
      key: "hanhDong",
      width: "20%",
      render: (text, film) => {
        return (
          <Fragment>
            <div className="space-x-2">
              <button
                className="px-5 py-2 rounded bg-red-500 hover:bg-red-700 text-white transition"
                onClick={handleDeleteFilm}
              >
                Xóa
              </button>
              <NavLink to={`/management/film/edit/${film.maPhim}`}>
                <button className="px-5 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white transition">
                  Sửa
                </button>
              </NavLink>
            </div>
          </Fragment>
        );
      },
      ellipsis: true,
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        dataSource={filmList}
        onChange={handleChange}
        key=""
      />
    </div>
  );
}
