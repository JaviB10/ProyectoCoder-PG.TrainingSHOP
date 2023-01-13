import React from "react";

const Loading = () => {
    return(
        <div className="container text-center mt-5 pt-5 mb-5 pb-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="spinner-grow" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Loading;