expenseList = document.querySelector(".expenses");
showResultBtn = document.querySelector(".show-results");
results = document.querySelector(".results");
const expenses = [
    9.99,
    25.8,
    144.39,
    12.98,
    4.99,
    38.75,
    14.5,
    99.99,
    75.4,
    4.75,
    62.88
  ];

  showResultBtn.addEventListener('click',function(){
    showMinMax(expenses);
    showResultBtn.disabled = true;
  });
  for (let item of expenses){
    let listItem = document.createElement("li");
    listItem.innerText = ` $ ${item} `;
    expenseList.append(listItem);
  };


  const showMinMax = function(array){
    const min = Math.min(...array);
    const max = Math.max(...array); 
    const minItem = document.createElement("li");
    minItem.innerText = `Min value: $ ${min} `;
    results.append(minItem);
    const maxItem = document.createElement("li");
    maxItem.innerText = `Max value: $ ${max} `;
    results.append(maxItem);
    results.classList.remove("hide");
  };