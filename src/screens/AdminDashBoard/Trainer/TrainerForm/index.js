import React, { useState } from 'react';
import styles from './TrainerForm.module.sass'
import cn from 'classnames'
import {useDispatch } from 'react-redux'
import { addTrainer } from '../../../../Store/TrainerActions'


const TrainerForm = ({setForm}) => {
  const dispatch = useDispatch();
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    experience: '',
    specialties: [],
    contactNumber: '',
    email: '',
  });

  // Handle form field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
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

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTrainer(formData));
    setForm(0);
  };

  const handleChildClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.section} onClick={() => { setForm(0) }}>
    <form onSubmit={handleSubmit} className={styles.detail} onClick={handleChildClick} required>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
      </label>

      <label>
        Gender:
        <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} required />
      </label>

      <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleInputChange} required/>
      </label>

      <label>
        Years of Experience:
        <input type="number" name="experience" value={formData.experience} onChange={handleInputChange} required/>
      </label>

      <label>
        Specialties:
        <div className={styles.specialties}>
          <label>
            <input type="checkbox" name="specialties" value="Cardio" onChange={handleSpecialtiesChange} /> Cardio
          </label>
          <label>
            <input type="checkbox" name="specialties" value="Strength" onChange={handleSpecialtiesChange} /> Strength
          </label>
          {/* Add more specialties as needed */}
        </div>
      </label>

      <label>
        Contact Number:
        <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} required/>
      </label>
      <div className={styles.submitButton}>
      <button className={cn("button", styles.button)} type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default TrainerForm;
