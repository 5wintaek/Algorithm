
  const solution =  my_string => my_string.split('').map(Number).filter(ele=>!isNaN(ele)).sort((a,b) => a-b)
