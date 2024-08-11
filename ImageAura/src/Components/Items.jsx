import React, { useEffect, useState } from 'react';
 
const Items = () => {

    // const [query,setQuery] = useState("Animal");
    // const [data,setData] = useState([]);

    // const getPhotos = async ()=>{
    //     await fetch (`https://api.pexels.com/v1/search?query=${query}`,{
    //         headers:{
    //             Authorization:process.env.YOUR_API_KEY,
    //         },
    //     })
    //     .then((resp=>{
    //         return resp.json();
    //     }))
    //     .then((res)=>{
    //         setData(res.photos);
    //     })

    //     useEffect(()=>{
    //         getPhotos();
    //     },[]);


    //     const onKeyHandle = (e)=>{
    //         if(e.keyCode === 13){
    //             getPhotos();
    //         }
    //     }
    // };



    return (
        <div className="container-fluid pt-4">
            <div className="container item-container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="items mb-3">
                            <div className="item">
                                <img
                                    src="https://images.pexels.com/photos/27372398/pexels-photo-27372398/free-photo-of-hiker-with-an-expedition-backpack-sitting-on-a-meadow-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="items mb-3">
                            <div className="item">
                                <img
                                    src="https://images.pexels.com/photos/11643548/pexels-photo-11643548.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="items mb-3">
                            <div className="item">
                                <img
                                    src="https://cdn.pixabay.com/photo/2022/12/16/15/53/island-7660016_640.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="items mb-3">
                            <div className="item">
                                <img
                                    src="https://cdn.pixabay.com/photo/2023/08/17/09/29/rock-8196075_640.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;
