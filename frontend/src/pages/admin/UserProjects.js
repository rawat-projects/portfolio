import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProjects, deleteProject } from "../../actions/projectActions";
import Loader from "../../components/Loader";
import { useAlert } from "react-alert";
import "antd/dist/antd.css";

const UserProjects = ({ history }) => {
  const alert = useAlert();
  const { data, message } = useSelector((state) => state.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  useEffect(() => {
    if (message !== "") {
      alert.success(message);
      window.location.reload(false);
    }
  }, [message, dispatch]);

  const deleteHandler = (id) => {
    dispatch(deleteProject(id));
  };
  const columns = [
    {
      title: "Project Image",
      dataIndex: "projectImage",
      key: "projectImage",
      render: (url) => <img height="50" width="50" src={url} alt={url} />,
    },
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name",
    },
    { title: "Project Link", dataIndex: "link", key: "link" },
    { title: "Project Languages", dataIndex: "languages", key: "languages" },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return (
          <>
            <Link to={`/admin/projects/edit/${id}`}>Edit</Link>
            <button onClick={() => deleteHandler(id)}>Delete</button>
          </>
        );
      },
    },
  ];

  var tableData = [];

  if (data && data.length > 1) {
    data.map((item, index) => {
      const { name, projectImage, link, languages, _id: id } = item;
      return tableData.push({
        name,
        projectImage,
        link,
        languages,
        id,
        key: id,
      });
    });

    // const tableData = [
    //   {
    //     key: 1,
    //     name: "John Brown",
    //     age: 32,
    //     address: "New York No. 1 Lake Park",
    //     languages:
    //       "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
    //     action: <button>Edit</button>,
    //   },
    // ];
  }

  return (
    <>
      {data ? (
        <>
          <Link to="/admin/projects/add">Add Project</Link>
          <Table scroll={{ x: 767 }} columns={columns} dataSource={tableData} />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default UserProjects;
