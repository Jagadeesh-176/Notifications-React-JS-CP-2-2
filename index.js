const Notification = props => {
    const {className, text, url} = props
  //  Write your code here.
  return (
  <div className = {className}>
        <div className = "d-flex flex-row">
            <img src = {url} />
            <p>{text}</p>
        </div>
  </div>
  )
}

const element = (
  //  Write your code here.   
  <div className = "main-container">
    <h1 className = "heading">Notifications</h1>
    <Notification className = "blue-notification" text = "Information" url = "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
    <Notification className = "green-notification" text = "Success" url = "https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
    <Notification className = "yellow-notification" text = "Warning" url = "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
    <Notification className = "pink-notification" text = "Error" url = "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
