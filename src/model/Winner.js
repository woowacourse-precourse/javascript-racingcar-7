
class Winner{
  async winner(car,arr){
    let maxNumber=0;
    let winnerarr=[];

    for(let i=0; i<arr.length;i++){
      if(maxNumber < arr[i]){
        maxNumber=arr[i];
      }
    }
    for(let i=0; i<arr.length;i++){
      if(arr[i]==maxNumber){
        winnerarr.push(car[i]);
      }
    }
    return winnerarr;
   }
}

export default Winner;  