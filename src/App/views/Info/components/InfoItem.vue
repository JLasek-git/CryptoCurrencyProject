<template>
  <div class="info-item__container d-flex my-5">
    <v-img
      v-if="!isImageOnRight"
      class="info__img"
      contain
      height="250"
      :src="require('../../../assets/mock-photo.jpg')"
    />
    <!-- <div class="info-text__container d-flex align-center">
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
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.info-item__container::v-deep {
  width: 100%;
}
</style>
