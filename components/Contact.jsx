import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaDiscord, FaEnvelope, FaGithubAlt, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [status, setStatus] = useState({})
  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value })
  }
  const refForm = useRef()
  const sendEmail = e => {
    e.preventDefault()
    setButtonText('Sending...')
    emailjs
      .sendForm(
        'service_xz84dke',
        'template_ra330b3',
        refForm.current,
        '5hixrZRlAnZhTf7QG'
      )
      .then(
        () => {
          setButtonText('Send')
          setStatus({ success: true, message: 'Message sent successfully' })
        },
        () => {
          setStatus({
            success: false,
            message: 'Something went wrong, please try again.'
          })
        }
      )
  }
  return (
    <section id="contact" className="w-full lg:h-screen">
      <h2 className="text-[#5651e5] font-black py-4 pt-20 text-center lg:text-left lg:pl-20">
        Get In Touch
      </h2>
      <div className="rounded-lg lg:py-20 lg:pl-20 flex-col-reverse lg:flex-row flex lg:h-2/3 h-full w-full items-center justify-center lg:justify-between shadow-lg">
        <div className="hidden mr-2 w-full lg:flex flex-col justify-between h-2/3">
          <div>
            <h2 className="whitespace-nowrap text-[#5651e5]">
              Rafaelly Rodrigues
            </h2>
            <p className="text-sm uppercase pt-4">Software engineer</p>
          </div>

          <div>
            <button className="social-button mr-3 home-social">
              <FaLinkedin />
            </button>
            <button className="social-button mr-3 home-social">
              <FaGithubAlt />
            </button>
            <button className="social-button mr-3 home-social">
              <FaDiscord />
            </button>
            <button className="social-button home-social">
              <FaEnvelope />
            </button>
          </div>
        </div>
        <div className="h-full w-full flex flex-col p-5 items-center justify-between pt-9">
          <form
            className="w-full"
            autoComplete="on"
            ref={refForm}
            onSubmit={sendEmail}
          >
            <div className="w-full">
              <div className="w-full px-2 lg:w-4/5 ">
                <input
                  className="py-2 px-2 pt-3 rounded-lg
                  bg-[rgb(234, 234, 234)] border-none
                  my-2 w-full"
                  name="name"
                  type="text"
                  value={formDetails.name}
                  placeholder="Name"
                  required
                  onChange={e => onFormUpdate('name', e.target.value)}
                />
              </div>
              <div className="w-full px-2 lg:w-4/5">
                <input
                  className="py-2 px-2 pt-3 rounded-lg
                 bg-[rgb(234, 234, 234)] border-none
                 my-2 w-full"
                  name="email"
                  required
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address"
                  onChange={e => onFormUpdate('email', e.target.value)}
                />
              </div>
              <div className="w-full px-2 lg:w-4/5">
                <textarea
                  className="py-2 px-2 pt-3 rounded-lg
                bg-[rgb(234, 234, 234)] border-none
                my-2 w-full"
                  name="message"
                  required
                  row="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={e => onFormUpdate('message', e.target.value)}
                ></textarea>
                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="font-medium hover:scale-105 text-xs rounded-lg py-4 px-10 uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-md shadow-gray-300"
                  >
                    <span>{buttonText}</span>
                  </button>
                </div>
              </div>
              {status.message && (
                <div className="pt-2">
                  <p
                    className={
                      status.success === false
                        ? 'text-red-500'
                        : 'text-green-500'
                    }
                  >
                    {status.message}
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
