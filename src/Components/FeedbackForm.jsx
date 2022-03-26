import React from 'react'
import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
function FeedbackForm() {
    const [text,setText] = useState('');
    const [rating, setRating] = useState(10);
    const [isBtnDisabled, setDisabled] = useState(true);
    const [message, setMessage] = useState('');
    const handleTextChange = (e) => {
        setText(e.target.value);
        if(text === ''){
            setDisabled(true);
            setMessage(null);

        }
        else if(text!=='' && text.trim().length<=10){
            setDisabled(true);
            setMessage('Feedback must be of atleast 10 characters');
        } else{
            setDisabled(false);
            setMessage(null);
        }
    
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(text.trim().length>10) {
            const newFeedBack = {
                text,
                rating
            }
            console.log(newFeedBack);
        }
    };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={(rating)=> setRating(rating)} />
          <div className="input-group">
              <input onChange={handleTextChange} type="text" placeholder='Write a review'
              value={text}/>
              <Button type="submit" version='primary' isDisabled={isBtnDisabled}>Send</Button>
          </div>
          {isBtnDisabled && <div className="message">{message} </div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
