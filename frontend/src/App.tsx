import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import Modal from 'react-modal'
import ConvertToBase64 from './tools/convertToBase64'
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from "react-select";
import { log } from 'util';

function App() {
  const [todoList, setTodoList] = useState<any[]>([]);
  const [filteredTodoList, setfilteredTodoList] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState<any>('');
  const [changed, setChanged] = useState<any>(0);
  const [showTodoAppInsertScreen, setShowTodoAppInsertScreen] = useState<any>(0);
  const [showDetailScreen, setShowDetailScreen] = useState<any>(0);
  const [detailMessage, setDetailMessage] = useState<any>('');
  const [title, setTitle] = useState<any>('');
  const [description, setDescription] = useState<any>('');
  const [dueDate, setDueDate] = useState<any>('');
  const [priority, setPriority] = useState<any>('Medium');

  const priorities = [{ value: "Low", label: "Low" }, { value: "Medium", label: "Medium" }, { value: "High", label: "High" }]

  const basurl = window.location.hostname;

  useEffect(() => {
    const url1 = `http://${basurl}:8081/todolist`
    axios.get(url1, {
      params: {
      }
    })
      .then(res1 => {
        setTodoList(res1.data.data);
        setfilteredTodoList(res1.data.data);
      })
    setChanged(0);
  }, [changed]);

  //filter with the search word 
  useEffect(() => {
    console.log(searchValue);
    setfilteredTodoList(todoList.filter((e) => (e.title + e.description + e.dueDate).indexOf(searchValue) > -1))
  }, [searchValue]);

  //we delete issue from our list
  function deleteTodoFromList(event: any) {
    console.log(event);
    const url1 = `http://${basurl}:8081/todolist/${event}`
    axios.delete(url1, {
      params: {
      }
    })
      .then(res1 => {
        if (res1.data.statusCode === 200) { setChanged(1) }
      });

  }
  //we show issue detail when clicking on the issue line
  const fetchRowDetails = (event) => {
    setShowDetailScreen(1);
    const detail = filteredTodoList.find((e) => e.id === event)
    setDetailMessage(`
    Priority: ${detail.priority}
    Title: ${detail.title}\n
    Description: ${detail.description}\n
    DueDate: ${detail.dueDate}\r\n
    Created Date: ${detail.createdDate}
    `)
  }

  //we add new issue to our to do list
  const submitTodoAppInsertScreen = () => {
    setShowTodoAppInsertScreen(0);
    fetch(`http://${basurl}:8081/todolist`, {
      method: "POST",
      redirect: "follow",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        descriptipn: description,
        priority: priority,
        dueDate: dueDate,
      }),
    })
      .then((res) => {
        if (res.status === 201) {
          setChanged(1);
        }
      })
      .catch((err) => console.log(err.response.data));
  }


  return (
    <div className="App">
      <ToastContainer draggable pauseOnHover newestOnTop={true} position="top-center" />
      <h1>To Do List</h1>
      <input type="text" placeholder="Write here your search text..." required name="code" value={searchValue} onChange={e => setSearchValue(e.target.value)} className="form-control" />
      <button
        style={{ width: "%50", height: "60px" }}
        className="btn btn-info"
        onClick={() => setShowTodoAppInsertScreen(1)}
      >Add New Item </button>

      <br></br>
      <table>
        <tbody>
          {filteredTodoList.map((e) => <tr className="show-grid"><td onClick={() => fetchRowDetails(e.id)} key={e.id}>{e.title}</td><td><Button onClick={() => deleteTodoFromList(e.id)} className="delete-button"><span>Delete</span></Button></td></tr>)}
        </tbody>
      </table>

      <Modal
        isOpen={showTodoAppInsertScreen}
        onRequestClose={() => setShowTodoAppInsertScreen(0)}
        style={{
          overlay: { backgroundColor: "grey" },
          content: { color: "orange", height: "60%" }
        }}
      >
        <h2>Fill your next issue here, Please</h2>
        <Select name="channelId" value={priorities.find((e) => e.value === priority)} placeholder="Choose Priority" onChange={e => setPriority(e.value)} options={priorities} />&nbsp;&nbsp;
        <input type="text" placeholder="Title" required name="title" onChange={e => setTitle(e.target.value)} className="form-control" />&nbsp;&nbsp;
        <input type="text" placeholder="Description" required name="description" onChange={e => setDescription(e.target.value)} className="form-control" />&nbsp;&nbsp;
        <input type="date" placeholder="Due Date" required name="dueDate" onChange={e => setDueDate(e.target.value)} className="form-control" />&nbsp;&nbsp;
        <br></br>
        <div>
          <button value="submitTodoAppInsertScreen" className="btn btn-success" onClick={submitTodoAppInsertScreen}>Save</button>
        </div>
      </Modal>

      <Modal
        isOpen={showDetailScreen}
        onRequestClose={() => setShowDetailScreen(0)}
        style={{
          overlay: { backgroundColor: "grey" },
          content: { color: "blue", height: "40%" }
        }}
      >
        <h2>Detail Info!</h2>
        <p>{detailMessage}</p>
        <br></br>
        <div>
          <button value="closeWarningModal" className="btn btn-success" onClick={() => setShowDetailScreen(0)}>Close Detail Screen</button>
        </div>
      </Modal>

    </div >
  );
}

export default App;
