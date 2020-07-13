import React, { useState } from "react";
import {
  AppBar,
  Typography,
  IconButton,
  Button,
  Toolbar,
} from "@material-ui/core";
import { MenuOutlined, AddBoxOutlined } from "@material-ui/icons";
import DialogBox from "./DialogBox";
export default function () {
  const styles = {
    marginTop: 12,
  };
  const [value, setValue] = useState(false);
  //open the dialog box
  const handleClick = () => {
    setValue(true);
  };
  //reset the value after dialog is closed
  const handleCloseDialog = (_value) => {
    setValue(_value);
  };
  return (
    <div>
      <AppBar position="static" style={styles}>
        <Toolbar>
          <IconButton>
            <MenuOutlined />
          </IconButton>
          <Typography style={{ flex: 1 }}>Move It</Typography>
          <Button edge="end" onClick={handleClick}>
            <AddBoxOutlined />
            Add Exercise
          </Button>
          {value && (
            <DialogBox open={value} onCloseDialog={handleCloseDialog} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
