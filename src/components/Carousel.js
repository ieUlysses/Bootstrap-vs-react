


export default function (props) {
    /* console.log(props.onclick); */
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.imgSrc} alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{props.title}</h5>
                        <p>{props.text}</p>
                    </div>
                </div>

            </div>
        </div>


    );
}

