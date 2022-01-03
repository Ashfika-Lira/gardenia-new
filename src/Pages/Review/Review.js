import React from 'react';
import './Review.css';
import user1 from '../../images/1.jpg';
import user2 from '../../images/user-2.jpg';
import user3 from '../../images/user-3.jpg';
import user4 from '../../images/user-4.jpg';
import user5 from '../../images/user-5.jpeg';
import user6 from '../../images/user-6.jpg';

const Review = () => {
    return (
        <section className="container my-5">
            <h1 className="text-center my-5">Happy <span className="colored-text">Clients says</span></h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={user1} className="card-img-top rounded-circle w-50 my-5 mx-auto" alt="..."/>
                        <div className="card-body">
                            <p className="card-text text-center">As soon as I got the solar outdoor lights out the box and turned on the on switch, it didn't lit up. So I put it under direct sunlight for about 10 hours.It worked! It's so beautiful! I can't wait to put it out in my front flower bed. </p>
                            <h6 className="text-center colored-name my-3">Rosy Brown</h6>
                            <h6 className="text-center my-3">Doctor</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={user2} className="card-img-top rounded-circle w-50 my-5 mx-auto" alt="..."/>
                        <div className="card-body">
                            <p className="card-text text-center">It is small, I really liked this solar watering can. I bought this as a gift for my friend. She has a large yard and I thought this was a great idea! I'm so happy I bought this solar watering can lights!</p>
                            <h6 className="text-center colored-name my-3">Anahita hills</h6>
                            <h6 className="text-center my-3">Banker</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={user3} className="card-img-top rounded-circle w-50 my-5 mx-auto" alt="..."/>
                        <div className="card-body">
                            <p className="card-text text-center">Arrived neatly and conviently packaged. It was adorable! I unwrapped it and peeled back the sticker on the solar panel. Its been out in my yard for a day charging so I will add more photos once it gets dark.</p>
                            <h6 className="text-center colored-name my-3">Lucy Bears</h6>
                            <h6 className="text-center my-3">IT Officer</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={user4} className="card-img-top rounded-circle w-50 my-5 mx-auto" alt="..."/>
                        <div className="card-body">
                            <p className="card-text text-center">I bought this for my aunt's birthday and she loves it. She loves her garden and this fits nicely in her raised garden bed. It's not very big, it's light and hangs comfortably. The light is so pretty and falls like rain. It's a very nice gift.</p>
                            <h6 className="text-center colored-name my-3">Robert Max</h6>
                            <h6 className="text-center my-3">Pilot</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={user5} className="card-img-top rounded-circle w-50 my-5 mx-auto" alt="..."/>
                        <div className="card-body">
                            <p className="card-text text-center">This Is a beautiful addition to my yard. Its easy to assemble. Its lightweight and durable. It makes a great gift idea for anyone who enjoys gardening or lights. The watering can is made from a sturdy metal and the lights are fairy lights.</p>
                            <h6 className="text-center colored-name my-3">Jack Brown</h6>
                            <h6 className="text-center my-3">Accountant</h6>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={user6} className="card-img-top rounded-circle w-50 my-5 mx-auto" alt="..."
                            width="177" height="177"/>
                        <div className="card-body">
                            <p className="card-text text-center">Highly satisfied with their services.They are all good at behaviour.Their product is also very good.Will purchase from them later on.You guys can try out their services.</p>
                            <h6 className="text-center colored-name my-3">Jim Lewis</h6>
                            <h6 className="text-center my-3">Lawyer</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;