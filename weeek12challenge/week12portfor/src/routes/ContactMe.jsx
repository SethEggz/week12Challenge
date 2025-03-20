import React, { useState } from 'react';
import './assets/ContactMe.css';

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState({
    name: false,
    email: false,
    message: false
  });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setIsTouched({
      ...isTouched,
      [name]: true
    });

    let newErrors = { ...errors };

    // Validate empty fields
    if (!value.trim()) {
      newErrors[name] = 'This field is required';
    } else {
      delete newErrors[name];
    }

    // Additional email validation
    if (name === 'email' && value && !validateEmail(value)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check all fields
    const newTouched = {
      name: true,
      email: true,
      message: true
    };
    setIsTouched(newTouched);
    
    // Validate all fields
    let newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    
    // If no errors, submit form
    if (Object.keys(newErrors).length === 0) {
      alert('Form submitted successfully! (This would normally send the data to a server)');
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      setIsTouched({
        name: false,
        email: false,
        message: false
      });
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={isTouched.name && errors.name ? 'error' : ''}
          />
          {isTouched.name && errors.name && (
            <p className="error-message">{errors.name}</p>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={isTouched.email && errors.email ? 'error' : ''}
          />
          {isTouched.email && errors.email && (
            <p className="error-message">{errors.email}</p>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formState.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={isTouched.message && errors.message ? 'error' : ''}
          ></textarea>
          {isTouched.message && errors.message && (
            <p className="error-message">{errors.message}</p>
          )}
        </div>
        
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
}
export default Contact
