import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Rocket from './rocket';

const ROCKETS = gql`
    {
        rockets {
            rocket_id,
            rocket_name,
            country,
        }
    }
`;

export default function Rockets() {
    const { loading, error, data } = useQuery(ROCKETS);

    if (loading) {
        console.log('loading')
        return <h3>Loading...</h3>
    }
    
    if (error) {
        console.log(error)
        return <h1>Error</h1>
    }

    return(
        <div className="columns is-multiline">
            {data.rockets.map((rocket) => (
                <Rocket key={rocket.rocket_id} rocket={rocket} />
            ))}
        </div>
    )
}