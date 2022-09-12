mashResult = [];

let values = [];

function addAll() {
  const inp = document.getElementsByClassName('box');//collects user inputs from all questions
  for (i of inp) {
    values.push(i.value);
    i.value = "";
    console.log(values)
  }
  displayRecord()//randomly chooses one answer from each array 
  values = []
  if (showNum >= 2) {//if last question has been answered then it goes to FinalScreen function
    finalScreen()
  } else {//if not, it goes to switchUp function and displays next question
    switchUp()
  }
};

function displayRecord() {
  const randomWord = Math.floor((Math.random() * values.length))
  mashResult.push(values[randomWord]);
  console.log(mashResult);
};

let showNum = 0;
let hiddenNum = 1;

function switchUp() {
  document.getElementsByClassName("show")[showNum].classList.add("hidden"); //hiding first paragraph [0]
  document.getElementsByClassName("hidden")[hiddenNum].classList.add("show"); //showing second paragraph [1]
  document.getElementsByClassName("hidden")[hiddenNum].classList.remove("hidden"); //removing hidden class from 2nd paragraph[1]
  showNum += 1
  hiddenNum += 1
};

const mash = ['mansion', 'apartment', 'shack', 'house']
let mashWord = mash[Math.floor(Math.random() * mash.length)];
console.log(mashWord);

let finalAnswer = (`You will marry ${mashResult[0]}, earn a living as a ${mashResult[1]}, have ${mashResult[2]} beautiful children and live in a ${mashWord}!`);

function inputCursor() {//function auto starts cursor in form box one upon clicking submit
  document.getElementById('input1').focus();
  };
  


function finalScreen() {
  document.getElementsByClassName("form-box")[0].classList.add("hidden");
  document.getElementsByClassName("change")[0].classList.add("hidden");
  document.getElementsByClassName("wait")[0].classList.add("show");
  document.getElementsByClassName("wait")[0].classList.remove("hidden2")
  mashSelect()
  setTimeout(future, 4500);

  function future() {
    document.getElementsByClassName("wait")[0].classList.add("hidden2");
    document.getElementsByClassName("wait")[0].classList.remove("show");
    document.getElementsByClassName("future")[0].classList.add("show");
    document.getElementsByClassName("future")[0].classList.remove("hidden2");
    document.getElementsByClassName("resetBtn")[0].classList.add("show");
    document.getElementsByClassName("resetBtn")[0].classList.remove("hidden");
    document.body.style.backgroundImage = "url(./css/images/spiraly.gif)";
    console.log(mash.Result)
    document.getElementById("answers").innerHTML = `You will marry ${mashResult[0]}, earn a living as a ${mashResult[1]}, have ${mashResult[2]} beautiful children and live in a ${mashWord}!`;
  }
}

function resetScreen() { //refreshes screen with reset button
  let resetBtn = document.getElementsByClassName("resetBtn")[0]; //targeting Submit button
  resetBtn.onclick = window.location.reload();
};

function handleEnter(event) { //function to allow key "enter" to switch to next input box
  if (event.key === "Enter") { //if key hit is = to "enter"
    const form = document.getElementById('form') //it will target the form id
    const index = [...form].indexOf(event.target); //
    form.elements[index + 1].focus(); //on each "enter", it will advance to the next input[index + 1]
    //event.preventDefault();
  }
};



function mashSelect() {
  document.getElementsByClassName("mashed1")[0].classList.remove("show2");
  document.getElementsByClassName("mashed1")[0].classList.add("hidden2");
  const selectM = setTimeout(M, 500);

  function M() {
    document.getElementsByClassName("mashed1")[0].classList.remove("hidden2");
    document.getElementsByClassName("mashed1")[0].classList.add("show2");

    document.getElementsByClassName("mashed2")[0].classList.remove("show2");
    document.getElementsByClassName("mashed2")[0].classList.add("hidden2");
    const selectA = setTimeout(A, 500);

    function A() {
      document.getElementsByClassName("mashed2")[0].classList.remove("hidden2");
      document.getElementsByClassName("mashed2")[0].classList.add("show2");

      document.getElementsByClassName("mashed3")[0].classList.remove("show2");
      document.getElementsByClassName("mashed3")[0].classList.add("hidden2");
      const selectS = setTimeout(S, 500);

      function S() {
        document.getElementsByClassName("mashed3")[0].classList.remove("hidden2");
        document.getElementsByClassName("mashed3")[0].classList.add("show2");

        document.getElementsByClassName("mashed4")[0].classList.remove("show2");
        document.getElementsByClassName("mashed4")[0].classList.add("hidden2");
        const selectH = setTimeout(H, 500);

        function H() {
          document.getElementsByClassName("mashed4")[0].classList.remove("hidden2");
          document.getElementsByClassName("mashed4")[0].classList.add("show2");

          document.getElementsByClassName("mashed1")[0].classList.remove("show2");
          document.getElementsByClassName("mashed1")[0].classList.add("hidden2");
          const selectM = setTimeout(M, 500);

          function M() {
            document.getElementsByClassName("mashed1")[0].classList.remove("hidden2");
            document.getElementsByClassName("mashed1")[0].classList.add("show2");

            document.getElementsByClassName("mashed2")[0].classList.remove("show2");
            document.getElementsByClassName("mashed2")[0].classList.add("hidden2");
            const selectA = setTimeout(A, 500);

            function A() {
              document.getElementsByClassName("mashed2")[0].classList.remove("hidden2");
              document.getElementsByClassName("mashed2")[0].classList.add("show2");

              document.getElementsByClassName("mashed3")[0].classList.remove("show2");
              document.getElementsByClassName("mashed3")[0].classList.add("hidden2");
              const selectS = setTimeout(S, 500);

              function S() {
                document.getElementsByClassName("mashed3")[0].classList.remove("hidden2");
                document.getElementsByClassName("mashed3")[0].classList.add("show2");

                document.getElementsByClassName("mashed4")[0].classList.remove("show2");
                document.getElementsByClassName("mashed4")[0].classList.add("hidden2");
                const selectH = setTimeout(H, 500);

                function H() {
                  document.getElementsByClassName("mashed4")[0].classList.remove("hidden2");
                  document.getElementsByClassName("mashed4")[0].classList.add("show2");



                }
              }
            }
          }
        }
      }
    }
  }
};
