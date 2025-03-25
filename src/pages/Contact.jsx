import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

 // this function handel 
 // Checks if the field is empty → shows "This field is required."
 // Checks if email is valid using regex
 // Checks if name contains only letters and spaces, and is at least 2 characters
  const handleBlur = (e) => {
    const { name, value } = e.target;
  
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: 'This field is required.' }));
      return;
    }
  
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email address.' }));
      return;
    }
  
    if (name === 'name' && !/^[a-zA-Z\s]{2,}$/.test(value)) {
      setErrors((prev) => ({ ...prev, name: 'Please enter a valid name (letters only).' }));
      return;
    }
  
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(formData).some(val => !val.trim());
    if (hasErrors) {
      alert('Please fill out all fields correctly.');
      return;
    }

    localStorage.setItem('contactForm', JSON.stringify(formData));
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="page-section">
      <h2>Contact</h2>
      {submitted && <p>Thanks! Your message has been saved.</p>}
      <form onSubmit={handleSubmit} noValidate>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email address:</label>
        <input
          name="email"
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Message:</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          onBlur={handleBlur}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;

