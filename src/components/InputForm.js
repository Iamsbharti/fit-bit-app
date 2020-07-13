import React, { Fragment, useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  withStyles,
} from "@material-ui/core";
import { connect } from "react-redux";
import { createExercise, editExercise } from "../redux/actions/exercisesAction";
import { v4 as uuidv4 } from "uuid";
import PropsTypes from "prop-types";

const styles = (theme) => ({
  FormControl: {
    width: 300,
    marginTop: 10,
  },
});
function InputForm({
  category,
  classes,
  createExercise,
  postCreateClose,
  mode,
  exerciseToEdit,
  editExercise,
  toggleMode,
}) {
  const [title, setTitle] = useState(mode ? exerciseToEdit.title : "");
  const [muscles, setMuscles] = useState(mode ? exerciseToEdit.muscles : "");
  const [description, setDesc] = useState(
    mode ? exerciseToEdit.description : ""
  );
  const handleClick = (event) => {
    //console.log("create click event");
    let id = uuidv4();
    if (mode) {
      let { id } = exerciseToEdit;
      editExercise({ id, title, muscles, description });
      //toggle current mode to exit the edit mode
      toggleMode(!mode);
    } else {
      createExercise({ id, title, muscles, description });
      //close the dialog
      postCreateClose();
    }
  };
  return (
    <Fragment>
      <TextField
        className={classes.FormControl}
        autoFocus
        name="title"
        placeholder="exercise name"
        label="Exercise"
        margin="dense"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <InputLabel htmlFor="muscles">Muscles</InputLabel>
      <Select
        className={classes.FormControl}
        value={muscles}
        onChange={(e) => setMuscles(e.target.value)}
      >
        {category.map((cat, index) => (
          <MenuItem key={index} value={cat.name}>
            {cat.name}
          </MenuItem>
        ))}
      </Select>
      <TextField
        className={classes.FormControl}
        autoFocus
        name="description"
        value={description}
        placeholder="descriptions"
        label="Description"
        rowsMax={4}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <br />
      <Button variant="outlined" color="primary" onClick={handleClick}>
        {mode ? "Edit" : "Create"}
      </Button>
    </Fragment>
  );
}
const mapStateToProps = ({ muscles }) => ({
  category: muscles,
});
const mapActionToProps = {
  createExercise,
  editExercise,
};
InputForm.propTypes = {
  category: PropsTypes.array.isRequired,
  createExercise: PropsTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(InputForm));
