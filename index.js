
class Speaks extends React.Component {
render() {
  return <div>
            <Clock />
            <h1>Languages Spoken in America</h1>
            <English />
            <French />
            Countries: {this.props.french}
            <Spanish />
            {speakSpanish()}
            <Portuguese />
            <h3>And I like to speak english and learn React!</h3>
          </div>
          
}
}

class Portuguese extends React.Component {
render() {
  return (
    <div>
    <h2>Where Portuguese is spoken?</h2>
    <Brazil brand="All brazilians speaks portuguese" />
    </div>
  );
}
}

class Brazil extends React.Component {
  render() {
    return <p>Brazil: {this.props.brand}!</p>
  }
}
class Spanish extends React.Component {
render() {
  return (
    <div>
    <h2>Where Spanish is spoken?
    </h2>
    </div>
  );
}
}

function speakSpanish(){
return 'North, central and south america, but not brazil.'
}


class French extends React.Component {
render() {
  return (
    <div>
    <h2>Where French is spoken?</h2>
    </div>
  );
}
}
class Englishspeakers extends React.Component {
  render() {
    return <p>Countries: {this.props.brand}!</p>
  }
}
class English extends React.Component {
  constructor() {
    super();
    this.state = {countries: "United States, Canada & Jamaica"};
  }
  render() {
    return <div>
    <h2>Where English is spoken?</h2>
    <Englishspeakers brand={this.state.countries} />
    </div>;
  }
}


//const myelement = <Language brand="Comment, allez vous!" />;
const speaks = 
{ 
francos:['Canada, Haiti, & Francoise Guayana'],
}


class Clock extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {date: new Date()}
  }
  componentDidMount()
  {
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
      )
  }
  componentWillUnmount()
  {
    clearInterval(this.timerID)
  }
  tick()
  {
    this.setState(
      {date:new Date()}
    )
  }
  render()
  {

    return(
          <div>
            <h1>
            React Programming
            </h1>
            <h2>It is {this.state.date.toLocaleTimeString()}</h2>
          </div>
    );
  }
}


function FormattedDate(props){
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}




ReactDOM.render( 
<Speaks
french={speaks.francos}
/>
, document.getElementById('root'));