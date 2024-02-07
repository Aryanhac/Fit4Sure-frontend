import React, { useState, useEffect } from 'react'
import styles from './Info.module.sass'
import { useSelector, useDispatch } from 'react-redux'
import { getTrainer, updateTrainer } from '../../../../Store/TrainerActions'
import cn from 'classnames'

const Info = ({ setCurrentID, currentID }) => {

  const dispatch = useDispatch();
  const { trainer } = useSelector((state) => state.trainer);
  const [update, setUpdate] = useState(false);

  // for Updation
  const [formData, setFormData] = useState({
    _id: '',
    name: '',
    gender: '',
    age: '',
    yoe: '',
    specialties: [],
    contactNumber: '',
    email: '',
    accountDetails: {
      bankName: '',
      accountNumber: '',
      ifscNumber: '',
    },
  });

  // Handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //Handle Account Detail
  const handleAccountDetailsChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      accountDetails: {
        ...formData.accountDetails,
        [name]: value,
      },
    });
  };

  // Handle specialties checkbox changes
  const handleSpecialtiesChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFormData({
        ...formData,
        specialties: [...formData.specialties, value],
      });
    } else {
      setFormData({
        ...formData,
        specialties: formData.specialties.filter((specialty) => specialty !== value),
      });
    }
  };

  // handle file
  const handleFileChange = (e, fileType) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setFormData({
          ...formData,
          [fileType]: reader.result,
        });
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(getTrainer(currentID));
  }, [dispatch, currentID]);


  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  const updateData = () => {
    const data = {
      _id: formData._id,
      form: formData
    }
    dispatch(updateTrainer(data))
  }

  // setFormData(trainer);

  return (
    <div className={styles.section} onClick={() => { setCurrentID(null); setUpdate(false) }}>
      <div className={styles.detail} onClick={handleChildClick}>
        <div>
          <h2>Trainer Information</h2>
          <div className={styles.box}>
            <div>
              <p>
                <strong>Name:</strong> {update ? <input type="text" name="name" value={formData.name} onChange={handleInputChange} required /> : trainer.name}
              </p>
              <p>
                <strong>Gender:</strong> {update ? <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} required /> : trainer.gender}
              </p>
              <p>
                <strong>Age:</strong> {update ? <input type="number" name="age" value={formData.age} onChange={handleInputChange} required /> : trainer.age}
              </p>
              <p>
                <strong>Years of Experience:</strong> {update ? <input type="number" name="yoe" value={formData.yoe} onChange={handleInputChange} required /> : trainer.yoe}
              </p>
              <p>
                <strong>Specialties:</strong> {update ? <div className={styles.specialties}>
                  <label>
                    <input type="checkbox" name="specialties" value="Cardio" onChange={handleSpecialtiesChange} /> Cardio
                  </label>
                  <label>
                    <input type="checkbox" name="specialties" value="Strength" onChange={handleSpecialtiesChange} /> Strength
                  </label>
                  {/* Add more specialties as needed */}
                </div> : Array.isArray(trainer.specialties) ? trainer.specialties.join(', ') : trainer.specialties}
              </p>
              <p>
                <strong>Contact Number:</strong> {update ? <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required /> : trainer.contactNumber}
              </p>
              <p>
                <strong>Client:</strong> {Array.isArray(trainer.clients) ? trainer.clients.join(', ') : trainer.clients}
              </p>
            </div>
            <div>
              <p>
                <strong>Email:</strong> {update ? <input type="email" name="email" value={formData.email} onChange={handleInputChange} required /> : trainer.email}
              </p>
              <p>
                <strong>Bank Name:</strong> {update ? <input type="text" name="bankName" value={formData.accountDetails.bankName} onChange={handleAccountDetailsChange} required /> : (trainer.accountDetails && trainer.accountDetails.bankName)}
              </p>
              <p>
                <strong>Account Number:</strong> {update ? <input type="text" name="accountNumber" value={formData.accountDetails.accountNumber} onChange={handleAccountDetailsChange} required /> : (trainer.accountDetails && trainer.accountDetails.accountNumber)}
              </p>
              <p>
                <strong>IFSC Number:</strong> {update ? <input type="text" name="ifscNumber" value={formData.accountDetails.ifscNumber} onChange={handleAccountDetailsChange} required /> : (trainer.accountDetails && trainer.accountDetails.ifscNumber)}
              </p>
              <p>
                <strong>Aadhar Card:</strong>
                {update ? <input type="file" name="aadharCardImage" onChange={(e) => handleFileChange(e, 'aadharCard')} accept="image/*" required /> : <a href={trainer.aadharcard} target='_blank' rel="noreferrer">aadhar</a>}
              </p>
              <p>
                <strong>PanCard:</strong>
                {update ? <input type="file" name="panCardImage" onChange={(e) => handleFileChange(e, 'panCard')} accept="image/*" required /> : <a href={trainer.pancard} target='_blank' rel="noreferrer">pan</a>}
              </p>
              <p>
                <strong>Availability:</strong>{trainer.availability ? 'Yes' : 'No'}
              </p>
              <div className={styles.submitButton}>
                {update ? <button className={cn("button", styles.button)} onClick={() => { setUpdate(false) }}>Save</button> :
                  <button className={cn("button", styles.button)} onClick={() => { setUpdate(true) }}>Update</button>}
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  )
}

export default Info