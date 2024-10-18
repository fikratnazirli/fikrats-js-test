//1
document.getElementById('fikrat tests').innerText = 'Updated Text';
//2
document.getElementById('Buttonfikrat').addEventListener('click', function() {
    alert('Button fikrat');
  });
  //3
  const div = document.getElementById('gigigi');
  const button = document.getElementById('toggle');
  
  button.addEventListener('click', function() {
    div.style.backgroundColor = div.style.backgroundColor === 'blue' ? 'green' : 'blue';
  });
  //4
  document.querySelector('.text').innerText = 'Text has been changed!';
  //5
  const items = document.querySelectorAll('.zehra itden cixdi');
  items.forEach((item, index) => {
    item.innerText = `Updated Item ${index + 1}`;
  });
//6
//????????????????????????????????????????????
//7



  const dir = document.querySelector('#myDiv');
  document.querySelector('#toggleVisibility').addEventListener('click', function() {
    dir.style.display = dir.style.display === 'none' ? 'block' : 'none';
  });

//8

  document.getElementById('changeColors').addEventListener('click', function() {
    const items = document.querySelectorAll('.colorChange');
    items.forEach(item => {
      item.style.color = item.style.color === 'green' ? 'black' : 'green';
    });
  });

  //9

  const divs = document.getElementById('hoverDiv');
  
  divs.addEventListener('mouseover', function() {
    divs.style.backgroundColor = 'lightgreen';
  });
  
  divs.addEventListener('mouseout', function() {
    divs.style.backgroundColor = 'lightblue';
  });

//10
  document.getElementById('myForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    if (username === '') {
      alert('Username cannot be empty');
      event.preventDefault(); 
    }
  });
//11
function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for (let i = 0; i < 2; i++) {
      const row = document.createElement("tr");
  
      for (let j = 4; j < 7; j++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`fikratin mehsulu ${i}, mehsul ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "2");
  }
  //12
  document.getElementById('toggleButton').addEventListener('click', function() {
    const section = document.getElementById('expandableSection');
    if (section.style.display === 'none') {
      section.style.display = 'block'; 
    } else {
      section.style.display = 'none'; 
    }
  });
//13
  document.getElementById('generateColor').addEventListener('click', function() {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16);
    const colorBlock = document.createElement('div');
    colorBlock.style.width = '50px';
    colorBlock.style.height = '50px';
    colorBlock.style.backgroundColor = color;
    colorBlock.style.margin = '5px';
    document.getElementById('colorPalette').appendChild(colorBlock);
  });





