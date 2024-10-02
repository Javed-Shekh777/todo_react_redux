import { Button } from '@mui/material'
import AddIcon from "@mui/icons-material/Add"
import React, { useState } from 'react'
import Todo from './Todo'
import { Add } from "../redux/actions/action";
import { useDispatch } from 'react-redux';

const Home = () => {

  const [data, setData] = useState("");

  const dispatch = useDispatch();


  const addData = () => {
    dispatch(Add(data));
    setData("");
  }

   

  return (
    <>
      <div className='container text-center'>
        <section className='mt-3 text-center'>
          <h3> Enter Your Task</h3>

          <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
            <input className='form-control' value={data} onChange={(e) => setData(e.target.value)} type='text' />
            <Button
              onClick={() => addData()}
              variant="contained" className='mx-2' style={{ background: "#ee5253" }}>
              <AddIcon />
            </Button>
          </div>
          <Todo />

        </section>
      </div>
    </>
  )
}

export default Home