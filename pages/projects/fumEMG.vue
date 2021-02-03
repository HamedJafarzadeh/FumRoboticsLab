<template>
  <div id="page-wrapper">
    <div class="content container">
      <h2>FUM EMG</h2>
      <br>
      <br>
      <div class="row">
        <div class="col-lg-12 justify-content-center text-center mx-auto my-auto" >
          <img src="../../assets/ProjectPictures/emg.png" style="width: 30%; border-radius: 20%">
        </div>
      </div>
      <div class="row">
        <p style="text-align: justify">
          The EMG device is responsible for recording the electrical movements of the muscle during expansion and contraction.
          The EMG system designed in FUM Robotics Lab is a 16-channel board based on active electrodes.
          The hardware features of this system are as follows:The EMG device is responsible for recording the electrical movements of the muscle during expansion and contraction.
          The EMG system designed in FUM Robotics Lab is a 16-channel board based on active electrodes. The hardware features of this system are as follows:
        </p>
      </div>


      <div class="row">
        <div class="col-lg-4 justify-content-center text-center mx-auto my-auto" >
          <h3> Technical Information EMG System </h3>
          <table style="width: 445px; ">
            <tbody>
            <tr>
              <td style="width: 239px;">&nbsp;EMG Channels</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 16</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Frequency band</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;15Hz~500Hz</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Sampling rate</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 600 Hz- 2 kHz</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Noise</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5 uV</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Input range</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;500 mV</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;ADC Conversion</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;16 bits</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Weight</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 500 gr</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Dimension</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 210*140*45 mm</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Electrode model</td>
              <td style="width: 372px;">&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Wet, dry, active and &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; passive electrodes</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Communication protocol</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; USB, Wi-Fi, CAN</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Power Supply</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; USB powered</td>
            </tr>
            <tr>
              <td style="width: 239px;">&nbsp;Operation system</td>
              <td style="width: 372px;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Win 7/8/10</td>
            </tr>
            <tr>
              <td style="width: 239px;">Applications</td>
              <td style="width: 372px;">&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;   Clinical, Academical &nbsp; &nbsp; &nbsp; &nbsp; research</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p style="text-align: center; color: red" >Note: The electrical connection of the registrant
        and the power supply to the main board and the software system or other external systems
        is completely isolated and there is no possibility of electric shock.</p>
    </div>


  </div>
</template>

<script>
export default {
  name: "fumEMG"
}
</script>

<style scoped>

</style>
