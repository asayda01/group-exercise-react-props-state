// An alternative way of declaring a component is to write it as a function which
// returns a React.ReactNode. This is equivalent to the syntax in <ChuckCard/>

import Joke from '../joke';



const ChuckJoke: React.FC<Joke> = ({id,joke}) =>(


		<p>{joke}</p>
);

export default ChuckJoke;