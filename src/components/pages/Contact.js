import React, {useState} from "react";

const styles = {
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "5%",
  },
  input: {
    border: "none",
    borderBottom: "2px solid white",
    display: "inline-block",
    paddingBottom: "5%"
  },
  message: {
    width: "100%",
    height: "100%", 
    marginTop: "5%"
  }
}

export default function Form(){

const [email, setEmail] = useState("");
const [name, setName] = useState("");
const [message, setMessage] = useState("")
const [errorMessage, setErrorMessage] = useState("")

const handleInputChange = (e) => {
  const {target} = e
  const inputType = target.name
  const inputValue = target.inputValue

  if (inputType === "email") {
    setEmail(inputValue)
  } else if (inputType === 'name') {
    setName(inputValue)
  } else {
    setMessage(inputType)
  }
}

const handleFormSubmit = (e) => {
  e.preventDefault()
  
  if (!email || name || message) {
    setErrorMessage("Email, name or message is missing")
    return
  }
  setEmail("")
  setMessage("")
  setName("")
}

return(
  
    <div className="flex-container" style={styles.container}>
    <form className="form" style={styles.center}>
      <div>
      <input style={styles.input}
      value={name}
      name="name"
      onChange={handleInputChange}
      type="text"
      placeholder="Name"
      />
      </div>
      <div>
      <input style={styles.input}
      value={email}
      name="email"
      onChange={handleInputChange}
      type="email"
      placeholder="Email"
      />
      </div>
      <input style={styles.message}
      value={message}
      name="message"
      onChange={handleInputChange}
      type="text"
      placeholder="Message"
      />
      <button type="button" onClick={handleFormSubmit}> Send</button>
    </form>
    { errorMessage && (
      <div>
        <p className="error-text"> {errorMessage}</p>
        </div>
    )}
  </div>
)
}

