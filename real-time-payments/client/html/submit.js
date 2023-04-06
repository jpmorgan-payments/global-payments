function sendPaymentClicked() {
    const formElement = document.querySelector("form");
    const formData = new FormData(formElement);
    var object = {};
    formData.forEach((value, key) => object[key] = value);
    var json = JSON.stringify(object);
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        console.log(request.readyState);
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 202 || request.status === 200) {
          window.location.href = "success.html";
        }else{
            window.location.href = "error.html";
        }
      }
    };
    request.open("POST", "/api/digitalSignature/tsapi/v1/payments");
    request.send(json);
  }