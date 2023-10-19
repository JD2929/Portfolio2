import '../styles/general.css';

import Form from '../components/Form'

export default function Contact() {
  return (
    <div id='root'>
      <h1>Contact</h1>

      <p>
        Please reach out and contact me!
      </p>
      <div className="d-flex flex-wrap">

        <Form label="Name:" name="name" />


        <Form label="Email:" name="email" />

        <input type="submit" value="Submit" />
      </div>
    </div>
  );
}