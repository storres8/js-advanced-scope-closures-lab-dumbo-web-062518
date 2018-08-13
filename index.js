function produceDrivingRange(blockRange){
  return function(blockA, blockB){
    const diff = Math.abs(Number(blockA.slice(0,2))- Number(blockB.slice(0,2)))
    if (diff > blockRange){
      return `${Math.abs(blockRange - diff)} blocks out of range`
    } else {
      return `within range by ${diff}`
    }
  }
};

function produceTipCalculator(percentTip){
  return function(amount){
    return percentTip * amount
  }
}
