import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import FeedBackList from './Components/FeedBackList';
import FeedBackData from './data/FeedBackData';
import Card from './Components/shared/Card';
import FeedBackStats from './Components/shared/FeedBackStats';
import FeedbackForm from './Components/FeedbackForm';
function App() {
const [feedback, setFeedback] = useState(FeedBackData)

const deleteFeedback = (id) =>{
  if(window.confirm("Are you sure you want to delete?"))
  setFeedback(feedback.filter((item)=>item.id!==id));
}
  return (
    <>
    <Header Heading = 'FeedBack UI From ProPs'/>
    <div className='container'>
      <FeedbackForm />
      <FeedBackStats feedback={feedback}/>
     <FeedBackList feedback = {feedback}
     handleDelete={deleteFeedback} />
      
    </div>
    </>
  );
}

export default App;
