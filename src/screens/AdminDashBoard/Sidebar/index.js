import React from 'react'
import styles from "./Sidebar.module.sass";
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Icon from '../../../components/Icon';


const navLinks = [
    {
        title: "DashBoard",
        url: "/adminDashBoard",
        icon: "dashboard",
        size: 20
    },
    {
        title: "Client",
        url: "/admin/client",
        icon: "user",
        size: 20
    },
    {
        title: "Trainer",
        url: "/admin/trainer",
        icon: "user",
        size: 20
    },
    {
        title: "Consultancy",
        url: "/admin/consultancy",
        icon: "consultancy",
        size: 20
    },
];
const Sidebar = ({ currentState, setCurrentState }) => {
    return (
        <div className={styles.section}>
            <div>
                {
                    navLinks.map((x, ind) => {
                        return <Link key={ind} className={cn(styles.link, {
                            [styles.active]:  currentState=== x.title,
                        })} onClick={() => { setCurrentState(x.title) }}>
                            <Icon name={x.icon} size={x.size} ></Icon>
                            <div>{x.title}</div>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar