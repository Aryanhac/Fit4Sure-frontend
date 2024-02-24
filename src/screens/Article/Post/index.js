import React,{useEffect} from "react";
import cn from "classnames";
import styles from "./Post.module.sass";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from "../../../Store/BlogActions";


const Post = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { Blog } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlog({itemId: id, title:'Fitness'}));
  }, [dispatch]);

  return (
    <div className={cn("section", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.preview}>
              <img src={Blog&&Blog.innerimage} alt="People" />
            </div>
          </div>
          <div className={styles.col}>
            <h2 className={cn("h2", styles.title)}>{Blog&&Blog.title}</h2>
            <div className={styles.content}>
              <p>
                {Blog&&Blog.para}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
