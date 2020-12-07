<template>
  <section id="projects" style="overflow: hidden">
    <b-row class="text-center hjTabsHeader ">
      <b-col>Projects</b-col>
    </b-row>
    <b-row class="text-center justify-content-center no-gutters mx-auto my-auto">
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:assistiveRobots}" v-on:click="tabClick('assistive')">Assistive and rehabilitation</a>
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:bioRobots}" v-on:click="tabClick('bio')" >Bio Robots</a>
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:industrialRobots}" v-on:click="tabClick('industrial')">Industrial Robots</a>
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:simulatorRobots}" v-on:click="tabClick('simulator')">Simulators</a>
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:mobileRobots}" v-on:click="tabClick('mobile')">Mobile Robots</a>
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:actuatorRobots}" v-on:click="tabClick('actuator')">Actuators</a>
    </b-row>
    <div style="height: 1vh"/>
    <div class="hjtabgroups" v-show="assistiveRobots">
      <section id="projects-exoII" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/exo2.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM ExoSkeleton - II</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p><li>Enabling paraplegics to stand up and walk autonomously</li>
          <li>Extensive sensor usage and an advanced control system
            used to give full movement control
          </li>
          <li>A modular design allowing the user to independently put on
            and remove each piece
          </li>
          <li> Weight is lee than 22 kg </li>

          <li>Max speed of 0.5m/s </li>
          <li>Adjustable for different size users </li>
          <li>Battery Life on a single charge, 2 hours continuously walk
            or 8 hours intermittently
          </li>
          <li>Can comfortably be worn while seated in a wheelchair </li>


          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-exoI" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM Exoskeleton - I</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            Most countries report a rapid increase in ageing population worldwide. Elderly people normally have physical deterioration and frailty, imposing a heavy burden on the social health care system. In addition, each year, approximately 15 million people suffer from a stroke worldwide and 5 million of these individuals are left with a permanent disability.

            In this regard, an increasing trend has emerged in using robots for medical purposes. Rehabilitative robotics is an area in the interface of medical and engineering fields, with a variety of different robotic applications, one of which is the use of robotic exoskeleton in rehabilitation. An exoskeleton is a wearable mechanism matching the shape and functions of human body, usually with an anthropomorphic configuration and capable of tracking the movements of the user’s extremities. In most applications, exoskeletons are designed to produce forces that assist the user in performing a motor task. The exoskeleton works mechanically in parallel with human body and can be actuated passively and or actively. By training the wearers’ muscles and assisting their movements, robot-assisted rehabilitation can release therapists from the heavy burden of rehabilitation training and provide long training sessions for the patients with good consistency.

            Lower limb exoskeleton can be used for providing strength during walking, to carry heavy loads or aiding the disabled people for walking. Different exoskeletal devices have been developed to supplement the mechanical power needed by people with lower-limb impairments, developed as tools for gait rehabilitation and mobility assistance. Powered lower-limb exoskeleton has gained considerable interests, since it can help patients with spinal cord injury to stand and walk again.
            The current FUM exoskeleton accommodates an extensive array of sensors integrated with an advanced control system, enabling full movement control. The modular and adjustable design allows the user to independently wear and remove each segment of the robot, and can comfortably be worn while seated in a wheelchair. The overall weight is less than 22 kg while producing a maximum speed of 0.5m/s. Batteries allow 2 hours of continuous or 8 hours of intermittent walk.

          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-KneeExoskeleton" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM Knee Exoskeleton</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
          <li>Ability to carry human weight </li>
          <li>Can be equipped by EMG signals </li>
          <li>Built in SEA actuator and high stiffness. Its open control architecture is
            ideal for research applications
          </li>
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-KneePhysio" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM Knee Physio</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            One specific area in medical robotics is joint rehabilitation. Knee rehabilitation therapy is a very important procedure to recover function after knee injury or surgery. The treatment objective is to reduce knee adhesion and regain adequate joint motion and flexibility. The key to successful knee rehabilitation requires regular exercises in a very controlled manner. Along this lines, 1DOF Lower-limb rehabilitation robot has been designed and constructed at FUM Robotics lab. Capable of using EMG signals, a variety of cognitive games can be employed and integrated with the system to assist the therapist in adjusting the rehabilitation process according to the medical progress of the user.
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
    </div>

    <div class="hjtabgroups" v-show="bioRobots">
      <section id="projects-BionicHand" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM Bionic Hands</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            Bionics or biologically inspired engineering is the application of biological methods and systems found in nature to the study and design of engineering systems and modern technology. A prosthesis is an artificial device that replaces a missing body part, which may be lost through trauma, disease, or a condition present at birth. Prostheses are intended to restore the normal functions of the missing body part, making it easier to perform activities of daily living such as eating, tying shoelaces, carrying bags, opening doors, switching on lights, typing, and more.
            Partial hand loss comprises about 90 percent of all upper extremity amputations and may involve the loss of one or more digits. Prosthetic hands provide functionality, mobility, and confidence to amputees. With these devices designed to help retain the function and appearance of a regular hand, those with full or partial hand loss can overcome trauma, aiding them leading full lives. Basic prosthetic hands are cosmetic replicas with only basic function, whereas powered prosthetic hands have a set of fully articulated joints.

            FUM Bionic hand is designed for individuals with loss of hand to perform everyday activities with ease. Individual motors in each finger allow using natural, coordinated grasp patterns. As an articulating, body-driven prosthesis, the designed device restores length, provides dexterity, replaces a missing hand, designed and fabricated to successfully mimic the complex motion of a finger. This prototype facilitates 5 Degrees of Freedom, allowing independent finger control. Actuators are placed at the palm of the hand, providing the ability to conform to the shape of different objects. EMG signals are utilized for activation of the hand.

          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-BionicHandL-I" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM Bionic Hand L-I</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
          <li>7DOF (includes wrist movement) - 5motors </li>
          <li>5 motors with Worm gear </li>
          <li>Ability to absorb collision forces</li>
          <li>Independent Finger Control</li>
          <li>Uses EMG signals for activation-force feedback sensor</li>
          <li>Designed for daily tasks</li>

          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
    </div>

    <div  class="hjtabgroups" v-show="industrialRobots">
      <section id="projects-ScaraII" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM SCARA II</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            FUM SCARA II is the second series in the class of SCARA manipulators developed at FUM robotics lab. This robot entails industrial grade control architecture for factory usage, with main applications in pick & place scenarios, packaging industry, pharmaceutical lines.
          <li>Robot type: Series RRR-P, XYZ,&#952 </li>
          <li>Repeatability – Best case: 0.02mm</li>
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-Scara" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/6r.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM Industrial SCARA Robot</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>SCARA is an acronym for Selective Compliance Articulated Robot Arm, meaning it is relatively compliant in the X-Y axis, and rigid in the Z-axis. SCARA robots were designed to mimic the action of a human arm to automate assembly or loading and unloading tasks with speed and precision. This feature allows the arm to extend into confined areas and then retract or "fold up" out of the way. This is advantageous for transferring parts from one cell to another or for loading/ unloading process stations that are enclosed. The idea is to get all the benefit of a human employee at a higher speed and without fatigue. Adding one or more SCARA robots to the production line is one of the more affordable ways to increase production speed and deliver payback on your automation investment

            SCARA Robots are a popular option for small robotic assembly applications. The SCARA configuration is unique and designed to handle a variety of material handling operations.
            By virtue of the SCARA's parallel-axis joint layout, the arm is slightly compliant in the X-Y direction but rigid in the 'Z' direction, hence the term: Selective Compliant. This is advantageous for many types of assembly operations, i.e., inserting a round pin in a round hole without binding.
            SCARAs are generally faster than comparable Cartesian robot systems. Their single pedestal mount requires a small footprint and provides an easy, unhindered form of mounting.
          </p>
          <li>Robot type: Series RRR-P,XYZ,ϑ</li>
          <li>Max Payload: 5Kg-Max Cartesian Speed: 8500mm/s</li>
          <li>Repeatability–Bestcase:0.15mm</li>
          <li>Open control architecture for allowing research applications</li>
          <li>Applications: Precision insertion, High speed packaging</li>

          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-ZippyWrist" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM Zippy Wrist–Star Spherical</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p><li>Robot type: 3-RPR parallel robot </li>
          <li>Fully Spherical Parallel Robot </li>
          <li>Applications: Optic surgery, Orienting Objects
          </li>


          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-new6R" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM New6R</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            Designed for various operations such as pick and place, packaging, and welding, this 6 DOF articulated arm has a maximum reach of 1600mm with a maximum payload of 16 kg. Maximum Cartesian speed reaches up to 3 m/s along the selected axis, with a repeatability of ±0.05mm. Open control architecture enables ease of use in research applications.
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>

    </div>

    <div class="hjtabgroups" v-show="simulatorRobots">
      <section id="projects-Stewart" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM Industrial Large Size Stewart</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            A Stewart platform is a type of parallel manipulator that has six prismatic actuators enabling 6-DoF, commonly hydraulic jacks or electric linear actuators, attached in pairs to three positions on the platform's baseplate, crossing over to three mounting points on a top plate. All 12 connections are made via universal joints. Devices placed on the top plate can be moved in the six degrees of freedom in which it is possible for a freely-suspended body to move: three linear movements x, y, z (lateral, longitudinal, and vertical), and the three rotations (pitch, roll, and yaw).
            The Stewart platform design is extensively used in motion simulators, such as in the full flight simulator which requires all 6 degrees of freedom.
            FUM ROBOTICS LAB has developed a high payload and highspeed Stewart robot with 2200Kg payload capacity as a motion platform which can be equipped with pneumatic weight support system.


            <tr>
              <th>Motion</th>
              <th>Yaw</th>
              <th>Pitch</th>
              <th>Roll</th>
              <th>Heave</th>
              <th>Sway</th>
              <th>Surge</th>
            </tr>
            <tr>
              <td>Position</td>
              <td>&#177 20 &#176</td>
              <td>&#177 14 &#176</td>
              <td>&#177 14 &#176</td>
              <td>&#177 30 cm</td>
              <td>&#177 30 cm</td>
              <td>&#177 30 cm</td>
            </tr>
            <tr>
              <td>Velocity</td>
              <td> 25 &#176/s</td>
              <td> 20 &#176/s</td>
              <td> 20 &#176/s</td>
              <td> 0.45 m/s</td>
              <td> 0.5 m/s</td>
              <td> 0.5 m/s</td>
            </tr>
            <tr>
              <td>Acceleration</td>
              <td>180&#176/s&#178</td>
              <td>180&#176/s&#178</td>
              <td>180&#176/s&#178</td>
              <td>3m/s&#178</td>
              <td>3m/s&#178</td>
              <td>3m/s&#178</td>
            </tr>
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-StewartMid-Size" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/FUM Stewar Mid-size.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM Industrial Mid-Size Stewart</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            Another developed robot in this class is A 450 kg payload Stewart robot with electromechanical linear actuators for high speed and high acceleration applications.</p>

          <h>Specification</h>
          <p>
            <tr>

              <th>Motion</th>
              <th>Yaw</th>
              <th>Pitch</th>
              <th>Roll</th>
              <th>Heave</th>
              <th>Sway</th>
              <th>Surge</th>
            </tr>
            <tr>
              <td>Position</td>
              <td>&#177 20 &#176</td>
              <td>&#177 14 &#176</td>
              <td>&#177 14 &#176</td>
              <td>&#177 14 cm</td>
              <td>&#177 25 cm</td>
              <td>&#177 25 cm</td>
            </tr>
            <tr>
              <td>Velocity</td>
              <td> 50 &#176/s</td>
              <td> 50 &#176/s</td>
              <td> 50 &#176/s</td>
              <td> 0.5 m/s</td>
              <td> 1 m/s</td>
              <td> 1 m/s</td>
            </tr>
            <tr>
              <td>Acceleration</td>
              <td>500&#176/s&#178</td>
              <td>500&#176/s&#178</td>
              <td>500&#176/s&#178</td>
              <td>2g</td>
              <td>1g</td>
              <td>1g</td>
            <tr></tr>
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-MiniParallel" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM Mini 6DOF Parallel Robot</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            The FUM Mini 6DOF Parallel Robot, is of type 6RSS structure for applications such as Mechanical bulls and biomedical. It is only 30cm in length, widths and height.
          </p>
          <h3>Specification</h3>
          <p>
            <tr>

              <th>Motion</th>
              <th>Yaw</th>
              <th>Pitch</th>
              <th>Roll</th>
              <th>Heave</th>
              <th>Sway</th>
              <th>Surge</th>
            </tr>
            <tr>
              <td>Position</td>
              <td>&#177 20 &#176</td>
              <td>&#177 25 &#176</td>
              <td>&#177 25 &#176</td>
              <td>&#177 5 cm</td>
              <td>&#177 5 cm</td>
              <td>&#177 5 cm</td>
            </tr>
            <tr>
              <td>Velocity</td>
              <td> 50 &#176/s</td>
              <td> 50 &#176/s</td>
              <td> 50 &#176/s</td>
              <td> 0.5 m/s</td>
              <td> 0.5 m/s</td>
              <td> 0.5 m/s</td>
            </tr>



          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-3psp" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM 3-PSP Industrial Parallel Robot</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            The Semi industrial 3PSP is of type 3PSP parallel robot. It can run in any of the three X,Y,Z,ϑ,φ,λ degrees of freedom, prominently used for orientating tools and solar panels. The robot has an open control architecture suitable for research applications.
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-LPSimulator" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/LP Simulator.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM LP Simulator</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
          <li>Robot type: 6-RSU </li>
          <li>Approx. dim’s (parked):
            1800x1800x720mm(Width*Length*Height)
          </li>
          <li>Acceleration: 0.6g</li>
          <li>Stroke: 120x120x120mm(Width*Length*Height)</li>
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
    </div>

    <div class="hjtabgroups" v-show="mobileRobots">
      <section id="projects-Virub" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/Virub PNG.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM VIRUB 3036</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>Hospital Acquired Infections (HAIs) are a significant and increasing problem in the global healthcare sector. Each year millions of patients are infected, and thousands of patients die due to infections acquired during hospitalization. Furthermore, HAIs generate a massive financial implication.
            UV light, which is ultraviolet radiation with wavelengths between 200 and 290 nm, has been proven to be effective in breaking down the pathogens’ DNA and RNA beyond recovery, thus stopping them from replicating.
            The UVD Robot is used as part of the regular cleaning cycle, and aims at preventing and reducing the spread of infectious diseases, viruses, bacteria, and other types of harmful organic micro-organisms in the environment by breaking down their DNA-structure. This robot is a supplementary device which assists the cleaning staff. The collaborative robot can be used in various enclosed spaces – not only in hospitals. The technology also works in environments such as office spaces, shopping malls, schools, airports and production facilities.
            However, are mostly not designed to work with humans in the room. Their bulky size makes it difficult to navigate crowded spaces and reach shadowy areas. They blast light that can be dangerous to humans in large doses, requiring rooms to be vacated for the safety of healthcare workers or patients since exposure to the light can be harmful, causing sunburn, eye damage, and even skin cancer.
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-Segway" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM Segway</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>Two-wheeled electric vehicles have emerged as a recent convenient method to travel around towns and cities. FUM Segway is a two-wheeled, self-balancing personal transporter for both research and industrial application. The user-friendly design is able to carry 80Kg, with a maximum speed of 20 Km/h.
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-lawnmower" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM Lawnmower</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
          <li>Fully Autonomous lawn Mower </li>
          <li>Automated Lawn cut height adjustment </li>
          <li>High precision GPS system</li>
          <li>Collision safe blades</li>
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>

    </div>

    <div class="hjtabgroups" v-show="actuatorRobots">
      <section id="projects-LinearSea" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM Linear SEA</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            In general, actuators are built to be as stiff as possible to increase the bandwidth. When a robot works in a structured environment, its automation is easier than in a non-structured environment in which case its modeling is quite difficult and presents a high computational effort. To overcome this difficulty, series elastic actuator (SEA) has been applied in compliant robotic grasping. Unlike rigid actuators, a SEA contains an elastic element in series with the mechanical energy source. Such an elastic element gives SEAs tolerance to impact loads, low mechanical output impedance, passive mechanical energy storage, and increased peak power output. The spring has to be able to support the loads, but it cannot be too stiff; otherwise, system impedance will be high.
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-RotarySEA" class="spotlight style3 left">
        <span class="image fit"><img src="~/assets/Zippy.png" alt="" style="height: 100vh; width: auto;float: right"/></span>
        <div class="content">
          <header>
            <h2>FUM Rotary SEA</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
          <li>Stiffness: 200N.m/rad </li>
          <li>Max Instantaneous Torque: 35 N.m </li>
          <li>Nominal Torque: 12 N.m</li>
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
      <section id="projects-linearActuator" class="spotlight style2 right">
        <span class="image fit"><img src="~/assets/FUM-Linear-Actuator-1.png" alt="" style="height: 100vh; width: auto;float: left"/></span>
        <div class="content">
          <header>
            <h2>FUM Linear Actuator</h2>
            <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
          </header>
          <p>
            Linear actuators are quite common as they form the bulk of applications used in the control of equipment moving along a lateral axis. The linear actuator developed at FUM Robotics lab has a maximum stroke of 330mm and capable of exerting a maximum continues force of 4250 N. The maximum speed of this actuator is 0.53 m/s along the axis of actuation.
          </p>
          <ul class="actions">
            <li><a href="#" class="button">Learn More</a></li>
          </ul>
        </div>
        <a href="#researchtopics" class="nextButton goto-next scrolly">Next</a>
      </section>
    </div>

    <a href="#three" class="nextButton goto-next scrolly">Next</a>
  </section>
</template>

<script >

export default {
  name: "IndexProjects",
  created() {
    this.assistiveRobots=true;
  },
  data() {
    return {
      assistiveRobots: true,
      bioRobots: false,
      industrialRobots: false,
      simulatorRobots: false,
      mobileRobots: false,
      actuatorRobots: false
    }
  },
  methods: {
    tabClick: function (str) {
        this.assistiveRobots= false;
        this.bioRobots= false;
        this.industrialRobots= false;
        this.simulatorRobots= false;
        this.mobileRobots= false;
        this.actuatorRobots= false;
        switch (str) {
          case "assistive":
            this.assistiveRobots= true;
            break;
          case "bio":
            this.bioRobots= true;
            break;
          case "industrial":
            this.industrialRobots= true;
            break;
          case "simulator":
            this.simulatorRobots= true;
            break;
          case "mobile":
            this.mobileRobots= true;
            break;
          case "actuator":
            this.actuatorRobots= true;
            break;

        }
    }
  }
}

</script>

<style scoped>

</style>
