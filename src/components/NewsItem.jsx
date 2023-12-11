import default_image from '../assets/nbc-social-default.png'

export const newsitem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "330px", maxHeight: "400px" }}>
      <div style={{ height: "200px", width: '315px' }}>
        <img src={src?src:default_image} style={{ maxHeight: "180px"}} className="card-img-top" alt="..." />
      </div>
      <div style={{ width: "300px", height:"190px", padding:"4px"}} className="card-body">
        <h5 style={{height: "48px"}} className="card-title">{title.slice(0, 30)+ '...'}</h5>
        <p className="card-text">{description ? description.slice(0, 60) + '...': "Something happened while retrieving the information..."}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default newsitem;