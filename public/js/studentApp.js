function studenthealthlistforstudent(studentaccountno, displayarea) {
  console.log(studentaccountno);
  let request = new XMLHttpRequest();
  request.open(
    "get",
    `/api/allfunction/_studenthelathlist?code=${studentaccountno}`
  );
  request.send();
  request.onload = () => {
    if (request.status == 200) {
      let respnsedat = JSON.parse(request.response);
      console.log(respnsedat);
      let dispalydata = ``;
      if (respnsedat.length > 0) {
        for (var i = 0; i < respnsedat.length; i++) {
          dispalydata += `<tr>
                                <td>${respnsedat[i].hospital_name}</td>
                                <td>${respnsedat[i].mediclaim_type}</td>
                                <td>${respnsedat[i].dateofadmision}</td>
                                <td>${respnsedat[i].dateofdischarge}</td>
                                <tD>${respnsedat[i].totalExpense}</tD>
                                <td><a href="https://shishuvikasyojana.org/${respnsedat[i].document_url}" target="_blank">Click here</a></td>
                                <td>${respnsedat[i].mediclaim_status}</td>
                                <td>${respnsedat[i].documentuploaddate}</td>
                            </tr>`;
        }
      } else {
        dispalydata += `Data not found`;
      }
      document.getElementById(displayarea).innerHTML = dispalydata;
    }
  };
}
function studenthigereducationlistforstudent(studentaccountno, displayarea) {
  console.log(studentaccountno);
  let request = new XMLHttpRequest();
  request.open(
    "get",
    `/api/allfunction/HesListforstudent?code=${studentaccountno}`
  );
  request.send();
  request.onload = () => {
    if (request.status == 200) {
      let respnsedat = JSON.parse(request.response);
      console.log(respnsedat);
      let dispalydata = ``;
      if (respnsedat.length > 0) {
        for (var i = 0; i < respnsedat.length; i++) {
          dispalydata += `<tr>
                                <td>${respnsedat[i].hesCollageName}</td>
                                <td>${respnsedat[i].hesCourseStartDate}</td>
                                <td>${respnsedat[i].hesCourseName}</td>
                                <td>${respnsedat[i].hesFee}</td>
                                <td><a href="https://shishuvikasyojana.org/${respnsedat[i].allDocumentUrl}" target="_blank">Click here</a></td>

                                <tD>${respnsedat[i].hesStatus}-${respnsedat[i].hesStatusDetails}</tD>
                                <td>${respnsedat[i].requestDate}</td>
                                <td><a herf="/Student/Hesdetails?Code=${respnsedat[i].e_Hesid}"  class="btn btn-info btn-sm">Details</a></td>
                            </tr>`;
        }
      } else {
        dispalydata += `Data not found`;
      }
      document.getElementById(displayarea).innerHTML = dispalydata;
    }
  };
}

var app = angular.module("StudentApp", []);
