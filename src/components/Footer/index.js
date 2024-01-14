import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Subscription from "../Subscription";
import Theme from "../Theme";
import Icon from "../Icon";
import Image from "../Image";

const menu = [
    {
        title: "Lifestyle",
        url: "/lifestyle",
    },
    {
        title: "Pricing",
        url: "/pricing",
    },
    {
        title: "Features",
        url: "/features",
    }
];

const socials = [
    {
        title: "facebook",
        size: "16",
        url: "https://www.facebook.com/ui8.net/",
    },
    {
        title: "twitter",
        size: "18",
        url: "https://twitter.com/ui8",
    },
    {
        title: "instagram",
        size: "16",
        url: "https://www.instagram.com/ui8net/",
    }
];

const Footer = () => {
    const [visible, setVisible] = useState(false);

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
                                    src="/images/logo-dark.svg"
                                    srcDark="/images/logo-light.svg"
                                    alt="Fitness Pro"
                                />
                            </Link>
                        </div>
                        <div
                            className={cn(styles.item, {
                                [styles.active]: visible,
                            })}
                        >
                            <div
                                className={styles.category}
                                onClick={() => setVisible(!visible)}
                            >
                                footer nav
                                <Icon name="arrow-bottom" size="9" />
                            </div>
                            <div className={styles.menu}>
                                {menu.map((x, index) => (
                                    <NavLink
                                        className={cn(styles.link, {
                                            [styles.active]: pathname === x.url,
                                        })}
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
                            <p>43252 Borer Mountains</p>
                            <p>Zackerychester</p>
                            <p>Bahamas</p>
                            <p>732-528-4945</p>
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
