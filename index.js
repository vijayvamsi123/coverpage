const element = (
  // Write your code here.
  <div class="bg-content">
    <h1 class="style">Congratulations</h1>
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="img1"
      />
      <h1 className="head">Kiran V</h1>
      <p className="para">
        Vishnu institute of Computer Education and Technology,Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="img2"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
