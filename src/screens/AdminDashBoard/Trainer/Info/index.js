import React, { useEffect } from 'react'
import styles from './Info.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { getTrainer } from '../../../../Store/TrainerActions'

const Info = ({ setCurrentID, currentID}) => {

  const dispatch = useDispatch();
  const { trainer } = useSelector((state) => state.trainer);
 


  useEffect(() => {
    dispatch(getTrainer(currentID));
  }, [dispatch,currentID]);


  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  

  return (
    <div className={styles.section} onClick={() => { setCurrentID(null) }}>
      <div className={styles.detail} onClick={handleChildClick}>
      <div>
      <h2>Trainer Information</h2>
      <p>
        <strong>Name:</strong> {trainer.name}
      </p>
      <p>
        <strong>Gender:</strong> {trainer.gender}
      </p>
      <p>
        <strong>Age:</strong> {trainer.age}
      </p>
      <p>
        <strong>Years of Experience:</strong> {trainer.experience}
      </p>
      <p>
        <strong>Specialties:</strong> {Array.isArray(trainer.specialties)?trainer.specialties.join(', '):trainer.specialties}
      </p>
      <p>
        <strong>Contact Number:</strong> {trainer.contactNumber}
      </p>
      <p>
        <strong>Email:</strong> {trainer.email}
      </p>
      <p>
        <strong>Client:</strong> {Array.isArray(trainer.client)?trainer.client.join(', '):trainer.client}
      </p>

    </div>

      </div>
    </div>
  )
}

export default Info