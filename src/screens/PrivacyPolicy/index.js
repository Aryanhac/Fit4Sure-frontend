import React from 'react'
import styles from './PrivacyPolicy.module.sass'
import cn from 'classnames'

const PrivacyPolicy = () => {
  return (
    <div>
        <div className={cn("h2", styles.title)}>Fit4Sure – Privacy Policy</div>
        <div className={styles.heading}>Privacy Policy for Fit4Sure</div>
        <div className={styles.content}>
            At Fit4Sure, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us through our website and services.
        </div>
        <div className={styles.heading}>Information We Collect:</div>
        
        <div className={styles.heading1}>Personal Information:</div>
        <div className={styles.content}>
         When you register for our services or interact with our website, we may collect personal information such as your name, email address, contact information, and payment details.
        </div>
        <div className={styles.heading1}>Usage Data:</div>
        <div className={styles.content}>
          We may collect information about how you use our website and services, including your browsing activity, device information, IP address, and location data.
        </div>
        <div className={styles.heading}>How We Use Your Information:</div>
        <div className={styles.heading1}>To Provide Services:</div>
        <div className={styles.content}>
           We use the information you provide to deliver our personalized online weight loss training programs, including creating customized workout plans and providing nutritional guidance.
        </div>
        <div className={styles.heading1}>Communication:</div>
        <div className={styles.content}>
          We may use your contact information to communicate with you about your account, updates to our services, promotional offers, and other relevant information.
        </div>
        <div className={styles.heading1}>Analytics:</div>
        <div className={styles.content}>
           We may use usage data to analyze trends, improve our website and services, and enhance the user experience.
        </div>
        <div className={styles.heading1}>Data Security:</div>
        <div className={styles.content}>
        We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.<br></br>
        We use encryption technology to safeguard sensitive data transmitted between your browser and our website.
        </div>
        <div className={styles.heading1}>Data Sharing:</div>
        <div className={styles.content}>
        We do not sell, trade, or rent your personal information to third parties without your consent.<br></br>
        We may share your information with trusted third-party service providers who assist us in delivering our services, such as payment processors and marketing agencies. These providers are contractually obligated to protect your information and only use it for the purposes specified by us.
        </div>
        <div className={styles.heading1}>Cookies:</div>
        <div className={styles.content}>
        We may use cookies and similar tracking technologies to enhance your browsing experience, analyze website usage, and personalize content and advertisements.<br></br>
        You have the option to accept or decline cookies through your browser settings. However, disabling cookies may limit certain functionalities of our website.
        </div>
        <div className={styles.heading1}>Your Choices:</div>
        <div className={styles.content}>
        You have the right to access, update, or delete your personal information at any time. You can manage your account settings and preferences through your user profile.<br></br>
        You may opt out of receiving promotional communications from us by following the unsubscribe instructions included in the emails we send.
        </div>
        <div className={styles.heading1}>Children's Privacy:</div>
        <div className={styles.content}>
        Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children without parental consent.
        </div>
        <div className={styles.heading1}>Changes to this Policy:</div>
        <div className={styles.content}>
         We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page, and we encourage you to review this policy periodically.
        </div>
        <div className={styles.heading1}>Contact Us:</div>
        <div className={styles.content}>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at +91 70732 66385.<br></br> 
        By using our website and services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
        </div>
    </div>
  )
}

export default PrivacyPolicy