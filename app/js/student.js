function getStudentData() {
  console.log('Getting student data...');

  $.ajax({
    type: "GET",
    url: "http://localhost:8080/api/students",
    success: function(data) {
      $("#studentData").empty();
      var tableData;
      var index = 0;
      $.each(data, function(i, student) {
        tableData += "<tr><td>" + (i + 1) +
          "</td><td class=\"txt-oflo\">" + student.firstName +
          "</td><td class=\"txt-oflo\">" + student.lastName +
          "</td><td class=\"txt-oflo\">" + student.address +
          "</td><td class=\"txt-oflo\">" + student.age +
          "</td></tr>";
      });
      $("#studentData").append(tableData);
      
      console.log('Getting student data complete');
    },
    error: function(data) {
      console.log('An error occurred.');
      console.log(data);
    },
  });

}
