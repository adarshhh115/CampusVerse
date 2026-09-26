function FeatureCard({ icon, title, description }) {
    return (
        <div className="card">
            <h3>{icon} {title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureCard;