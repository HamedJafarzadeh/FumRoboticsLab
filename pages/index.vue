<template>
  <div id="page-wrapper">

    <FirstSection/>

    <section id="about" class="spotlight style1 bottom">
      <span class="imagemain"><img src="~/assets/lab.jpg" alt="" style="width: 100%"/></span>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-3 col-12-medium">
              <header>
                <h2>About us</h2>
                <p>Ferdowsi University of Mashhad Robotic Labratory</p>
              </header>
            </div>
            <div class="col-9 col-12-medium">

              <p style="text-align: justify">The Robotics Laboratory of Ferdowsi University of Mashhad (FUM Robotics) was established in 2010. As one of the most comprehensive centers for multi-disciplinary robotics research in Iran, our lab is dedicated not only to education and research, but also addressing industrial needs. The Center is led by Professor Alireza Akbarzadeh and is composed of academic faculty and researchers, providing undergrad, MSs, and PhD students with necessary tools to enhance their knowledge and working expertise in this field.
                The laboratory currently encompasses four specialized interdisciplinary working groups in the fields of medical and rehabilitation robotics, industrial robotic arms, robotic simulators, and mobile platforms. These fields in turn employ the collaborative output of dynamic design and modeling, optimization, control and construction. The lab provides space for on-site robot design, with a dedicated workshop and conference room, and is able to accommodate over 30 attendees.
                High quality research and productivity is evidenced by satisfactory execution of contracts with a value of 26 billion Rials during the last 6 years. We are one of the most vigorous and highly-equipped robotics laboratories in the country, benefiting from the cooperation of the University's soft computing hub and providing close communication with other researchers in Iranian universities and abroad. Our ambition is to create a focal point for advanced robotics studies by providing world-class research and teaching.</p>
            </div>


          </div>
        </div>
      </div>
      <a id="nextButton" href="#two" class="nextButton goto-next scrolly">Next</a>
    </section>

    <!-- Projects -->
    <IndexProjects />


    <!-- Four -->
    <section id="researchtopics" class="wrapper style1 special fade-up">
      <div class="container">
        <header class="major">
          <h2>Research Topics</h2>
        </header>
        <div class="box alt">
          <div class="row gtr-uniform">
           <section class="col-4 col-6-medium col-12-xsmall">
               <img class="icon solid alt major solid" style="filter: invert();" src="~/assets/icons/dynamic.png"/>
             <h3>Robot Dynamic</h3>
            </section>
            <section class="col-4 col-6-medium col-12-xsmall">
              <img class="icon solid alt major solid" style="filter: invert();" src="~/assets/icons/control.png"/>
              <h3>Robot Control</h3>
            </section>
            <section class="col-4 col-6-medium col-12-xsmall">
              <img class="icon solid alt major solid" style="filter: invert();" src="~/assets/icons/design.png"/>
              <h3>Robot Mechanical & Structural Design</h3>
            </section>
            <section class="col-4 col-6-medium col-12-xsmall">
              <img class="icon solid alt major solid" style="filter: invert();" src="~/assets/icons/sensor.png"/>
              <h3>Sensor Development & Fusion</h3>
            </section>
            <section class="col-4 col-6-medium col-12-xsmall">
              <img class="icon solid alt major solid" style="filter: invert();" src="~/assets/icons/rehab.png"/>
              <h3>Robotic Rehabilitation & Assistive Strategies</h3>
            </section>
            <section class="col-4 col-6-medium col-12-xsmall">
              <img class="icon solid alt major solid" style="filter: invert();" src="~/assets/icons/power.png"/>
              <h3>Robotic Power Electronic</h3>

            </section>
          </div>
        </div>

      </div>
    </section>

    <!-- Five -->
    <section id="publications" class="wrapper style2 special fade-up  ">

      <div class="content">
        <div class="container">
          <header>
            <h2>Recent Publications</h2>
          </header>
          <div class="row  justify-content-center text-center">
            <div class="col-12  justify-content-center text-center">
              <hr>
              <ul style="text-decoration: none; list-style: none">
                <li>
                  <h4><span class="icon solid  fa-book" style="margin-right: 10px"></span> Assist-As-Needed control of a hip exoskeleton based on a novel
                    strength index</h4>
                  <p> <span class="icon solid  fa-users" style="margin-right: 10px"></span>Naeim Naghavi- Alireza Akbarzadeh- S. Mohammad Tahamipour-Z.- Iman Kardan</p>
                </li>
                <li>
                  <h4><span class="icon solid  fa-book" style="margin-right: 10px"></span> Parametric design and multi-objective optimization of a general 6- P US parallel manipulator</h4>
                  <p> <span class="icon solid  fa-users" style="margin-right: 10px"></span>S. Nader Nabavi- Morteza Shariatee- Javad Enferadi- Alireza Akbarzadeh</p>
                </li>

                <li>
                  <h4><span class="icon solid  fa-book" style="margin-right: 10px"></span> Robotic hand: A review on linkage-driven finger mechanisms of prosthetic hands and evaluation of the performance criteria</h4>
                  <p> <span class="icon solid  fa-users" style="margin-right: 10px"></span>S. Reza Kashef- Samane Amini- Alireza Akbarzadeh</p>
                </li>

                <li>
                  <h4><span class="icon solid  fa-book" style="margin-right: 10px"></span> A Human Interactive Hybrid FES-Robotic System Applicable to Improvement of Foot Drop after Stroke: Case Report of a Patient with Chronic Stroke</h4>
                  <p> <span class="icon solid  fa-users" style="margin-right: 10px"></span>Hamid Reza Kobravi- Yadollah Farzaneh- Milad Farsyar Majd-  Alireza Mania Sheikh</p>
                </li>

                <li>
                  <h4><span class="icon solid  fa-book" style="margin-right: 10px"></span> Robust Output Feedback Assistive Control of a Compliantly
                    Actuated Knee Exoskeleton</h4>
                  <p> <span class="icon solid  fa-users" style="margin-right: 10px"></span>Iman Kardan- Alireza Akbarzadeh</p>
                </li>

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
          <div id="mc_embed_signup" >
            <form action="https://fumrobotics.us7.list-manage.com/subscribe/post?u=d474a9136ae52aac644d9a47a&amp;id=4267b78c35" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll" class="input-group">
                <input type="email" value="" name="EMAIL" class="email form-control" id="mce-EMAIL" placeholder="Email Address" required>
                <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d474a9136ae52aac644d9a47a_4267b78c35" tabindex="-1" value=""></div>
                <button type="submit" class="btn btn-primary">Subscribe</button>
              </div>
            </form>
            <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>
          </div>

          <!--End mc_embed_signup-->
<!--          <form>-->
<!--            <div class="input-group">-->
<!--              <input type="text" class="form-control" id="emailSubscribe" placeholder="Enter your email address">-->
<!--              <button type="submit" class="btn btn-primary">Subscribe</button>-->
<!--            </div>-->
<!--            <small id="emailHelp" class="form-text">We'll never share your email with anyone else.</small>-->
<!--          </form>-->
        </div>
      </div>
      <ul class="copyright">
        <li>&copy; FUM Robotics Lab. All rights reserved.</li>
        <li>Design: <a href="http://html5up.net">HTML5 UP </a> -  <a href="http://hamedj.ir"> Edited by Hamed Jafarzadeh</a> & Soroush Ahoye Atashin</li>
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

// import Vue from 'vue'
// export default Vue.extend({})
</script>

<style>

</style>
