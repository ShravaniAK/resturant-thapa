import React from 'react'

export const MenuCard = ({menuData}) => {
    return (
<>
<section className="main-card--container">


{menuData.map((curelement)=>{
    return (
<>
<div>


<div className="card-container" key={curelement.id}>
<div className="card">
    <div className="card-body">
        <span className='card-number card-circle subtle'>
            {curelement.id}
        </span>
        <span className="card-author subtle">
            {curelement.name}
        </span>
        <h2 className="card-title"> {curelement.name} </h2>
        <span className="card-description subtle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum facere delectus minima provident nobis ab debitis reiciendis quod possimus?
        </span>
        <div className="card-read">Read</div>
        <img src={curelement.image} alt="" />
        
        <span className="card-tag subtle">order now </span>
    </div>
</div>
</div>
</div>
</>
);

})}

</section>
</>
  );
}
export default MenuCard;