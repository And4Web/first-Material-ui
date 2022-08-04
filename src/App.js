import './App.css';
import {Button} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';
import { DeleteIcon, AccessAlarm, ThreeDRotation } from '@mui/icons-material';


function App() {
  return (
    <div className="App">
     <h1>Material ui</h1>
      <Button variant="text">Text</Button>
      <Button variant="contained" color='secondary' size='small' startIcon={<SettingsIcon />}>Settings</Button>
      <Button variant="outlined" startIcon={<AddIcon/>} sx={{backgroundColor: "red", color: "white", outline: "none", "&:hover":{background: "green", boxShadow: "5px 5px 10px grey"}}}>Add more</Button>
    </div>
  );
}

export default App;
