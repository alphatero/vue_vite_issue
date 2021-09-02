<template>
  <div class="grid grid-flow-row gap-4 mb-8 grid-cols-1 md:grid-cols-4">
    <!-- Torque -->
    <Card class="md:order-1 md:row-span-2 text-center" :title="title.torque">
      <DataView
        :current="torque.current"
        :target="torque.target"
        :max="torque.max"
        :min="torque.min"
      />
    </Card>

    <!-- Time -->
    <Card class="md:order-2 md:row-span-2 text-center" :title="title.time">
      <DataView
        :current="time.current"
        :target="time.target"
        :max="time.max"
        :min="time.min"
      />
    </Card>

    <!-- Turns -->
    <Card class="md:order-3 md:row-span-2 text-center" :title="title.turns">
      <DataView
        :current="turns.current"
        :target="turns.target"
        :max="turns.max"
        :min="turns.min"
      />
    </Card>

    <!-- Link -->
    <ButtonGroup class="order-first md:order-4" />

    <!-- Result -->
    <Card
      class=" md:row-span-2 md:order-5 text-center bg-green-500"
      :title="title.result"
      :class="[$route.name === 'Chart' ? 'md:col-span-1': 'md:col-span-3']"
    >
      <div
        class="
          text-white
          rounded-b-md
          flex
          items-center
          justify-center
          text-7xl
          p-10
        "
      >
        <h4 class="flex-1">Floating</h4>
      </div>
    </Card>

    <!-- Screw -->
    <Card
      class="md:order-6 md:row-span-1 md:row-start-2 md:col-start-4 text-center"
      :title="title.screw"
    >
      <div class="flex justify-center mt-2 p-4">
        <p class="text-3xl font-bold mr-2">{{ screws.current }}</p>
        <p class="text-3xl font-bold text-gray-500">/{{ screws.total }}</p>
      </div>
    </Card>

    <!-- Error code -->
    <Card class="md:order-7 md:row-span-2 text-center " :title="title.errorCode">

      <div class="flex-1 flex justify-center items-center">

      <h4 class="text-center p-6 text-xl ">{{ torError }}</h4>
      </div>

    </Card>

    <router-view />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import ButtonGroup from "../components/ButtonGroup.vue";
import DataView from "../components/DataView.vue";

export default {
  components: {
    Card,
    ButtonGroup,
    DataView,
  },
  data() {
    return {
      title: {
        torque: this.$t("Torque"),
        time: this.$t("Time"),
        turns: this.$t("Turns"),
        result: this.$t("Result"),
        screw: this.$t("Screw"),
        errorCode: this.$t("ErrorCode"),
      },
      torque: {
        current: 1.2,
        target: 1.5,
        max: 2.0,
        min: 1.0,
      },
      time: {
        current: 1.5,
        target: 1.5,
        max: 2.0,
        min: 1.0,
      },
      turns: {
        current: 0.2,
        target: 0.5,
        max: 1,
        min: 0.1,
      },
      screws: {
        current: 1,
        total: 5,
      },
      torError: "EA-01",
      errorCode: "",
      msg: "hello",
      curTorque: 1.2,
      curTime: 2.1,
      curTurns: 2,
      screw: 20,
    };
  },
};
</script>
