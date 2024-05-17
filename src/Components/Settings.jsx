import React from 'react'
import ReactSlider from 'react-slider'
import './Slider.css' //css imported
import SettingsContext from './SettingsContext'
import {useContext} from 'react'
import BackButton from './BackButton'


function Settings() {
const settingsInfo = useContext(SettingsContext);
return (
    <div style={{textAlign:'center'}}>
      <label>work :  {settingsInfo.workMinutes} :00 </label> 
    
        <ReactSlider
            className = {"slider"}
            thumbClassName = {'thumb'}
            trackClassName = {'track'}
            value = {settingsInfo.workMinutes} //setting replaced by Settings 
            onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
            min = {1}
            max = {120}
        />

      <label>break : {settingsInfo.breakMinutes} :00 </label>
      <ReactSlider
            className = {"slider green"}
            thumbClassName = {'thumb'}
            trackClassName = {'track'}
            value = {settingsInfo.breakMinutes}
            onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
            min = {1}
            max = {120}
        />
        <div style={{textAlign:'center', marginTop:'20px'}}>
            <BackButton onClick = {() => settingsInfo.setShowSettings(false)}></BackButton>
        </div>
        
    </div>
  )
}

export default Settings
