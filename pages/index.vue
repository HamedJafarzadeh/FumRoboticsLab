<template>
  <div id="page-wrapper" style="width: 100%">

    <FirstSection/>

    <section class="spotlight style1 bottom" id="about">
      <span class="imagemain"></span>
      <div class="content pt-0 ">
        <div class="container p-0">
          <div class="d-flex justify-content-center mt-4">
            <img class="w-100" src="~/assets/bg.jpg" alt="Fum Robotics" style="border-radius: 0.25rem">
          </div>
          <div class="row" style="margin: 2rem 0.1rem">
            <div class="col-lg-3 col-lg-12 p-0">
              <header>
                <h3 style="font-weight: bold; font-size: x-large">About us</h3>
              </header>
            </div>
            <div class="col-lg-9 col-lg-12">
              <div class="row">
                <p style="text-align: justify">The Robotics Laboratory of Ferdowsi University of Mashhad (FUM Robotics)
                  was established in 2010. As one of the most comprehensive centers for multi-disciplinary robotics
                  research in Iran, our lab is dedicated not only to education and research, but also addressing
                  industrial needs. The Center is led by Professor Alireza Akbarzadeh and is composed of academic
                  faculty and researchers, providing undergrad, MSs, and PhD students with necessary tools to enhance
                  their knowledge and working expertise in this field.
                  The laboratory currently encompasses four specialized interdisciplinary working groups in the fields
                  of medical and rehabilitation robotics, industrial robotic arms, robotic simulators, and mobile
                  platforms. These fields in turn employ the collaborative output of dynamic design and modeling,
                  optimization, control and construction. The lab provides space for on-site robot design, with a
                  dedicated workshop and conference room, and is able to accommodate over 30 attendees.
                  High quality research and productivity is evidenced by satisfactory execution of
                  contracts with a value of 26 billion Rials during the last 6 years. We are one of the most vigorous
                  and highly-equipped robotics laboratories in the country, benefiting
                  from the cooperation of the University's soft computing hub and providing close communication
                  with other researchers in Iranian universities and abroad. Our ambition is to create a focal point
                  for advanced robotics studies by providing world-class research and teaching.</p>
              </div>
            </div>


          </div>
        </div>
      </div>
      <a id="nextButton" href="#two" class="nextButton goto-next scrolly">Next</a>
    </section>

    <!-- Projects -->
    <IndexProjects/>


    <!-- Four -->


    <!-- Five -->
    <section id="publications" class="wrapper style2 special fade-up  ">

      <div class="content">
        <div class="container">
          <header>
            <h2 style="margin-bottom: 0cm; margin-top: -1.5cm">
              <fa :icon="['fa','book']" style="margin-right: 10px"/>
              Recent Publications
            </h2>
          </header>
          <div class="row  justify-content-center text-center">
            <div class="col-12  justify-content-center text-center">
              <hr style="margin-top: 2rem">
              <ul style="text-decoration: none; list-style: none">
                <li>
                  <h4 class="mb-0">
                    <fa :icon="['fa','book']" style="margin-right: 10px"/>
                    Assist-As-Needed control of a hip exoskeleton based on a novel
                    strength index
                  </h4>
                  <p>
                    <fa :icon="['fa','users']" style="margin-right: 10px"/>
                    Naeim Naghavi- Alireza Akbarzadeh- S. Mohammad Tahamipour-Z.- Iman Kardan
                  </p>
                </li>
                <li>
                  <h4 class="mb-0">
                    <fa :icon="['fa','book']" style="margin-right: 10px"/>
                    Parametric design and multi-objective optimization of a general 6- P US parallel manipulator
                  </h4>
                  <p>
                    <fa :icon="['fa','users']" style="margin-right: 10px"/>
                    S. Nader Nabavi- Morteza Shariatee- Javad Enferadi- Alireza Akbarzadeh
                  </p>
                </li>

                <li>
                  <h4 class="mb-0">
                    <fa :icon="['fa','book']" style="margin-right: 10px"/>
                    Robotic hand: A review on linkage-driven finger mechanisms of prosthetic hands and evaluation of the
                    performance criteria
                  </h4>
                  <p>
                    <fa :icon="['fa','users']" style="margin-right: 10px"/>
                    S. Reza Kashef- Samane Amini- Alireza Akbarzadeh
                  </p>
                </li>

                <li>
                  <h4 class="mb-0">
                    <fa :icon="['fa','book']" style="margin-right: 10px"/>
                    Inverse dynamics analysis of a general spherical star-triangle parallel manipulator using principle
                    of virtual work
                  </h4>
                  <p>
                    <fa :icon="['fa','users']" style="margin-right: 10px"/>
                    Javad Enferadi- Alireza Akbarzadeh Tootoonchi
                  </p>
                </li>

                <li>
                  <h4 class="mb-0">
                    <fa :icon="['fa','book']" style="margin-right: 10px"/>
                    Robust Output Feedback Assistive Control of a Compliantly
                    Actuated Knee Exoskeleton
                  </h4>
                  <p>
                    <fa :icon="['fa','users']" style="margin-right: 10px"/>
                    Iman Kardan- Alireza Akbarzadeh
                  </p>
                </li>
                <p style="font-size: 18px"> For more information about latest articles, <br> See Also <a
                  style="color:white; font-weight: bold"
                  href="https://scholar.google.com/citations?user=DhU-W1gAAAAJ&hl=en">
                  Alireza Akbarzadeh </a>
                  and <a style="color: white;  font-weight: bold"
                         href="https://scholar.google.com/citations?user=2gfJ9aAAAAAJ&hl=en">
                    Iman Kardan </a>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="footer">
      <div class="row">
        <div class="col-lg-4 offset-lg-4 text-center">
          <label for="emailSubscribe">Subscribe for latest news from us!</label>
          <!-- Begin Mailchimp Signup Form -->
          <div id="mc_embed_signup">
            <form
              action="https://fumrobotics.us7.list-manage.com/subscribe/post?u=d474a9136ae52aac644d9a47a&amp;id=4267b78c35"
              method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
              target="_blank" novalidate>
              <div id="mc_embed_signup_scroll" class="input-group">
                <input type="email" value="" name="EMAIL" class="email form-control" id="mce-EMAIL"
                       placeholder="Email Address" required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                                                                          name="b_d474a9136ae52aac644d9a47a_4267b78c35"
                                                                                          tabindex="-1" value=""></div>
                <button type="submit" class="btn btn-primary">Subscribe</button>
              </div>
            </form>
            <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
          </div>
        </div>
      </div>
      <ul class="copyright">
        <li>&copy; FUM Robotics Lab. All rights reserved.</li>
        <li>Design: <a href="http://hamedj.ir"> Hamed Jafarzadeh</a> & Soroush Ahooye Atashin - Inspired by <a
          href="http://html5up.net">HTML5 UP</a></li>
      </ul>
    </footer>

  </div>
</template>

<script>
import IndexProjects from "@/components/IndexProjects";
import FirstSection from "@/components/FirstSection";

export default {
  components: {FirstSection, IndexProjects},
}
</script>

<style scoped>

</style>
