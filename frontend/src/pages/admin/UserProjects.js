import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

const UserProjects = () => {
  const columns = [
    {
      title: "Project Image",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name",
    },
    { title: "Address", dataIndex: "address", key: "address" },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const data = [
    {
      key: 1,
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      description:
        "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
      action: <button>Edit</button>,
    },
    {
      key: 2,
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      description:
        "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
    },
    {
      key: 3,
      name: "Not Expandable",
      age: 29,
      address: "Jiangsu No. 1 Lake Park",
      description: "This not expandable",
    },
    {
      key: 4,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      description:
        "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
    },
  ];

  return <Table scroll={{ x: 767 }} columns={columns} dataSource={data} />;
};

export default UserProjects;
