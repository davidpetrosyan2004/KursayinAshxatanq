import profilePic from '/public/pngtree-delicious-burger-sandwiches-png-image_13780373.png'

export function Card(){
    return (
        <div className="card">
            <img
                className="card-img"
                src={profilePic}
                alt="profile picture"
                width="200"
                height="200"
            />
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make video games</p>
        </div>
    )
}

