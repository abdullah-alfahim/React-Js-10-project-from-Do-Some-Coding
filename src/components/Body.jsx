function Body(props) {
    return (
        <div className="body">
            <div className="inner_body">
                <div className="body_content">
                    <h1>
                    YOUR FEET DESERVE THE BEST
                    </h1>
                    <p>
                        We offer a wide range of high-quality <br /> products and services to meet your every need.
                    </p>
                    <div className="buttons">
                        <button>Shop Now</button>
                        <button>Category</button>
                    </div>
                    <div className="available">
                        <p>Available on</p>
                        <div className="available_images">
                            <img src={props.flipkart} alt="" />
                            <img src={props.amazon} alt="" />
                        </div>
                    </div>
                </div>
                <div className="body_image">
                    <div className="inner_body_image">
                        <img src={props.body_image} alt="" />
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Body
