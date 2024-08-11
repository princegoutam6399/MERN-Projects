import image from '../assets/dummy.webp'

const Newsitem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-flex my-3 mx-4 px-2 py-2" style={{ maxWidth: "400px" }}>
            <img src={src?src:image} style={{width:"380px"}} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0,50)}</h5>
                <p className="card-text">{description?description.slice(0,90):"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    )
}

export default Newsitem;