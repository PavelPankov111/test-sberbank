import React, { useState, useCallback, useEffect } from "react";
import "./Form.scss";
import InputMask from "react-input-mask";
import { connect } from "react-redux";
import {
  globalErrorOn,
  globalErrorOff,
  nameErrorOn,
  nameErrorOff,
  emailErrorOn,
  emailErrorOff,
  globalError,
  nameError,
  emailError,
  sendRequest,
} from "../../redux/actions";

function Form(props) {
  const {
    validation,
    titleForm,
    titleButton,
    placeholderTel,
    placeholderEmail,
    placeholderName,
    description,
    conditions,
    handleGlobalErrorOn,
    handleGlobalErrorOff,
    handleNameErrorOn,
    handleNameErrorOff,
    handlEemailErrorOn,
    handlEemailErrorOff,
    handleGlobalError,
    handleNameError,
    handlEemailError,
    handleSendRequest,
  } = props;

  const regexpEmail = /@/;
  const regexpRu = /^[а-яё -]+$/i;
  const [formValues, setFormValues] = useState({
    name: "",
    telephone: "",
    email: "",
  });

  const handleInputChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      setFormValues((prevState) => ({ ...prevState, [name]: value }));
    },
    [setFormValues]
  );

  const catcherErrors = (name, email) => {
    if (name.length > 0) {
      handleNameError("Нерпавильный формат имени!");
      if (!regexpRu.test(formValues.name)) {
        handleNameErrorOn();
      } else {
        handleNameErrorOff();
      }
    } else {
      handleNameErrorOff();
    }

    if (email.length > 0) {
      handlEemailError("Неправильный формат email!");

      if (!regexpEmail.test(email)) {
        handlEemailErrorOn();
      } else {
        handlEemailErrorOff();
      }
    } else {
      handlEemailErrorOff();
    }
  };

  useEffect(() => {
    catcherErrors(formValues.name, formValues.email);
  }, [formValues, setFormValues]);

  function submitForm(e) {
    e.preventDefault();
    handleGlobalError("Заполните поля правильно");
    if (!formValues.name || !formValues.telephone) {
      handleGlobalErrorOn();
      setTimeout(() => {
        handleGlobalErrorOff();
      }, 1500);
      return;
    }

    if (validation.emailErrorStatus || validation.nameErrorStatus) {
      handleGlobalErrorOn();
      setTimeout(() => {
        handleGlobalErrorOff();
      }, 1500);
      return;
    }

    handleSendRequest(formValues);
  }

  return (
    <div className="form">
      <form onSubmit={submitForm} className="form__container">
        <h1 className="form__title">{titleForm}</h1>
        <div className="form__inputs">
          <input
            className="form__input"
            minLength="1"
            maxLength="100"
            placeholder={placeholderName}
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
          <span
            className={
              validation.nameErrorStatus
                ? "form__error form__error-input"
                : "form__error_hiden"
            }
          >
            {validation.nameError}
          </span>
          <InputMask
            className="form__input  form__input-tel"
            type="tel"
            disabled={false}
            mask="+9 (999) 999-99-99"
            name="telephone"
            value={formValues.telephone}
            placeholder={placeholderTel}
            onChange={handleInputChange}
          />
          <input
            className="form__input"
            placeholder={placeholderEmail}
            type="e-mail"
            value={formValues.email}
            name="email"
            onChange={handleInputChange}
          />
          <span
            className={
              validation.emailErrorStatus
                ? "form__error form__error-input"
                : "form__error_hiden"
            }
          >
            {validation.emailError}
          </span>
        </div>
        <span
          className={
            validation.globalStatus ? "form__error" : "form__error_hiden"
          }
        >
          {validation.globalError}
        </span>
        <button className="form__button" type="submit">
          {titleButton}
        </button>
        <p className="form__description">
          {description}{" "}
          <a href="/" download="flie.pdf">
            {conditions}
          </a>
        </p>
      </form>
    </div>
  );
}

const mapStateToProps = {
  handleGlobalErrorOn: globalErrorOn,
  handleGlobalErrorOff: globalErrorOff,
  handleNameErrorOn: nameErrorOn,
  handleNameErrorOff: nameErrorOff,
  handlEemailErrorOn: emailErrorOn,
  handlEemailErrorOff: emailErrorOff,
  handleGlobalError: globalError,
  handleNameError: nameError,
  handlEemailError: emailError,
  handleSendRequest: sendRequest,
};

const mapToProps = (state) => ({
  validation: state.validation,
});

export default connect(mapToProps, mapStateToProps)(Form);
