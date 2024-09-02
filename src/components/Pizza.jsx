import React, { useEffect, useState } from 'react'
import style from "./Pizza.module.css"
export default function Pizza() {
    const[pizza,setPizza]=useState([]);
    async function getPizza(){
        const response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        const data=await response.json();
        setPizza(data.recipes);
    }
    useEffect(()=>{
        getPizza();
    }
    ,[Pizza])
  return (
    <>
    <section className="pizza_info">
    <div className="container ">
        <div className={`${style.title}`}>Recipes</div>
        <div className="row g-4">
            {
                pizza.map((pizza)=>{
                    return(
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="card shadow-lg">
                                <img src={pizza.image_url} className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{pizza.title.split(' ').slice(0,3).join(' ')}</h5>
                                    <a target='_blank' href={pizza.source_url} className={`btn btn-outline-dark`}>Get Recipe</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    </section>
    
    </>
  )
}
