import { Button, TextField } from '@mui/material'
import './App.css'
import Stack from '@mui/material/Stack';
import { useState } from 'react';









function App() {

  let [pamount, setpamount] = useState()
  let [rate, setrate] = useState()
  let [time, settime] = useState()
  
  let [validp,setvalidp ] = useState()
  let [validrate,setvalidrate ] = useState()
  let [validtime,setvalidtime ] = useState()

  let [simpleint,setsimpleint] = useState(0)


  let validateIn = (tag) =>{


    const { name, value } = tag
    console.log(name, value);
    console.log(!!value.match(/^([0-9]*.?[0-9]+)$/))

    if (!!value.match(/^([0-9]*.?[0-9]+)$/)) {

      if (name=='pamount') {
        setpamount(value)
        setvalidp(false)
        
        

        
      }
      else if (name=='rate') {
        setrate(value)
        setvalidrate(false)

        
      }
      else{
        settime(value)
        setvalidtime(false)

        
      }
    }
    else{
      if(name=='pamount'){
        setvalidp(true)

      }
     else if(name=='rate'){
        setvalidrate(true)

      }
      else{
        setvalidtime(true)

      }
    }
    console.log(pamount);
    
  
   
    
  }

  let handleCalculate = (e) => {
    e.preventDefault()

    if (pamount && rate && time) {
      setsimpleint((pamount*rate*time)/100)

      
    }
    else{
      alert("please fill the field")
    }


  }

  let resetbtn=()=>{
    setpamount(0)
    setrate(0)
    settime(0)
    setsimpleint(0)
    validp(false)
    validrate(false)
    validtime(false)


  }





  return (
    <>
      <div className=' w-75 wrapper border border-1 border-black shadow'>
        <h4 >Simple Interest calculator</h4>
        <h6 className=' mb-4' >Callculate your simple Interest easly</h6>
        <div style={{ borderRadius: "12px" }} className='section d-flex shadow  border justify-content-center flex-column'>
          <h1 className=' text-white'>$ &nbsp;{simpleint}</h1>
          <h3 className=' text-white'>total simple Interest</h3>
        </div>

        <form>
          <TextField style={{ borderRadius: "12px" }} name='pamount' value={pamount || ""} onChange={(e) => { validateIn(e.target) }} className='input mt-4 border border-2' id="outlined-basic" color='success' label="principle amount" variant="outlined" />
          { validp && <p className=' text-danger' id='invalidpriciple'>invalid principle amount</p>}
          <TextField style={{ borderRadius: "12px" }} name='rate' value={rate || ""} onChange={(e) => { validateIn(e.target) }} className='input mt-4 border border-2' id="outlined-basic" color='success' label="Rate of interest" variant="outlined" />
          { validrate && <p className=' text-danger' id='invalidpriciple'>invalid amount</p>}
          <TextField style={{ borderRadius: "12px" }} name='time' value={time || ""} onChange={(e) => { validateIn(e.target) }} className='input mt-4 border border-2' id="outlined-basic" color='success' label="Time period" variant="outlined" />
          { validtime && <p className=' text-danger' id='invalidpriciple'>invalid amount</p>}

          <Stack className=' mt-4 d-flex justify-content-around w-100' direction="row" spacing={4}>
            <Button  onClick={handleCalculate} className='d-flex justify-content-around w-50 bg-black' type='submit' variant="contained">Calculate</Button>
            <Button onClick={resetbtn} className='d-flex justify-content-around w-50 text-black' variant="outlined">Reset</Button>


          </Stack>
        </form>




      </div>

    </>
  )
}

export default App
