import React from 'react';
import styles from '@/styles/contact.module.css';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Contact = () => {
  return (
    <div className={styles.contactSection} id="contact">
      {/* Left Section */}
      <div className={styles.contactLeft}>
        <h2 data-aos="fade-up">Let's Work Together</h2>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          voluptatum illum magni similique velit.
        </p>

        <div className={styles.contactInfo} data-aos="fade-up">
          <p className={styles.contactDetail}>
            <FaPhone className={styles.icons} /> +92 331 3398057</p>
          <p className={styles.contactDetail}>
            <MdOutlineMailOutline className={styles.icons} /> syedaaleezaabbas@gmail.com</p>
          <p className={styles.contactDetail}>
            <CiLocationOn className={styles.icons} /> Block A North Nazimabad, Karachi
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className={styles.contactRight}>
        <h2>Contact Me</h2>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className={styles.inputGroup}>
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Email Subject" required />
          </div>

          <textarea placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact