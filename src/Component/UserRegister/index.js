import { TextField } from "@material-ui/core";
import { Autocomplete } from "@mui/material";
import React, {useState} from "react";
import Skills from "./../Skills";
import lookup from '../fetchData/lookup';

function Index() {
  const [skillList, setSkillList] = useState([]);
  return (
    <div>
      <div
        class="form-container"
        style={{
          width: "95%",
          margin: "auto",
          boxShadow: "0 0 20px 0 rgba(0,0,0,0.1)",
        }}
      >
        <div class="card   light-1">
          <div class="card-content white-text">
            <span class="card-title">
              Basic Register Form Using Materialize
            </span>
            <div class="row">
              <form class="col s12" encType="multipart/form-data" id="reg-form" onSubmit={(event) => { 
                event.preventDefault();
                const formData = new FormData(event.target);
                let object = {};
                formData.append('skills', JSON.stringify(skillList));
                lookup("POST", formData, "/auth/register", {
                  "Content-type": "multipart/form-data",
                });
              }}>
                <div class="row">
                  <div class="input-field col s3">
                    <input name="username" type="text" class="validate" />
                    <label for="username">Username</label>
                  </div>
                  <div class="input-field col s3">
                    <input name="email" type="email" class="validate" />
                    <label for="email">Email</label>
                  </div>
                  <div class="input-field col s3">
                    <input name="password" type="password" class="validate" />
                    <label for="password">Password</label>
                  </div>
                  <div class="input-field col s3">
                    <input name="age" type="number" class="validate" />
                    <label for="age">Age</label>
                  </div>
                </div>
                <div class="row"></div>
                <div class="row">
                  <div class="input-field col s3">
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      class="validate"
                    />
                    <label style={{ transform: "translate(100px)" }}>
                      Upload Resume
                    </label>
                  </div>
                  <div class="input-field col s3">
                    <input type="text" name="location" class="validate" />
                    <label>Location</label>
                  </div>
                    <Autocomplete
                      multiple
                      id="tags-outlined"
                      options={["React", "Redux", "HTML", "CSS", "Javascript"]}
                      getOptionLabel={(option) => option}
                      defaultValue={[]}
                      filterSelectedOptions
                      onChange={(_, value) => {
                        setSkillList(value);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          disableUnderline={false}
                          label="Add Skill"
                          placeholder="Favorites"
                        />
                      )}
                    />
                  <div class="input-field col s3">
                    <input name="loc" type="text" class="validate" />
                    <label>Location</label>
                  </div>
                </div>
                <div class="row center-align">
                  <button class="btn-large waves-effect waves-dark" style={{ width: "30%"}} type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
