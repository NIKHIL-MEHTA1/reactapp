import React from 'react'

export const Qform = () => {
    return (<div>
        <h1 className =" text-center ">Fill Your Query(problem) Here!</h1>
        <div className =" m-5 p-5 ">
        <div class="col">
        <label for="exampleFormControlInput1" className="form-label">Name:-</label>
    <input type="text" className="form-control" placeholder="your name (EX- SAM SMITH)" aria-label="First name"/>
  </div>
           <div className="mb-3 ">
  <label for="exampleFormControlInput1" className="form-label">Email Address:-</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
           <div className="mb-3 ">
  <label for="exampleFormControlInput1" className="form-label">Contact Number:-</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="your number (EX-9997778886)"/>
</div>
           <div className="mb-3 ">
  <label for="exampleFormControlInput1" className="form-label"> Address:-</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="your address(EX-lajpatnagar ,Delhi)" rows="1"></textarea>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Problem/Query:-</label>
  <textarea className="form-control" id="exampleFormControlTextarea1"   placeholder="your Problem/Query(EX- CPU not working!)" rows="1"></textarea>
</div>
        </div>
        </div>
    )
}
