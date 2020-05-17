import Layout from '../components/layout'
import RocketDetails from '../components/rocketDetails'

export default function Details ({ query: { rocket_id } }) {
    return (
        <Layout>
            <RocketDetails rocket_id={rocket_id} />
        </Layout>
    )
}