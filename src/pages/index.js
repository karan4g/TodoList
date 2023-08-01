import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import Container from '@mui/material/Container';

import TextField from "@mui/material/TextField";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { getData, setData } from "../utils";

export default function Home() {
  return (
   <>
        <ToDoList />
     </>
  );
}

function ToDoList() {
  useEffect(() => {
    let getListItems = getData("my_todo_list");

    if (!getListItems) {
      getListItems = [];
    } else {
      getListItems = JSON.parse(getListItems);
    }

    setListItem([...getListItems]);
  }, []);
  const [listItem, setListItem] = useState([]);
  const [inputData, setInputData] = useState({ inputValue: "" });

  const handleOnChange = (val) => {
    setInputData({ ...inputData, inputValue: val.target.value });
  };
  const onSubmit = () => {
    var getOldList = getData("my_todo_list");
    if (getOldList) {
      getOldList = JSON.parse(getOldList);
    } else {
      getOldList = [];
    }
    getOldList.push(inputData.inputValue);
    setInputData({ ...inputData, inputValue: "" });
    setData("my_todo_list", getOldList);
    setListItem([...getOldList]);
  };

  const onRemoveItem = (key) => {
    let getItem = listItem;
    getItem.splice(key, 1);
    setData("my_todo_list", getItem);
    setListItem([...getItem]);
  };

  return (
    <Grid container spacing={2} style={{justifyContent:"center"}}>
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Add Your To Do List
        </ListSubheader>
      }
    >
      {listItem && listItem.length
        ? listItem.map((obj, i) => {
            return (
              <ListItemButton key={i}>
                <ListItemIcon>
                  <RemoveCircleIcon onClick={() => onRemoveItem(i)} />
                </ListItemIcon>
                <ListItemText primary={obj} />
              </ListItemButton>
            );
          })
        : null}
      <ListItemButton>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <Stack spacing={2} direction="row">
          <TextField
            id="outlined-basic"
            label="To Do Item"
            variant="outlined"
            value={inputData.inputValue || ""}
            onChange={(val) => handleOnChange(val)}
          />

          <Button onClick={() => onSubmit()} variant="contained">
            Submit
          </Button>
        </Stack>
      </ListItemButton>
    </List>
    </Grid>
  );
}
