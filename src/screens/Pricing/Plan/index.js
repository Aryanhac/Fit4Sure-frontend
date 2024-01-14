import React, { useState } from "react";
import cn from "classnames";
import styles from "./Plan.module.sass";
import Icon from "../../../components/Icon";

const options = [
  {
    title: "Main features",
    items: [
      {
        title: "Time-Trackers",
        description: "Some Text",
      },
      {
        title: "Exclusive Music",
        description: "Some Text",
      },
      {
        title: "E-books",
        description: "Some Text",
      },
      {
        title: "Documents",
        description: "Some Text",
      },
      {
        title: "Premium Tutorial",
        description: "Some Text",
      },
      {
        title: "Client Support",
        description: "Some Text",
      },
      {
        title: "Premium Courses",
        description: "Some Text",
      },
      {
        title: "User support",
        description: "Some Text",
      },
      {
        title: "Chat to trainers",
        description: "Some Text",
      },
      {
        title: "Unlimited Videos",
        description: "Some Text",
      },
    ],
  },
];

const data = [
  {
    title: "One Month",
    color: "#9757D7",
    description: "Try One Month",
    price: "0",
    note: "per month",
    button: "Get One Month",
    options: [
      "true",
      "true",
      "true",
      "false",
      "true",
      "true",
      "false",
      "false",
      "false",
      "false",
    ],
  },
  {
    title: "Three Month",
    color: "#FF592C",
    description: "Fit with everyone",
    price: "0",
    note: "per three month",
    button: "Get Three Month",
    options: [
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "false",
      "false",
    ],
  },
  {
    title: "Six Month",
    color: "#EF466F",
    description: "Are you pro?",
    price: "0",
    note: "per six month",
    button: "Get Six Month",
    options: [
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
    ],
  },
  {
    title: "One Year",
    color: "#EF466F",
    description: "Are you expert?",
    price: "0",
    note: "per year",
    button: "Get One Month",
    options: [
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
      "true",
    ],
  }
];

const Plan = () => {
  const [more, setMore] = useState([false, false, false]);

  const handleClick = (index) => {
    let newMore = [...more];
    newMore[index] = !more[index];

    setMore(newMore);
  };

  const renderContent = (content) => {
    if (content === "true") {
      return <Icon name="check" size="14" />;
    }
    if (content === "false") {
      return <div className={styles.minus}>-</div>;
    }
    return <div className={styles.minus}>{content}</div>;
  };

  return (
    <div className={cn("section-bg", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={cn("stage", styles.stage)}>
          get stronger with fit4sure
        </div>
        <h1 className={cn("h1", styles.title)}>
          Choose a plan that’s right for you
        </h1>
        <div className={styles.table}>
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.head}></div>
              <div className={styles.body}>
                {options.map((option, index) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.category}>{option.title}</div>
                    {option.items.map((item, index) => (
                      <div className={styles.parameter} key={index}>
                        <div className={styles.label}>{item.title}</div>
                        <div className={styles.hint}>
                          <Icon name="info" size="10" />
                          <div className={styles.tooltip}>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {data.map((type, index) => (
              <div className={styles.col} key={index}>
                <div className={styles.head}>
                  <div className={styles.package} style={{ color: type.color }}>
                    {type.title}
                  </div>
                  <div className={styles.description}>{type.description}</div>
                  {type.price && (
                    <>
                      <div className={styles.cost}>
                        <span className={styles.sign}>&#8377;</span>{" "}
                        <span className={styles.price}>{type.price}</span>
                      </div>
                      <div className={styles.note}>{type.note}</div>
                    </>
                  )}
                </div>
                <div className={styles.body}>
                  <div
                    className={cn(styles.more, {
                      [styles.active]: more[index],
                    })}
                    onClick={() => handleClick(index)}
                  >
                    See all features
                    <Icon name="arrow-bottom" size="9" />
                  </div>
                  <div
                    className={cn(styles.list, {
                      [styles.visible]: more[index],
                    })}
                  >
                    {options.map((option, optionIndex) => (
                      <div className={styles.item} key={optionIndex}>
                        {option.items.map((item, itemIndex) => (
                          <div className={styles.parameter} key={itemIndex}>
                            <div className={styles.label}>{item.title}</div>
                            {renderContent(type.options[itemIndex])}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <button
                    className={cn(
                      "button",
                      styles.button
                    )}
                  >
                    {type.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
