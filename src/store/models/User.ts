import { Model } from "@vuex-orm/core";
import { Album } from ".";

export default class User extends Model {
  static entity = "users";

  static fields() {
    return {
      id: this.attr(null),
      name: this.attr(""),
      username: this.attr(""),
      email: this.attr(""),
      address: this.attr({}),
      phone: this.attr(""),
      website: this.attr(""),
      company: this.attr({}),
      albums: this.hasMany(Album, 'userId')
    };
  }
}
