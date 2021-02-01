const usersArray = [
  {
    firstName: 'Kirby',
    lastName: 'Doyle',
    id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
    isActive: false,
    balance: '$3,570.06',
    gender: 'male'
  },
  {
    firstName: 'Tracie',
    lastName: 'May',
    id: '1af0e9ee-66fc-4298-b8ce-5d99bcbaac05',
    isActive: false,
    balance: '$1,547.73',
    gender: 'female'
  },
  {
    firstName: 'Kendra',
    lastName: 'Hines',
    id: '5e92af3a-b08e-4689-bdeb-3226300470e3',
    isActive: true,
    balance: '$12,383.08',
    gender: 'female'
  },
  {
    firstName: 'Kinney',
    lastName: 'Howard',
    id: '0ad2388d-83e1-4831-9cc4-e3581f8edf36',
    isActive: false,
    balance: '$3,207.06',
    gender: 'male'
  },
  {
    firstName: 'Howard',
    lastName: 'Gilmore',
    id: '0719205d-c965-44cb-a128-708cf335b26c',
    isActive: true,
    balance: '$21,307.75',
    gender: 'male'
  },
  {
    firstName: 'Rachelle',
    lastName: 'Schneider',
    id: '04012184-651b-41eb-9642-d362fedff02f',
    isActive: true,
    balance: '$35,121.49',
    gender: 'female'
  },
  {
    firstName: 'Lizzie',
    lastName: 'Alford',
    id: '598ca7ec-888e-494d-ae94-c21ace3ffa52',
    isActive: false,
    balance: '$4,382.94',
    gender: 'female'
  }
];


//FIRST ITERATION
const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  }
  
  console.log(userFirstNames)
};

getFirstNames(usersArray);

//SECOND ITERATION
const getFullNames = arr => {
  let userFullNames = []
  for (let user of arr){
    userFullNames.push(`${user.firstName} ${user.lastName}`)
  }
  
  console.log(userFullNames)
};

getFullNames(usersArray);

//THIRD ITERATION
const getUsersCreditDetails = arr => {
  
  let usersCreditDetails = []
 
  for (let user of arr){
    
    let [{firstName}, {lastName}, {balance}] = arr
    
    const userDetails = {
    firstName,
    lastName,
    balance}
      
    usersCreditDetails.push(userDetails)
    
  }
  console.log(usersCreditDetails)
  
};


getUsersCreditDetails(usersArray);


//FOURTH ITERATION

const genderView = users => {
  let result = {
      femaleUsers : [],
      maleUsers: []
  }

  
    usersArray.filter(function(item){
    if (item.gender == 'female'){
      result.femaleUsers.push(`${item.firstName} ${item.lastName}`)
    }
      else {
        result.maleUsers.push(`${item.firstName} ${item.lastName}`)
      }
    
  })
  
  return result
  
};

//genderView(usersArray);

//BONUS IT 5

const data = genderView(usersArray);

//console.log(data.femaleUsers.length)

const genderCount = data => {
  let female = `Female : ${data.femaleUsers.length}`
  let male = `Male : ${data.maleUsers.length}`
  console.log(female)
  console.log(male)
};

genderCount(data);

//BONUS IT 6

const promo20 = users => {
  for (let user of users){
    let balance = user.balance
    let number = Number(balance.replace(/[^0-9.-]+/g,""))
    if (number > 20000){
      console.log(`Dear ${user.firstName}, since your balance is ${user.balance}, you are eligible to apply for this awesome credit card.`)
    }
    }
  
};

promo20(usersArray)

//BONUS IT 7

const addActive = users => {
  // Your code goes here ...
  for ( let user of users){
    user.isActive = true
    console.log(user)
  }
  
};

addActive(usersArray);
