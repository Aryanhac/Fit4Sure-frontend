import React,{useState} from 'react'
import styles from "./AdminDashBoard.module.sass"
import Sidebar from './Sidebar'
import Client from './Client'
import Trainer from './Trainer'
import Consultancy from './Consultancy'

const AdminDashboard = () => {
  const [currentState, setCurrentState] = useState('DashBoard');
  return (
    <div className={styles.section}>
      <Sidebar currentState={currentState} setCurrentState={setCurrentState}></Sidebar>
      {
        (currentState==='DashBoard'&&<div>DashBoard</div>)||
        (currentState==='Trainer'&&<Trainer></Trainer>)||
        (currentState==='Client'&&<Client></Client>)||
        (currentState==='Consultancy'&&<Consultancy></Consultancy>)
      }
    </div>
  )
}

export default AdminDashboard