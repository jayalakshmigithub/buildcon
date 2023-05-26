function validateForm(event) {
    event.preventDefault(); 
    var fullName = document.getElementById("sname").value;
    var email = document.getElementById("em").value;
  
    if (fullName.trim() === "") {
      alert("Please enter your full name.");
      return;
    }
  
    if (/\d/.test(fullName)) {
      alert("Name cannot contain numbers.");
      return;
    }
  
    if (email.trim() === "") {
      alert("Please enter your email.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    document.getElementById("signin").submit();
  }
  
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }