import React from "react";
import PropTypes from "prop-types";
//import firebase from "firebase";
import AddDishForm from "./AddDishForm";
import EditDishForm from "./EditDishForm";
//import Login from "./Login";
//import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  static propTypes = {
    dishes: PropTypes.object,
    updateDish: PropTypes.func,
    deteleDish: PropTypes.func,
    loadSampleDishes: PropTypes.func,
    addDish: PropTypes.func
  };

  /* state = {
    uid: null,
    owner: null
  }; */

  /* componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  } */

  /* authHandler = async authData => {
    //1. Ищем текущее кафе в базе
    const store = await base.fetch(this.props.cafeId, { context: this });
    //2. Запрашиваем владельца
    if (!store.owner) {
      // сохраняем как наше собственное
      await base.post(`${this.props.cafeId}/owner`, {
        data: authData.user.uid
      });
    }
    //3. Устанавливаем state компонента в соответствии с пользователем
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };*/

  /* authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  }; */

  /* logout = async () => {
    await firebase.auth().signOut();
    this.setState({
      uid: null
    });
  }; */

  render() {
    // const logout = <button onClick={this.logout}>Закрыть!</button>;

    //1. Проверяем если юзер залогинен
    // if (!this.state.uid) {
    //   return <Login authenticate={this.authenticate} />;
    // }

    // //2. Проверяем если юзер владелец кафе
    // if (this.state.uid !== this.state.owner) {
    //   return (
    //     <div>
    //       <p>Извините, но это не ваш холодильник :)</p>
    //       {logout}
    //     </div>
    //   );
    // }

    return (
      <div className="inventory">
        <h2>Холодильник</h2>
        {/* {logout} */}
        {Object.keys(this.props.dishes).map(key => {
          return (
            <EditDishForm
              key={key}
              index={key}
              dish={this.props.dishes[key]}
              updateDish={this.props.updateDish}
              deleteDish={this.props.deleteDish}
            />
          );
        })}
        <AddDishForm addDish={this.props.addDish} />
        <button onClick={this.props.loadSampleDishes}>
          Загрузить холодильник
        </button>
      </div>
    );
  }
}

export default Inventory;
