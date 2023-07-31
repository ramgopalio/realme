$(document).ready(function() {
  // Data array for users and corresponding data
  var userData = [
    {
      username: "ram",
      password: "gopal",
      data: [
        // Data for ram...
        { approvalid: "RMPDOA-31072023001", region: "South", asp: "F1_info", sccode: "IN61-001", caseid: "IN68-023-R230725001", dcno: "IN68-023-SP230726001", boxc: "Damaged", doac: "Non-Functional", symptom: "MAC1", status: "Blank Display", statusby: "siva" },
        { approvalid: "RMPDOA-31072023001", region: "South", asp: "F1_info", sccode: "IN61-001", caseid: "IN68-023-R230725001", dcno: "IN68-023-SP230726001", boxc: "Damaged", doac: "Non-Functional", symptom: "MAC1", status: "Blank Display", statusby: "kumar" },
      ]
    },
    {
      username: "siva",
      password: "kumar",
      data: [
        // Data for siva...
        { approvalid: "RMPDOA-31072023001", region: "South", asp: "F1_info", sccode: "IN61-001", caseid: "IN68-023-R230725001", dcno: "IN68-023-SP230726001", boxc: "Damaged", doac: "Non-Functional", symptom: "MAC1", status: "Blank Display", statusby: "siva" },
        { approvalid: "RMPDOA-31072023001", region: "South", asp: "F1_info", sccode: "IN61-001", caseid: "IN68-023-R230725001", dcno: "IN68-023-SP230726001", boxc: "Damaged", doac: "Non-Functional", symptom: "MAC1", status: "Blank Display", statusby: "kumar" },
      ]
    }
    // Add more users as needed...








  ];

  // Function to display the data for the authenticated user
  function displayUserData(username) {
    var user = userData.find(function(user) {
      return user.username === username;
    });

    if (user) {
      var dataRows = "";
      user.data.forEach(function(data) {
        dataRows += "<tr>";
        dataRows += "<td>" + data.approvalid + "</td>";
        dataRows += "<td>" + data.region + "</td>";
        dataRows += "<td>" + data.asp + "</td>";
        dataRows += "<td>" + data.sccode + "</td>";
        dataRows += "<td>" + data.caseid + "</td>";
        dataRows += "<td>" + data.dcno + "</td>";
        dataRows += "<td>" + data.boxc + "</td>";
        dataRows += "<td>" + data.doac + "</td>";
        dataRows += "<td>" + data.symptom + "</td>";
        dataRows += "<td>" + data.status + "</td>";
        dataRows += "<td>" + data.statusby + "</td>";
        dataRows += "</tr>";
      });

      $("#myTable").html(dataRows);
      $("#loginForm").hide();
      $("#dataContainer").show();
    }
  }

  // Event handler for login button click
  $("#loginBtn").on("click", function() {
    var username = $("#username").val();
    var password = $("#password").val();

    // Perform basic authentication
    var authenticatedUser = userData.find(function(user) {
      return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
      loggedInUser = username;
      displayUserData(username);
    } else {
      alert("Invalid username or password");
    }
  });

  // Event handler for logout button click
  $("#logoutBtn").on("click", function() {
    loggedInUser = undefined;
    $("#myTable").html(""); // Clear the table
    $("#dataContainer").hide();
    $("#loginForm").show();
    $("#username").val("");
    $("#password").val("");
  });

  // Search functionality (same as before)
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  // Event handler for "Create Form" button click
  $(document).on("click", "#createFormBtn", function() {
    // Get the iframe URL
    var iframeUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeRYkVtx9aLq4FfWCGbeB4crKuo-dd9z8DjUSO7q-v2KYWLLg/viewform?";

    // Open the URL in a new tab/window
    window.open(iframeUrl, "_blank");
  });

  // Get the IP address using an API
  $.getJSON("https://api.ipify.org?format=json", function(data) {
    var ipAddress = data.ip;
    $("#ipAddress").text(ipAddress);
  });

  // Fetch the hit count from counter.php
  $.get("counter.php", function(data) {
    // Update the hit count on the webpage
    $("#hitCount").text("Hit Count: " + data);
  });
});
