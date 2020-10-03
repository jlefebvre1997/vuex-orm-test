<template>
  <div class="user-update">
    <form v-if="user">
      <label>
        Standard update :
        <input type="text" :value="user.name" @input="user.$update({ name: $event.target.value })">
      </label>
      <label>
        Custom update :
        <input type="text" :value="user.name" @input="user.setName($event.target.value)">
      </label>
    </form>

    <table v-if="user">
      <tr>
        <th>name</th>
      </tr>
      <tr>
        <td>{{ user.name }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { User } from "@/store/models";

@Component
export default class Update extends Vue {
  get user() {
    const id = parseInt(this.$route.params.id);

    return User.query()
      .whereId(id)
      .with("albums")
      .first();
  }
}
</script>

<style lang="scss">
.user-update form {
  display: flex;
  flex-direction: column;

  input {
    margin: 20px;
  }
}
</style>
