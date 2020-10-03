<template>
  <div class="hello">
    <h1>Albums</h1>

    <table>
      <tr>
        <th>Titre</th>
        <th>Auteur</th>
      </tr>
      <tr v-for="album in albums" :key="album.id">
        <td>{{ album.title }}</td>
        <td>{{ album.user || "null" }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Album, User } from "@/store/models";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  get users() {
    return User.query()
      .with("albums")
      .get();
  }

  get albums() {
    return Album.query()
      .with("user")
      .get();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
