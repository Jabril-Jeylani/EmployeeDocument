// Uncontrolled component/form

import { useRef } from "react";

export default function Form2({ addEmployee }) {
  const nameRef = useRef();
  const titleRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  function handleSubmit(event) {
    // prevent the page from reloading because its an on submit
    event.preventDefault();

    console.log(nameRef);

    /*
      nameRef -> {
        current: input
      }
    */

    let employee = {
      name: nameRef.current.value,
      title: titleRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      headshot: "../images/headshot9.jpeg",
      borderColor: "blue",
      id: crypto.randomUUID()
    };

    //reset the inputs
    nameRef.current.value = "";
    titleRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";

    addEmployee(employee);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" ref={nameRef} />
      <br />
      <label htmlFor="title">Title</label>
      <input id="title" ref={titleRef} />
      <br />
      <label htmlFor="phone">Phone #</label>
      <input id="phone" ref={phoneRef} />
      <br />
      <label htmlFor="email">Email</label>
      <input id="email" ref={emailRef} />
      <br />
      <button>Submit</button>
    </form>
  );
}
