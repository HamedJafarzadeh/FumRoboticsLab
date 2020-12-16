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
      <IndexProjectItem  :is-right="true" project-name="FUM ExoSkeleton - II"  project-subtitle="Add project Subtitle" project-link="/fumexoskeleton1" project-picture="exo2.png" >
        Project Text, it can be html
      </IndexProjectItem>
      <IndexProjectItem :is-right="false" project-name="FUM Exoskeleton - I"  project-subtitle="Add project Subtitle" project-link="/fumexoskeleton2" project-picture="NoPic.png">
        Most countries report a rapid increase in ageing population worldwide. Elderly people normally have physical deterioration and frailty, imposing a heavy burden on the social health care system. In addition, each year, approximately 15 million people suffer from a stroke worldwide and 5 million of these individuals are left with a permanent disability.

        In this regard, an increasing trend has emerged in using robots for medical purposes. Rehabilitative robotics is an area in the interface of medical and engineering fields, with a variety of different robotic applications, one of which is the use of robotic exoskeleton in rehabilitation. An exoskeleton is a wearable mechanism matching the shape and functions of human body, usually with an anthropomorphic configuration and capable of tracking the movements of the user’s extremities. In most applications, exoskeletons are designed to produce forces that assist the user in performing a motor task. The exoskeleton works mechanically in parallel with human body and can be actuated passively and or actively. By training the wearers’ muscles and assisting their movements, robot-assisted rehabilitation can release therapists from the heavy burden of rehabilitation training and provide long training sessions for the patients with good consistency.

        Lower limb exoskeleton can be used for providing strength during walking, to carry heavy loads or aiding the disabled people for walking. Different exoskeletal devices have been developed to supplement the mechanical power needed by people with lower-limb impairments, developed as tools for gait rehabilitation and mobility assistance. Powered lower-limb exoskeleton has gained considerable interests, since it can help patients with spinal cord injury to stand and walk again.
        The current FUM exoskeleton accommodates an extensive array of sensors integrated with an advanced control system, enabling full movement control. The modular and adjustable design allows the user to independently wear and remove each segment of the robot, and can comfortably be worn while seated in a wheelchair. The overall weight is less than 22 kg while producing a maximum speed of 0.5m/s. Batteries allow 2 hours of continuous or 8 hours of intermittent walk.
      </IndexProjectItem>
      <IndexProjectItem :is-right="true" project-name="FUM Knee Exoskeleton"  project-subtitle="Add project Subtitle" project-link="/fumkneeexoskeleton" project-picture="NoPic.png">
        <li>Ability to carry human weight </li>
        <li>Can be equipped by EMG signals </li>
        <li>Built in SEA actuator and high stiffness. Its open control architecture is
          ideal for research applications
        </li>
      </IndexProjectItem>
      <IndexProjectItem :is-right="false" project-name="FUM Knee Physio"  project-subtitle="Add project Subtitle" project-link="/fumkneeexoskeleton" project-picture="NoPic.png">
        <p>
          One specific area in medical robotics is joint rehabilitation. Knee rehabilitation therapy is a very important procedure to recover function after knee injury or surgery. The treatment objective is to reduce knee adhesion and regain adequate joint motion and flexibility. The key to successful knee rehabilitation requires regular exercises in a very controlled manner. Along this lines, 1DOF Lower-limb rehabilitation robot has been designed and constructed at FUM Robotics lab. Capable of using EMG signals, a variety of cognitive games can be employed and integrated with the system to assist the therapist in adjusting the rehabilitation process according to the medical progress of the user.
        </p>
      </IndexProjectItem>


    </div>

    <div class="hjtabgroups" v-show="bioRobots">

      <IndexProjectItem :is-right="false" project-name="FUM Bionic Hands"  project-subtitle="Add project Subtitle" project-link="/fumbionichands" project-picture="hand2.png">
        <p>
          Bionics or biologically inspired engineering is the application of biological methods and systems found in nature to the study and design of engineering systems and modern technology. A prosthesis is an artificial device that replaces a missing body part, which may be lost through trauma, disease, or a condition present at birth. Prostheses are intended to restore the normal functions of the missing body part, making it easier to perform activities of daily living such as eating, tying shoelaces, carrying bags, opening doors, switching on lights, typing, and more.
          Partial hand loss comprises about 90 percent of all upper extremity amputations and may involve the loss of one or more digits. Prosthetic hands provide functionality, mobility, and confidence to amputees. With these devices designed to help retain the function and appearance of a regular hand, those with full or partial hand loss can overcome trauma, aiding them leading full lives. Basic prosthetic hands are cosmetic replicas with only basic function, whereas powered prosthetic hands have a set of fully articulated joints.

          FUM Bionic hand is designed for individuals with loss of hand to perform everyday activities with ease. Individual motors in each finger allow using natural, coordinated grasp patterns. As an articulating, body-driven prosthesis, the designed device restores length, provides dexterity, replaces a missing hand, designed and fabricated to successfully mimic the complex motion of a finger. This prototype facilitates 5 Degrees of Freedom, allowing independent finger control. Actuators are placed at the palm of the hand, providing the ability to conform to the shape of different objects. EMG signals are utilized for activation of the hand.
        </p>
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Bionic Hand L-I"  project-subtitle="Add project Subtitle" project-link="/fumbionichand-L1" project-picture="NoPic.png">
        <li>7DOF (includes wrist movement) - 5motors </li>
        <li>5 motors with Worm gear </li>
        <li>Ability to absorb collision forces</li>
        <li>Independent Finger Control</li>
        <li>Uses EMG signals for activation-force feedback sensor</li>
        <li>Designed for daily tasks</li>
      </IndexProjectItem>
    </div>

    <div  class="hjtabgroups" v-show="industrialRobots">

      <IndexProjectItem :is-right="false" project-name="FUM SCARA II"  project-subtitle="Add project Subtitle" project-link="/fumscara2" project-picture="NoPic.png">
        <p>
          FUM SCARA II is the second series in the class of SCARA manipulators developed at FUM robotics lab. This robot entails industrial grade control architecture for factory usage, with main applications in pick & place scenarios, packaging industry, pharmaceutical lines.
        </p>
        <li>Robot type: Series RRR-P, XYZ,&#952 </li>
        <li>Repeatability – Best case: 0.02mm</li>
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Industrial SCARA Robot"  project-subtitle="Add project Subtitle" project-link="/fumscara" project-picture="scara.png">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Zippy Wrist-Star Spherical"  project-subtitle="Add project Subtitle" project-link="/fumzippy" project-picture="Zippy.png">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM New6R"  project-subtitle="Add project Subtitle" project-link="/fumnew6r" project-picture="6r.png">
        Add Project Abstract
      </IndexProjectItem>

    </div>

    <div class="hjtabgroups" v-show="simulatorRobots">

      <IndexProjectItem :is-right="false" project-name="FUM Industrial Large Size Stewart"  project-subtitle="Add project Subtitle" project-link="/fumindustrialscara" project-picture="NoPic.png">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Industrial Mid-Size Stewart"  project-subtitle="Add project Subtitle" project-link="/fummidstewart" project-picture="fumstewartmidsize.png">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Mini 6DOF Parallel Robot"  project-subtitle="Add project Subtitle" project-link="/fummini6dof" project-picture="NoPic.png">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM 3-PSP Industrial Parallel Robot"  project-subtitle="Add project Subtitle" project-link="/fum3-psp" project-picture="NoPic.png">
        Add Project Abstract
      </IndexProjectItem>


      <IndexProjectItem :is-right="false" project-name="FUM LP Simulator"  project-subtitle="Add project Subtitle" project-link="/fumlp" project-picture="lpsimulator.png">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM 3-PSP Industrial Parallel Robot"  project-subtitle="Add project Subtitle" project-link="/fum3-psp" project-picture="NoPic.png">
        Add Project Abstract
      </IndexProjectItem>

    </div>

    <div class="hjtabgroups" v-show="mobileRobots">
      <IndexProjectItem :is-right="false" project-name="FUM VIRUB 3036"  project-subtitle="Add project Subtitle" project-link="/fumvirub3036" project-picture="Virub.png">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Lawn Mower"  project-subtitle="Add project Subtitle" project-link="/fumlawnmower" project-picture="LawnMower.jpg" :picture-cover="true">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Segway"  project-subtitle="Add project Subtitle" project-link="/fumsegway" project-picture="NoPic.png">
        Add Project Abstract
      </IndexProjectItem>

    </div>

    <div class="hjtabgroups" v-show="actuatorRobots">

      <IndexProjectItem :is-right="false" project-name="FUM Linear SEA"  project-subtitle="Add project Subtitle" project-link="/fumlinearSEA" project-picture="NoPic.png">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Rotary SEA"  project-subtitle="Add project Subtitle" project-link="/fumrotarySEA" project-picture="NoPic.png">
        Add Project Abstract
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Linear Actuator"  project-subtitle="Add project Subtitle" project-link="/fumlinearactuator" project-picture="linearactuator1.png">
        Add Project Abstract
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

</style>
