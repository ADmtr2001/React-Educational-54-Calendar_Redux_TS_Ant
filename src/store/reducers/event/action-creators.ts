import {EventActionEnum, SetEventAction, SetGuestsAction} from "./types";
import {IUser} from "../../../models/IUser";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";

export const EventActionCretors = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
  setEvents: (payload: IEvent[]): SetEventAction => ({type: EventActionEnum.SET_EVENTS, payload}),
  fetchGuests: () => async(dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCretors.setGuests(response.data));
    } catch (err) {
      console.log(err);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]';
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCretors.setEvents(json));
      localStorage.setItem('events', JSON.stringify(json));
    } catch (err) {
      console.log(err);
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem(('events')) || '[]';
      const json = JSON.parse(events) as IEvent[];
      const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username);
      dispatch(EventActionCretors.setEvents(currentUserEvents));
    } catch (e) {
      console.log(e);
    }
  }
}