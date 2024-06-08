function subarrayWithTargetSum(thearray, target) {
    let nowSum = 0;
    let start = 0;

    for (let i = 0; i <thearray.length; i++) {
        nowSum += arr[i];

        // Here I narrow the window as long as the nowSum is greater than the target
        while (nowSum > target && start <= i) {
            nowSum -= thearray[start];
            start++;
        }

        // Here I check if the nowSum is equal to the target
        if (nowSum === target) {
            return true;
        }
    }

    return false;
}