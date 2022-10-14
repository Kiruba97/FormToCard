import React, {useState} from "react";

const App = () => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [skills , setSkills] = useState('');
    const [careerObjective , setCareerObjective] = useState('');
    const [card, setCard] = useState('none')

    const handleChange =(e)=>{
        setName(e.target.value);
      }

      const handleEmailChange =(e)=>{
        setEmail(e.target.value);
      }
  
     const handlePhoneChange =(e)=>{
        setPhone(e.target.value);
      }

      const handleSkillsChange =(e)=>{
        setSkills(e.target.value);
      }
      
      const handleCareerObjective =(e)=>{
        setCareerObjective(e.target.value);
    }

    
    const handleSubmit=(e)=>{
      
       console.log(`Name : ${name}  Phone : ${phone}  Skills : ${skills} `);
        e.preventDefault(); 
        setCard("") 
     
    }

    const handleReset = (e) => {
        e.preventDefault();
        setCard("none")
        setName('')
        setEmail('')
        setPhone('')
        setSkills('')
        setCareerObjective('')

    }

  return (
    <React.Fragment>
      <h1 className="text-center text-danger text-capitalize">EMPLOYEE</h1>
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-sm">
            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter your name"
                  value={name} required onChange={(e) => {handleChange(e)}}
                />
              </div>
              <br />

              <div className="form-group">
                <label for="formGroupExampleInput">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter your number"
                  value={phone} required onChange={(e)  => {handlePhoneChange(e)}}
                />
              </div>
              <br />

              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={email} required onChange={(e) => {handleEmailChange(e)}}
                />
                <br />
              </div>

              <div className="form-group">
                <label for="inputAddress2">Skills</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Enter your skills with ,"
                  value={skills} required onChange={(e) => {handleSkillsChange(e)}}
                />
              </div>
              <br />

              <div className="form-group">
                <label for="exampleFormControlTextarea1">
                  Career Objective
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value={careerObjective} required onChange={(e) => {handleCareerObjective(e)}}
                ></textarea>
              </div>
              <br />
              <button style={{marginRight:"10px", }} onClick={(e) => {handleSubmit(e)}}
                      type="submit" className="btn btn-primary">
                Submit
              </button>
              <button style={{marginLeft:"20px"}} onClick={(e) => {handleReset(e)}}
                      type="submit" className="btn btn-primary">
                Reset
              </button>
            </form>
          </div>

          <div className="col-sm">
            <div className="card" style={{display : card}}>
              <img
                className="card-img-top"
                src="https://picsum.photos/seed/picsum/202/303"
                alt="..."
                height="200px"
              />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>email : {email}</p>
                <p>Phone : {phone}</p>
                <p>Skills : {skills}</p>
                <p className="card-text">
                 Career Objective : {careerObjective}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
