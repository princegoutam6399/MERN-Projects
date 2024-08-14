import React from 'react'

const Category = () => {
    return (
        <div>
            <div className="container-fluid" >
                <div className="filter-container pt-5 d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="col d-flex">
                            <button onClick={()=>photos()} type="button" class="btn btn-dark me-2">Photos</button>
                            <button onClick={()=>videos()} type="button" class="btn btn-outline-dark me-2">Video</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category