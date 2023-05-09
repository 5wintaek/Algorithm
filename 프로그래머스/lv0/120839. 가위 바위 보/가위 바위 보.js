function solution(rsp) {
    let answer = '';
    for(let i=0; i<rsp.length; i++){
        const item = rsp[i] 
        if(item === "2"){
            answer += "0";
        }
         if(item === "0"){
            answer += "5";
        }
         if(item === "5"){
            answer += "2";
        }
    }
    return answer
}