document.getElementById('addEmployeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var position = document.getElementById('position').value;

    // Prepare data object for Lambda function
    var requestData = {
        method: 'POST',
        body: JSON.stringify({ name: name, email: email, position: position })
    };

    // Call Lambda function to add employee
    fetch('YOUR_ADD_EMPLOYEE_LAMBDA_ENDPOINT', requestData)
        .then(response => {
            if (response.ok) {
                alert('Employee added successfully');
                // Redirect to home page or perform any other action
            } else {
                alert('Failed to add employee');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to add employee');
        });
});
