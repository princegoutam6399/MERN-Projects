import React from 'react'

const Category = () => {
    return (
        <div>
            <div className="container-fluid" >
                <div className="filter-container pt-5 d-flex justify-content-center align-items-center">
                    <div className="row">
                        <div className="col d-flex">
                            <button type="button" class="btn btn-dark me-2">Photos</button>
                            <button type="button" class="btn btn-outline-dark me-2">Video</button>
                            <div class="dropdown">
                                <button class="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Orientation
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Any</a></li>
                                    <li><a class="dropdown-item" href="#">Horizontal</a></li>
                                    <li><a class="dropdown-item" href="#">Vertical</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category