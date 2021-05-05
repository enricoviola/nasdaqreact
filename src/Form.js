import React, {Component}  from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

// Notazione delle classi
class Form extends Component {
 constructor(props) {
   super(props);
   this.state = { 
     cerca: 'Apple1', 
     note: 'questa è una nota', 
     azione: 'Ferrero', 
     valueRadio: 'female',
    age: 80,
    checkedA: false,
    checkedB: false,
   }
 }

 onchangeCerca = (value) => {
     this.setState( {cerca: value.target.value})
 }

 onchangeNote = (e) => {
     this.setState( {note: e.target.value})
 }

 onchangeSelect = (e) => {
     this.setState( {azione: e.target.value})
 }

 onchangeSelectNew = (e) => {
     this.setState( {age: e.target.value})
 }

 onchangeRadio = (e) => {
     this.setState( {valueRadio: e.target.value})
 }

 onchangeCheckbox = (e) => {
     this.setState( { [e.target.name] : e.target.checked })
 }

 invioForm = (e) => {
   console.log('Form value', e.target, this.state);
   this.props.onSubmit(this.state)
   e.preventDefault()
 }

 render() {
    return (
      <React.Fragment>
        <form onSubmit={this.invioForm}>
    <Typography component="div" variant="body1">

    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={this.state.checkedA} onChange={this.onchangeCheckbox} name="checkedA" />}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checkedB}
            onChange={this.onchangeCheckbox}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      </FormGroup>

        <Box bgcolor="info.main">
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={this.state.age}
          onChange={this.onchangeSelectNew}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        </Box>


        <Box bgcolor="info.main">
          <select name="azioni" onChange = {this.onchangeSelect} value={this.state.azione}>
            <option value="-">Seleziona</option>
            <option value="Fiat">Fiat</option>
            <option value="Apple">Apple</option>
            <option value="Google">Google</option>
            <option value="Ferrero">Ferrero</option>
          </select>
        </Box>
        
        <Box bgcolor="info.main">
    <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={this.state.valueRadio} onChange={this.onchangeRadio}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
      </RadioGroup>
    </FormControl>
        </Box>

        <Box bgcolor="info.main">
            <input type="text" name="cerca" value={this.state.cerca}
            onChange = {this.onchangeCerca} />
            </Box>
              
            <Box bgcolor="info.main">
            <textarea name="note" value= {this.state.note}
            onChange = {this.onchangeNote} />
            </Box>

            <Button onClick= {this.invioForm}
              variant="contained"
              color="secondary"
              endIcon={<Icon>send</Icon>}>
                  INVIA FORM
            </Button>

            </Typography>
        </form>
      </React.Fragment>
    );
  }
}
   
export default Form;