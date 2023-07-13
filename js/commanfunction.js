function isNumberKey(e) {
  var code = e.keyCode || e.which;
  if (code > 31 && (code < 48 || code > 57)) {
    e.preventDefault();
    return false;
  }
}
function buttonUse(buttonname) {
  const buttonfirst = document.getElementById(buttonname); // assuming the button is assigned an id named "button"
  buttonfirst.innerHTML =
    '<i class="fas fa-circle-o-notch fa-spin"></i>Sending...';
  buttonfirst.disabled = true;
}
function isEnterpressNext(e, foucsid) {
  var code = e.keyCode || e.which;
  if (code === 13) {
    e.preventDefault();
    $(foucsid).focus();
  }
}
function readURL(input, previewID, fileSizePriv) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      let s_photoSize = parseFloat(input.files[0].size / 1024 / 1024).toFixed(
        2
      );
      if (s_photoSize < 1) {
        $(previewID).attr("src", e.target.result);

        $(fileSizePriv).html(s_photoSize);
      } else {
        alert("File size should be less then 1 MB");
      }
    };

    reader.readAsDataURL(input.files[0]);
  }
}
function readURLvideo(input, previewID, fileSizePriv) {
  if (input.files && input.files[0]) {
    var video = document.getElementById(previewID);

    var reader = new FileReader();

    reader.onload = function (e) {
      let s_photoSize = parseFloat(input.files[0].size / 1024 / 1024).toFixed(
        2
      );
      if (s_photoSize < 10) {
        var source = document.createElement("source");
        source.setAttribute("src", e.target.result);
        source.setAttribute("type", "video/mp4");

        video.appendChild(source);
        video.play();

        $(fileSizePriv).html(s_photoSize);
      } else {
        alert("File size should be less then 1 MB");
      }
    };

    reader.readAsDataURL(input.files[0]);
  }
}
function studentBanklist(studentaccountno, displayarea) {
  let request = new XMLHttpRequest();
  request.open(
    "get",
    `/api/allfunction/_studentbanklist?code=${studentaccountno}`
  );
  request.send();
  request.onload = () => {
    if (request.status == 200) {
      let respnsedat = JSON.parse(request.response);
      let dispalydata = ``;

      console.log(respnsedat.length);
      console.log(respnsedat);
      for (var i = 0; i < respnsedat.length; i++) {
        console.log(respnsedat[i].account_no);

        dispalydata += ` <tr><td>${respnsedat[i].accounholderName}</td>
                            <td>${respnsedat[i].bank_Account_no}</td>
                            <td>${respnsedat[i].ifsc_code}</td>
                            <td>${respnsedat[i].bankName}</td>
                            <td>${respnsedat[i].relationwithbeni}</td>
                            <td>${respnsedat[i].bankadddate}</td></tr>`;
      }
      document.getElementById(displayarea).innerHTML = dispalydata;
    }
  };
}

function studentscholershiplist(studentaccountno, displayarea) {
  let request = new XMLHttpRequest();
  request.open(
    "get",
    `/api/allfunction/_studentScholarshiplist?code=${studentaccountno}`
  );
  request.send();
  request.onload = () => {
    if (request.status == 200) {
      let respnsedat = JSON.parse(request.response);
      console.log(respnsedat);
      let dispalydata = ``;
      if (respnsedat.length > 0) {
        for (var i = 0; i < respnsedat.length; i++) {
          console.log(respnsedat[i].scholarship_Request_Date);
          dispalydata += `<div class="row border-warning">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Scholarship Request Date</label>
                            <label class="label"> - ${respnsedat[i].scholarship_Request_Date}</label>
                        </div>
                        <div class="form-group">
                            <label class="label">Status</label>
                            <label class="label"> - ${respnsedat[i].scholarship_status}</label>
                        </div>
                        <div class="form-group">
                            <label class="label">Status Details</label>
                            <label class="label"> - ${respnsedat[i].status_resion}</label>
                        </div>
                        <div class="form-group">
                            <label class="label">Credit Date</label>
                            <label class="label"> - ${respnsedat[i].credit_Date}</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Current Class Doc</label>
                            <label class="label"> - <a href="https://shishuvikasyojana.org/${respnsedat[i].currentclass_doc}" target="_blank">Click here</a> </label>
                        </div>
                        <div class="form-group">
                            <label class="label">Previous Class Doc</label>
                            <label class="label"> - <a href="https://shishuvikasyojana.org/${respnsedat[i].prvclass_doc}" target="_blank">Click here</a></label>
                        </div>
                        <div class="form-group">
                            <label class="label">Gender Proff Doc</label>
                            <label class="label"> - <a href="https://shishuvikasyojana.org/${respnsedat[i].genderProff}" target="_blank">Click here</a></label>
                        </div>
                        <div class="form-group">
                            <label class="label">Bank Passbook</label>
                            <label class="label"> - <a href="https://shishuvikasyojana.org/${respnsedat[i].student_passbook}" target="_blank">Click here</a></label>
                        </div>
                    </div>
                    </div>`;
        }
      } else {
        dispalydata += `Data not found`;
      }
      document.getElementById(displayarea).innerHTML = dispalydata;
    }
  };
}

function studenthealthlist(studentaccountno, displayarea) {
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
          dispalydata += `<div class="row border-warning">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Claim Request Date</label>
                            <label class="label"> - ${respnsedat[i].documentuploaddate}</label>
                        </div>
                        <div class="form-group">
                            <label class="label">Status</label>
                            <label class="label"> - ${respnsedat[i].mediclaim_status}</label>
                        </div>
                        <div class="form-group">
                            <label class="label">Status Details</label>
                            <label class="label"> - ${respnsedat[i].mediclaim_details}</label>
                        </div>
                        <div class="form-group">
                            <label class="label">Credit Date</label>
                            <label class="label"> - ${respnsedat[i].disvers_date}</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="label">Hospital Name</label>
                            <label class="label"> - ${respnsedat[i].hospital_name}</label>
                        </div>
                        <div class="form-group">
                            <label class="label">Hospital Contact</label>
                            <label class="label"> - ${respnsedat[i].hospital_contact}</label>
                        </div>
                        <div class="form-group">
                            <label class="label">Total Expese</label>
                            <label class="label">- ${respnsedat[i].totalExpense}</label>
                        </div>
                        <div class="form-group">
                            <label class="label">Document Url</label>
                            <label class="label"> - <a href="https://shishuvikasyojana.org/${respnsedat[i].document_url}" target="_blank">Click here</a></label>
                        </div>
                    </div>
                    </div>`;
        }
      } else {
        dispalydata += `Data not found`;
      }
      document.getElementById(displayarea).innerHTML = dispalydata;
    }
  };
}

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
//function onloadLadger(displayArea,code ,Start_date, endDate) {

//    let request = new XMLHttpRequest();
//    request.open("get", `/staff/_AgentLager?Code=${code}`);
//    request.setRequestHeader("Content-Type", "text/html; charset=utf-8");
//    request.send();
//    request.onload = () => {
//        if (request.status == 200) {
//            console.log(request.response);
//            document.getElementById(displayArea).innerHTML = request.response;
//        }
//    }
//}
