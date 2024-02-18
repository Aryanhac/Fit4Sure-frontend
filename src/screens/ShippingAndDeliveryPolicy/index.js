import React from 'react'
import styles from './ShippingAndDeliveryPolicy.module.sass'
import cn from 'classnames'

const ShippingAndDeliveryPolicy = () => {
  return (
    <div>
        <div className={cn("h2", styles.title)}>Shipping and Delivery Policy</div>
        <div className={styles.content}>
        At Fit4Sure, we provide online weight loss training programs and services exclusively through our digital platform. Please review our Shipping and Delivery Policy to understand how our services are provided.
        </div>
        
        <div className={styles.heading1}>Digital Services:</div>
        <div className={styles.content}>
        Fit4Sure offers personalized weight loss training programs and services that are delivered digitally through our website and mobile application.<br></br>
        There are no physical products associated with our services, and therefore, no shipping or delivery of physical goods is involved.
        </div>
        <div className={styles.heading1}>Access to Services:</div>
        <div className={styles.content}>
        Upon successful subscription to our services, customers receive immediate access to our online platform and resources.<br></br>
        You can log in to your account and start accessing our personalized training plans, diet guidance, fitness tracking tools, and other resources instantly.
        </div>
        <div className={styles.heading1}>Service Availability:</div>
        <div className={styles.content}>
        Our digital services are accessible online 24/7, allowing customers to access them at their convenience from anywhere with an internet connection.<br></br>
        Customers can log in to their accounts and utilize our services at any time that suits their schedule.
        </div>
        <div className={styles.heading1}>Customer Support:</div>
        <div className={styles.content}>
        Our customer support team is available to assist customers with any questions, concerns, or technical issues they may encounter while using our services.<br></br>
        Customers can contact our customer support team via email, phone, or through our website's chat feature for prompt assistance.
        </div>
        <div className={styles.heading1}>Changes or Updates:</div>
        <div className={styles.content}>
        Fit4Sure reserves the right to update, modify, or discontinue our services or any part thereof at any time without prior notice.<br></br>
        We may introduce new features, functionalities, or improvements to our services to enhance the customer experience.
        </div>
        <div className={styles.heading1}>Contact Us:</div>
        <div className={styles.content}>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at +91 70732 66385.<br></br> 
        By using our website and services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
        </div>
    </div>
  )
}

export default ShippingAndDeliveryPolicy