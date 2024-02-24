import React, { useState, useEffect } from 'react';
import styles from './BlogForm.module.sass';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { addBlog } from '../../../../Store/BlogActions';
import { BlogAction } from '../../../../Store/BlogReducer';
import { useAlert } from 'react-alert';

const BlogForm = ({ setForm }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { addSuccess } = useSelector((state) => state.blog);
    // State to manage form data
    const [formData, setFormData] = useState({
        type: 'Fitness', // Default type
        items: {
            author: '',
            outsideimage: null,
            innerimage: null,
            category: 'red',
            categoryContent: 'yoga',
            para: '',
        },
    });

    const categoryOptions = ["yoga", "new", "featured"];
    const category = ["red","green","pink","black"];

    useEffect(() => {
        if (addSuccess) {
            setForm(0);
            dispatch(BlogAction.clearAddSuccess());
            alert.success('Blog has been added');
        }
    }, [dispatch, addSuccess]);

    // Handle form field changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            items: {
                ...prevFormData.items,
                [name]: value,
            },
        }));
        console.log(formData)
    };


    // Handle items field changes
    const handleItemsChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            items: {
                ...prevFormData.items,
                [name]: value,
            },
        }));
    };

    // Handle image file changes
    const handleImageChange = (e, fileType) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    items: {
                        ...prevFormData.items,
                        [fileType]: reader.result,
                    },
                }));
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Only include 'title' and 'items' in the payload
        const { type, items } = formData;
        const payload = { type, items };
        dispatch(addBlog(payload));
    };

    const handleChildClick = (event) => {
        event.stopPropagation();
    };

    return (
        <div className={styles.section} onClick={() => setForm(0)}>
            <form onSubmit={handleSubmit} className={styles.form} onClick={handleChildClick}>
                <h2>Add Trainer</h2>
                <div className={styles.box}>
                    <div className={styles.column}>
                        <label>
                            Title:
                            <input type="text" name="title" value={formData.items.title} onChange={handleItemsChange} required />
                        </label>

                        <label>
                            Type:
                            <select name="type" value={formData.type} onChange={handleInputChange} required>
                                <option value="Fitness">Fitness</option>
                            </select>
                        </label>
                        <label>
                            Author:
                            <input type="text" name="author" value={formData.items.author} onChange={handleItemsChange} required />
                        </label>
                        <label>
                            Category:
                            <select name="category" value={formData.items.category} onChange={handleItemsChange} required>
                                {category.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>

                    </div>

                    <div className={styles.column}>

                        <label>
                            Category Content:
                            <select name="categoryContent" value={formData.items.categoryContent} onChange={handleItemsChange} required>
                                {categoryOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Para:
                            <textarea type="text" name="para" value={formData.items.para} onChange={handleItemsChange} required />
                        </label>
                        <label>
                            Outside Image:
                            <input type="file" name="outsideimage" onChange={(e) => handleImageChange(e, 'image1')} accept="image/*" />
                        </label>

                        <label>
                            Inner Image:
                            <input type="file" name="innerimage" onChange={(e) => handleImageChange(e, 'image2')} accept="image/*" />
                        </label>

                    </div>
                </div>

                <div className={styles.submitButton}>
                    <button className={cn("button", styles.button)} type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogForm;
