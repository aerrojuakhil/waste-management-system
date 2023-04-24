async function clicks() {
  const button = document.getElementById('button');
  if (button.classList.contains('btn-success')) {
      button.classList.remove('btn-success');
      button.classList.add('btn-danger');
      document.getElementById("button").innerHTML = "Open Bin";
      await fetch("https://blynk.cloud/external/api/update?token=zTy2wKPDQ_PtdZWOv4Q5614LfLa9BiMd&v1=" + 0);
  } else if (button.classList.contains('btn-danger')) {
      button.classList.remove('btn-danger');
      button.classList.add('btn-success');
      document.getElementById("button").innerHTML = "Close Bin";
      await fetch("https://blynk.cloud/external/api/update?token=zTy2wKPDQ_PtdZWOv4Q5614LfLa9BiMd&v1=" + 180);
  }
};
async function showData(pin, element) {
  const response = await fetch("https://blynk.cloud/external/api/get?token=zTy2wKPDQ_PtdZWOv4Q5614LfLa9BiMd&"+pin);
  const data = await response.text();
  const el = document.getElementById(element);
  if (el) {
    el.innerHTML = data;
  }
}
async function showDataServo() {
  const response = await fetch("https://blynk.cloud/external/api/get?token=zTy2wKPDQ_PtdZWOv4Q5614LfLa9BiMd&v1");
  const data = await response.text();
  const el = document.getElementById("button")
  if (el){
  if(data == 180){
      button.classList.remove('btn-danger');
      button.classList.add('btn-success');
      el.innerHTML = "Close Bin";
  }
  else{
      button.classList.remove('btn-success');
      button.classList.add('btn-danger');
      document.getElementById("button").innerHTML = "Open Bin";
  }
}
}
setInterval(() => {
showData("v5", "dry");
showData("v4", "wet");
showDataServo();
}, 1000);
//setInterval(showDataServo, 1000);
const content = {
    1: [[1, "Tirumalisamudram", "https://blynk.cloud/external/api/get?token=baK0CbsrD_7zAidxZaqX7tMH2XgW-2GT&v2", "https://blynk.cloud/external/api/get?token=baK0CbsrD_7zAidxZaqX7tMH2XgW-2GT&v0", "https://goo.gl/maps/JS4BHhWWzSikfvhX9"], [2, "Vallam", "https://blynk.cloud/external/api/get?token=baK0CbsrD_7zAidxZaqX7tMH2XgW-2GT&v2","https://blynk.cloud/external/api/get?token=baK0CbsrD_7zAidxZaqX7tMH2XgW-2GT&v0", "https://goo.gl/maps/r4sy5Gkme75zgGHf9"], [3, "Sengipatti", "https://blynk.cloud/external/api/get?token=baK0CbsrD_7zAidxZaqX7tMH2XgW-2GT&v2", "https://blynk.cloud/external/api/get?token=baK0CbsrD_7zAidxZaqX7tMH2XgW-2GT&v0", "https://goo.gl/maps/NUZtQ7gDZ5WRywoZA"], [4, "Chollapuram", "https://blynk.cloud/external/api/get?token=baK0CbsrD_7zAidxZaqX7tMH2XgW-2GT&v2", 20, "https://goo.gl/maps/TQKiuxzgZi4uVSQr8"]],
    2: [[1, "Marsingpet", 70, 60, "https://goo.gl/maps/GrbLBPi7FZpzXmKf6"],[2, "KajaNagar", 170, 40, "https://goo.gl/maps/FLnGq7PpyuVb8jWD8"],[3, "Karumandapam", 90, 40, "https://goo.gl/maps/N8o23xUSFLNx47UJA"]],
    3: [[1, "Bose Nagar", 90, 20, "https://goo.gl/maps/rCWwz4GiXFWFdUc1A"], [2, "Palaniappa Nagar", 80, 40, "https://goo.gl/maps/2qVud2h7VjY1nXZw6"], [3, "Thiruvappur", 60, 30, "https://goo.gl/maps/vBLunhmGfRB52hGq7"]]
  };

const selectElement = document.querySelector('.areas');
selectElement.addEventListener('change', async(event) => {
document.querySelector("table tbody").innerHTML = ""
const selectedOption = event.target.value;
document.querySelector("table thead").innerHTML = '<tr><th scope="col">SL.No.</th><th scope="col">Place</th><th scope="col">Bin level</th><th scope="col">Air Quality</th><th scope="col">Maps Link</th></tr>';
for (let data in content[selectedOption]){
  let arrays = content[selectedOption][data];
  let response1 = await fetch(arrays[2]);
  let response2 = await fetch(arrays[3]);
  let json1 = await response1.json();
  console.log(json1)
  if(json1>70){
    alert("Public bin is full")
  }
  let json2 = await response2.json();
  document.querySelector("table tbody").innerHTML+=('<tr><th scope="row">'+arrays[0]+'</th><td>'+arrays[1]+'</td><td>'+json1+'</td><td>'+json2+'</td><td><a href='+arrays[4]+' target="_blank"><button type="button" class="btn btn-success" id="button">Locate</button></a></td></tr>');
}
});
