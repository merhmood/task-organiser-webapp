import React from "react";
import { Navigate } from "react-router-dom";

const Form = () => {
  const [formType, setFormType] = React.useState("unregistered");
  const [formValue, setFormValue] = React.useState({
    name: "",
    email: "",
    password: "",
    signInNotValid: false,
    redirect: false,
  });
  console.log(localStorage.getItem("register"));

  if (formValue.redirect) {
    return <Navigate to="/account" />;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {formType === "unregistered" ? (
        <UserSignUp
          formValue={formValue}
          onSetFormValue={setFormValue}
          onSetFormType={setFormType}
        />
      ) : (
        <UserSignIn formValue={formValue} onSetFormValue={setFormValue} />
      )}
      <p
        onClick={() =>
          setFormType((state) =>
            state === "unregistered" ? "register" : "unregistered"
          )
        }
        style={{ color: "white", cursor: "pointer" }}
      >
        {formType === "unregistered"
          ? "Already have an account? sign in"
          : "Don't have an account? sign up"}
      </p>
    </form>
  );
};

const UserSignUp = ({ formValue, onSetFormValue, onSetFormType }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={formValue.name}
        onChange={(e) =>
          onSetFormValue((state) => {
            return { ...state, name: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="Email"
        value={formValue.email}
        onChange={(e) =>
          onSetFormValue((state) => {
            return { ...state, email: e.target.value };
          })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={formValue.password}
        onChange={(e) =>
          onSetFormValue((state) => {
            return { ...state, password: e.target.value };
          })
        }
      />
      <button
        onClick={() => {
          localStorage.setItem("register", JSON.stringify(formValue));
          onSetFormValue({ name: "", email: "", password: "", signUp: true });
          onSetFormType("registered");
        }}
      >
        Sign Up
      </button>
    </>
  );
};

const UserSignIn = ({ formValue, onSetFormValue }) => {
  return (
    <>
      {formValue.signUp && (
        <p style={{ color: "white", textAlign: "center" }}>
          Successfully signed up, Kindly sign in
        </p>
      )}
      {formValue.signInNotValid && (
        <p style={{ color: "red", textAlign: "center" }}>Invalid password</p>
      )}

      <input
        type="text"
        placeholder="Email"
        value={formValue.email}
        onChange={(e) =>
          onSetFormValue((state) => {
            return { ...state, email: e.target.value };
          })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={formValue.password}
        onChange={(e) =>
          onSetFormValue((state) => {
            return { ...state, password: e.target.value };
          })
        }
      />
      <button
        onClick={() => {
          let register = JSON.parse(localStorage.getItem("register"));
          register.email === formValue.email &&
          register.password === formValue.password
            ? onSetFormValue({
                name: "",
                email: "",
                password: "",
                signInNotValid: false,
                redirect: true,
              })
            : onSetFormValue({
                name: "",
                email: "",
                password: "",
                signInNotValid: true,
                redirect: false,
              });
        }}
      >
        Sign In
      </button>
    </>
  );
};

export default Form;
