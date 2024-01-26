import React from 'react';

const Contact = () => (
      <section className="mx-auto max-w-screen-xl lg:my-20">
        <h2 className='text-orange-600'>Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-teal-500 border-2 rounded-2xl overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6794.011349901633!2d-7.992082!3d31.633695000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee61503be041%3A0xc9efe8fe26d06ca8!2sPikala%20Bikes!5e0!3m2!1sen!2sus!4v1705617940418!5m2!1sen!2sus"
          width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="border-teal-500 border-2 p-2 md:p-4 rounded-2xl">
            <form className=" p-3 md:p-6 ">
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-500 block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-200 p-2 rounded-2xl"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-gray-500 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-200 p-2 rounded-2xl"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="text-gray-500 block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full bg-gray-200 p-2 rounded-2xl"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-orange-500 w-full text-white p-3 rounded-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
);
export default Contact;