import React from 'react'

let ques=[
    {question:'What is the capital of England?',option1:'London',option2:'Liverpool',option3:'Manchester',option4:'Chelsea',correct:'London'},
    {question:'How many continents are there in world?',option1:'4',option2:'3',option3:'5',option4:'7',correct:'7'},
    {question:'Name the author of The kite runner?',option1:'Stephen king',option2:'Khaled Hosseini',option3:'Salman Rushdie',option4:'Arvind Adiga',correct:'Khaled Hosseini'},
    {question:'Who is supposed to direct the next bond film?',option1:'Sam Mendes',option2:'Danny Boyle',option3:'Alex Garland',option4:'Guy Ritchie',correct:'Danny Boyle'},
    {question:'Capital city of JAPAN?',option1:'seoul',option2:'manila',option3:'Jakarta',option4:'Tokyo',correct:'Tokyo'},
    {question:'Capital city of INDIA?',option1:'New Delhi',option2:'Mumbai',option3:'Kochi',option4:'Hyderabad',correct:'New Delhi'},
    {question:'Which film won the best film oscar?',option1:'Dunkirk',option2:'The shape of water',option3:'Phantom Thread',option4:'Three Billboards',correct:'The shape of water'},
    {question:'Namibia comes in which continent?',option1:'Africa',option2:'Asia',option3:'Australia',option4:'Europe',correct:'Africa'},
    {question:'8*8?',option1:'64',option2:'63',option3:'38',option4:'44',correct:'64'},
    {question:'3-iron film is from?',option1:'Japan',option2:'South-Korea',option3:'India',option4:'China',correct:'South-Korea'},
];
var length=ques.length;

class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state={value:0,correct:0,incorrect:0,status:0};
        this.clickHandler=this.clickHandler.bind(this);
    }

    clickHandler(option){
        if(this.state.status==0){
             if(option==ques[this.state.value].correct)
             {
                 this.setState((prevState,props)=>{
                     return {correct:prevState.correct + 1}
                 });
             }else{
                 this.setState((prevState,props)=>{
                     return {incorrect:prevState.incorrect + 1}
                 });
             }
        }
         
         var last=this.state.value+1;
         console.log(last+'--'+length);
         if(last==length){           
            this.setState((prevState,props)=>{
            return {status:1}
            });
            alert('finished');
         }else{
             this.setState((prevState,props)=>{
                 return {value:prevState.value + 1}
             });
         }	
    }

    render(){
        return(
            <div className="App-header">
                <h1>Quiz</h1>
            <div className="left">	
            <h1>{ques[this.state.value].question}</h1>
    <button className="btn" onClick={this.clickHandler.bind(this,ques[this.state.value].option1)}>{ques[this.state.value].option1}</button>
    <button className="btn" onClick={this.clickHandler.bind(this,ques[this.state.value].option2)}>{ques[this.state.value].option2}</button>
    <button className="btn" onClick={this.clickHandler.bind(this,ques[this.state.value].option3)}>{ques[this.state.value].option3}</button>
    <button className="btn" onClick={this.clickHandler.bind(this,ques[this.state.value].option4)}>{ques[this.state.value].option4}</button>
    </div>
                <div className="right">
                    <ul>
                        <li className="status"><h1>Correct answers:</h1> <p>{this.state.correct}</p></li>
                        <li className="status"><h1>Incorrect answers:</h1> <p>{this.state.incorrect}</p></li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Quiz