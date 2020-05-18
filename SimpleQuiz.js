quesArr = ['Who are u???', 'Are u insane???',
            'Can u jumble 9 balls simultaneously']

ansArrs = [{0: 'Stupid', 1: 'Mental', 2: 'Insane'},
            {0: 'Yes!! without any doubt', 1: 'No'},
            {0: 'Yes!! Of corse', 1: 'No!! I have no skill.'}]

cAnsArr = [2, 0, 1]

var yes = true
var ran
var score = 0

dispQues();

function dispQues(){
    if (yes === true){
        ran = createRandom()
    }
    ranQues = quesArr[ran]
    ranAnsArr = ansArrs[ran]
    rancAns = cAnsArr[ran]
    console.log(ranAnsArr)
    // console.log('Correct answer will give you +1.')
    // console.log('Wrong answer will deduct -1.')
    console.log('Correct answer will give you +1.\n' +
                'Wrong answer will deduct -1.\n' +
                'Click OK to proceed.\n' +
                'Click CANCEL to exit the quiz.')
    
    var input = prompt(ranQues, 'Write your honest answer in digit here')
    if (input == rancAns){
        console.log('Yeah, You Know yourself nicely!!\n+1')
        yes = true
        score += 1
        console.log('Your Score : ' + score)
        dispQues()
    }
    else if (input === null){
        console.log('Your Final Score : ' + score)
        return
    }
    else {
        console.log('Hell!! You don\'t even know yourself. ' +
        'Please do try Again!\n-1')
        yes = false
        score -= 1
        console.log('Your Score : ' + score)
        dispQues()
    }
}

function createRandom(){
    return Math.floor(Math.random()*quesArr.length)
}









