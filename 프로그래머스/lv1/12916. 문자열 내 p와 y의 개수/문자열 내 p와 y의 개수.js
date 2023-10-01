function solution(s){
    let change = s.toLowerCase();
    console.log(change);
    let change_p = change.split("p").length;
    let change_y = change.split("y").length;
    
    return change_p === change_y ? true : false
    
    
}