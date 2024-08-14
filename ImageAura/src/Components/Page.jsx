import React from 'react'

const Page = () => {
    return (
        <div>
            <div className="container pt-5 d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col ">
                        <div className="btns">
                            <button className='btn ps-4 pe-4 me-2 btn-outline-success'>Prev</button>
                            <button className='btn ps-4 pe-4  btn-outline-success'>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page