import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Modal from './components/Modal';
import { createStore } from 'redux';
import listReducer from './reducers/listReducer';
import { Provider } from 'react-redux';
import './App.css';

const SAVED_ITEMS = 'savedItems';

function persistState(state) {
  localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

function loadState() {
  const actualState = JSON.parse(localStorage.getItem(SAVED_ITEMS));
  if(actualState) 
    return actualState;
  else 
    return [];
}

const store = createStore(listReducer, loadState());

store.subscribe(() => {
  persistState(store.getState());
});


function App() {

  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [itemEdit, setItemEdit] = useState(null);

  const onHideModal = () => {
    setShowModal(false);
  }

  const onShowModal = () => {
    setShowModal(true);
  }

  const onCreateModal = () => {
    setEditMode(false);
  }

  const onEditItem = ( item ) => {
    setEditMode(true);
    setItemEdit(item);
    onShowModal();
  }

  const onCreateItem = () => {
    onShowModal();
    onCreateModal();
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Todo List</h1>
        <button onClick={onCreateItem} className="add-button">+</button>
      </header>

      <Provider store={store}>
        <TodoList onEditItem={onEditItem} />
        <Modal show={showModal} onHideModal={onHideModal}>
          <TodoForm onHideModal={onHideModal} editMode={editMode} itemEdit={itemEdit}/>
        </Modal>
      </Provider>
    </div>
  );
}

export default App;
