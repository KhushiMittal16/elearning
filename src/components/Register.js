import React, { useRef, useState } from "react";

const USER_REGEX = /^[A-Za-z][a-zA-Z0-9-_]{3,23}$/;
const PASS_REGEX = /^(?=.*[A-Za-z])(?=.[0-9])(?=.[!@#$%^&*])(?=.[a-z]){8,15}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  return <div></div>;
};

export default Register;
