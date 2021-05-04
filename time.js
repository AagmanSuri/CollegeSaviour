//Project :Time
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAZdvwfJbS_Y3_xBgugof0ieFheuPIMBI8",
    authDomain: "timetable-214d3.firebaseapp.com",
    projectId: "timetable-214d3",
    storageBucket: "timetable-214d3.appspot.com",
    messagingSenderId: "921182669948",
    appId: "1:921182669948:web:587d670f732887e6858df9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
/////////////////

//..................Read Data ..................//
var codeV, b1V, b2V, b3V, b4V;

function Ready() {
    codeV = document.getElementById("codebox").value;
    b1V = document.getElementById("b1box").value;
    b2V = document.getElementById("b2box").value;
    b3V = document.getElementById("b3box").value;
    b4V = document.getElementById("b4box").value;

}

//...................Insert......................//

document.getElementById("insert").onclick = function () {
    Ready();
    firebase.database().ref('subject/' + codeV).set({
        SubjectCode: codeV,
        B1Link: b1V,
        B2Link: b2V,
        B3Link: b3V,
        B4Link: b4V
    });
}
//...................Selection Process......................//
document.getElementById("select").onclick = function () {
    Ready();
    firebase.database().ref('subject/' + codeV).on("value", function (snapshot) {
        document.getElementById("b1box").value = snapshot.val().B1Link;
        document.getElementById("b2box").value = snapshot.val().B2Link;
        document.getElementById("b3box").value = snapshot.val().B3Link;
        document.getElementById("b4box").value = snapshot.val().B4Link;
    });
}

//...................update Process......................//

document.getElementById("update").onclick = function () {
    Ready();
    firebase.database().ref('subject/' + codeV).update({
        B1Link: b1V,
        B2Link: b2V,
        B3Link: b3V,
        B4Link: b4V
    })
}
// //...................Deletion Process......................//
document.getElementById("delete").onclick = function () {
    Ready();
    firebase.database().ref('subject/' + codeV).remove();
}
// //...................For showing Data......................//
// //...................Get All Data......................//
function SelectAllData() {
    firebase.database().ref('subject').on("value",
        function (AllRecords) {
            AllRecords.forEach(
                function (CurrentRecord) {
                    var sub=CurrentRecord.val().SubjectCode;
                    var blink1 = CurrentRecord.val().B1Link;
                    var blink2 = CurrentRecord.val().B2Link;
                    var blink3 = CurrentRecord.val().B3Link;
                    var blink4 = CurrentRecord.val().B4Link;
                    AddItemsToTable(sub,blink1, blink2, blink3, blink4);
                }
            );

        });
}
window.onload= SelectAllData;

//.............filling the table...........//
function AddItemsToTable(sub,blink1, blink2, blink3, blink4){
    var tbody=document.getElementById(tbody1);
    var trow=document.createElement("tr");
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    var td3=document.createElement('td');
    var td4=document.createElement('td');
    var td5=document.createElement('td');

    td1.innerHTML=sub;
    td2.innerHTML=blink1;
    td3.innerHTML=blink2;
    td4.innerHTML=blink3;
    td5.innerHTML=blink4;

    
    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    tbody.appendChild(trow);
}