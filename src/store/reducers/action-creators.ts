import {AuthActionCreators} from "./auth/action-creators";
import {EventActionCretors} from "./event/action-creators";

export const allActionCreators = {
  ...AuthActionCreators,
  ...EventActionCretors,
}