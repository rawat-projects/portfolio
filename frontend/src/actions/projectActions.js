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
      message: "Error while fetching projects",
    });
  }
};

export const getSingleProject = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: actions.GET_SINGLE_PROJECT_REQUEST,
    });

    const { data } = await axios.get(`/project/${productId}`);

    dispatch({
      type: actions.GET_SINGLE_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actions.GET_SINGLE_PROJECT_FAIL,
      message: "Error while fetching projects",
    });
  }
};

export const editProject = (projectData) => async (dispatch) => {
  try {
    dispatch({
      type: actions.EDIT_PROJECT_REQUEST,
    });

    const { data } = await axios.put("/project/update", projectData);

    dispatch({
      type: actions.EDIT_PROJECT_SUCCESS,
      message: "Project Updated Successfully",
    });
  } catch (err) {
    dispatch({
      type: actions.EDIT_PROJECT_FAIL,
      message: "Project couldn't update",
    });
  }
};

export const deleteProject = (projectId) => async (dispatch) => {
  try {
    dispatch({
      type: actions.DELETE_PROJECT_REQUEST,
    });

    await axios.delete(`/project/delete/${projectId}`);

    dispatch({
      type: actions.DELETE_PROJECT_SUCCESS,
      message: "Project Deleted Successfully",
    });
  } catch (err) {
    dispatch({
      type: actions.DELETE_PROJECT_FAIL,
      message: "Project couldn't Deleted",
    });
  }
};
