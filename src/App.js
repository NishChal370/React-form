import { useState } from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import UserForm from './UserForm';

function App() {
      const [submittedData, setSubmittedData] = useState({});

      const submitHandler = (value)=>{
            setSubmittedData(value);
      }

      const props = {submitHandler: submitHandler};
      
      return (
            <div className="App">
                  <header>
                        <h1>Form using Formik </h1>
                  </header>

                  <main>
                        <UserForm {...props}/>

                        <div className='data-container'>
                        {Object.keys(submittedData).length !== 0  && 
                              Object.entries(submittedData).map( value=> <p key={nanoid()}>{value[0]}: {value[1]}</p> )
                        }
                        </div>
                  </main>
            </div>
      );
}

export default App;
