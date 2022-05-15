import React, { useState } from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { TextField } from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputLabel from "@mui/material/InputLabel";

import "./css/edit-profile.css";

function EditProfile({ setSubProfile }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const category = [
        "Oliver Hansen",
        "Van Henry",
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Miriam Wagner",
        "Bradley Wilkerson",
        "Virginia Andrews",
        "Kelly Snyder",
    ];

    console.log(name);
    console.log(date);
    console.log(gender);

    return (
        <div className="edit-profile">
            <div className="title">
                <div>
                    <Button
                        onClick={() => setSubProfile("default")}
                        variant="text"
                    >
                        <ArrowBackIcon />
                    </Button>
                </div>
                <h1>Edit Profile</h1>
            </div>
            <div className="field">
                <div className="field-item">
                    <TextField
                        id="standard-basic"
                        onChange={(e) => setName(e.target.value)}
                        label="Name"
                        variant="standard"
                    />
                </div>

                <div className="field-item">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Basic example"
                            value={date}
                            onChange={(newValue) => {
                                setDate(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField size="small" {...params} />
                            )}
                        />
                    </LocalizationProvider>
                </div>

                <div className="field-item">
                    <FormControl fullWidth>
                        <InputLabel
                            variant="standard"
                            htmlFor="uncontrolled-native"
                        >
                            Gender
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={(e) => setGender(e.target.value)}
                            inputProps={{
                                name: "Gender",
                                id: "uncontrolled-native",
                            }}
                        >
                            <option value={"female"}>Female</option>
                            <option value={"male"}>Male</option>
                            <option value={"other"}>Other</option>
                        </NativeSelect>
                    </FormControl>
                </div>

                <div className="field-item">
                    <FormControl fullWidth>
                        <InputLabel
                            variant="standard"
                            htmlFor="uncontrolled-native"
                        >
                            Category
                        </InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            onChange={(e) => setGender(e.target.value)}
                            inputProps={{
                                name: "Category",
                                id: "uncontrolled-native",
                            }}
                        >
                            <option value={"other"}>Other</option>
                            {category.map((element, idx) => {
                                return (
                                    <option key={idx} value={element}>
                                        {element}
                                    </option>
                                );
                            })}
                        </NativeSelect>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;
