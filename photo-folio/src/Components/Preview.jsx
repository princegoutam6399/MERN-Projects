import { Link } from 'react-router-dom';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'

const Preview = () => {

    const imagesUrl = [image1, image2, image3, image4, image5, image6];


    return (
        <>
            <div className="preview-head">
                <div className="container-fluid pt-5">
                    <div className="row justify-content-center pt-5">
                        <div className="col-lg-6">
                            <div className="about-text text-center">
                                <h1>Gallery Single</h1>
                                <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
                                    consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione
                                    sint. Sit quaerat ipsum dolorem.</p>
                                <Link to='/contact'><button className="btn pe-4 ps-4 text-center text-white mt-4 w-auto bg-success text-decoration-none">AVAILABLE
                                    FOR HIRE</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container pt-5 min-vh-100 min-vw-75'>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {imagesUrl.map((url, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                        <img src={url} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div class="row justify-content-between">
                    <div class="col-lg-8">
                        <div class="portfolio-description">
                            <h2>This is an example of portfolio details</h2>
                            <p>
                                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                            </p>
                            <p>
                                Amet consequatur qui dolore veniam voluptatem voluptatem sit. Non aspernatur atque natus ut cum nam et. Praesentium error dolores rerum minus sequi quia veritatis eum. Eos et doloribus doloremque nesciunt molestiae laboriosam.
                            </p>

                            <div class="testimonial-item">
                                <p>
                                    <i class="fa-solid fa-quote-left"></i>
                                    <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                    <i class="fa-solid fa-quote-right"></i>
                                </p>
                                <div>
                                    <img src="https://bootstrapmade.com/demo/templates/PhotoFolio/assets/img/testimonials/testimonials-2.jpg" class="testimonial-img rounded-5" style={{ width: "65px" }} alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                            </div>

                            <p>
                                Impedit ipsum quae et aliquid doloribus et voluptatem quasi. Perspiciatis occaecati earum et magnam animi. Quibusdam non qui ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus deserunt assumenda tempore. Delectus voluptas necessitatibus est.
                            </p>

                            <p>
                                Sunt voluptatum sapiente facilis quo odio aut ipsum repellat debitis. Molestiae et autem libero. Explicabo et quod necessitatibus similique quis dolor eum. Numquam eaque praesentium rem et qui nesciunt.
                            </p>

                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="portfolio-info">
                            <h3>Project information</h3>
                            <ul className=' list-unstyled'>
                                <li className='text-secondary-emphasis'>Category</li>
                                <strong>Web Design</strong>
                                <li className='text-secondary-emphasis'>Client</li>
                                <strong>ASU Company</strong>
                                <li className='text-secondary-emphasis'>Project date</li>
                                <strong>01 August, 2024</strong>
                                <li className='text-secondary-emphasis'>Project URL</li>
                                <strong><a href="/" className='text-success'>www.example.com</a></strong>
                                <li className='mt-3'><a href="#" class="btn text-white rounded-5 ps-4 pt-2 pb-2 pe-4" style={{ backgroundColor: "#27A776" }}>Visit Website</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preview