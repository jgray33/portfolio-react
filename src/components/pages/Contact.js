import React, {useState} from "react";

const styles = {
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "5%",
  },
  input: {
    border: "none",
    borderBottom: "2px solid white"
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
    <div className="flex-container">
    <form className="form">
      <input style={styles.input}
      value={name}
      name="name"
      onChange={handleInputChange}
      type="text"
      placeholder="Name"
      />
      <input
      value={email}
      name="email"
      onChange={handleInputChange}
      type="email"
      placeholder="email"
      />
      <input
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

