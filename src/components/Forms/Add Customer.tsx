import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box, grid } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

export default function AddCustomer() {
  return (
    <Box m={1} p={1}>
      <Box>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
        >
          {/* Customer Info */}
          <Grid
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            item
            xs={12}
            sm={12}
          >
            <Typography variant="h5">Customer Info</Typography>
          </Grid>
          {/* Compony Name */}
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Compony Name"
              variant="outlined"
            />
          </Grid>
          {/* Company Type */}
          <Grid item xs={12} sm={5}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Company Type</FormLabel>
              <RadioGroup row aria-label="type" name="row-radio-buttons-group">
                <FormControlLabel
                  value="private"
                  control={<Radio />}
                  label="Private"
                />
                <FormControlLabel
                  value="government"
                  control={<Radio />}
                  label="Government"
                />
                <FormControlLabel
                  value="military"
                  control={<Radio />}
                  label="Military"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Company Activity Field */}
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Company Activity Field"
              variant="outlined"
            />
          </Grid>
          {/* Company Priority */}
          <Grid item xs={12} sm={5}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Company Priority</FormLabel>
              <RadioGroup
                row
                aria-label="priority"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="normal"
                  control={<Radio />}
                  label="Normal"
                />
                <FormControlLabel
                  value="important"
                  control={<Radio />}
                  label="Important"
                />
                <FormControlLabel value="vip" control={<Radio />} label="VIP" />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* National ID */}
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="National ID "
              variant="outlined"
            />
          </Grid>
          {/* Phone number */}
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
            />
          </Grid>
          {/* Tax ID */}
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Tax ID"
              variant="outlined"
            />
          </Grid>
          {/* Website */}

          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Website"
              variant="outlined"
            />
          </Grid>
          {/* Address */}
          <Grid item xs={12} sm={10}>
            <TextField
              fullWidth
              multiline
              rows={2}
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
          </Grid>
          {/* Note */}
          <Grid item xs={12} sm={10}>
            <TextField
              fullWidth
              multiline
              rows={2}
              id="outlined-basic"
              label="Note"
              variant="outlined"
            />
          </Grid>
          <Grid
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            item
            xs={12}
            sm={12}
          >
            {/* Customer Persons */}
            <Typography variant="h5">Customer Persons</Typography>
          </Grid>
          {/* Name */}
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
          </Grid>

          {/* Gender */}
          <Grid item xs={12} sm={5}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Job title */}
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Job title"
              variant="outlined"
            />
          </Grid>
          {/* Phone number */}
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone number"
              variant="outlined"
            />
          </Grid>
          {/* Email Address */}
          <Grid item xs={12} sm={5}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
            />
          </Grid>
          {/* Note */}
          <Grid item xs={12} sm={10}>
            <TextField
              fullWidth
              multiline
              rows={2}
              id="outlined-basic"
              label="Note"
              variant="outlined"
            />
          </Grid>
          <Grid
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            item
            xs={12}
            sm={12}
          ></Grid>
        </Grid>
        <Divider />
        <IconButton>
          <AddIcon />
        </IconButton>
      </Box>
      <Grid display={"flex"} justifyContent={"center"}>
        <Button variant="contained">SUBMIT</Button>
      </Grid>
    </Box>
  );
}
