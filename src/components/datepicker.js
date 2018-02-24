import React, { Component } from 'react';
import data from './data';
import './datepicker.css';

class DatePicker extends Component {

  constructor(props){
    super(props);
     this.state = {
        counter:0,
        issubmitted:false
     };
   }

  increment(){
    if(this.state.counter < 6){
      this.setState(prevState => ({counter: prevState.counter + 1}))
    }
  }

  decrement(){
    if(this.state.counter > 0){
      this.setState(prevState => ({counter: prevState.counter-1}))
   }
  }

  formsubmitted(){
    this.setState({
        issubmitted:true
    })
  }

  showslots(){
        if(data.available_slots[this.state.counter].date_slots.length === 0){
            return(
                <p>No slots available</p>
                )
        }else {
           
        return <div>
            {data.available_slots[this.state.counter].date_slots.map(obj => {
                return (
                    <div>
                      <div className="hour"> <p>Hour : {obj.hour}</p> </div>
                      {
                        obj.hour_slots.map((el,i) => {
                          let key = Object.keys(el)[0];
                          return <div className="slot"key={i}>{key} : {el[key]}</div>
                      })
                    }
                    </div>
                );
            })}
         </div>
        }
  }

  render() {
    return (
      <div>

        <div id="center">
        <div className="title">
            <p>Pick a Date</p>
        </div>
        <div className="increment">
          <button type="button" className="btn btn-success" id="plus" onClick={this.increment.bind(this)}>+</button>
        </div>
        <div className="display">
          <input type="text" id="date" value={data.available_slots[this.state.counter].date}/>
        </div>
        <div className="decrement">
          <button type="button" className="btn btn-danger" id="minus" onClick={this.decrement.bind(this)}>-</button> 
        </div>
        <div className="status">
          { data.available_slots[this.state.counter].date_slots.length === 0 ? 
          <p>No slots available for today</p> : <p>Slots available for today</p> }
        </div>
        <div className="submit">
          <button type="button" className="btn btn-primary" id="submit" onClick={this.formsubmitted.bind(this)}>Book Slot</button> 
        </div>
      </div>

      <div id="slotsinfo">
        {this.state.issubmitted ? this.showslots() : ''}
      </div>


      </div>
    );
  }
}

export default DatePicker;