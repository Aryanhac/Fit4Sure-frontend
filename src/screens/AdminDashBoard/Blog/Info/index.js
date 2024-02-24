import React, { useState, useEffect } from 'react';
import styles from './Info.module.sass';
import { useSelector, useDispatch } from 'react-redux';
import { getBlog, updateBlog } from '../../../../Store/BlogActions';
import { BlogAction } from '../../../../Store/BlogReducer';
import cn from 'classnames';
import { useAlert } from 'react-alert';

const Info = ({ setCurrentID, currentID }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { Blog, updateSuccess, error } = useSelector((state) => state.blog);
  const [update, setUpdate] = useState(false);

  const [formData, setFormData] = useState({
    author: '',
    outsideimage: null,
    innerimage: null,
    category: 'red',
    categoryContent: 'yoga',
    para: '',
    title: '',
  });

  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(BlogAction.clearError());
    }

    if (updateSuccess) {
      alert.success('Blog has been updated');
      dispatch(BlogAction.clearUpdateSuccess());
      setUpdate(false);
    }

    dispatch(getBlog(currentID));
  }, [dispatch, currentID, updateSuccess, error]);

  useEffect(() => {
    setFormData(Blog);
  }, [Blog]);

  const updateData = () => {
    const data = {
      itemId: formData._id,
      items: formData,
      title: currentID.title
    };
    dispatch(updateBlog(data));
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

  const categoryOptions = ["yoga", "new", "featured"];
  const category = ["red","green","pink","black"];

  return (
    <div className={styles.section} onClick={() => { setCurrentID(null); setUpdate(false) }}>
      <div className={styles.detail} onClick={(event) => event.stopPropagation()}>
        <div>
          <h2>Blog Information</h2>
          <div className={styles.box}>
            <div className={styles.box1}>
              <p>
                <strong>Title:</strong> {update ? <input type="text" name="title" value={formData.title} onChange={handleInputChange} required /> : Blog.title}
              </p>
              <p>
                <strong>Type:</strong> {currentID.title}
              </p>
              <p>
                <strong>Author:</strong> {update ? <input type="text" name="author" value={formData.author} onChange={handleInputChange} required /> : Blog.author}
              </p>
              <p>
                <strong>Cate:</strong> {update ? <label>
                            Category:
                            <select name="category" value={formData.category} onChange={handleItemsChange} required>
                                {category.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                        </label> : <input type='text' value={Blog.category}></input>}
              </p>
            </div>
            <div className={styles.box1}>
              <p>
                <strong>Category Content:</strong> {update ? <select name="categoryContent" value={formData.categoryContent} onChange={handleItemsChange} required>
                                {categoryOptions.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>: Blog.categoryContent}
              </p>
              <p>
                <strong>Date:</strong> { Blog.date}
              </p>
              <p>
                <strong>Para:</strong> {update ? <textarea name="para" value={formData.para} onChange={handleInputChange} required /> : <textarea  value={Blog.para}></textarea>}
              </p>
              <p>
                <strong>OutImage:</strong> {update ? <input type="file" name="outsideimage" onChange={(e) => handleImageChange(e, 'image1')} accept="image/*" /> : <a href={Blog.outsideimage} target='_blank'>outsideimage</a> }
              </p>
              <p>
                <strong>InImage:</strong> {update ? <input type="file" name="insideimage" onChange={(e) => handleImageChange(e, 'image1')} accept="image/*" /> : <a href={Blog.innerimage} target='_blank'>innerimage</a>}
              </p>

            </div>
          </div>
          <div className={styles.submitButton}>
            {update ? <button className={cn("button", styles.button)} onClick={() => { updateData() }}>Save</button> :
              <button className={cn("button", styles.button)} onClick={() => { setUpdate(true) }}>Update</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;