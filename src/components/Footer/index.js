import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "Privacy Policy",
        url: "/fit4Sure-privacyPolicy",
    },
    {
        title: "Terms and Conditions",
        url: "/fit4Sure-termsAndConditions",
    },
    {
        title: "Cancellation and Refund",
        url: "/fit4Sure-cancellationAndRefund",
    },
    {
        title: "Shipping and Delivery Policy",
        url: "/fit4Sure-shippingAndDeliveryPolicy",
    },
];

const socials = [
    {
        title: "facebook",
        size: "16",
        url: " https://www.facebook.com/Fit4SureFitness",
    },
    {
        title: "instagram",
        size: "18",
        url: "https://www.instagram.com/fit4surefitness/ ",
    },
    {
        title: "linkedin",
        size: "16",
        url: "https://www.linkedin.com/company/fit4surefitness/",
    },
];

const Footer = () => {
    const [visible, setVisible] = useState(true);

    const { pathname } = useLocation();

    return (
        <footer className={styles.footer}>
            <div className={styles.body}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.col}>
                        <div className={styles.box}>
                            <Link className={styles.logo} to="/">
                                <Image
                                    className={styles.pic}
                                    src="/images/logo-light.svg"
                                    srcDark="/images/logo-light.svg"
                                    alt="Fitness Pro"
                                />
                            </Link>
                        </div>
                        <div
                            className={styles.item}
                        >
                            {/* <div
                                className={styles.category}
                                onClick={() => setVisible(!visible)}
                            >
                                footer nav
                                <Icon name="arrow-bottom" size="9" />
                            </div> */}
                            <div className={styles.menu}>
                                {menu.map((x, index) => (
                                    <NavLink
                                        className={styles.link}
                                        to={x.url}
                                        key={index}
                                    >
                                        {x.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.category}>contact</div>
                        <div className={styles.info}>
                            <p>Jaipur</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.foot}>
                <div className={cn("container", styles.container)}>
                    <div className={styles.copyright}>
                        Copyright ©. All rights reserved
                    </div>
                    <div className={styles.socials}>
                        {socials.map((x, index) => (
                            <a
                                className={styles.social}
                                href={x.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                            >
                                <Icon name={x.title} size={x.size} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
