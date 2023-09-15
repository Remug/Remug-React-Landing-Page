import React from "react";

const Card = ({img, title, description, button}) => {
  return (
      <div className="col-12 col-md-6 col-lg-3 mt-5 bg-secondary">
          <div className="card bg-secondary">
              <div className="ratio ratio-1x1 border border-dark">
                  <div className="h-100 Fimag border border-dark ">
                      <img src={img}  className="card-img-top img-fluid h-100 object-fit-cover " alt="..."/>
                  </div>
              </div>
              <div className="card-body text-center">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href="#" className="btn btn-danger">{button}</a>
              </div>
          </div>
      </div>
  );
};

export default Card;