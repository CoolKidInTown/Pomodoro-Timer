import { useState } from 'react'
import './App.css'
import Timer from './Components/Timer'
import Settings from './Components/Settings';
import SettingsContext from './Components/SettingsContext';



function App() {

  const [showSettings, setShowSettings] = useState(false); //fals==timer
  const [workMinutes, setWorkMinutes] = useState(2);
  const [breakMinutes, setBreakMinutes] = useState(1);

  return (
    <>
      <main>

        <SettingsContext.Provider value = {{
          showSettings,
          setShowSettings,
          
          workMinutes,
          breakMinutes,

          setWorkMinutes,
          setBreakMinutes,
         }}>
       
          {showSettings ? <Settings></Settings> : <Timer></Timer>}
        </SettingsContext.Provider>

      </main>
    </>
  )
}

export default App
