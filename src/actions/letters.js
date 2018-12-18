const nextLetter = ()=>(
    {
       type: "GET_NEXT_LETTER"
    }
);

const setText = (string)=>({
    type:"SET_NEW_TEXT",
    string
});

const wrongLetter = ()=>(
    {
        type: "REDUCE_POINTS",
        amount: 1
    }
);

export {nextLetter, wrongLetter, setText};