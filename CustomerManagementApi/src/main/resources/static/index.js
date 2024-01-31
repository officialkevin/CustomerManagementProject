let Loginpageref=document.getElementById("LoginPage");
function clicked(){
   
    let emailref=document.getElementById("emailid")
    let passwordref=document.getElementById("passwordid")
   
    let email=emailref.value;
    let password=passwordref.value;

let accesstoken=null;
    fetch("https://qa.sunbasedata.com/sunbase/portal/api/assignment_auth.jsp",{
        



    method:'POST',
    body:JSON.stringify({
        login_id : email,
        password :password


    })
})
.then(function(response){

    // console.log("invalid email of password"+ response.json())
    // console.log(accesstoken);
    return response.json();
    
})
.then(function(data){
    // console.log(data.access_token);
    accesstoken=data.access_token;
//    submitForm();
    if(accesstoken!=null){

       
        Loginpageref.style.display="none";
        let Customerlistref=document.getElementById("customerlistscreen");
        Customerlistref.style.display="block";

    }
    
    // console.log(accesstoken);
})









}



// // Add code to handle form submission and close the popup
let formref=document.getElementById("popupform")
let tableref=document.getElementById("customerlistscreen")
function AddCustomer(){
   console.log(accesstoken)
    tableref.style.display="none"
    formref.style.display="block"

}






  
    // console.log(accesstoken);







// calling api
// Add Access Control Allow Origin headers


// <!-- Add this script tag to your HTML file -->
// {/* <script> */}
    function submitForm() {
        formref.style.display="none"
        tableref.style.display="block"
        // Get customer details from the form
        var customerData = {
          
            uuid:document.getElementById('uuid').value,
            first_name: document.getElementById('first_name').value,
            last_name: document.getElementById('last_name').value,
            street: document.getElementById('street').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };

        console.log(accesstoken);

       // Make a POST request using the Fetch API (Replace 'api/customer' with your actual API endpoint)
        fetch('https://qa.sunbasedata.com/sunbase/portal/api/assignment.jsp', {
            method: 'Get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': accesstoken
            },
            // body: JSON.stringify(customerData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok'+accesstoken);
            }
            return response.json();
        })
        .then(newCustomer => {
            // Append the new customer to the HTML table
            appendCustomerToTable(newCustomer);
            // Hide the popup form (assuming 'popupform' is the ID of your form)
            document.getElementById('popupform').classList.add('hidden');
        })
        .catch(error => {
            console.error('Error adding customer:', error);
        });
    }

    // Function to append a new customer to the HTML table
    function appendCustomerToTable(customer) {
        var table = document.querySelector('.CustomerListScreen table tbody');

        var newRow = table.insertRow(table.rows.length);
        newRow.innerHTML = '<td>' + customer.first_name + '</td>' +
            '<td>' + customer.last_name + '</td>' +
            '<td>' + customer.address + '</td>' +
            '<td>' + customer.city + '</td>' +
            '<td>' + customer.state + '</td>' +
            '<td>' + customer.email + '</td>' +
            '<td>' + customer.phone + '</td>' +
            '<td><button onclick="deleteCustomer(this)">Delete</button></td>' +
            '<td><button onclick="editCustomer(this)">Edit</button></td>';
    }
// </script>





















