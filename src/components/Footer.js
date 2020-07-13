import React, { useState, useEffect } from "react";
import { Tabs, Tab, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { getMuscles } from "../redux/actions/musclesAction";
import { setCategory } from "../redux/actions/categoryAction";

function Footer({ muscles, getMuscles, setCategory }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    let category = muscles[newValue - 1];
    setCategory(category === undefined ? "" : category.name);
    setValue(newValue);
  };

  useEffect(() => {
    getMuscles();
  }, [getMuscles]);

  return (
    <Paper>
      <Tabs value={value} onChange={handleChange} textColor="primary" centered>
        <Tab label="All"></Tab>
        {muscles.map((group, index) => (
          <Tab key={index} label={group.name}></Tab>
        ))}
      </Tabs>
    </Paper>
  );
}
const mapStateToProps = (state) => ({
  muscles: state.muscles,
});
const mapActionToProps = {
  getMuscles,
  setCategory,
};

export default connect(mapStateToProps, mapActionToProps)(Footer);
