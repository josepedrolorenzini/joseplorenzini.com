import React from 'react'
import { useState,useEffect } from 'react';

function ContactForm() {
    const [formularioData, setFormularioData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleFormSubmission = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        setFormularioData({
            name,
            email,
            message
        });

        //console.log("Form submitted:", e);
        
            try {
                const response = await fetch("http://localhost:5000/api/submit-form", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, message })
                });
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
             setTimeout(() => {
                console.log("set tiime out Form Data:", formularioData);
        }, 1000);
            } catch (error) {
                throw new Error("Error logging form data:", error);
            }

        e.target.reset();


    }

    useEffect(() => {
        if (formularioData.name && formularioData.email && formularioData.message) {
            console.log("Form Data:", formularioData);
        }
    }, [formularioData]);


  return (
    <>
    {/*--- FORM AREA --- */}
            <div>
              <form className="space-y-4"
              onSubmit={handleFormSubmission}>
                <div>
                  <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 text-gray-200"
                    placeholder="Name"
                    name="name"
                  />
                </div>

                <div>
                  <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 text-gray-200"
                    placeholder="Email"
                    name="email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 text-gray-200"
                    placeholder="Your message here..."
                    name='message'
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{ color: "#b4fb51" }}
                  className="w-full py-3 px-6 bg-green hover:bg-green-dark rounded-lg font-medium transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/*--- FORM AREA --- */}
    </>
  )
}

export default ContactForm