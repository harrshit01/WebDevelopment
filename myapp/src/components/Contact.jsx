import React from 'react'

function Contact() {
  return (
    <div className="contact">
      <div>
      <h1>Contact Us</h1>
      <form>
        <div>

        <label htmlFor="">Name</label>
        <input type="text" />
        </div>
        <div>

        <label htmlFor="">E-mail</label>
        <input type="text" />
        </div>
        <div>

        <label htmlFor="">Message</label>
        <input type="text" name="" id="" />
        </div>
        <button>Send</button>
      </form>
      </div>
    </div>
  )
}

export default Contact