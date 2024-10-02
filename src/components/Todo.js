import React, { useContext, useState } from 'react'
import { ModeEdit,Delete, RemoveRedEye } from "@mui/icons-material"
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Remove, Update } from '../redux/actions/action';
import { DeleteContext } from './context/contextProvider';
const Todo = () => {

  const { user_data } = useSelector((state) => state);
  const [showeye, setShoweye] = useState(false);
  const [eyevalue, setEyevalue] = useState("");

  const [show,setShow] = useState(false);
  const [update,setUpdate] = useState("");
  const [id,setId]  = useState("");

  const { setDltask}  =  useContext(DeleteContext);



  const dispatch = useDispatch();

  const handleDelete = (id)=>{
    console.log(id);
    dispatch(Remove(id));
    setDltask(true);
  }

  const handleShow = (el,i)=>{
      setShow(true);
      setUpdate(el);
      setId(i);
  }

  const updateData = ()=>{
      dispatch(Update(update,id));
  }


 




  return (
    <>
      {
        user_data.map((item, i) => (
          <div key={i} className='my-2 p-2 rounded-2 col-lg-5 mx-auto  d-flex justify-content-between align-items-center' style={{ background: "#dcdde1", height: "45px" }}>
            <span>{item}</span>
            <div className='icons gap-4 d-flex justify-content-between align-items-center '>
              <ModeEdit
             onClick={()=>handleShow(item,i)}
               style={{ color: "3c40c6", cursor: "pointer" }} />
              <Delete onClick={()=>handleDelete(i)} style={{ color: "red", cursor: "pointer" }} />
              <RemoveRedEye
                onClick={() => {
                  setShoweye(true);
                  setEyevalue(item);
                }}
                style={{ color: "green", cursor: "pointer" }} />
            </div>

          </div>
        ))
      }


          {/* Read modal */}
      <Modal show={showeye}>
        <h1 className='text-center fs-3'>{eyevalue}</h1>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShoweye(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Edit Model  */}
      <Modal show={show} onHide={()=>setShow(false)}>
        <h3 className='text-center mt-2'>Update Your Todo </h3>
        <Modal.Header >
        <input className='form-control' value={update} onChange={(e) => setUpdate(e.target.value)} type='text' />
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{updateData();setShow(false);}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



    </>

  )
}

export default Todo