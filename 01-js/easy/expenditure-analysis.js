/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  //console.log(transactions);
  let categoryArr=[];

  transactions.forEach(element => {
    let ind = categoryArr.findIndex((e) => {
      return e.category == element.category

    });
    if(ind == -1){
      categoryArr.push({"category": element.category , "totalSpent" : element.price })
    }
    else {
      categoryArr[ind].totalSpent += element.price;
    }
    
  });

  
  return categoryArr;
}

module.exports = calculateTotalSpentByCategory;
