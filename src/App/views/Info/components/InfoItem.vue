<template>
  <div
    class="info-item__container d-flex"
    :style="isImageOnRight ? 'justify-content: flex-end' : ''"
  >
    <v-img
      v-if="!isImageOnRight"
      class="info__img"
      contain
      height="250"
      max-width="300"
      min-width="300"
      :src="require('../../../assets/mock-photo.jpg')"
    />
    <div class="info-text__container d-flex align-center">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit
      dolorum quis, eius id excepturi, voluptatibus tempora maiores,
      consequuntur suscipit nisi. Placeat consequatur libero ipsam omnis
      doloribus vero soluta repudiandae! Adipisci, dolorem explicabo! Libero
      quo, deleniti perferendis esse accusamus praesentium fuga repellat quasi,
      vero officiis odio saepe earum corporis recusandae ipsam minima tempore
      eligendi dicta, laboriosam qui ut ipsum quis? Neque debitis libero sunt
      sit commodi fuga, laudantium culpa quo a omnis. Adipisci necessitatibus
      laborum quis? Aliquam enim rem earum? Vitae voluptatibus magni ipsam
      impedit eos! Doloremque odit eum iusto.
    </div>
    <v-img
      v-if="isImageOnRight"
      class="info__img"
      contain
      height="250"
      max-width="300"
      min-width="300"
      :src="require('../../../assets/mock-photo.jpg')"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  props: {
    isImageOnRight: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isImageOnRightSide = ref(props.isImageOnRight);
    return {
      isImageOnRightSide,
    };
  },
});
</script>

<style lang="scss" scoped>
.info-item__container {
  width: 100%;
}
</style>
