import Card from "../components/Card";

function Home() {
    return (
        <div>
            <h2>Home Page</h2>

            <Card title="React" description="JavaScript Library" />
            <Card title="Vite" description="Fast build tool" />

        </div>
    );
}

export default Home;