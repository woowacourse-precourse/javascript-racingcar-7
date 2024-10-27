
class Winner{
  async winner(car,arr){
    let maxNumber=0;
    
    arr.forEach((num) => {
      if(maxNumber < num){
        maxNumber= num;
      }
    });
    const winnerarr = arr.reduce((acc,num,i)=>{
      if(num == maxNumber){
        acc.push(car[i]);
      }
      return acc;
    },[]);
    return winnerarr;
   }
}

export default Winner;  