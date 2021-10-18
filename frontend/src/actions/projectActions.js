import React from "react";
import axios from "axios";
import * as actions from "./index";

export const projectActions = (projectData) => async (dispatch) => {
  try {
    dispatch({
      type: actions.ADD_PROJECT_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(
      "/admin/projects/new",
      projectData,
      config
    );

    dispatch({
      type: actions.ADD_PROJECT_SUCCESS,
      payload: data,
      message: "Project created successfully",
    });
  } catch (err) {
    dispatch({
      type: actions.ADD_PROJECT_FAIL,
      message: "Project created failed",
    });
  }
};

export const getProjects = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.GET_PROJECT_REQUEST,
    });

    const { data } = await axios.get("/projects");

    dispatch({
      type: actions.GET_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actions.GET_PROJECT_FAIL,
    });
  }
};
