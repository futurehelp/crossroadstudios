"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="newsletter-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="newsletter-fields">
        <label>
          <span className="sr-only">First name</span>
          <input name="firstName" type="text" placeholder="First Name" autoComplete="given-name" />
        </label>
        <label>
          <span className="sr-only">Last name</span>
          <input name="lastName" type="text" placeholder="Last Name" autoComplete="family-name" />
        </label>
        <label>
          <span className="sr-only">Email address</span>
          <input name="email" type="email" placeholder="Email Address" autoComplete="email" required />
        </label>
        <motion.button className="button button-primary" type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
          Submit
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        <motion.p
          key={submitted ? "thanks" : "privacy"}
          className={submitted ? "form-status submitted" : "form-status"}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
        >
          {submitted ? "Thanks — you’re on the list." : "We respect your privacy."}
        </motion.p>
      </AnimatePresence>
    </form>
  );
}
