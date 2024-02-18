import React from 'react'
import styles from './TermsAndConditions.module.sass'
import cn from 'classnames'

const TermsAndConditions = () => {
  return (
    <div>
        <div className={cn("h2", styles.title)}>Terms and Conditions</div>
        <div className={styles.content}>
          Welcome to Fit4Sure! These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using our website or services, you agree to comply with these Terms. Please read them carefully before proceeding.
        </div>
        <div className={styles.heading1}>Account Registration:</div>
        <div className={styles.content}>
        To access certain features of our website and services, you may be required to create an account. You must provide accurate and complete information when registering for an account and keep your login credentials secure.
        </div>
        <div className={styles.heading1}>Eligibility:</div>
        <div className={styles.content}>
        You must be at least 18 years old to use our services. By using our website and services, you represent and warrant that you are of legal age to form a binding contract with us.
        </div>
        <div className={styles.heading1}>Payment:</div>
        <div className={styles.content}>
          By subscribing to our services, you agree to pay the applicable fees as outlined on our website. Payments are processed securely through our payment processor, and you authorize us to charge your chosen payment method for the subscription fees.
        </div>
        <div className={styles.heading1}>Use of Services:</div>
        <div className={styles.content}>
        You agree to use our website and services for lawful purposes only and not to violate any applicable laws or regulations.<br></br>
        You are solely responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
        </div>
        <div className={styles.heading1}>Intellectual Property:</div>
        <div className={styles.content}>
        All content and materials available on our website, including text, graphics, logos, images, and software, are the property of Fit4Sure or its licensors and are protected by copyright and other intellectual property laws.<br></br>
        You may not reproduce, distribute, modify, or create derivative works of any content on our website without prior written permission from us.
        </div>
        <div className={styles.heading1}>Disclaimer of Warranties::</div>
        <div className={styles.content}>
        Our website and services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.<br></br>
        We do not warrant that our website or services will be uninterrupted, error-free, or free from viruses or other harmful components.
        </div>
        <div className={styles.heading1}>Disclaimer of Warranties::</div>
        <div className={styles.content}>
        We do not sell, trade, or rent your personal information to third parties without your consent.<br></br>
        We may share your information with trusted third-party service providers who assist us in delivering our services, such as payment processors and marketing agencies. These providers are contractually obligated to protect your information and only use it for the purposes specified by us.
        </div>
        <div className={styles.heading1}>Limitation of Liability:</div>
        <div className={styles.content}>
        In no event shall Fit4Sure, its affiliates, or its licensors be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or services.<br></br>
        Our total liability for any claims arising under these Terms shall not exceed the amount paid by you for the services provided.
        </div>
        <div className={styles.heading1}>Termination:</div>
        <div className={styles.content}>
        We reserve the right to suspend or terminate your account and access to our website and services at any time, with or without cause, and without prior notice or liability.
        </div>
        <div className={styles.heading1}>Governing Law:</div>
        <div className={styles.content}>
        These Terms shall be governed by and construed in accordance with the laws of India.
        </div>
        <div className={styles.heading1}>Contact Us:</div>
        <div className={styles.content}>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at +91 70732 66385.<br></br> 
        By using our website and services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
        </div>
    </div>
  )
}

export default TermsAndConditions