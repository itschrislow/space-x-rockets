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
        return <p className="is-size-1 has-text-centered">Loading...</p>
    }
    
    if (error) {
        console.log(error)
        return <p className="is-size-1 has-text-centered">Error</p>
    }

    return(
        <div className="columns is-multiline">
            {data.rockets.map((rocket) => (
                <Rocket key={rocket.rocket_id} rocket={rocket} />
            ))}
        </div>
    )
}