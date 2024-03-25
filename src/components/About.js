import React from 'react';

const About = () => {
  return (
    <section class="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
			<div class="container">
					<div class="row">
							
							<div class="col-lg-7 col-md-12 col-12 d-flex align-items-center">
									<div class="about-text">
											<small class="small-text">Welcome to <span class="mobile-block">my portfolio website!</span></small>
											<h1 class="animated animated-text">
													<span class="mr-2">Hello! I'm</span><br></br>
															<div class="animated-info">
																	<span class="animated-item">Vivek Sindagi</span>
																	<span class="animated-item">Coder</span>
																	<span class="animated-item">Graphic Designer</span>
																	<span class="animated-item">Photographer</span>
															</div>
											</h1>

											<p>I am an aspiring Information Science student. Experienced in C, C++, JavaScript and Python programming languages, and always eager to learn more through hands-on projects. I am currently learning Kotlin, Python Scripting and acquiring AI skills.</p>
											
											<div class="custom-btn-group mt-4">
											<a href="#" class="btn mr-lg-2 custom-btn"><i class='uil uil-file-alt'></i> Download Resume</a>
											<a href="#contact" class="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a>
											</div>
									</div>
							</div>

							<div class="col-lg-5 col-md-12 col-12">
									<div class="about-image svg">
											<img src="images/viveksindagi.png" class="img-fluid" alt="svg"/>
									</div>
							</div>

					</div>
			</div>
    </section>
  );
}

export default About;
