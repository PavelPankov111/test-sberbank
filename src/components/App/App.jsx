import React from "react";
import "./App.scss";
import { connect } from "react-redux";
import Form from "../Form/Form";
import { SuccessfulForm } from "../SuccessfulForm/SuccessfulForm";

function App({ app }) {
  return (
    <div className="app">
      {app.request && (
        <Form
          titleForm="Заголовок формы"
          titleButton="Начать работу"
          placeholderTel="Номер телефона*"
          placeholderEmail="Электронная почта"
          placeholderName="Имя*"
          description="Нажимая кнопку 'Отправить', я даю своё согласие на обработку персональных данных."
          conditions="Условия использования данных."
        />
      )}
      <SuccessfulForm
        image="https://static.tildacdn.com/tild3935-6333-4438-b930-323039613465/1.png"
        title="Заявка отправлена!"
        description="Менеджер уже звонит, проверьте телефон"
        status={app.response}
      />
    </div>
  );
}

const mapToProps = (state) => ({
  app: state.app,
});

export default connect(mapToProps, {})(App);
