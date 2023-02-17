const content = {
    1: [[1, "Tirumalisamudram", 80, 40, "https://goo.gl/maps/JS4BHhWWzSikfvhX9"], [2, "Vallam", 180, 40, "https://goo.gl/maps/r4sy5Gkme75zgGHf9"], [3, "Sengipatti", 120, 80, "https://goo.gl/maps/NUZtQ7gDZ5WRywoZA"], [4, "Chollapuram", 160, 20, "https://goo.gl/maps/TQKiuxzgZi4uVSQr8"]],
    2: [[1, "Marsingpet", 70, 60, "https://goo.gl/maps/GrbLBPi7FZpzXmKf6"],[1, "KajaNagar", 170, 40, "https://goo.gl/maps/FLnGq7PpyuVb8jWD8"],[1, "Karumandapam", 90, 40, "https://goo.gl/maps/N8o23xUSFLNx47UJA"]],
    3: [[1, "Bose Nagar", 90, 20, "https://goo.gl/maps/rCWwz4GiXFWFdUc1A"], [1, "Palaniappa Nagar", 80, 40, "https://goo.gl/maps/2qVud2h7VjY1nXZw6"], [1, "Thiruvappur", 60, 30, "https://goo.gl/maps/vBLunhmGfRB52hGq7"]]
  };

const selectElement = document.querySelector('.areas');

selectElement.addEventListener('change', (event) => {
document.querySelector("table tbody").innerHTML = ""
const selectedOption = event.target.value;
for (let data in content[selectedOption]){
  let arrays = content[selectedOption][data];
  document.querySelector("table tbody").innerHTML+=('<tr><th scope="row">'+arrays[0]+'</th><td>'+arrays[1]+'</td><td>'+arrays[2]+'</td><td>'+arrays[3]+'</td><td><a href='+arrays[4]+' target="_blank"><button type="button" class="btn btn-success" id="button">Locate</button></a></td></tr>');
}
});