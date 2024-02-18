import React, { useState } from "react";
import cn from "classnames";
import styles from "./Faq.module.sass";
import Item from "./Item";

const items = [
  {
    title: "General",
    items: [
      {
        title: "How do I register for Fit4Sure's personalized online weight loss training program?",
        ans:"To register for Fit4Sure's program, simply visit our website and navigate to the registration page. Fill out the registration form with your details, including your name, email address, and contact information. Once you've submitted the form, one of our team members will reach out to you to guide you through the registration process and get you started on your weight loss journey."
      },
      {
        title: "What is the process for creating a personalized workout plan with Fit4Sure?",
        ans: "After registering for Fit4Sure's program, you'll undergo a comprehensive assessment of your current fitness level, health history, and weight loss goals. Our team of experts will then use this information to create a personalized workout plan tailored specifically to your needs and objectives. This plan will take into account factors such as your fitness goals, any existing medical conditions, and your preferred workout style."
      },
      {
        title: "How does Fit4Sure ensure that my training plan aligns with my fitness goals?",
        ans: "Fit4Sure ensures that your training plan is aligned with your fitness goals by conducting a thorough assessment of your needs and objectives. Our team of certified personal trainers and nutritionists work closely with you to understand your goals, preferences, and any limitations you may have. Based on this information, we create a customized workout plan that is designed to help you achieve your desired outcomes efficiently and effectively."
      },
      {
        title: "Can I track my progress using Fit4Sure's platform?",
        ans: "Yes, Fit4Sure provides you with access to advanced fitness tracking tools to monitor your progress throughout your weight loss journey. You'll be able to track various metrics such as your workouts, meals, weight, and body measurements in real-time. This allows you to stay accountable, track your results, and make adjustments to your plan as needed."
      },
      {
        title: "What type of support can I expect from Fit4Sure's team during my weight loss journey?",
        ans: "Throughout your weight loss journey, you can expect ongoing support from our team of certified personal trainers and nutritionists. We're here to answer any questions you may have, provide motivation and encouragement, and offer guidance every step of the way. Whether you need help with your workouts, nutrition, or mindset, we're here to support you in reaching your goals."
      },
      {
        title: "Are there different subscription options available, and how do they differ?",
        ans: "Yes, Fit4Sure offers a variety of subscription options to fit your lifestyle and budget. We offer monthly, quarterly, and yearly plans, each with varying levels of access to our personalized training programs and support resources. The main difference between the plans is the duration of the subscription and the level of support and access you receive."
      },
    ],
  }
];

const Team = () => {
  const options = [];
  items.map((x) => options.push(x.title));

  const [category, setCategory] = useState(options[0]);

  return (
    <div className={cn("section-border-top", styles.section)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.top}>
          <div className={cn("stage-small", styles.stage)}>
            learn how to get started
          </div>
          <h2 className={cn("h2", styles.title)}>Frequently Asked Questions</h2>
          {/* <div className={styles.nav}>
            {items.map((x, index) => (
              <button
                className={cn(styles.btn, {
                  [styles.active]: x.title === category,
                })}
                onClick={() => setCategory(x.title)}
                key={index}
              >
                {x.title}
              </button>
            ))}
          </div> */}
        </div>
        <div className={styles.list}>
          {items
            .find((x) => x.title === category)
            .items.map((x, index) => (
              <Item item={x} key={index} ans={x.ans} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
