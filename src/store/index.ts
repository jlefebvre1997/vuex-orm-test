import Vue from "vue";
import Vuex from "vuex";
import VuexORM from "@vuex-orm/core";
import { Album, User } from "@/store/models";
import VuexORMAxios from "@vuex-orm/plugin-axios";
import axios from "axios";

Vue.use(Vuex);

VuexORM.use(VuexORMAxios, { axios });

const database = new VuexORM.Database();
database.register(Album);
database.register(User);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [VuexORM.install(database)]
});
