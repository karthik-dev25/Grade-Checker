// let showColor = false;

// function handleDarkMode(event) {
//   console.log("event: ", event);
//   let checked = document.getElementById("mySwitch").checked;
//   console.log("checked: ", checked);

//   showColor = checked;
//   // if (checked) {
//   //   document.body.style.backgroundColor = "#000";
//   //   document.body.style.color = "#fff";
//   // } else {
//   //   document.body.style.backgroundColor = "#fff";
//   //   document.body.style.color = "#000";
//   // }
// }

function handleChange() {
  event.preventDefault();

  let output = document.getElementById("output");

  let inputMarks = document.getElementById("marks").value;

  let checked = document.getElementById("mySwitch").checked;

  console.log("inputMarks", inputMarks);

  if (inputMarks >= 90) {
    if (checked) {
      output.style.color = "green";
    } else {
      output.style.color = "#000";
    }
    output.innerHTML = "A" + "- Pass";
  } else if (inputMarks >= 75) {
    if (checked) {
      output.style.color = "green";
    } else {
      output.style.color = "#000";
    }
    output.innerHTML = "B" + "- Pass";
  } else if (inputMarks >= 50) {
    if (checked) {
      output.style.color = "green";
    } else {
      output.style.color = "#000";
    }
    output.innerHTML = "C" + "- Pass";
  } else if (inputMarks >= 35) {
    if (checked) {
      output.style.color = "green";
    } else {
      output.style.color = "#000";
    }
    output.innerHTML = "D" + "- Pass";
  } else {
    if (checked) {
      output.style.color = "red";
    } else {
      output.style.color = "#000";
    }
    output.innerHTML = "F" + "- Fail";
  }

  //   switch (inputMarks) {
  //     case inputMarks >= 90:
  //       output.innerHTML = "A" + "- Pass";
  //     //   break;
  //     case inputMarks >= 75:
  //       output.innerHTML = "B" + "- Pass";
  //     //   break;
  //     case inputMarks >= 50:
  //       output.innerHTML = "C" + "- Pass";
  //     //   break;
  //     case inputMarks >= 35:
  //       output.innerHTML = "D" + "- Pass";
  //     //   break;
  //     default:
  //       output.innerHTML = "F" + "- Fail";
  //     //   break;
  //   }
}

// console.log("output", output);
