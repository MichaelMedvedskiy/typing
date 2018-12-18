
const appState = {
    typing:{
        left:[],
        middle:'',
        right:[]
    },
    typed:'',
    fullText:null,
    score:0,
    isFinished: false,
    time:0,
    restartStopwatch:false
};

function mooveArrayLeftByOne(arr) {
    for(let i=1; i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    return arr;
}
//todo: if we are changing the amount of letters, this will be affected
function fillTypingWithLetters(string) {
    return {
        left:['',''],
        middle:string.charAt(0),
        right: [string.charAt(1),string.charAt(2)]
    };
}

function getAdditionalScore(letter) {
    let oneScoreString = 'asdfjkl; ';
    let twoScoreString = 'werxcvuionmt,.';
    let threeScoreString = 'qztyghbnp1234567890';
    let lowerLetter = letter.toLowerCase();
    if(oneScoreString.indexOf( lowerLetter)>-1) return 1;
    if(twoScoreString.indexOf( lowerLetter)>-1) return 2;
    if(threeScoreString.indexOf( lowerLetter)>-1) return 3;
    return 4;
}

export default (state = appState,action)=>{
    switch(action.type){
        //should fetch a letter from tobetyped and place it in action.letter
        case "GET_NEXT_LETTER":
            let isFinished = state.isFinished;
            //getting first symbol from remaining text and cutting it
            let nextLetter = state.fullText.charAt(0);
            let fullText = state.fullText.substr(1);
            //Rennovating typing letters
            let obsoleetLetterFromTypingLeft = state.typing.left[0] || '';
            let obsoleetLetterFromTypingRight = state.typing.right[0];
            //


            let left = state.typing.left;
            let middle = state.typing.middle;
            let right = state.typing.right;
            //determine the score change
            let score = state.score + getAdditionalScore(middle);


            //change the arrays of letters
            left = mooveArrayLeftByOne(left);
            right = mooveArrayLeftByOne(right);

            left[left.length-1] = middle;
            right[right.length-1] = nextLetter;
            middle = obsoleetLetterFromTypingRight;
            if(middle=='') isFinished=true;
            //console.log(`Here is the first state.typed ${state.typed}`)
            let typed = state.typed  + obsoleetLetterFromTypingLeft ;
            //console.log("typed:" +typed, obsoleetLetterFromTypingLeft);
            //console.log(state.fullText);

            return {
                ...state,
                typing: {
                    left,
                    middle,
                    right
                },
                typed,
                fullText,
                score,
                isFinished

            };
        case "SET_NEW_TEXT":
            return {
                typing: fillTypingWithLetters(action.string),
                fullText: action.string.substr(3),
                typed: '',
                score:0,
                isFinished: false,
                time:0,
                restartStopwatch:true
            }
        case "REDUCE_POINTS":
            return {
                ...state,
                score: state.score - action.amount
            }
        case "ADD_SECOND":
            return {
                ...state,
                time: state.time+1
            }
        case "STOPWATCH_RESTARTED":
            return {
                ...state,
                restartStopwatch:false
            }
        default: return state;


    }
};