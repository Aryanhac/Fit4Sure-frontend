import React, { useState } from 'react'
import styles from "./Consultancy.module.sass";
import cn from 'classnames';

const Consultancy = () => {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        age: '',
        email: '',
        gender: '',
        city: '',
        contactNumber: '',
        goalConcern: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className={cn("container", styles.container)} id='consultancy'>
            <div className={styles.wrap}>
                <div className={styles.information}>
                    <div className={styles.headline}>Transform your health and start your journey to fitness today with the Fit4Sure</div>
                    <div className={styles.description}>Fit4Sure helps track your workouts, get better results, and be the best version of you. Less thinking!</div>
                </div>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div>
                                <label className={styles.label}>
                                    <div>Name</div>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                                </label>
                                <label className={styles.label}>
                                    <div>Age</div>
                                    <input type="text" name="age" value={formData.age} onChange={handleChange} required />
                                </label>

                                <label className={styles.label}>
                                    <div>Email</div>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                                </label>

                                <label className={styles.label}>
                                    <div>Gender</div>
                                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <label className={styles.label}>
                                    <div>Country</div>
                                    <input type="text" name="country" value={formData.country} onChange={handleChange} required />
                                </label>

                                <label className={styles.label}>
                                    <div>City</div>
                                    <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                                </label>

                                <label className={styles.label}>
                                    <div>Contact Number</div>
                                    <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                                </label>

                                <label className={styles.label}>
                                    <div>What is your goal/concern?</div>
                                    <textarea name="goalConcern" value={formData.goalConcern} onChange={handleChange} required></textarea>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className={cn('button',styles.button)}>Get Consultancy</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Consultancy
