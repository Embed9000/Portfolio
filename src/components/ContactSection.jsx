import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react'


export default function ContactSection(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)
  const formRef = useRef(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    emailjs
      .sendForm(
        'service_swkhko5',
        'template_32qy06h',   
        formRef.current,
        '9I8dXQTpOjHayaXuL'
      )
      .then(
        () => {
          setIsSubmitting(false)
          setSubmitMessage({
            type: 'success',
            text: "Thank you for your message! I'll get back to you soon.",
          })
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          })
          setTimeout(() => setSubmitMessage(null), 5000)
        },
        () => {
          setIsSubmitting(false)
          setSubmitMessage({
            type: 'error',
            text: "Something went wrong. Please try again later.",
          })
          setTimeout(() => setSubmitMessage(null), 5000)
        }
      )
  }

  return (
    <section id="contact" className="py-20 bg-gray-900 w-full text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach
            out. I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Contact Information
            </h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a
                    href="mailto:catalintabica@gmail.com"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    catalintabica@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    +373 60 487 089
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-300">
                    Chisinau, Moldova
                  </p>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">
              Social Media
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-purple-400 hover:bg-gray-700 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-purple-400 hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-purple-400 hover:bg-gray-700 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="h-12 w-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:text-purple-400 hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            {submitMessage && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  submitMessage.type === 'success'
                    ? 'bg-green-900/50 text-green-300'
                    : 'bg-red-900/50 text-red-300'
                }`}
              >
                {submitMessage.text}
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}