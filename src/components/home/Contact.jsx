import React, { useState } from "react";
import { motion } from "framer-motion";
import burger1 from "../../assets/download.jpg";
import { firestore } from "../../Leak/firebase";
import { collection, addDoc } from "firebase/firestore";
const Contact = () => {
  const [complaintData, setComplaintData] = useState({
    name: "",
    email: "",

    complaint: "",
    status: "InQueue",
    contact: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Before reset:", complaintData);
      await addDoc(collection(firestore, "complaints"), { complaintData }).then(
        () => {
          alert("Message submitted 👍");
        }
      );
      console.log("Complaint added to Firestore");
      setComplaintData({
        name: "",
        email: "",
        complaint: "",
        status: "InQueue",
        contact: "",
      });
    } catch (error) {
      console.error("Error adding complaint to Firestore: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComplaintData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <section className="contact">
      <motion.form
        onSubmit={handleSubmit}
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}>
        <h2>Contact us</h2>

        <input
          type="text"
          value={complaintData.name}
          placeholder="Enter your Name"
          onChange={handleChange}
          name="name"
        />
        <input
          type="email"
          value={complaintData.email}
          placeholder="Enter your Email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="number"
          value={complaintData.contact}
          placeholder="Enter your contact no"
          onChange={handleChange}
          name="contact"
        />
        <textarea
          placeholder="complaint"
          value={complaintData.complaint}
          onChange={handleChange}
          cols="30"
          rows="10"
          name="complaint"></textarea>
        <button type="submit">Send</button>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}>
        <motion.div
          initial={{
            y: "-100vh",
            x: "50%",
            opacity: 0,
          }}
          animate={{
            y: "-50%",
            x: "50%",
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}>
          <img src={burger1} alt="burger" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
