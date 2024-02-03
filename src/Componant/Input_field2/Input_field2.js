import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { withStyles } from "@mui/styles";
import "./Input_2_Field.css";

const styles = {
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "darkslategray",
    },
  },
  select: {
    fontSize: "1.4rem",
  },
  formControl: {
    borderBottomColor: "2px",
    color: "white",
    textAlign: "left",
  },
};

const CustomSelect = withStyles(styles)(({ classes, ...props }) => (
  <Select {...props} classes={{ root: classes.root, select: classes.select }} />
));

const menuItems = [
  { value: "", label: "None" },
  { value: 1, label: "Asia Pacific1" },
  { value: 2, label: "Asia Pacific2" },
  { value: 3, label: "Asia Pacific3" },
  { value: 4, label: "Asia Pacific4" },
  { value: 5, label: "Asia Pacific5" },
  { value: 6, label: "Asia Pacific6" },
  { value: 7, label: "Asia Pacific7" },
  { value: 8, label: "Asia Pacific8" },
  { value: 9, label: "Asia Pacific9" },
  { value: 10, label: "Asia Pacific10" },
  { value: 11, label: "Asia Pacific11" },
  { value: 12, label: "Asia Pacific12" },
];

export default function SelectVariants() {
  const [region, setregion] = React.useState("");

  const handleChange = (event) => {
    setregion(event.target.value);
  };

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 520, ...styles.formControl }}
      >
        <InputLabel id="demo-simple-select-standard-label">REGION</InputLabel>
        <CustomSelect
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={region}
          onChange={handleChange}
          label="region"
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 400,
                overflowY: "auto",
                backgroundColor: "",
              },
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              className="menu-item-sana"
              key={item.value}
              value={item.value}
              style={{
                padding: "18px",
                borderBottom: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              {item.label}
            </MenuItem>
          ))}
        </CustomSelect>
      </FormControl>
    </div>
  );
}
