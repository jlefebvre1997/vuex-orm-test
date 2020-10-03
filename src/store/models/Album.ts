import { Model } from "@vuex-orm/core";
import User from "@/store/models/User";

export default class Album extends Model {
  static entity = "albums";

  static fields() {
    return {
      userId: this.attr(null),
      id: this.attr(null),
      title: this.attr(""),
      user: this.belongsTo(User, "userId")
    };
  }
}
