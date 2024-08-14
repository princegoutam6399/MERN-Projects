import React from 'react';

const Items = ({ data }) => {
    return (
        <>
            <div className="container-fluid pt-4">
                <div className="container item-container">
                    <div className="row">
                        {data && data.length > 0 ? (
                            data.map((item, index) => (
                                <div key={index} className="col-md-4 col-sm-6">
                                    <div className="items mb-3">
                                        <div className="item">
                                            <img
                                                src={item.urls.small}
                                                alt={item.alt_description}
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Items;
