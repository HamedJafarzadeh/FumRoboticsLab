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
      <IndexProjectItem  :is-right="true" project-name="FUM ExoSkeleton - II"  project-subtitle="" project-link="/fumexoskeleton2" project-picture="exo2.png" >
        Double joint Light weight Lower limb exoskeleton for rehabilitation
      </IndexProjectItem>
      <IndexProjectItem :is-right="false" project-name="FUM Exoskeleton - I"  project-subtitle="" project-link="/fumexoskeleton1" project-picture="exo1p.png">
        a hard, laminated plastic shell that provides the weight-bearing support

      </IndexProjectItem>
      <IndexProjectItem  :is-right="true" project-name="FUM Hexa"  project-subtitle="" project-link="/fumhexa" project-picture="HEXA.png" >
        Supporting ambulatory functions in the elderly or patients with gait impairment
      </IndexProjectItem>
      <IndexProjectItem :is-right="false" project-name="FUM Knee Exoskeleton"  project-subtitle="" project-link="/fumkneeexoskeleton" project-picture="fumkneeExo.jpg">
        Series elastic actuator based knee orthosis
      </IndexProjectItem>
      <IndexProjectItem :is-right="true" project-name="FUM Knee Physio"  project-subtitle="" project-link="/fumkneephysio" project-picture="Physio.png">
        Knee rehabilitation enabling game based therapy
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Foot Sensor"  project-subtitle="" project-link="/fumfootsensor" project-picture="footsensor.png">
        Foot Sensor
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM EMG"  project-subtitle="" project-link="/fumEMG" project-picture="emg.png">
        Electromyography (EMG) is a device for evaluating and recording a series of electrical signals that emanate from body muscles
      </IndexProjectItem>


    </div>

    <div class="hjtabgroups" v-show="bioRobots">

      <IndexProjectItem :is-right="false" project-name="FUM Bionic Hands"  project-subtitle="" project-link="/fumbionichands" project-picture="hand2.png">
        Biologically inspired hand with articulated finger motion
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Bionic Hand L-I"  project-subtitle="" project-link="/fumbionichand-L1" project-picture="FUMbionichandL1.png">
        7 DoF bionic hand prosthetic with independent finger manipulation
      </IndexProjectItem>
    </div>

    <div  class="hjtabgroups" v-show="industrialRobots">

      <IndexProjectItem :is-right="true" project-name="FUM 6R-20 Industrial Robot"  project-subtitle="" project-link="/fum6r" project-picture="6r.png">
        6 DOF articulated arm
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM SCARA II"  project-subtitle="" project-link="/fumscara2" project-picture="scara2.png">
        Research grade SCARA arm
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Industrial SCARA Robot"  project-subtitle="" project-link="/fumindustrialscara" project-picture="scara.png">
        Industrial grade SCARA arm
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Zippy Wrist-Star Spherical"  project-subtitle="" project-link="/fumzippy" project-picture="Zippy.png">
        3 DoF manipulator with spherical workspace
      </IndexProjectItem>



      <IndexProjectItem :is-right="true" project-name="FUM Delta"  project-subtitle="" project-link="/fumdelta" project-picture="delta.png">
        Four axis, Pick up and place and Sorting  Robot
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM New6R"  project-subtitle="" project-link="/fumnew6r" project-picture="6Rnew.png">
        New 6 DOF articulated arm
      </IndexProjectItem>

    </div>

    <div class="hjtabgroups" v-show="simulatorRobots">

      <IndexProjectItem :is-right="false" project-name="FUM Industrial Large Size Stewart"  project-subtitle="" project-link="/fumlargestewart" project-picture="large-stewart.png">
        Large 6-DoF parallel manipulator as a motion simulator
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Industrial Mid-Size Stewart"  project-subtitle="" project-link="/fummidstewart" project-picture="fumstewartmidsize.png">
        Mid-size 6-DoF parallel manipulator as a motion simulator
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Mini 6DOF Parallel Robot"  project-subtitle="" project-link="/fummini6dof" project-picture="ministewart.png">
        Mini 6-DoF parallel manipulator as a motion simulator
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM 3-PSP Industrial Parallel Robot"  project-subtitle="" project-link="/fum3-psp" project-picture="NoPic.png">
      Semi industrial parallel robot
    </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM 3-RRS Spatial Parallel Robot"  project-subtitle="" project-link="/fum3rrs" project-picture="3rrs.png">
        Flexible 3-RRS parallel robot with revolute actuators
      </IndexProjectItem>


      <IndexProjectItem :is-right="true" project-name="FUM LP Simulator"  project-subtitle="" project-link="/fumLPsim" project-picture="lpsimulator.png">
        large 6-DoF parallel manipulator as a motion simulator
      </IndexProjectItem>


    </div>

    <div class="hjtabgroups" v-show="mobileRobots">
      <IndexProjectItem :is-right="false" project-name="FUM VIRUB 3036"  project-subtitle="" project-link="/fumvirub3036" project-picture="fumvirub.png">
        An ultraviolet radiation autonomous platform for indoors disinfection
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Lawn Mower"  project-subtitle="" project-link="/fumlawnmower" project-picture="FUM-Lawnmower.png" >
        Fully Autonomous lawn Mower
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Segway"  project-subtitle="" project-link="/fumsegway" project-picture="NoPic.png">
        Two-wheeled electric vehicle with high stability
      </IndexProjectItem>

    </div>

    <div class="hjtabgroups" v-show="actuatorRobots">

      <IndexProjectItem :is-right="true" project-name="FUM Linear Actuator"  project-subtitle="" project-link="/fumlinearactuator" project-picture="linearactuator1.png">
        Prismatic actuator with continuous force along its stroke
      </IndexProjectItem>

      <IndexProjectItem :is-right="false" project-name="FUM Linear SEA"  project-subtitle="" project-link="/fumlinearSEA" project-picture="LA.png" >
        Linear series elastic actuator with high impact tolerance
      </IndexProjectItem>

      <IndexProjectItem :is-right="true" project-name="FUM Rotary SEA"  project-subtitle="" project-link="/fumrotarySEA" project-picture="NoPic.png">
        Revolute series elastic actuator
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
