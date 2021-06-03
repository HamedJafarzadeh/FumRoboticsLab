<template>
  <section id="researchtopics" style="overflow: hidden">
    <b-row class="text-center hjTabsHeader">
      <b-col>Research Topics</b-col>
    </b-row>
    <b-row class="text-center justify-content-center no-gutters main-menu">
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:assistiveRobots}" v-on:click="tabClick('assistive')">Assistive and rehabilitation</a>
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:bioRobots}" v-on:click="tabClick('bio')" >Bio Robots</a>
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:industrialRobots}" v-on:click="tabClick('industrial')">Industrial Robots</a>
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:simulatorRobots}" v-on:click="tabClick('simulator')">Simulators</a>
      <a class="col-lg-2 col-md-3 hjtabsTitle" :class="{selected:mobileRobots}" v-on:click="tabClick('mobile')">Mobile Robots</a>
    </b-row>

    <div style="height: 1vh"/>
    <div class="hjtabgroups" v-show="assistiveRobots">
      <IndexProjectItem  :is-right="true" project-name="FUM ExoSkeleton - II"  project-subtitle="" project-link="/fumexoskeleton2" project-picture="exo2.png" >

          <li>Enabling paraplegics to stand up and walk autonomously</li>
        <li>Extensive sensor usage and an advanced control system
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
      </IndexProjectItem>
      <IndexProjectItem :is-right="false" project-name="FUM Exoskeleton - I"  project-subtitle="" project-link="/fumexoskeleton1" project-picture="exo1p.png">
        a hard, laminated plastic shell that provides the weight-bearing support. Most countries report a rapid increase in ageing population worldwide. Elderly people normally have physical deterioration and frailty, imposing a heavy burden on the social health care system. In addition, each year, approximately 15 million people suffer from a stroke worldwide and 5 million of these individuals are left with a permanent disability.

        In this regard, an increasing trend has emerged in using robots for medical purposes. Rehabilitative robotics is an area in the interface of medical and engineering fields, with a variety of different robotic applications, one of which is the use of robotic exoskeleton in rehabilitation.

      </IndexProjectItem>
      <IndexProjectItem  :is-right="true" project-name="FUM Hexa"  project-subtitle="" project-link="/fumhexa" project-picture="HEXA.png" >
        Supporting ambulatory functions in the elderly or patients with gait impairment Hip Exoskeleton for Assistance (HEXA) is a wearable robotic system for assistive technology and rehabilitation engineering, primarily developed to help patients with lower limb disabilities to restore or improve their walking ability. The robot consists of two 70 BLDC with Harmonic Drive gearbox, each for either hip; driving the two metal links which are placed parallel to the human thigh and fastened with Velcro straps. HEXA assists disabled people regain their locomotion with significant reduction of the therapists’ physical burden.
      </IndexProjectItem>
      <IndexProjectItem :is-right="false" project-name="FUM Knee Exoskeleton"  project-subtitle="" project-link="/fumkneeexoskeleton" project-picture="fumkneeExo.jpg">
        <li>Ability to carry human weight</li>
        <li>Can be equipped by EMG signals
        <li>Built in SEA actuator and high stiffness. Its open control architecture is
          ideal for research applications
        </li>
      </IndexProjectItem>
      <IndexProjectItem :is-right="true" project-name="FUM Knee Physio"  project-subtitle="" project-link="/fumkneephysio" project-picture="Physio.png">
        Knee rehabilitation enabling game based therapy One specific area in medical robotics is joint rehabilitation. Knee rehabilitation therapy is a very important procedure to recover function after knee injury or surgery. The treatment objective is to reduce knee adhesion and regain adequate joint motion and flexibility. The key to successful knee rehabilitation requires regular exercises in a very controlled manner. Along this lines, 1DOF Lower-limb rehabilitation robot has been designed and constructed at FUM Robotics lab. Capable of using EMG signals, a variety of cognitive games can be employed and integrated with the system to assist the therapist in adjusting the rehabilitation process according to the medical progress of the user.
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Foot Sensor"  project-subtitle="" project-link="/fumfootsensor" project-picture="footsensor.png">
        Foot Sensor
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM EMG"  project-subtitle="" project-link="/fumEMG" project-picture="emg.png">
        Electromyography (EMG) is a device for evaluating and recording a series of electrical signals that emanate from body muscles The EMG device is responsible for recording the electrical movements of the muscle during expansion and contraction.
        The EMG system designed in FUM Robotics Lab is a 16-channel board based on active electrodes.
        The hardware features of this system are as follows:The EMG device is responsible for recording the electrical movements of the muscle during expansion and contraction.
        The EMG system designed in FUM Robotics Lab is a 16-channel board based on active electrodes. The hardware features of this system are as follows:
      </IndexProjectItem>


    </div>

    <div class="hjtabgroups" v-show="bioRobots">

      <IndexProjectItem :is-right="false" project-name="FUM Bionic Hands"  project-subtitle="" project-link="/fumbionichands" project-picture="hand2.png">
        Biologically inspired hand with articulated finger motion  Bionics or biologically inspired engineering is the application of biological methods and systems found in nature to the study and design of engineering systems and modern technology. A prosthesis is an artificial device that replaces a missing body part, which may be lost through trauma, disease, or a condition present at birth. Prostheses are intended to restore the normal functions of the missing body part, making it easier to perform activities of daily living such as eating, tying shoelaces, carrying bags, opening doors, switching on lights, typing, and more.

      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Bionic Hand L-I"  project-subtitle="" project-link="/fumbionichand-L1" project-picture="FUMbionichandL1.png">
        7 DoF bionic hand prosthetic with independent finger manipulation
        <li>7DOF (includes wrist movement) - 5motors </li>
        <li>5 motors with Worm gear </li>
        <li>Ability to absorb collision forces</li>
        <li>Independent Finger Control</li>
        <li>Uses EMG signals for activation-force feedback sensor</li>
        <li>Designed for daily tasks</li>

      </IndexProjectItem>
    </div>

    <div  class="hjtabgroups" v-show="industrialRobots">

      <IndexProjectItem :is-right="true" project-name="FUM 6R-20 Industrial Robot"  project-subtitle="" project-link="/fum6r" project-picture="6r.png">
        6R robots are an indispensable hardware in modern day production. Benefiting from high articulation
        capabilities, they are widely used in factory plants and machinery. The number of DOF and versatility has made
        this class of robots highly desirable in manufacturing lines including welding processes, precision placement,
        and part positioning. Some features of the robot is as follows:
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM SCARA II"  project-subtitle="" project-link="/fumscara2" project-picture="scara2.png">
        Research grade SCARA arm FUM SCARA II is the second series in the class of SCARA manipulators developed at FUM robotics lab. This robot entails industrial grade control architecture for factory usage, with main applications in pick & place scenarios, packaging industry, pharmaceutical lines.

      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Industrial SCARA Robot"  project-subtitle="" project-link="/fumindustrialscara" project-picture="scara.png">
        Industrial grade SCARA arm SCARA is an acronym for Selective Compliance Articulated Robot Arm, meaning it is relatively compliant in the X-Y axis, and rigid in the Z-axis. SCARA robots were designed to mimic the action of a human arm to automate assembly or loading and unloading tasks with speed and precision. This feature allows the arm to extend into confined areas and then retract or "fold up" out of the way. This is advantageous for transferring parts from one cell to another or for loading/ unloading process stations that are enclosed. The idea is to get all the benefit of a human employee at a higher speed and without fatigue. Adding one or more SCARA robots to the production line is one of the more affordable ways to increase production speed and deliver payback on your automation investment
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Zippy Wrist-Star Spherical"  project-subtitle="" project-link="/fumzippy" project-picture="Zippy.png">
        3 DoF manipulator with spherical workspace
      </IndexProjectItem>



      <IndexProjectItem :is-right="true" project-name="FUM Delta"  project-subtitle="" project-link="/fumdelta" project-picture="delta.png">
        Four axis, Pick up and place and Sorting  Robot A parallel robot with three parallelogram arms for picking and packaging with high acceleration and speed capability.
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM New6R"  project-subtitle="" project-link="/fumnew6r" project-picture="6Rnew.png">
        New 6 DOF articulated arm Designed for various operations such as pick and place, packaging, and welding. This 6 DOF articulated arm has a maximum reach of 1600mm with a maximum payload of 16 kg. Maximum Cartesian speed reaches up to 3 m/s along the selected axis, with a repeatability of ±0.05mm. Open control architecture enables ease of use in research applications.

      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Linear Actuator"  project-subtitle="" project-link="/fumlinearactuator" project-picture="linearactuator1.png">
        Prismatic actuator with continuous force along its stroke Linear actuators are quite common as they form the bulk of applications used in the control of equipment moving along a lateral axis. The linear actuator developed at FUM Robotics lab has a maximum stroke of 330mm and capable of exerting a maximum continues force of 4250 N. The maximum speed of this actuator is 0.53 m/s along the axis of actuation.

      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Linear SEA"  project-subtitle="" project-link="/fumlinearSEA" project-picture="LA.png" >
        Linear series elastic actuator with high impact tolerance In general, actuators are built to be as stiff as possible to increase the bandwidth. When a robot works in a structured environment, its automation is easier than in a non-structured environment in which case its modeling is quite difficult and presents a high computational effort. To overcome this difficulty, series elastic actuator (SEA) has been applied in compliant robotic grasping. Unlike rigid actuators, a SEA contains an elastic element in series with the mechanical energy source. Such an elastic element gives SEAs tolerance to impact loads, low mechanical output impedance, passive mechanical energy storage, and increased peak power output. The spring has to be able to support the loads, but it cannot be too stiff; otherwise, system impedance will be high.
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Rotary SEA"  project-subtitle="" project-link="/fumrotarySEA" project-picture="NoPic.png">
        Revolute series elastic actuator
      </IndexProjectItem>

    </div>

    <div class="hjtabgroups" v-show="simulatorRobots">

      <IndexProjectItem :is-right="false" project-name="FUM Industrial Large Size Stewart"  project-subtitle="" project-link="/fumlargestewart" project-picture="large-stewart.png">
        Large 6-DoF parallel manipulator as a motion simulator A Stewart platform is a type of parallel manipulator that has six prismatic actuators enabling 6-DoF, commonly hydraulic jacks or electric linear actuators, attached in pairs to three positions on the platform's baseplate, crossing over to three mounting points on a top plate. All 12 connections are made via universal joints. Devices placed on the top plate can be moved in the six degrees of freedom in which it is possible for a freely-suspended body to move: three linear movements x, y, z (lateral, longitudinal, and vertical), and the three rotations (pitch, roll, and yaw).
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Industrial Mid-Size Stewart"  project-subtitle="" project-link="/fummidstewart" project-picture="fumstewartmidsize.png">
        Mid-size 6-DoF parallel manipulator as a motion simulator Another developed robot in this class is A 450 kg payload Stewart robot with electromechanical linear actuators for high speed and high acceleration applications.

      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Mini 6DOF Parallel Robot"  project-subtitle="" project-link="/fummini6dof" project-picture="ministewart.png">
        Mini 6-DoF parallel manipulator as a motion simulator The FUM Mini 6DOF Parallel Robot, is of type 6RSS structure for applications such as Mechanical bulls and biomedical. It is only 30cm in length, widths and height.        </p>

      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM 3-PSP Industrial Parallel Robot"  project-subtitle="" project-link="/fum3-psp" project-picture="NoPic.png">
      Semi industrial parallel robot The Semi industrial 3PSP is of type 3PSP parallel robot. It can run in any of the three X,Y,Z,ϑ,φ,λ degrees
        of freedom, prominently used for orientating tools and solar panels. The robot has an open control
        architecture suitable for research applications.

    </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM 3-RRS Spatial Parallel Robot"  project-subtitle="" project-link="/fum3rrs" project-picture="3rrs.png">
        Flexible 3-RRS parallel robot with revolute actuators The FUM 3-RRS spatial parallel robot composed of a base platform, a
        movable platform and three connecting legs. Each leg
        contains two links, and a succession of revolute, revolute and spherical joints. The two axes of revolute joints on
        each leg parallel each other and are perpendicular to the
        leg links
      </IndexProjectItem>


      <IndexProjectItem :is-right="true" project-name="FUM LP Simulator"  project-subtitle="" project-link="/fumLPsim" project-picture="lpsimulator.png">
        large 6-DoF parallel manipulator as a motion simulator
      </IndexProjectItem>


    </div>

    <div class="hjtabgroups" v-show="mobileRobots">
      <IndexProjectItem :is-right="false" project-name="FUM VIRUB 3036"  project-subtitle="" project-link="/fumvirub3036" project-picture="fumvirub.png">
        An ultraviolet radiation autonomous platform for indoors disinfection Hospital Acquired Infections (HAIs) are a significant and increasing problem in the global healthcare sector. Each year millions of patients are infected, and thousands of patients die due to infections acquired during hospitalization. Furthermore, HAIs generate a massive financial implication.
        UV light, which is ultraviolet radiation with wavelengths between 200 and 290 nm, has been proven to be effective in breaking down the pathogens’ DNA and RNA beyond recovery, thus stopping them from replicating.

      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Lawn Mower"  project-subtitle="" project-link="/fumlawnmower" project-picture="FUM-Lawnmower.png" >
        Fully Autonomous lawn Mower
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Segway"  project-subtitle="" project-link="/fumsegway" project-picture="NoPic.png">
        Two-wheeled electric vehicle with high stability Two-wheeled electric vehicles have emerged as a recent convenient method to travel around towns and cities. FUM Segway is a two-wheeled, self-balancing personal transporter for both research and industrial application. The user-friendly design is able to carry 80Kg, with a maximum speed of 20 Km/h.        </p>

      </IndexProjectItem>

    </div>


    <a href="#three" class="nextButton goto-next scrolly">Next</a>
  </section>
</template>

<script >

import IndexProjectItem from "@/components/IndexProjectItem";
export default {
  name: "IndexProjects",
  components: {IndexProjectItem},
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
.main-menu{
  background-color: #35495e;
}

</style>

