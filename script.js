const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, v) => {
  // Write your code here
	let sum =0;
	let res = [];
	let a = [];
	let r = 0;
    let n = arr.length;
    
	while(r<n){
		sum += arr[r];
		if(sum<=v){
			a.push(arr[r]);
			r++;
		}
		else{
		
			res.push(a);
			a = [];
			a.push(arr[r]);
			sum = arr[r];
			r++;
		}
	}
	
	if(a.length>0){
	    res.push(a);
	}

	return res;
	
	
};

const v = prompt("Enter v: ");
alert(JSON.stringify(divide(arr, v)));

