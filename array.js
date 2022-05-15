const arr = [34,55,6,2,5,7,889,];
//arr.sort(function(a,b) {return a-b});


  
    for ( let i=0;i<arr.length;i++){
        for (let j =i+1; j< arr.length; j++ ){
            if (arr[i] > arr[j]){
               let num = arr[i];
               arr[i] = arr[j];
               arr[j] = num;

            }
        }
      
    }

console.log(arr)









