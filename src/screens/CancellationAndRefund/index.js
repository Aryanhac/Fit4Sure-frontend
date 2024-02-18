import React from 'react'
import styles from './CancellationAndRefund.module.sass'
import cn from 'classnames'

const CancellationAndRefund = () => {
  return (
    <div>
        <div className={cn("h2", styles.title)}>Cancellation and Refund Policy</div>
        <div className={styles.content}>
        At Fit4Sure, we understand that circumstances may arise where you need to cancel your subscription or request a refund. Please review our cancellation and refund policy carefully before subscribing to our services.
        </div>
        <div className={styles.heading1}>Cancellation:</div>
        <div className={styles.content}>
        You may cancel your subscription at any time by contacting our customer support team and requesting cancellation.<br></br>
        Cancellation requests will be processed within a reasonable timeframe after receipt of the request.<br></br>
        Please note that cancellation of your subscription will result in the termination of access to our services.
        </div>
        <div className={styles.heading1}>Refund Policy:</div>
        <div className={styles.content}>
        We primarily offer non-refundable subscription plans. However, we understand that exceptional circumstances may warrant a refund.<br></br>
        Refund requests will be considered on a case-by-case basis and may be granted at the discretion of Fit4Sure.<br></br>
        Refunds will only be issued for the unused portion of the subscription period.<br></br>
        Any applicable refunds will be processed using the original method of payment.
        </div>
        <div className={styles.heading1}>Procedure for Refund:</div>
        <div className={styles.content}>
        To request a refund, you must contact our customer support team and provide a valid reason for the refund request.<br></br>
        Refund requests must be submitted within a reasonable timeframe after the subscription purchase.<br></br>
        Once your refund request is received and approved, we will process the refund within a reasonable timeframe.
        </div>
        <div className={styles.heading1}>Exceptions:</div>
        <div className={styles.content}>
        Certain services or promotional offers may be subject to specific cancellation and refund policies. Any such policies will be clearly outlined at the time of purchase.<br></br>
        Fit4Sure reserves the right to refuse refunds for subscriptions that have been used in violation of our Terms and Conditions or for fraudulent purposes.
        </div>
        <div className={styles.heading1}>Contact Us:</div>
        <div className={styles.content}>
        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at +91 70732 66385.<br></br> 
        By using our website and services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.
        </div>
    </div>
  )
}

export default CancellationAndRefund