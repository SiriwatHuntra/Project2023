import React,{useState} from 'react'
import { app } from '../firebase'

function Form() {

  return (
    <div>
    <div class="mb-3">
    <label for="input" class="form-label">Name </label>
    <input type="text" class="form-control" id="input" placeholder="name"/>
    </div>

    <div class="mb-3">
    <label for="input2" class="form-label">Faculty </label>
    <input type="text" class="form-control" id="input2" placeholder="faculty"/>
    </div>

    <div class="mb-3">
    <label for="input2" class="form-label">Email </label>
    <input type="text" class="form-control" id="input2" placeholder="Email"/>
    </div>

    <button className='add-btn'>Submit</button>

    </div>

  )
}

export default Form
